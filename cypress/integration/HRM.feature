Feature: Ecommerce site: OrangeHRM

    @focus
    Scenario: Validate Login credential
        Given Visit OrangeHRM site
        And Fill Username
        And fill Password
        When Click on Login button
        Then Validate Dashboard
