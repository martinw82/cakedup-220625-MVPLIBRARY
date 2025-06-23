# Cake-Up Technical README

## 1. Overview

Cake-Up is a web application designed for users to browse cake recipes and shop for baking products. It's built as a Single Page Application (SPA) using modern web technologies.

## 2. Technologies Used

*   **Frontend Framework:** React (v18.3.1)
*   **Build Tool:** Vite (v5.4.2)
*   **Language:** TypeScript (v5.5.3)
*   **Styling:** Tailwind CSS (v3.4.1)
    *   Custom fonts: 'Playfair Display' and 'Inter'.
    *   Custom animations: 'bounce-slow', 'pulse-slow'.
*   **Routing:** React Router DOM (v6.20.1)
*   **Icons:** Lucide React (v0.344.0)
*   **Animation:** Framer Motion (v10.16.16)
*   **Linting:** ESLint (v9.9.1) with TypeScript ESLint plugin.
*   **Package Manager:** npm (deduced from `package-lock.json`)

## 3. Project Structure

```
cake-up/
├── public/                 # Static assets (images, icons)
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── Home/           # Components specific to the Home page
│   │   ├── Layout/         # Layout components (Header, Footer)
│   │   ├── Recipes/        # Components specific to Recipes pages
│   │   └── Shop/           # Components specific to the Shop page
│   ├── data/               # Static data (recipes, products)
│   ├── pages/              # Page-level components
│   ├── types/              # TypeScript type definitions
│   ├── App.tsx             # Main application component with routing
│   ├── main.tsx            # Entry point of the application
│   └── index.css           # Global styles & Tailwind imports
├── docs/                   # Documentation files (this folder)
├── eslint.config.js      # ESLint configuration
├── index.html              # Main HTML file
├── package.json            # Project metadata and dependencies
├── package-lock.json       # Exact versions of dependencies
├── postcss.config.js       # PostCSS configuration (for Tailwind)
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript compiler options
├── tsconfig.app.json       # TypeScript compiler options for the app
├── tsconfig.node.json      # TypeScript compiler options for Node.js context (e.g. Vite config)
└── vite.config.ts          # Vite configuration
```

## 4. Initial Setup for New Developers

To set up the project for local development, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd cake-up
    ```

2.  **Install dependencies:**
    Make sure you have Node.js and npm installed.
    ```bash
    npm install
    ```

3.  **Environment Variables:**
    Currently, the application does not seem to require any specific environment variables for basic setup. If this changes, a `.env` file might be needed. Consult `vite.config.ts` or other relevant configuration files for future requirements.

4.  **Run the development server:**
    ```bash
    npm run dev
    ```
    This will start the Vite development server, typically at `http://localhost:5173`. The application will automatically reload when you make changes to the source files.

## 5. Available Scripts

The `package.json` file defines the following scripts:

*   `npm run dev`: Starts the Vite development server.
*   `npm run build`: Builds the application for production. The output will be in the `dist` folder (this folder is gitignored by default in Vite projects).
*   `npm run lint`: Runs ESLint to check for code quality and style issues across the project.
*   `npm run preview`: Serves the production build locally to preview it.

## 6. Linting and Code Style

ESLint is configured for this project. It's recommended to integrate ESLint into your IDE for real-time feedback.
To manually run the linter:
```bash
npm run lint
```
Ensure all linting errors are addressed before committing code.

## 7. Building for Production

To build the application for production, run:
```bash
npm run build
```
This command will create an optimized build of the application in the `dist/` directory.

## 8. Data Sources

The application currently uses static data located in the `src/data/` directory:
*   `src/data/products.ts`: Contains product information for the shop.
*   `src/data/recipes.ts`: Contains recipe details.

In a production environment, this data would typically come from a backend API.

## 9. Routing

Client-side routing is managed by `react-router-dom`. The main routes are defined in `src/App.tsx`:
*   `/`: Home page
*   `/recipes`: Recipes listing page
*   `/recipe/:id`: Detailed view of a specific recipe
*   `/shop`: Product listing page

## 10. Testing

There are no explicit test files (e.g., `*.test.tsx` or `*.spec.tsx`) visible in the current project structure. Setting up a testing framework like Jest or Vitest with React Testing Library is recommended for future development to ensure code quality and reliability.

## 11. Key Components Overview

*   **`src/App.tsx`**: The root component that sets up the router and main layout.
*   **`src/components/Layout/Header.tsx` & `src/components/Layout/Footer.tsx`**: Define the global header and footer of the application.
*   **Pages (`src/pages/`)**:
    *   `Home.tsx`: Landing page.
    *   `Recipes.tsx`: Displays a list of recipes.
    *   `RecipeDetail.tsx`: Shows details for a single recipe.
    *   `Shop.tsx`: Displays products for sale.
*   **Data Files (`src/data/`)**:
    *   `products.ts`: Array of product objects.
    *   `recipes.ts`: Array of recipe objects.

This document should provide a comprehensive technical overview for new developers joining the Cake-Up project.
