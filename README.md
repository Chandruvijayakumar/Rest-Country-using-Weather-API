# This repositories contains rest countries details and weather details

# RestCountry Weather API Project

## Overview

++ This project utilizes the RestCountry API and a weather API to provide weather information for different countries. The RestCountry API is used to gather basic information about countries, and the weather API is then employed to fetch current weather details.

## Features

- Get basic country information using the RestCountry API.
- Retrieve current weather information for a specific country using a weather API.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/Chandruvijayakumar/Rest-Country-using-Weather-API
    ```

2. Navigate to the project directory:

    ```bash
    cd restcountry-weather-api
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Set up API keys:
   - Obtain API keys for the RestCountry API and the weather API.
   - Create a `.env` file in the project root and add the following:

    ```env
    REST_COUNTRY_API_KEY=your_restcountry_api_key
    WEATHER_API_KEY=your_weather_api_key
    ```

## Usage

1. Run the application:

    ```bash
    npm start
    ```

2. Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

3. Use the interface to input a country name and retrieve weather information.

## API Documentation

- [RestCountry API](https://restcountries.com/v3.1/all) - Used to fetch basic country information.
- [Open Weather API](https://home.openweathermap.org/) - Used to retrieve current weather details.

## Contributing

If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and submit a pull request.

## Acknowledgements

- Thanks to RestCountry and Weather API for providing the necessary data.
- This project was inspired by the need for a simple tool to fetch country-specific weather information.

### Deploy url:https://restcountryusingweatherapi.netlify.app/
