# Running the project

## The Backend

1. Go into backend folder
   cd backend
   
2. in terminal type "npm install"

3. run "node server"


## The Frontend

1. Go the top folder
   
2. in terminal type "npm install"

3. type "npm start"

Login:
email: "rian.sj@gmail.com"
password: "rian"


## Get data using postman

### Login
Method: POST
URL: http://localhost:3000/api/auth/login
Body:
{
	"email": "rian.sj@gmail.com",
	"password": "rian"
}

### All Stuff:
Method: GET
URL: http://localhost:3000/api/stuff
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1Y2E2ZDVkZTA1MzYwNzM3N2JkMDkwMzUiLCJpYXQiOjE1NTQ0NDAwNzAsImV4cCI6MTU1NDUyNjQ3MH0.5Jwxtv_WidUdC5mtaDsP96F_LJ0kraEocAR-ELCoYJg

### Get one stuff:
Method: GET
URL: http://localhost:3000/api/stuff/:id
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1Y2E2ZDVkZTA1MzYwNzM3N2JkMDkwMzUiLCJpYXQiOjE1NTQ0NDAwNzAsImV4cCI6MTU1NDUyNjQ3MH0.5Jwxtv_WidUdC5mtaDsP96F_LJ0kraEocAR-ELCoYJg

### Edit one stuff:
Method: PUT
URL: http://localhost:3000/api/stuff/:id
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1Y2E2ZDVkZTA1MzYwNzM3N2JkMDkwMzUiLCJpYXQiOjE1NTQ0NDAwNzAsImV4cCI6MTU1NDUyNjQ3MH0.5Jwxtv_WidUdC5mtaDsP96F_LJ0kraEocAR-ELCoYJg

### Add new:
Method: POST
URL: http://localhost:3000/api/stuff
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1Y2E2ZDVkZTA1MzYwNzM3N2JkMDkwMzUiLCJpYXQiOjE1NTQ0NDAwNzAsImV4cCI6MTU1NDUyNjQ3MH0.5Jwxtv_WidUdC5mtaDsP96F_LJ0kraEocAR-ELCoYJg

### Delete a stuff:
Method: DELETE
URL: http://localhost:3000/api/:id
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1Y2E2ZDVkZTA1MzYwNzM3N2JkMDkwMzUiLCJpYXQiOjE1NTQ0NDAwNzAsImV4cCI6MTU1NDUyNjQ3MH0.5Jwxtv_WidUdC5mtaDsP96F_LJ0kraEocAR-ELCoYJg

