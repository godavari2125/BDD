Feature: Ecommerce site: OrangeHRM

    @focus
    Scenario Outline: Login with multiple users Validate Login credential
        Given visit the automation practice site
        And user login using <username>
        And user login password <password>
        When enter login button
        Then Dashboard should be visible

        Examples:
            | username        | password    |
            | sarika@test.com | @Minskole12 |
            | gauri@test.com  | 12Minskole@ |
            | Arjun@test.com  | Arjun@12    |

