class HomePage {
    visit() {
        cy.visit('https://www.way2automation.com/angularjs-protractor/banking/#/login');
    }

    getCustomerLoginButton() {
        return cy.get('button[ng-click="customer()"]')
    }

    getBankManagerLoginButton() {
        return cy.get('button[ng-click="manager()"]')
    }
}
export default HomePage
