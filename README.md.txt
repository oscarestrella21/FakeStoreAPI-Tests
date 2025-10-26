FakeStoreAPI Tests for Epicor QA Developer

Tests included for

GET - Validate:
• The response status code.
• The response body is an array of products.
• Each product contains the following required fields with expected types:
    o id (number)
    o title (string)
    o price (number)
    o category (string)
    o description (string)
    o image (string)
    o rating (number)
• Document the response time.

POST - 
• Validate the response status code.
• Document the created ID.
• Extra: Perform a GET request for that new ID.