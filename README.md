# Restaurant Page

A modern, dynamic restaurant page built with JavaScript and bundled using Webpack. This project provides a clean and interactive user interface for showcasing a restaurant's menu, contact information, and other details.

## Features

*   **Dynamic Content Rendering**: Seamlessly display different sections like Home, Menu, and Contact.
*   **Modular JavaScript Structure**: Organized codebase for better maintainability and scalability.
*   **Webpack Bundling**: Efficiently bundles all assets for both development and production environments.
*   **Development Server**: Includes a local development server with hot-reloading for a smooth development experience.
*   **Optimized Production Build**: Generates a minified and optimized build for deployment.

## Tech Stack

*   **JavaScript**: The core programming language for the application logic.
*   **Webpack**: A module bundler for JavaScript applications.
*   **npm**: Package manager for JavaScript.

## Prerequisites

Before you begin, ensure you have the following installed:

*   **Node.js**: LTS version recommended. You can download it from [nodejs.org](https://nodejs.org/).
*   **npm**: Comes bundled with Node.js.

## Installation & Quick Start

Follow these steps to get the project up and running on your local machine.

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/manueldezman/Restaurant-Page.git
    cd Restaurant-Page
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Start the development server:**

    This will compile the project and open it in your default browser, typically at `http://localhost:8080`.

    ```bash
    npm start
    ```

4.  **Build for production:**

    This command will create an optimized `dist/` folder containing all the production-ready assets.

    ```bash
    npm run build
    ```

## Repository Structure

```
.
├── .gitignore
├── README.md
├── package-lock.json
├── package.json
├── src/
├── webpack.common.js
├── webpack.config.js
├── webpack.dev.js
└── webpack.prod.js
```

## Architecture Overview

This project follows a modular JavaScript architecture, bundled by Webpack to manage dependencies and optimize assets.

*   **`src/`**: This directory contains all the application's source code. It's typically organized into modules for different sections of the restaurant page (e.g., home, menu, contact) to promote reusability and maintainability.
*   **`webpack.common.js`**: This file holds the Webpack configurations that are common to both development and production environments, such as entry points, output paths, and general loaders.
*   **`webpack.dev.js`**: This configuration extends `webpack.common.js` with development-specific settings. It includes features like a development server with hot module replacement for a faster and more efficient development workflow.
*   **`webpack.prod.js`**: This configuration extends `webpack.common.js` with production-specific optimizations. It focuses on creating a highly optimized build for deployment, including minification, tree-shaking, and other performance enhancements.
*   **`package.json`**: This file manages project dependencies and defines various scripts for development, building, and potentially testing the application.

## Example Usage

Once the development server is running, open your browser to `http://localhost:8080` (or the port specified by Webpack). You can navigate through the different sections of the restaurant page (e.g., Home, Menu, Contact) to see the dynamic content.

For the production build, after running `npm run build`, you will find a `dist/` folder. You can serve the contents of this folder using any static file server (e.g., Apache, Nginx, or a simple Node.js `serve` package) to deploy your restaurant page.

## Testing Instructions

This project does not currently include automated testing frameworks. To test the application:

1.  Start the development server: `npm start`
2.  Open your browser to `http://localhost:8080`.
3.  Manually navigate through all sections and interact with the page to ensure all features function as expected across different screen sizes.

## License

N/A - No specific license information was provided for this project.