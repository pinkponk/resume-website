# Resume-Website

![Logo](https://github.com/pinkponk/resume-website/blob/main/resume-website/public/logo192.png)
![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)

**Table of Contents**
- [Project Title](#project-title)
- [Description](#description)
- [Installation Procedures](#installation-procedures)
- [Usage Instructions](#usage-instructions)

## Project Title
Resume-Website - A React-based personal resume website.

## Description
The Resume-Website is a robust, flexible personal portfolio website, built with React and Node.js. This versatile solution is perfect for showcasing your skills, displaying your resume and sharing your work with potential employers or clients.

In the development environment, Docker and VS code extensions are utilized to ensure a seamless workflow. We have a `postCreateCommand` set to run `yarn install` after the creation of the container.

The codebase includes an abundance of dependencies for enhanced functionality including, but not limited to, "babel-plugin-react-css-modules", "react-scroll", "react-timeline-semantic-ui", "emailjs-com", and "react-grid-gallery". All of these contribute to providing a rich, interactive user interface.

Furthermore, the application uses presets for Babel and includes commands to start, build, and test the application in its scripts. The 'eslintConfig' is added for linting, and 'browserslist' is well configured to target specific browser versions.

Application meta information is managed by a manifest file which sets properties such as short name, theme color, and the application's icons. There’s also a provision of a robots.txt file which allows all bots to have access to the website.

```javascript
"scripts": {
  "start": "webpack-dev-server --mode development",
  "build": "webpack --mode production",
  "test": "react-scripts test",
  "eject": "react-scripts eject"
}
```

## Installation Procedures
To have this project up and running on your local machine, you would need to have Node installed. Once this is done, follow these steps:

1. Clone the repository `git clone https://github.com/username/resume-website.git`
2. Navigate into the newly created folder `cd resume-website`
3. Install the dependencies `yarn install`
4. Start the development server `yarn start`

## Usage Instructions
Once the installation is done, you can run some commands inside the project folder:

- `yarn start`: Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view in the browser.
- `yarn test`: Launches the test runner in the interactive watch mode.
- `yarn build`: Builds the app for production to the `build` folder.
- `yarn eject`: This is a one-way operation. You can't go back!

Remember, the curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to `eject`.

This project is licensed under the terms of the MIT license.
