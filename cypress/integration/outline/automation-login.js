
import { Given,And ,When, Then } from "cypress-cucumber-preprocessor/steps"

Given('visit the automation practice site',()=>{
    cy.visit("http://practice.automationtesting.in/my-account/")
})
And('user login using {word}', (username) =>{
    cy.get('#username').type(username)

})
And("user login password {word}",(password)=>{
    cy.get('#password').type(password)
})

When ("enter login button",()=>{
    cy.get('.woocommerce-Button').first().click()
})
Then ("Dashboard should be visible",()=>{
    cy.get('.is-active> a').should('have.text', 'Dashboard')
})