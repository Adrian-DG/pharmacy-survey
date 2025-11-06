# Pharmacy Survey 

The following page is an example of a web survey design for a pharmacy, made with **Bootstrap**.

link: https://adrian-dg.github.io/pharmacy-survey/

<img src="survey.PNG"/>

## Running the Express.js Server

This project now includes an Express.js server to receive and process survey data.

### Prerequisites

- Node.js (v12 or higher)
- npm (Node Package Manager)

### Installation

1. Clone the repository
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install
```

### Running the Server

Start the server with:

```bash
npm start
```

The server will run on `http://localhost:3000` by default.

You can also specify a custom port:

```bash
PORT=8080 npm start
```

### Features

- Serves the pharmacy satisfaction survey form
- Receives survey submissions via POST to `/submit-survey`
- Logs survey data to the console
- Returns JSON response confirming submission

### API Endpoints

- `GET /` - Serves the survey HTML page
- `POST /submit-survey` - Receives survey form data

### Survey Data Format

The survey form collects responses on a scale of 1-5 for various aspects:
- Dispensing area and process
- Staff skills and professionalism
- Trust and patient assistance
- Information and explanations
- General satisfaction

All responses are submitted as form data with descriptive field names.
