/// <reference types="cypress" />
import commonPageElements from '../support/page-objects/CommonPageElements';
import homePage from '../support/page-objects/HomePage';
import searchPage from '../support/page-objects/SearchPage';

describe('Test the Avisales ticket search functionality', () => {
  beforeEach(() => {
    cy.visit('https://www.aviasales.com/');
    cy.title().should('eq', 'Cheap Flights, Airline Tickets & Airfares - Find Deals on Flights at Aviasales.com');
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
      commonPageElements.checkNightBackgroundIsEnabled(true); // checks the night background is still enabled in the search page
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
