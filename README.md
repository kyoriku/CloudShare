# CloudShare
*A full-stack application leveraging AWS cloud services for content sharing and image management, utilizing S3 for storage and DynamoDB for data persistence.*

## Built With
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![React](https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&logo=React&logoColor=black)](https://react.dev/)
[![Node.JS](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/en)
[![Express](https://img.shields.io/badge/express-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)](https://expressjs.com/)
[![AWS](https://img.shields.io/badge/Amazon%20Web%20Services-232F3E.svg?style=for-the-badge&logo=Amazon-Web-Services&logoColor=white)](https://aws.amazon.com/)
[![AWS S3](https://img.shields.io/badge/AWS%20S3-569A31.svg?style=for-the-badge&logo=Amazon-S3&logoColor=white)](https://aws.amazon.com/s3/)
[![AWS DynamoDB](https://img.shields.io/badge/AWS%20DynamoDB-4053D6.svg?style=for-the-badge&logo=Amazon-DynamoDB&logoColor=white)](https://aws.amazon.com/dynamodb/)
[![AWS EC2](https://img.shields.io/badge/AWS%20EC2-FF9900.svg?style=for-the-badge&logo=Amazon-EC2&logoColor=white)](https://aws.amazon.com/ec2/)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)

## Table of Contents
- [Description](#description)
  - [Deployed Site](#deployed-site)
- [Features](#features)
- [Screenshots](#screenshots)
- [Technical Details](#technical-details)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Questions](#questions)

## Description
CloudShare is a full-stack cloud application that demonstrates the integration of various AWS services for building scalable web applications. Built using React and Express.js, this application showcases the implementation of cloud storage, database management, and server deployment through AWS services.

The application leverages AWS S3 for image storage, DynamoDB for data persistence, and EC2 for deployment, creating a robust platform for sharing thoughts and images. Recent improvements include enhanced state management for real-time updates and a streamlined user interface for image uploads.

### Deployed Site
Note: EC2 deployment has been disabled to avoid AWS charges after free tier expiration.

## Features
* **Cloud Storage Integration**
  * S3 bucket configuration for file storage
  * Image upload handling with multer
  * File type validation
  * Public read access configuration
  * UUID-based file naming

* **Database Management**
  * DynamoDB table for thought storage
  * Username and timestamp-based queries
  * Scan operations for data retrieval
  * Real-time data updates
  * Attribute projections and expressions

* **Client-Side Routing**
  * React Router implementation
  * Profile page routing
  * Dynamic user profiles
  * 404 page handling
  * Browser history management

* **User Interface**
  * Real-time form validation
  * Image preview capabilities
  * Loading state management
  * Character count validation
  * Offline support via Service Worker

## Screenshots
![Home](client/public/screenshots/cloudshare-home.jpg)
![Profile](client/public/screenshots/cloudshare-profile.jpg)

## Installation
To run this project locally:

1. Clone the repository
   ```bash
   git clone https://github.com/kyoriku/cloudshare.git
   ```

2. Navigate to the project directory
   ```bash
   cd cloudshare
   ```

3. Install dependencies
   ```bash
   npm install
   ```

4. Configure AWS credentials
   ```bash
   aws configure
   ```
  Enter your AWS access key, secret key, and region

5. Create required AWS resources:
  * Create an S3 bucket
  * Set up a DynamoDB table
  * Configure IAM roles and policies

6. Create environment variables
   ```bash
   AWS_BUCKET_NAME=your-bucket-name
   ```

## Usage
1. Start the development server
   ```bash
   npm start
   ```

2. Use the application to:
  * Create and view thoughts
  * Upload images with thoughts
  * View user profiles
  * Manage thought content

## Contributing
Contributions are welcome! Here are ways you can help:

1. Fork the repository
2. Create a feature branch
   ```bash
   git checkout -b feature/YourFeature
   ```
3. Make your changes - this could include:
   * Adding new features
   * Improving AWS integration
   * Optimizing database queries
   * Enhancing user interface
   * Bug fixes
4. Commit your changes
5. Push to your branch
6. Open a Pull Request

Please ensure your contributions:
* Follow the existing code style
* Include appropriate error handling
* Test all changes locally
* Include clear descriptions in your pull request

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge&logo=mit)](https://opensource.org/licenses/MIT)

This project is licensed under the [MIT](https://opensource.org/licenses/MIT) license - see the LICENSE file for details.

## Questions
For any questions, feel free to email me at devkyoriku@gmail.com.