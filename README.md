# fabryque_workspace_springboot
PROJECT TITLE
Fabryque Customer Data (With SpringBoot and React)

PROJECT DESCRIPTION
Renders all customers from MySQL database and has a delete customer function

CONTENT
Backend APIs (SpringBoot, MySQL)
Frontend (React)

BACKEND (filename: "fabryque")
APIs
  1. /customer/customers: gets all customers in db
  2. /customer/delete: deletes one customer with customer id

FRONTEND (filename: "frontend")
  1. Renders all customers
  2. Can delete one customer

RUN WEBAPP
1. Import backend project into SpringToolsSuite4
2. Left click project -> Run As -> Spring Boot App (has internal tomcat server)
3. Terminal: cd to folder with "frontend" project
4. npm start, and should see the webapp
