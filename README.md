# Little Lemon Web Booking App 🍋

## Description
This is the Capstone Project for the Meta Front-End Developer Professional Certificate on Coursera. It is a React-based web application that allows users to book a table at the fictional "Little Lemon" restaurant. 

The project focuses on creating a robust, accessible, and responsive booking form with proper state management and form validation.

## Key Features Implemented
* **State Management:** Used `useReducer` to manage the available booking times dynamically based on the selected date. Used `useState` for handling form inputs.
* **Form Validation:** Implemented HTML5 client-side validation. The submit button is disabled until all required fields are filled correctly (e.g., guests must be between 1 and 10).
* **Accessibility (a11y):** Implemented semantic HTML tags and appropriate ARIA attributes (`aria-label`, `aria-required`) to ensure the form is accessible to screen readers.
* **Unit Testing:** Created comprehensive test suites using Jest and React Testing Library to verify component rendering, HTML validation attributes, and state management logic.
* **Mock API:** Integrated a mock API to simulate fetching available times and submitting reservations.

## Technologies Used
* React.js
* JSX / CSS
* Jest & React Testing Library

## Setup Instructions

To run this project on your local machine, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone <YOUR_GITHUB_REPO_URL_HERE>
