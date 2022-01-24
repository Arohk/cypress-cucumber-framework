import HomePage from '../../../support/pageobjects/home-page';
import BankingManagerPage from '../../../support/pageobjects/banking-manager-page';

const homePage = new HomePage();
const bankingManagerPage = new BankingManagerPage();

Given('I navigate to the website', () => {
    homePage.visit()
})

When('I click on Bank Manager Login Button', () => {
    homePage.getBankManagerLoginButton().click()
})

Then('I validate the page title', () => {
    cy.title().should('eq', 'Protractor practice website - Banking App')
})

And('I click Add Customer Button', () => {
    bankingManagerPage.getAddCustomerButton().click()
})

And('I enter', (datatable) => {
    datatable.hashes().forEach(element => {
        bankingManagerPage.addCustomerDetails(element.firstName, element.lastName, element.postCode)
    });
})

And('I click the submit button', () => {
    bankingManagerPage.getAddCustomerSubmitButton().click()
})

Then('I validate the alert text', () => {
    cy.on('window:alert', (str) => {
        expect(str).to.equal(`Customer added successfully`)
    })
})