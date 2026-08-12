# Property Booking Site

A full-stack web application inspired by Airbnb, built using Node.js, Express, MongoDB, and EJS. This project allows users to view, create, edit, and delete property listings, as well as leave reviews. It includes user authentication, authorization, and cloud image uploading capabilities.

## Tech Stack

**Frontend:**
- HTML, CSS, JavaScript
- EJS (Embedded JavaScript) for templating
- EJS-Mate for layout management

**Backend:**
- Node.js
- Express.js
- MongoDB (Database) & Mongoose (ODM)

**Authentication & Security:**
- Passport.js (Local Strategy with Passport-Local-Mongoose)
- Express-Session for session management
- Connect-Flash for flash messages

**File Handling & Storage:**
- Multer (Handling multipart/form-data)
- Cloudinary & Multer-Storage-Cloudinary (Cloud image storage)

**Validation:**
- Joi (Server-side schema validation)

## Project Structure

```text
AirBnB_Clone/
├── controllers/       # Contains functions handling the logic for routes (listings, reviews, users)
├── init/              # Database initialization and seeding scripts
├── models/            # Mongoose database schemas (Listing, Review, User)
├── public/            # Static assets like CSS files, client-side JS, and images
├── routes/            # Express route definitions (listings.js, reviews.js, users.js)
├── views/             # EJS template files (organized by layouts, includes, and features)
├── app.js             # Main application entry point and server setup
├── cloudConfig.js     # Cloudinary configuration settings
├── middleware.js      # Custom middleware functions (e.g., authentication checks)
├── schema.js          # Joi validation schemas for incoming request data
├── .env               # Environment variables (API keys, secrets) - Note: Not committed to version control
└── package.json       # Project metadata, scripts, and dependencies
```

## Key Features

- **User Authentication:** Secure sign up, log in, and log out functionality.
- **CRUD Operations for Listings:** Authenticated users can create new property listings, read all listings, update their own listings, and delete them.
- **Review System:** Users can leave ratings and comments on property listings.
- **Image Upload:** Seamless integration with Cloudinary to handle property image uploads when creating or editing a listing.
- **Authorization:** Secure middleware checks to ensure users can only modify or delete their own listings and reviews.
- **Data Validation:** Robust server-side validation using Joi to ensure data integrity.
- **Flash Messages:** User-friendly success and error notifications.

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community) (running locally, or use a MongoDB Atlas cluster)
- A [Cloudinary](https://cloudinary.com/) account for image hosting

### Installation

1. **Clone the repository (if applicable) or navigate to the project directory:**
   ```bash
   cd AirBnB_Clone
   ```

2. **Install the dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file in the root directory of the project and add your specific keys:
   ```env
   CLOUD_NAME=your_cloudinary_cloud_name
   CLOUD_API_KEY=your_cloudinary_api_key
   CLOUD_API_SECRET=your_cloudinary_api_secret
   SECRET=your_session_secret
   # DB_URL=your_mongodb_atlas_url # (Optional: if you want to use MongoDB Atlas instead of local DB)
   ```

4. **Initialize the Database with Sample Data (Optional):**
   If you want to populate your database with some initial listings:
   ```bash
   # Navigate to the init folder and run the initialization script
   # Make sure your MongoDB server is running!
   cd init
   node index.js
   cd ..
   ```

5. **Start the Application:**
   ```bash
   node app.js
   ```

6. **View in Browser:**
   Open your web browser and go to `http://localhost:8080` (or whichever port is specified in `app.js`).
