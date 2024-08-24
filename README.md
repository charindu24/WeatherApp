# Weather App

This is a Node.js based weather application that allows users to check the weather and rain prediction for a specific city or their current location using 
the OpenWeatherMap API. The application uses Express for server-side routing and EJS as the templating engine for rendering dynamic content.

Public API Link: https://openweathermap.org/api


## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the App](#running-the-app)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Reference](#api-reference)
- [License](#license)

## Features

- **Weather by City**: Enter a city name to get the current weather information.
- **Weather by Location**: Use your current geographical coordinates to get weather data.
- **Rain Prediction**: Predicts if it will rain tomorrow based on forecast data.
- **Responsive UI**: Uses EJS and Bootstrap for a user-friendly interface.
- **Error Handling**: Displays appropriate error messages if the API request fails or inputs are missing.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/en/) (v12.x or higher)
- [npm](https://www.npmjs.com/get-npm) (v6.x or higher)
- An API key from [OpenWeatherMap](https://openweathermap.org/api)

### Installation

1. Clone this repository:
    ```bash
    git clone https://github.com/charindu24/WeatherApp.git
    cd weather-app
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add your OpenWeatherMap API key:
    ```
    API_KEY=your_openweathermap_api_key
    ```

### Running the App

Start the application by running:
```bash
npm start

or develop based you can install nodemon

npm i nodemon
