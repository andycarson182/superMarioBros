import commonPageElements from "./CommonPageElements";

class SearchPage {


    checkNewSearchPageisOpen() {
        cy.url().should('include', 'https://www.aviasales.com/search/')
    }

    checkValuesOnFilterForm(expectedOrigin, expectedDestination, expectedDepartedDate, expectedReturnedDate, expectedPassengerAndClass) {
        commonPageElements.getOriginField().should('have.value', expectedOrigin);
        commonPageElements.getDestinationField().should('have.value', expectedDestination);
        commonPageElements.getDepartureDateField().invoke('attr', 'value').should('equal', expectedDepartedDate);
        if (expectedReturnedDate == null) {
            commonPageElements.getReturnDateField().invoke('attr', 'value').should('equal', '');
        } else {
            commonPageElements.getReturnDateField().invoke('attr', 'value').should('equal', expectedReturnedDate);
        }
        commonPageElements.getPassengerAndClassLabel().invoke('text').then((value) => {
            //line 22 and 24 is for giving a format to the label and then asset it with the expected Passenger and class
            // split the input string by passengers and insert a space
            const parts = value.split('passengers')
            //Join the parts with a space in between
            const resultString = parts.join('passengers ')
            expect(resultString).to.equal(expectedPassengerAndClass)
        })
    }
}

export default new SearchPage();