Feature: End to End E-Commerce Validation

    Scenario: E-Commerce Product Delivery
        Given Open E-Commerce Site
        And Search product which starts from ca
        And Add to cart Cashews
        When Place order and select country
        Then Validate the Thank you message