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

## Note on Multer Usage

- **Multer Limitation**: The program relies on Multer for handling file uploads of car images. However, Multer cannot function properly if the application is not running locally due to its dependency on the local file system.

## Steps to Run Locally

1. **Clone the Repository**: Clone the repository containing the project code from GitHub.

2. **Install Dependencies**: Navigate to the project directory and run `npm install` to install all project dependencies.

3. **Start the Local Server**: Use the command `npm start` to start the local server. This will launch the Express.js backend, allowing you to access the application locally.

4. **Access the Application**: Open your web browser and navigate to `http://localhost:3000` to access the application running on your local server.

5. **Testing File Uploads**: Since Multer relies on the local file system, you can now test the file upload functionality by uploading car images through the application interface.

## Acknowledgement
- **Unawareness of Multer Limitation:** I sincerely apologize for not being aware of this limitation regarding Multer's functionality in non-local environments. This oversight on my part may have caused inconvenience during the development process. Moving forward, I will strive to better understand and account for such limitations to ensure smoother development and deployment processes in the future. Thank you for your understanding.

# External API Integration Overview
## 1. News API (https://newsapi.org)
  - Purpose: The News API provides access to a vast collection of news articles from various sources, allowing users to stay updated on current events and trends in the automotive industry.

  - Features:

    - Search Functionality: Users can search for news articles using keywords related to automobiles.
    - Language Support: The API supports multiple languages, allowing users to access news articles in their preferred language.
    - Article Metadata: Each article includes metadata such as title, author, publication date, and source.
    - Image Retrieval: Many articles come with accompanying images, enhancing the visual experience for users.
  -Endpoints:

    - /v2/everything: This endpoint allows users to search for news articles based on specific criteria, such as keywords, sources, language, and publication date.
    - /v2/top-headlines: Users can fetch top headlines from various sources and categories.
  - Usage in the Website:
    - The News API is integrated into the website to provide users with the latest news and updates in the automotive industry. Users can access the news page, where they can browse and read articles fetched from the News API.

## 2. CarQuery API (https://www.carqueryapi.com)
  - Purpose: The CarQuery API is a comprehensive database of automotive specifications and data, providing detailed information about vehicles based on their make, model, and year.

  - Features:

    - Vehicle Data: The API offers extensive information about vehicles, including specifications such as engine type, transmission, dimensions, weight, and more.
    - Search Functionality: Users can search for vehicle data by specifying the make, model, and year of the vehicle.
    - JSON Response: The API returns data in JSON format, making it easy to parse and integrate into web applications.
  - Endpoints:

    - /api/0.3: This endpoint serves as the base URL for accessing various resources and endpoints provided by the CarQuery API.
    - /api/0.3/?cmd=getTrims: Users can fetch detailed information about vehicle trims based on the specified criteria, such as year, make, and model.
  - Usage in the Website:
    - The CarQuery API is utilized in the website's admin panel when adding a new car. By providing the make, model, and year of the vehicle, the API automatically retrieves relevant data such as engine specifications, dimensions, and other details, simplifying the process of adding new cars to the platform.

# Website Deployment on Vercel 
  - carsharing-steel.vercel.app
