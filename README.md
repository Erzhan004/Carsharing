<h1 align="center">Hi there<img src="https://github.com/blackcater/blackcater/raw/main/images/Hi.gif" height="32"/></h1>

Welcome to our online car rental service! Our platform provides a convenient way to select and rent cars, as well as access to the latest news in the automotive industry.

## Features:
  - Car Selection and Rental: Users can browse available cars, select a suitable one, and rent it for the desired period.

  - News Page: Users have access to the latest news in the automotive industry, allowing them to stay informed about events and trends.

  - Language Switching: Users can easily switch the interface language to one that suits them.

  - Admin Panel:

    - Car and User Information: Administrators have access to data on available cars and registered users.
    - User and Car Management: Administrators can delete and modify user and car data.
    - Orders Page: Administrators can view incoming orders and manage them.

## Technical Details:
  - Frontend: HTML, CSS, JavaScript
  - Backend: Node.js (Express.js)
  - Database: MongoDB
  - Authentication and Authorization: JSON Web Tokens (JWT)

## Routes Overview

- **GET '/'**: Renders the sign-in page.
- **GET '/Cars'**: Renders the page with available cars for rent.
- **GET '/news/:lang'**: Fetches and renders news articles based on the selected language.
- **GET '/carPage/:id'**: Renders the page with details of a specific car.
- **GET '/order'**: Renders the page with orders placed by users.
- **GET '/signup'**: Renders the sign-up page.
- **GET '/signin'**: Renders the sign-in page.
- **POST '/signup'**: Handles user sign-up requests.
- **POST '/signin'**: Handles user sign-in requests.
- **GET '/admin'**: Renders the admin dashboard.
- **GET '/admincar'**: Renders the admin page for car management.
- **GET '/admin/edit/:id'**: Renders the page for editing user details.
- **POST '/admin/edit/:id'**: Handles requests to edit user details.
- **POST '/admin/edit/car/:id'**: Handles requests to edit car details.
- **GET '/admin/delete/:id'**: Handles requests to delete a user.
- **GET '/admin/delete/car/:id'**: Handles requests to delete a car.
- **GET '/admin/delete/order/:id'**: Handles requests to delete an order.
- **POST '/admin/add/car'**: Handles requests to add a new car.
- **POST '/admin/add'**: Handles requests to add a new user.

## Middleware Used

- **cookieJwtAuth**: Middleware for user authentication using JWT tokens stored in cookies.
- **isAdmin**: Middleware to check if the user is an admin.

## Additional Notes

- Multer is used for handling file uploads for car images.
- NewsAPI is used to fetch news articles based on the selected language.
- bcrypt is used for password hashing.
