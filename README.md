# Countries Explorer

A React Native app built with Expo for exploring country information. The app will allows users to browse, search, and view details about countries using the REST Countries API.

## Features

- List of countries with key information (name, flag, population, region, capital)
- Search countries by name
- Country detail view
- Error and loading state handling
- Navigation between screens

## Getting Started

```bash
git clone https://github.com/emenocal07/countries-explorer.git
cd countries-explorer
npm install
```

## Running the App

```bash
npm start
```

## Running Tests

```bash
npm test
```

This will run all unit tests located in `src/components/*/__tests__` and `src/screens/*/__tests__`.

You can run a specific test file using:

```bash
npm test -- <file-name>
```

Example:
```bash
npm test -- HomeScreen.test.tsx
```

Open the app on your device or emulator using Expo Go.

## Project Structure

- `app/`: Expo Router layouts, navigation, and entry points
- `src/assets/`: App images, icons, fonts
- `src/components/`: Reusable UI components (Themed, CountryItem, GlobalLoading, LanguageSelector, etc.)
- `src/constants/`: App-wide constants (Colors, routes)
- `src/hooks/`: Custom React hooks
- `src/i18n/`: Internationalization setup and translations
- `src/schema/`: Data schemas (Country)
- `src/screens/`: Main screens (Home, Countries List, Country Detail)
- `src/services/`: API and local storage logic
- `src/store/`: Global state management
- `src/theme/`: Theme configuration
- `src/types/`: TypeScript types and environment definitions

## API Used

[REST Countries API](https://restcountries.com/)

## Technical Requirements

- React Native + Expo
- TypeScript
- REST API consumption
- Good development and design practices

## Pending Tasks

- [X] Initial repository setup
- [X] Structure project
- [X] Home screen and styles library
- [X] Country list and API connection
- [X] Country detail screen
- [X] Enhancements
- [X] This readme


