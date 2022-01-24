class BankingManagerPage {

    getAddCustomerButton() {
        return cy.get('button[ng-click="addCust()"]')
    }

    getOpenAccountButton() {
        return cy.get('button[ng-click="openAccount()"]')
    }

    getFirstNameField() {
        return cy.get('input[ng-model="fName"]')
    }

    getLastNameField() {
        return cy.get('input[ng-model="lName"]')
    }

    getPostCodeField() {
        return cy.get('input[ng-model="postCd"]')
    }

    getAddCustomerSubmitButton() {
        return cy.get('button[type="submit"]')
    }

    addCustomerDetails(firstName, lastName, postCode) {
        this.getFirstNameField().type(firstName)
        this.getLastNameField().type(lastName)
        this.getPostCodeField().type(postCode)
    }
}
export default BankingManagerPage
