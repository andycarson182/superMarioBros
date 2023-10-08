/// <reference types="cypress" />
import commonPageElements from '../../support/page-objects/CommonPageElements';
import homePage from '../../support/page-objects/HomePage';
import searchPage from '../../support/page-objects/SearchPage';

describe('Test the Avisales ticket search functionality', () => {
  beforeEach(() => {
    cy.visit('https://www.aviasales.com/');
  })

  it('Verify the user is able to do a ticket search.', () => {
    cy.fixture('/flightInfo').then((flightInfo) => {
      commonPageElements.getSwitchBackgroundColor().click();
      commonPageElements.checkNightBackgroundIsEnabled(true);
      homePage.getOpenBookingInANewTab().click();
      homePage.fillOriginField(flightInfo.origin);
      homePage.fillDestinationField(flightInfo.destination);
      homePage.selectCalendarDate(flightInfo.calendarFromMonth, flightInfo.calendarFromDay);
      homePage.clickIDontNeedReturnTicketButton();
      homePage.selectPassengerTypeAndAddPassengers(flightInfo.passengerType, flightInfo.passengerClass, flightInfo.numberOfPassengers);
      commonPageElements.clickSearchFlightsButton();
      searchPage.checkNewSearchPageisOpen();
      commonPageElements.checkNightBackgroundIsEnabled(true);
      searchPage.checkValuesOnFilterForm(
        flightInfo.expectedOrigin,
        flightInfo.destination,
        flightInfo.formattedExpectedCalendarDate,
        flightInfo.expectedReturedDate,
        flightInfo.expectedPassengerNumberAndPassengerTypeLabel
      )
    })

  })



})
