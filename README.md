# Weather App

A weather application built as part of [The Odin Project](https://www.theodinproject.com/) JavaScript curriculum.

The application fetches weather data from the Visual Crossing Weather API, transforms the raw response into application-specific data, and displays the result through modular UI components.

## Features

- Search weather by location
- Display current weather conditions
- Display weather forecasts
- Select individual forecast days
- Toggle temperature between Celsius and Fahrenheit
- Loading state while fetching data
- Error / empty state for failed initial searches

## Architecture

The application separates API communication, data transformation, application logic, and DOM-related logic.

```text
src/
├── assets/
│   ├── fonts/                      # Fonts
│   └── images/                     # Images for bg     
│
├── components/                     # Containing component, along with its DOM, update DOM method & style
│   ├── empty-state/
│   ├── header/                     
│   ├── loader/
│   ├── main-content/
│   └── side-content/
│
├── services/
│   └── weatherapi.services.js      # Service for fetch API & return fetched data
│
├── styles/                         # Main style
│   └── global.css
│
├── utils/                          # Helper
│   └── backgroundChanger.js        # Bg changer depending on data
│   └── displayTemp.js              # Display helper depending on unit temp
│   └── formatTimeEpoch.js          # Formater datetimeEpoch
│   └── getDayFromDate.js           # Day formater from date
│   └── mapCondition.js             # Module function map for data mapping
│   └── rawDataTransformer.js       # Transform raw API data to smaller structure app needed
│
├── handler.js                      # Orchestrator, managing state, render updates & navigation 
├── index.js                        # Entry point, inject dependcys & start handler
└── template.html                   # Minimal HTML entry template
```

## Data Flow
```text
     MainHandler.init()
            │
            ▼
    onSearch callback()
            │
            ▼
   MainHandler.getData()
            │
            ▼
     Weather Services
            │
            ▼
    Visual Crossing API
            │
            ▼
   Raw Data Transformer
            │
            ▼
          State
            │
            ▼     
  Render/update Component
```

## Design Decision
- Raw API responses are transformed before being used by the application, so the rest of the code does not need to depend directly on the API response structure.
- `MainHandler` acts as the application orchestrator and manages state, rendering, navigation, and communication between components.
- UI components are responsible for their own DOM creation, updates, & callback for behavior while application logic is handled outside the components.
- `index.js` is only responsible for injecting dependencys for `mainHandler`.

## Technologies
- JavaScript (ES6+)
- HTML
- CSS
- Webpack
- Visual Crossing Weather API

## What I Practiced
This project was built to practice:
- Asynchronous JavaScript
- API consumption
- ES Modules
- DOM manipulation
- Event handling
- Callbacks
- State
- Modular code organization
- Webpack
- Separating application logic from DOM logic