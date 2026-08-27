# NESTJS Job Portal API

A backend REST API for a job recruitment platform built with **NESTJS**, **TypeScript** and **MongoDB**.

The application provides functionality for user authentication, job listings, company management, resumes, file uploads, role-based permissions, email notifications and subscriber management.

## ✨ Features

* 🔐 User authentication and authorization
* 👤 User account management
* 🏢 Company management
* 💼 Job posting and management
* 📄 Resume management
* 📁 File upload and management
* 🛡️ Role-based access control
* 🔑 Permission management
* 📧 Email and notification functionality
* 🔄 JWT access and refresh token authentication
* 🗑️ Soft deletion for MongoDB documents
* ⏰ Scheduled/background tasks
* ✅ Request validation
* 🧪 Unit and end-to-end testing support

## 🛠️ Tech Stack

| Technology                    | Purpose                    |
| ----------------------------- | -------------------------- |
| [NestJS]                      | Backend framework          |
| TypeScript                    | Programming language       |
| Node.js                       | Runtime environment        |
| Express                       | HTTP server                |
| MongoDB                       | Database                   |
| Mongoose                      | MongoDB ODM                |
| Passport                      | Authentication             |
| JWT                           | Token-based authentication |
| bcryptjs                      | Password hashing           |
| class-validator               | Request validation         |
| Nodemailer                    | Email delivery             |
| Jest                          | Testing                    |
| Prettier                      | Code formatting            |
| ESLint                        | Code linting               |

## 📁 Project Structure

```text
nestjs/
├── public/
│   └── images/
│
├── src/
│   ├── auth/              # Authentication and JWT authorization
│   ├── companies/         # Company management
│   ├── core/              # Core application functionality
│   ├── databases/         # Database-related functionality
│   ├── decorator/         # Custom NestJS decorators
│   ├── files/             # File upload and management
│   ├── jobs/              # Job posting and management
│   ├── mail/              # Email functionality
│   ├── permissions/       # Permission management
│   ├── resumes/           # Resume management
│   ├── roles/             # Role management
│   ├── subscribers/       # Subscriber functionality
│   ├── user/              # User-related controllers
│   ├── users/             # User module and user data
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   └── main.ts
│
├── test/                  # End-to-end tests
├── .env.example           # Environment variables
├── nest-cli.json
├── package.json
├── tsconfig.json
└── README.md
```

The application is structured using NestJS modules, keeping authentication, users, jobs, companies, resumes and other business domains separated and easier to maintain.

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

* Node.js 18+
* npm
* MongoDB

You can verify your installations with:

```bash
node --version
npm --version
mongosh --version
```

### 1. Clone the repository

