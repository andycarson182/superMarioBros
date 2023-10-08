class CommonPageElements {

    getSwitchBackgroundColor() {
        return cy.get('span.s__sbzCIpCki6YQQPcAH6cb').eq(0);
    }

    getOriginField() {
        return cy.get('input#origin.autocomplete__input');
    }

    getDestinationField() {
        return cy.get('input#destination.autocomplete__input');
    }

    getDepartureDateField() {
        return cy.get('input.trip-duration__date-input').eq(0);
    }

    getReturnDateField() {
        return cy.get('input.trip-duration__date-input').eq(1);
    }

    getPassengerAndClassLabel() {
        return cy.get('div.avia-form__field.--passengers > div > div > div.additional-fields__label');
    }

    getAutocompleteSuggestion() {
        return cy.get('.autocomplete__suggestion-info');
    }

    clickSearchFlightsButton() {
        return cy.get('button[type="submit"]').click();
    }

    checkNightBackgroundIsEnabled(isEnabled) {
        const mainPageHtml = cy.get('html');
        if (isEnabled) {
            mainPageHtml.invoke('attr', 'class').should('include', '--us --night');
        } else {
            mainPageHtml.invoke('attr', 'class').should('include', '--us');
        }
    }



}

export default new CommonPageElements();