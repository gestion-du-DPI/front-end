# Front-End

This repository contains the code for the front-end of the project. To collaborate, please follow these steps:

## Getting Started

### Prerequisites

Make sure you have the following installed on your local machine:

- Node.js (version 14 or higher)
- Angular CLI (version 12 or higher)
- Git

### Installation

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/gestion-du-DPI/front-end.git
    ```

2. Navigate to the project directory:

    ```bash
    cd front-end
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

### Running the Application

To run the application locally, use the following command:

    ```bash
    npm start
    ```

This will start the development server and you can view the application in your browser at http://localhost:4200.

### Building the Application

To build the application for production, use the following command:

    ```bash
    npm run build
    ```

The build artifacts will be stored in the dist/ directory.

### Running Tests

To run the unit tests, use the following command:

    ```bash
    npm test
    ```

## Development Workflow

### Branching

1. Create a new branch for your feature or bugfix. Use the following naming convention: yourName/theFeatureYouAreWorkingOn

    ```bash
    git checkout -b yourName/theFeatureYouAreWorkingOn
    ```

2. Make your changes and commit them to your branch:

    ```bash
    git add .
    git commit -m 'write here a small message about your task'
    ```

3. Push your branch to the remote repository:

    ```bash
    git push origin theNameOfYourBranch
    ```

### Pull Requests

1. Open a pull request on GitHub and wait for someone to review and merge it.

## Project Structure

The project has the following structure:
.editorconfig
.gitignore
.vscode/
    extensions.json
    launch.json
    tasks.json
angular.json
package.json
public/
    doctor-icons/
    nurse-icons/
    radiologist-icons/
    technician-icons/
README.md
src/
    app/
        admin/
        doctor/
        lab-technician/
        nurse/
        patient/
        shared/
    environments/
    index.html
    main.server.ts
    main.ts
    server.ts
    styles.css
tailwind.config.js
tsconfig.app.json
tsconfig.json
tsconfig.spec.json


### Key Directories

- src/app: Contains the main application code, organized by feature modules.
- src/environments: Contains environment-specific configuration files.
- public: Contains static assets such as icons and images.
- .vscode: Contains Visual Studio Code specific settings and configurations.
- dist/: Contains the build artifacts after running the build command.

## Contributing

We welcome contributions from the community. Please follow the steps outlined above to get started. If you have any questions or need help, feel free to open an issue on GitHub.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.