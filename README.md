
---

# Fetch API Example with Pagination

This project demonstrates how to use the Fetch API to retrieve data from a public API and display it in a simple web interface. It includes features like pagination, loading indicators, and error handling to enhance the user experience.

## Features

- **Fetch Data**: Fetches posts from the [JSONPlaceholder](https://jsonplaceholder.typicode.com/) API.
- **Loading Spinner**: Displays a spinner while data is being fetched.
- **Pagination**: Allows users to navigate between different pages of posts.
- **Error Handling**: Handles network or API errors gracefully with user-friendly messages.
- **Responsive Design**: Works well on both desktop and mobile devices.

## Project Structure

```bash
fetch-api-project/
│
├── index.html   # The main HTML file
├── style.css    # Styling for the web page
└── script.js    # JavaScript code to handle data fetching and rendering
```

## Getting Started

### Prerequisites

You only need a modern web browser to run this project (e.g., Chrome, Firefox, Edge).

### Installation

1. Clone the repository or download the project files:

   ```bash
   git clone https://github.com/pakagronglb/fetch-api-example.git
   ```

2. Navigate to the project folder and open `index.html` in your browser:

   ```bash
   cd fetch-api-example
   open index.html
   ```

### Usage

1. Open the `index.html` file in your browser.
2. Click the **Fetch Posts** button to retrieve data from the API.
3. Use the **Next** and **Previous** buttons to navigate between pages of posts.
4. The current page number is displayed in the pagination control.

## How It Works

- When you click the "Fetch Posts" button, the JavaScript file (`script.js`) uses the Fetch API to retrieve posts from the **JSONPlaceholder API**.
- The posts are displayed dynamically, and the user can navigate between pages using pagination buttons.
- A loading spinner appears while data is being fetched, and any errors during the fetch process are displayed to the user.

## Customisation

You can easily modify this project to fetch data from other public APIs. Here's how you can do that:

1. Replace the **JSONPlaceholder** API URL in the `script.js` file with your desired API endpoint.
2. Adjust the data parsing (`displayPosts`) function if the data structure differs from that of the JSONPlaceholder API.

## Technologies Used

- **HTML5**: For structuring the webpage.
- **CSS3**: For styling and responsiveness.
- **JavaScript**: For handling the Fetch API, data manipulation, and DOM updates.

## Preview
![Simple Fetch API Example with Pagination](<Recording 2024-09-18 130314.gif>)

## License

This project is open-source and available under the [MIT License](LICENSE).

## Acknowledgments

- The project uses data from [JSONPlaceholder](https://jsonplaceholder.typicode.com/), a free online REST API for testing and prototyping.

---