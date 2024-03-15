# Dynamic Food Delivery Price API

This is a REST API backend for a food delivery app that calculates the total cost of food delivery based on various factors such as distance, item type, organization, and zone.

## Features


- Dynamic pricing module to calculate delivery costs based on:
  - Base distance and price
  - Per kilometer price for perishable and non-perishable items
- Database integration for storing pricing information
- Error handling for invalid input and database queries
- Deployment using Express.js and MongoDB

## Deployment Link

https://fooddeliveryapp-2l0y.onrender.com/price


## Setup on local machine

1. Clone this repository:
   ```bash
   git clone https://github.com/AbhishekDesale/FoodDeliveryApp

2. Install dependencies:
```bash
npm install
```
3. Set up the database:
Ensure MongoDB is installed and running locally or provide connection details in the db.js file.

4. Run the application with npm start. Visit http://localhost:3000 in your browser.

## Technical Specifications:

● API Request and Response Format

● Request:
{
    "zone": "central",
    "organization_id": 12,
    "total_distance": 12,
    "item_type": "non-perishable"
}

● Response: 
{ total_price: 20.5 }

● Database Models:

{
zone:"south",
organization_id:12,
base_distance:6,
km_price:12,
item_id:33,
fixed_price:11
}


## Usage
Make a GET request to /price with the following parameters in the request body:
zone: Zone name (e.g., "central", "north", "south")
organization_id: Organization ID
total_distance: Total distance for delivery
item_type: Type of item ("perishable" or "non-perishable")
The server will respond with the total price for the delivery based on the provided parameters.
Error Handling
Invalid zone or organization ID will result in a 400 Bad Request response.
Invalid item type will result in a 400 Bad Request response.
Internal server errors will result in a 500 Internal Server Error response.
Technologies Used
Node.js
Express.js
MongoDB
Body-parser