```bash
git clone https://github.com/miyamuradesuu/nestjs.git
cd nestjs
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the project root.

Example: use .env.example


### 4. Start the application

#### Development

```bash
npm run dev
```

The development server runs in watch mode and automatically reloads when source files change.

#### Standard mode

```bash
npm run start
```

#### Production

First build the application:

```bash
npm run build
```

Then start the compiled application:

```bash
npm run start:prod
```

## 🔐 Authentication

The application uses **Passport** and **JWT** for authentication.

Authentication endpoints are exposed under the `/auth` route.

### Register

```http
POST /auth/register
```

Creates a new user account.

### Login

```http
POST /auth/login
```

Authenticates a user and establishes the authentication session/token.

### Get current account

```http
GET /auth/account
```

Returns information about the authenticated user.

### Refresh token

```http
GET /auth/refresh
```

Generates a new authentication token using the refresh token.

### Logout

```http
POST /auth/logout
```

Logs out the authenticated user.

The authentication module contains local authentication and JWT guards, while roles and permissions are used to control access to protected resources.

## 💼 Jobs

The `jobs` module handles job-related functionality.

It contains:

```text
src/jobs/
├── dto/
├── schemas/
├── jobs.controller.ts
├── jobs.module.ts
└── jobs.service.ts
```

The module follows the standard NestJS separation between:

* Controllers — HTTP/API endpoints
* Services — business logic
* DTOs — request data validation
* Schemas — MongoDB/Mongoose data models

## 🏢 Companies

The `companies` module provides functionality for managing companies.

```text
src/companies/
├── dto/
├── schema/
├── companies.controller.ts
├── companies.module.ts
└── companies.service.ts
```

## 📄 Resumes

The `resumes` module manages candidate resumes.

```text
src/resumes/
├── dto/
├── schemas/
├── resumes.controller.ts
├── resumes.module.ts
└── resumes.service.ts
```

Resume functionality works together with the file management functionality for handling uploaded files.

## 👥 Users

User-related functionality is separated into user controllers and the main users module.

The users module is responsible for managing user information and integrates with authentication, roles and permissions.

## 🛡️ Roles & Permissions

The project implements role-based authorization through separate:

```text
src/
├── permissions/
└── roles/
```

This allows users to be associated with roles while roles can contain specific permissions.

This structure makes it possible to restrict access to API functionality based on the authenticated user's permissions rather than relying only on authentication status.

## 🗄️ Database

The application uses **MongoDB** through **Mongoose**.

The MongoDB connection is configured through the `MONGO_URL` environment variable.

```env
MONGO_URL=mongodb://localhost:27017/job-portal
```

The application also integrates the `soft-delete-plugin-mongoose` package so that records can be soft deleted rather than immediately removed from the database.

## 📧 Email

Email functionality is provided through the project's mail module.

The project includes:

* Nodemailer
* `@nestjs-modules/mailer`
* Handlebars
* EJS

These can be used for sending application emails and rendering email templates.

For production, configure the appropriate SMTP credentials through environment variables.

## 📁 File Management

The `files` module handles application file operations.

This is used by features such as resume management where users may need to upload and access documents.

Uploaded/public resources can also be stored under:

```text
public/images/
```

## ⏰ Scheduled Tasks

The application includes NestJS scheduling support.

Scheduled jobs can be implemented using the `@nestjs/schedule` package.

This is useful for background operations such as:

* Sending scheduled emails
* Processing subscriptions
* Cleaning up expired resources
* Performing periodic database tasks

## 🧪 Testing

The project uses **Jest** and **Supertest**.

### Run unit tests

```bash
npm run test
```

### Debug tests

```bash
npm run test:debug
```

## 🧹 Code Quality

### Format the source code

```bash
npm run format
```

### Run ESLint

```bash
npm run lint
```

## 🔄 Application Architecture

The application follows NestJS's modular architecture:

```text
                    ┌─────────────────────┐
                    │      Client         │
                    │ Web / Mobile / API  │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │     Controllers     │
                    │   HTTP API Layer    │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │      Services       │
                    │   Business Logic    │
                    └──────────┬──────────┘
                               │
                 ┌─────────────┴─────────────┐
                 ▼                           ▼
        ┌─────────────────┐        ┌─────────────────┐
        │    Mongoose     │        │ External        │
        │    / MongoDB    │        │ Services        │
        └─────────────────┘        └─────────────────┘
```

Major application modules include:

```text
Users
  │
  ├── Authentication
  │      └── JWT / Passport
  │
  ├── Roles
  │      └── Permissions
  │
  ├── Resumes
  │      └── Files
  │
  └── Jobs
         └── Companies

Mail
  └── Notifications

Subscribers
  └── Scheduled Tasks
```

## 🌐 API Development

The API is designed around NestJS controllers and services.

When adding a new feature, the recommended structure is:

```text
feature/
├── dto/
├── schemas/
├── feature.controller.ts
├── feature.service.ts
└── feature.module.ts
```

For example:

```text
jobs/
├── dto/
├── schemas/
├── jobs.controller.ts
├── jobs.service.ts
└── jobs.module.ts
```

This keeps each business domain modular and makes the codebase easier to test and extend.

## 📌 Current Project Scope

The backend currently contains modules covering:

* Authentication
* Users
* Companies
* Jobs
* Resumes
* Files
* Roles
* Permissions
* Databases
* Subscribers
* Email

The repository currently contains **33 commits** and is structured as a modular NestJS application rather than a minimal NestJS starter project.

## 📚 Useful Resources

* [NestJS Documentation](https://docs.nestjs.com/)
* [NestJS GitHub](https://github.com/nestjs/nest)
* [MongoDB Documentation](https://www.mongodb.com/docs/)
* [Mongoose Documentation](https://mongoosejs.com/)
* [Passport Documentation](https://www.passportjs.org/)
* [Jest Documentation](https://jestjs.io/)

## 👨‍💻 Author

**Nguyen Minh**

GitHub:
https://github.com/miyamuradesuu
