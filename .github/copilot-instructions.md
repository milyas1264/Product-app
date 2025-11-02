# AI Assistant Instructions for Product App

## Project Overview
This is a React + Vite e-commerce application that displays and manages products. The app uses modern React patterns with hooks and React Router for navigation.

## Key Architecture Points
- Built with Vite for fast development and optimized production builds
- Uses React Router v7 for client-side routing
- Tailwind CSS for styling
- Fetches product data from dummyjson.com API

## Important Files
- `src/App.jsx`: Main router configuration and layout
- `src/ProductList.jsx`: Product grid with cart functionality
- `src/ProductDetail.jsx`: Individual product view
- `vite.config.js`: Build and development configuration

## Development Workflow
1. Start the dev server:
   ```bash
   npm run dev
   ```
2. Build for production:
   ```bash
   npm run build
   ```
3. Preview production build:
   ```bash
   npm run preview
   ```

## Project Patterns and Conventions
1. **Component Structure**:
   - Functional components with hooks
   - Props destructuring at component level
   - Local state management with `useState`
   - Side effects handled with `useEffect`

2. **Routing**:
   - Routes defined in `App.jsx`
   - Dynamic routes use URL parameters (e.g., `/product/:id`)
   - `Link` component used for navigation

3. **Styling**:
   - Tailwind CSS classes for styling
   - Utility-first approach
   - Common patterns: `grid`, `flex`, responsive classes (`md:`), hover states

4. **Data Fetching**:
   - Direct `fetch` calls in components
   - Error handling with `.catch`
   - Loading states managed with local state

## Common Tasks
- Adding a new route: Add a new `Route` component in `App.jsx`
- Adding a new API integration: Use `fetch` within a `useEffect` hook
- Styling: Use Tailwind CSS classes directly in component JSX
- Error handling: Catch API errors and update UI state accordingly

## Tips for AI Development
- Check existing components for styling patterns before suggesting new styles
- Use React Router hooks (`useParams`, `useNavigate`) for routing operations
- Follow the established error handling pattern with console.error
- Maintain consistent use of Tailwind CSS classes for styling