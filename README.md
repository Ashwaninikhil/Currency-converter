﻿# Currency Converter 

This is a simple Currency Converter application built using JavaScript, HTML, and CSS. It allows users to convert currency values between different countries in real-time using exchange rates from an external API.
Features

    Real-time exchange rates fetched from Currency API.
    Ability to select currencies for conversion from a dropdown.
    Displays flags for the selected currencies.
    Error handling for invalid inputs or failed API requests.
    Automatic fetching of exchange rates upon page load and user interaction.

Technologies Used

    HTML: Markup for structuring the webpage.
    CSS: Styling the UI elements.
    JavaScript: Adding interactivity and making API requests.
    Currency API: Fetching the latest exchange rates for currency conversion.

Installation

    Clone the repository to your local machine:

    bash

git clone https://github.com/your-username/currency-converter.git

Navigate into the project directory:

bash

    cd currency-converter

    Open the index.html file in your browser to view the application.

Usage

    Select the From currency and To currency from the dropdown menus.
    Enter the amount you wish to convert.
    Click the Convert button to fetch the latest exchange rate and perform the conversion.
    The converted amount will be displayed along with the selected currencies and flags.

API Used

This project uses the Currency API to fetch real-time exchange rates.

Example API Request:

bash

https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json

Future Enhancements

    Add historical data for currency trends.
    Support for multi-language and currency symbols.
    Improve UI/UX for better user experience.

License

This project is licensed under the MIT License - see the LICENSE file for detailsncy-converter
