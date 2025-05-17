# Express TypeScript Boilerplate

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Contributions](https://img.shields.io/badge/contributions-welcome-brightgreen.svg)

## Overview

A production-ready Node.js boilerplate built with Express and MongoDB, designed for building scalable and secure backend applications quickly.
This starter includes everything you need: JWT-based authentication, request validation, Docker support, pagination utilities, and more.

## Tech Stack

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **TypeScript** - Type-safe JavaScript
- **Mongoose** - Object Data Modeling (ODM)
- **MongoDB** - NOSQL database
- **Docker** - Containerized environment
- **pnpm** - Fast, disk-efficient package manager

## Folder Structure

```plaintext
├── src/                   # Application source code
│   ├── config/            # App configuration files
│   ├── controllers/       # Request & response handlers
│   ├── docs/              # API documentation
│   ├── middlewares/       # Express middlewares
│   ├── models/            # Mongoose models (DB schemas)
│   ├── routes/            # API routes
│   ├── services/          # Business logic & reusable services
│   ├── types/             # TypeScript type definitions
│   ├── utils/             # Utility functions & helpers
│   ├── validations/       # Request schema validations
│   ├── app.ts             # Express app configuration
│   ├── index.ts           # Server entry point
```

## Installation

### Quick Start

To create a project, simply run:

```bash
npx get-express-starter
```

### Manual Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/logicalHassan/node-express-boilerplate.git
   cd node-express-boilerplate
   ```

2. Install dependencies:

   ```sh
   pnpm install // PNPM is recommended
   ```

3. Configure environment variables:

   ```sh
   cp .env.example .env
   ```

4. Start the development server:

   ```sh
   pnpm run dev
   ```

## Commands

### Development

| Command               | Description                                       |
|-----------------------|---------------------------------------------------|
| `pnpm run dev`        | Start the development server with `nodemon`       |

---

### Production

| Command               | Description                                       |
|-----------------------|---------------------------------------------------|
| `pnpm start`          | Start the server using PM2 in production mode     |

---

### Linting & Formatting

| Command               | Description                                       |
|-----------------------|---------------------------------------------------|
| `pnpm run lint`       | Lint all JavaScript files with ESLint             |
| `pnpm run lint:fix`   | Lint and auto-fix issues                          |
| `pnpm run prettier`   | Check code formatting with Prettier               |
| `pnpm run prettier:fix` | Format code with Prettier                       |

---

### Scripts & Utilities

| Command               | Description                                       |
|-----------------------|---------------------------------------------------|
| `pnpm run seed:admin` | Seed the database with an admin user              |
| `pnpm run generate`   | Generate boilerplate code using Plop              |
| `pnpm run prepare`    | Setup Husky Git hooks                             |

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`feature/your-feature-name`).
3. Commit your changes with meaningful messages.
4. Open a pull request.

## License

This project is licensed under the [MIT](LICENSE) License.
