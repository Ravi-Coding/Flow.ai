# ExpenseTracker API
# This project is provided by Floww.ai . 

## About Project
This project is a RESTful API for managing personal financial records. Users can record their income and expenses, retrieve past transactions,
and get summaries by category or time period.

## Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv
- cors
- nodemon

## Setup Instructions
1. Clone the repository:
   
   - git clone https://github.com/Ravi-Coding/Flow.ai
     
3. Install Dependencies
   
   - npm install
  
4. .env
   
    - MONGO_URI=mongodb+srv://Ravi-Coding:<password>@cluster0.gzrbftz.mongodb.net/<databaseName>?retryWrites=true&w=majority&appName=Cluster0
    - PORT=3004
      
6. Start server
   - nodemon run dev
   - --------------------------------------------------
   
## API Documentation

Endpoints

POST /api/transactions
GET /api/transactions
GET /api/transactions/:id
PUT /api/transactions/:id
DELETE /api/transactions/:id
GET /api/summary

1. POST : http://localhost:3004/api/transactions
   - Request
   {
  "type": "income",
  "category": "Salary",
  "amount": 10500,
  "date": "2024-09-27",
  "description": "October bonus"
}
-Response
 {
    "type": "income",
    "category": "Salary",
    "amount": 10500,
    "date": "2024-09-27T00:00:00.000Z",
    "description": "October bonus",
    "_id": "671896d8372387371d065f43",
    "__v": 0
}
2. Get : http://localhost:3004/api/transactions
   -Response
   [
    {
        "_id": "6717f728703aab032f7bf845",
        "type": "income",
        "category": "salary",
        "amount": 5000,
        "date": "2023-10-15T00:00:00.000Z",
        "description": "October salary",
        "__v": 0
    },
    {
        "_id": "6717fa25703aab032f7bf852",
        "type": "income",
        "category": "Bonus",
        "amount": 8500,
        "date": "2024-09-27T00:00:00.000Z",
        "description": "August bonus",
        "__v": 0
    },
    {
        "_id": "6717fa02703aab032f7bf850",
        "type": "income",
        "category": "Bonus",
        "amount": 8500,
        "date": "2024-09-27T00:00:00.000Z",
        "description": "August bonus",
        "__v": 0
    },
    {
        "_id": "67187f6dab90129932d26d43",
        "type": "income",
        "category": "Bonus",
        "amount": 9500,
        "date": "2024-09-27T00:00:00.000Z",
        "description": "October bonus",
        "__v": 0
    },
    {
        "_id": "671896d8372387371d065f43",
        "type": "income",
        "category": "Salary",
        "amount": 10500,
        "date": "2024-09-27T00:00:00.000Z",
        "description": "October bonus",
        "__v": 0
    }
]

    
