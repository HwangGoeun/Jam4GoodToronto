# Jam4Good: Agricultural Supply Chain Incident Dashboard

## Project Description

This project, developed during the [Jam4GoodToronto](https://www.jam4good.org/) hackathon, is an incident report dashboard specifically designed for the agricultural supply chain team. Its goal is to provide a clear visualization and overview of entities within the supply chain (such as suppliers, customers, and material movements) and highlight or track incidents relevant to the team's operations.

The dashboard aims to improve transparency and response times by centralizing key information in an accessible format.

<br>

## Features

- Visualization of supply chain nodes (suppliers, customers, etc.) using a force-directed graph.
- Display of material flow or relationships between entities.
- Section or indicators for reporting/tracking incidents.
- User interface with navigation to different dashboard views (Incident Command, Product Tracking, Investigation, Resources, Notifications).

<br>

## Technologies Used

- React
- TypeScript
- Node.js / npm
- Material UI (MUI)
- react-router-dom (for navigation)

<br>

## Setup and Installation

To get the project running on your local machine, follow these steps:

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/HwangGoeun/Jam4GoodToronto
    ```

2.  **Navigate to the project directory** that contains the main application code (this is the directory that was previously the submodule):

    ```bash
    cd Jam4GoodToronto/outbreak-dashboard
    ```

3.  **Install the project dependencies:**
    ```bash
    npm install
    ```

<br>

## Running the Project

Once the dependencies are installed, you can start the development server:

1.  **Ensure you are in the `outbreak-dashboard` directory:**

    ```bash
    cd Jam4GoodToronto/outbreak-dashboard
    ```

    (Only needed if you are not already there)

2.  **Start the application:**
    ```bash
    npm start
    ```

This will typically open the dashboard in your web browser at `http://localhost:3000` (or another port indicated in your terminal).

<br>

## Data Sources

The dashboard currently uses static mock data for suppliers, customers, and material documents. This data is stored in JSON files located in the `src/mock` directory and served locally.

The long-term vision for this dashboard includes integrating with real-time data sources from various agricultural supply chain systems (such as ERP and CRM platforms used by farmers, packagers, distributors, and retailers) via APIs, and utilizing a dedicated internal database for persistent storage of incident reports and other relevant information.

<br>

## Project Structure

The project is organized into the following main directories and files:

```
.
├── assets/               # Static assets (images, fonts, etc.)
├── outbreak-dashboard/   # Contains the main application source code and configuration
├── README.md             # The main README file for the parent repository
└── .gitignore


Inside the `outbreak-dashboard/` directory, you will find:

outbreak-dashboard/
├── build/              # Compiled application files (generated after building)
├── node_modules/       # Project dependencies (installed by npm install)
├── public/             # Static assets served directly by the web server (like index.html)
├── src/                # Application source code (React components, logic, styles, mock data)
├── package.json        # Project configuration, scripts, and dependency list
├── package-lock.json   # Records the exact dependency tree versions
├── README.md
└── tsconfig.json       # Configuration file for TypeScript
```

<br>

## Key Components and Modules

The core functionality of the dashboard is organized within the `src` directory, with key components located in `src/components`.

- **`src/index.tsx`**: The main entry point of the application, responsible for rendering the root `App` component into the HTML.
- **`src/App.tsx`**: The primary application shell component. It sets up the overall layout, including the header (`AppBar`) and sidebar navigation (`Drawer`), and manages routing to different sections of the dashboard using `react-router-dom`.
- **`src/components/IncidentCommand/`**: Contains components related to managing or displaying features for handling incidents.
- **`src/components/Investigation/`**: Contains components related to tools or views for investigating incidents.
- **`src/components/Notifications/`**: Contains components that handle user notifications within the dashboard.
- **`src/components/ProductTracking/`**: Contains components for visualizing and tracking products or materials within the supply chain, including the force-directed graph.
- **`src/components/ResourceManagement/`**: Contains components related to managing or displaying supply chain resources (such as facilities or vehicles).
- **`src/mock/`**: Contains the static mock data used for populating the dashboard.

<br>

## Acknowledgements

This project was developed as part of the [Jam4GoodToronto](https://www.jam4good.org/).

<br>

## License

This project is licensed under the MIT License.
