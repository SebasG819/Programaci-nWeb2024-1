# Project Documentation "A GIF FOR YOU"

## Project Description
"A GIF FOR YOU" is a web application that allows users to search for and save gifs from the Giphy API. The application provides an intuitive interface for searching, viewing results in a grid, saving favorite gifs, and viewing them in a favorites list.

## Main Features
1. *Gif Search*: Users can search for gifs by entering terms in an input field.
2. *Results Display*: Search results are displayed in a grid with the gif image and its title.
3. *Loader*: A loader is displayed while search results are being retrieved to provide visual feedback to the user.
4. *Result Count*: The number of results obtained related to the entered search term is displayed.
5. *Debouncer*: A debouncer function is implemented to prevent repeated searches while the user types.
6. *Favorite Gif Saving*: Users can save favorite gifs by clicking the "Save Gif" button.
7. *Favorites List*: Favorite gifs are displayed in a favorites list where users can view and delete them individually.

## Technologies Used
- React: JavaScript library for building user interfaces.
- React Router: For navigation between different views of the application.
- Context API: For handling the global state of the application.
- just-debounce-it: Library for implementing debouncer in searches.
- CSS: For designing and styling the user interface.

## Dependencies
To install all necessary dependencies, run the following command in the terminal within the project directory:
npm install react-router-dom 
npm install just-debounce-it 
npm install @fortawesome/fontawesome-svg-core 
npm install @fortawesome/free-solid-svg-icons 
npm install @fortawesome/react-fontawesome

## Project Structure
The project is structured into different components and files for better organization and maintainability:
- *Components*: Contains reusable components of the application, such as buttons, cards, etc.
- *Screens*: Contains the screens of the application, such as the home screen and the favorites screen.
- *Hooks*: Contains the custom hooks used in the application.
- *Services*: Contains services for retrieving data from the Giphy API.
- *Context*: Contains the context and provider for handling the global state of the application.

## Installation and Usage
1. Clone the repository from [GitHub](https://github.com/Kathereyes19/Programacion-web-2024-1.git).
2. Navigate to the project directory: cd SearchGif.
3. Install dependencies using npm: npm install.
4. Start the application in development mode: npm run dev.
5. Open your browser and go to http://localhost:3000 to use the application.

## Authors
Katherine Reyes and Sebastian Gonzalez
