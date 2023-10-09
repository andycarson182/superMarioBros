import commonPageElements from "./CommonPageElements";
import interceptionManager from '../../support/rest/InterceptionManager'

const uiProcessingDelay = 5000;

class HomePage {

    getOpenBookingInANewTab() {
        return cy.get('label.of_input_checkbox__label');
    }

    getFromCalendarCaptionDropdown() {
        return cy.get(':nth-child(1) > .calendar-caption  .calendar-caption__select');
    }

    getDepartureDateField() {
        return cy.get('div.trip-duration__field.--departure');
    }

    getCalendarDayDateFrom() {
        return cy.get('div:nth-child(1) > div.calendar__weeks-body > div > div > div > div > div.calendar-day__date');
    }

    getIDontNeedReturnTicketButton() {
        return cy.get('button.trip-duration__cancel-departure');
    }

    getPassengerAndClassDropdownMenu() {
        return cy.get('div.additional-fields');
    }

    getCurrentPassengerValue(position) {
        return cy.get('span.additional-fields__passenger-value').eq(position);
    }

    getClassRadioButton() {
        return cy.get('div.custom-radio__caption');
    }

    getPassengersAndClassCloseModalButton() {
        return cy.get('button.h__Z1CqtZzeLkO0c8DmNHV7')
    }
    clickIDontNeedReturnTicketButton() {
        this.getIDontNeedReturnTicketButton().click();
    }

    fillOriginField(origin) {
        //This make sure if there is any pre default loaded info, it is cleared and just fill the field with the new data
        commonPageElements.getOriginField().clear();
        //Enter the input field
        commonPageElements.getOriginField().type(origin);
        //wait for the typeahead suggestion to appear
        commonPageElements.getAutocompleteSuggestion().should('be.visible')
        //Assert that the first suggestion matches what we expect and click it
        commonPageElements.getAutocompleteSuggestion().first().should('contain', origin).click()
        cy.wait(uiProcessingDelay);
    }

    fillDestinationField(destination) {
        //This make sure if there is any pre default loaded info, it is cleared and just fill the field with the new data
        commonPageElements.getDestinationField().clear();
        //Enter the input field
        commonPageElements.getDestinationField().type(destination);
        //wait for the typeahead suggestion to appear
        commonPageElements.getAutocompleteSuggestion().should('be.visible')
        //Assert that the first suggestion matches what we expect and click it
        commonPageElements.getAutocompleteSuggestion().first().should('contain', destination).click()
        this.getDepartureDateField().click()
        cy.wait(uiProcessingDelay);
    }

    expandDepartCalendar() {
        this.getDepartureDateField().click();
    }
    selectCalendarDate(fromMonth, date) {
        interceptionManager.registerGetDatePickerPrices().as('getDatePickerPrices');
        this.getDepartureDateField().click();
        //intercept the API for making sure the date picker prices has loaded.
        cy.intercept('@getDatePickerPrices');
        this.getFromCalendarCaptionDropdown().select(fromMonth);
        this.getCalendarDayDateFrom().contains(date).click();
    }

    expandPassengetAndClassDropdownMenu() {
        this.getPassengerAndClassDropdownMenu().click();
    }

    selectPassengerClass(classOption) {
        switch (classOption) {
            case 'Economy':
                this.getClassRadioButton().eq(0).click();
                break;
            case 'Premium economy':
                this.getClassRadioButton().eq(1).click();
                break;
            case 'Business':
                this.getClassRadioButton().eq(2).click();
                break;
            case 'First-class':
                this.getClassRadioButton().eq(3).click();
                break;
            default:
                console.log('No match with any class type');
        }
    }




    getplusButtonPosition(position) {
        return cy.get('div > div.additional-fields__passenger-control-wrap > div:nth-child(3)').eq(position);
    }


    selectPassengerTypeAndAddPassengers(passengerType, passengerClass, numberOfPassengers) {
        this.expandPassengetAndClassDropdownMenu()

        this.selectPassengerClass(passengerClass)
        switch (passengerType) {
            case 'Adults':
                const adultsPosition = 0
                // this current count makes sure if there is any default number pre set up, start to count from the current passenger value for each passenger Type
                this.getCurrentPassengerValue(adultsPosition).invoke('text').then((text) => {
                    for (let i = 1; i <= numberOfPassengers - text; i++) {
                        this.getplusButtonPosition(adultsPosition).click();
                    }
                })
                break;
            case 'Children':
                const childrenPosition = 1
                // this current count makes sure if there is any default number pre set up, start to count from the current passenger value for each passenger Type
                this.getCurrentPassengerValue(childrenPosition).invoke('text').then((text) => {
                    for (let i = 1; i <= numberOfPassengers - text; i++) {
                        this.getplusButtonPosition(childrenPosition).click();
                    }
                })
                break;
            case 'Infants':
                const infantsPosition = 2
                // this current count makes sure if there is any default number pre set up, start to count from the current passenger value for each passenger Type
                this.getCurrentPassengerValue(infantsPosition).invoke('text').then((text) => {
                    for (let i = 1; i <= numberOfPassengers - text; i++) {
                        this.getplusButtonPosition(infantsPosition).click();
                    }
                })
                break;
            default:
                console.log('No match with any passenger type');
        }
        this.expandPassengetAndClassDropdownMenu()
    }


}

export default new HomePage();