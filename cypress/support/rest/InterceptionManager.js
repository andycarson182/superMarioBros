class InterceptionManager {

    registerGetDatePickerPrices() {
        return cy.intercept('GET', '/date_picker_prices?*')
    }

}

export default new InterceptionManager