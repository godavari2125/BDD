import{When, And, Given, Then} from "cypress-cucumber-preprocessor/steps"

Given('Visit OrangeHRM site',()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/index.php/dashboard')
})

And('Fill Username',()=>{
    cy.get('#txtUsername').type('Admin')
})

And('fill Password',()=>{
    cy.get('#txtPassword').type('admin123')
})

When('Click on Login button',()=>{
    cy.get('#btnLogin').click()
})

Then('Validate Dashboard',()=>{
    cy.contains('Dashboard').should('be.visible')
})
And('Fill the username and password', (dataTables)=>{

    dataTables.hashes().forEach(element => {
        cy.get('#txtUsername').type(element.username)
        cy.get('#txtPassword').type(element.password)
        
    });

})

Then('Validate the Error Message', ()=>{
    cy.get('#spanMessage').should('have.text', 'Invalid credentials')
})

// Given Visit OrangeHRM site
// And Fill Username
// And fill Password
// When Click on Login button
// Then Validate Dashboard