# PRA - Nicolas D'Alessandro

## Objectives

### Core Objective

- Develop a Vue 3 web application to manage a Pokedex.
- The application should have user authentication to access certain features.

### Main Functionalities

- Login Form: A modal for user authentication. Successful login should provide a token for subsequent API requests.
- Profile Page: A detailed view of the logged-in user's information, accessible at /profile. It should redirect to Home if not logged in.
- Home Page: Displays a list of Pokémon with features like deletion (for logged users), search, sorting, and filtering.
- Pokémon Detail Page: Shows detailed information about a specific Pokémon. Redirects to Home if the Pokémon doesn't exist or the user is not logged in.
- Pokémon Form: A form to add new Pokémon to the Pokedex, accessible only to registered users.

### Technical Requirements

- Vue 3: Use either the Options API or the Composition API consistently.
- Styles: Individual component styling, maintaining a visual structure similar to the provided example.
- Pinia: For state management, especially for handling user login information.
- Vue Router: For navigation and creating different views/pages like Home, Profile, and Pokémon details.

### API Integration

- Use the provided Pokedex API for backend functionalities like login and Pokémon data management.
- Follow the API documentation for correct implementation.

### Extra Activity

- Implement Pinia for state management.
- Define a store with actions and getters for user data and authentication status.

### Navigation and Links

- Implement navigation links in the application (e.g., Home, Profile, Pokémon details).

### Presentation Video

- Create a 5-minute video presenting the application.
- Cover aspects like introduction, structure, component review, functionality testing, and challenges faced.

### Understanding the Assignment

- Frontend Development: You'll be using Vue 3, a progressive JavaScript framework, for building the user interface. Familiarity with Vue's core concepts like components, reactivity, and routing is essential.
- State Management: Understanding Pinia for managing application state (like user authentication) is crucial.
- API Integration: You'll need to interact with a backend API for data retrieval and manipulation, requiring knowledge of HTTP requests and handling responses.
- User Authentication: Implementing a login system and managing user sessions.
- UI/UX Design: While you have a CSS file for styles, understanding how to apply these styles to your Vue components is necessary.

### Approach

- Plan the Application Structure: Outline the components you need (e.g., login modal, Pokémon list, detail view).
- Set Up Vue Project: Initialize a Vue 3 project and install necessary dependencies like Pinia and Vue Router.
- Develop Components: Start building components as per the requirements, ensuring they work independently.
- Integrate API: Connect your components with the backend API for data fetching and operations.
- Implement State Management: Use Pinia to manage global states like user authentication.
- Testing and Debugging: Regularly test the application for bugs and ensure all functionalities work as intended.
- Prepare the Presentation: Once the application is ready, prepare your presentation covering all required aspects.

## Folder/File Structure

```text
src/
|-- assets/                      # Global assets like images, styles, etc.
|   |-- statement-images            ## Images for the STATEMENT.md file
|-- components/                  # Reusable components
|   |-- Header.vue                  ## Header/Navbar component
|   |-- SearchBar.vue               ## Search component
|   |-- FilterBar.vue               ## Filter component
|   |-- PokemonItem.vue             ## Pokemon Details component
|   |-- PokemonList.vue             ## List of multiple Pokemon items component
|   |-- ModalLayer.vue              ## Modal with slot component 
|   |-- LoginForm.vue               ## Login form component 
|   |-- PokemonForm.vue             ## Form for adding/editing Pokemon component
|   |-- ProfileDetails.vue          ## Display details of logged user component
|-- views/                       # Views for different routes
|   |-- HomeView.vue                ## Home page View  (/)
|   |-- ProfileView.vue             ## User profile details View (/profile)
|   |-- PokemonDetailView.vue       ## Pokemon details View (/details)
|-- router/                      # Vue Router files
|   |-- index.js                    ## Router configuration
|-- store/                       # Pinia store modules
|   |-- userStore.js                ## Store for user state
|-- services/                    # API services
|   |-- apiService.js               ## Service for API calls
|-- App.vue                      # Main app component
|-- main.js                      # Entry point for the application
```

## Components

1. Login Component:
    - Handles user authentication.
    - Displays a modal or form for login.

2. Home Component:
    - The main page showing a list of Pokémon.
    - May include sub-components for individual Pokémon items.

3. Pokemon Detail Component:
    - Displays detailed information about a specific Pokémon.
    - Activated when a Pokémon is selected from the list.

4. Profile Component:
    - Shows the logged-in user's profile details.
    - Accessible only to authenticated users.

5. Pokemon Form Component:
    - A form for adding or editing Pokémon details.
    - Accessible only to authenticated users.

6. Header/Navbar Component:
    - Contains navigation links and user login/logout controls.

7. Search and Filter Component:
    - For searching and filtering the Pokémon list on the home page.

8. API Service Files:
    - Handling API requests.
