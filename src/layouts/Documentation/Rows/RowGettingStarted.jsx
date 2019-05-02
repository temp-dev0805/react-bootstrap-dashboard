import React, { Component } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";

const fileStructure = `light-bootstrap-dashboard-react
.
├── CHANGELOG.md
├── ISSUE_TEMPLATE.md
├── LICENSE.md
├── README.md
├── jsconfig.json
├── package.json
├── Documentation
│   ├── css
│   │   ├── demo.css
│   │   ├── documentation.css
│   │   └── light-bootstrap-dashboard.css
│   ├── img
│   └── tutorial-components.html
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── index.js
    ├── logo.svg
    ├── routes.js
    ├── assets
    │   ├── css
    │   │   ├── animate.min.css
    │   │   ├── demo.css
    │   │   ├── light-bootstrap-dashboard-react.css
    │   │   ├── light-bootstrap-dashboard-react.css.map
    │   │   ├── light-bootstrap-dashboard-react.min.css
    │   │   └── pe-icon-7-stroke.css
    │   ├── fonts
    │   ├── img
    │   │   ├── faces
    │   └── sass
    │       ├── lbd
    │       │   └── mixins
    │       └── light-bootstrap-dashboard-react.scss
    ├── components
    │   ├── Card
    │   │   └── Card.jsx
    │   ├── CustomButton
    │   │   └── CustomButton.jsx
    │   ├── CustomCheckbox
    │   │   └── CustomCheckbox.jsx
    │   ├── CustomRadio
    │   │   └── CustomRadio.jsx
    │   ├── FixedPlugin
    │   │   └── FixedPlugin.jsx
    │   ├── Footer
    │   │   └── Footer.jsx
    │   ├── FormInputs
    │   │   └── FormInputs.jsx
    │   ├── Navbars
    │   │   ├── AdminNavbar.jsx
    │   │   └── AdminNavbarLinks.jsx
    │   ├── Sidebar
    │   │   └── Sidebar.jsx
    │   ├── StatsCard
    │   │   └── StatsCard.jsx
    │   ├── Tasks
    │   │   └── Tasks.jsx
    │   └── UserCard
    │       └── UserCard.jsx
    ├── layouts
    │   └── Admin.jsx
    ├── variables
    │   └── Variables.jsx
    └── views
        ├── Dashboard.jsx
        ├── Icons.jsx
        ├── Maps.jsx
        ├── Notifications.jsx
        ├── TableList.jsx
        ├── Typography.jsx
        ├── Upgrade.jsx
        └── UserProfile.jsx`;

class RowGettingStarted extends Component {
  render() {
    return (
      <div id="getting-started-row" className="tim-row">
        <h2>Getting started</h2>
        <legend />
        <p>
          <b>The Light Bootstrap Dashboard with React</b> is built on top of
          Bootstrap 3, so you can safely use it on your existing or new
          Bootstrap project. No line of code from Bootstrap 3 was changed, so
          you don't have to worry about undesired effects in your work.
        </p>
        <ul>
          <li>
            Install NodeJs from{" "}
            <a href="https://nodejs.org/en/">NodeJs Official Page</a>
          </li>
          <li>Open Terminal</li>
          <li>Go to your file project</li>
          <li>
            Run in terminal:
            <SyntaxHighlighter language="jsx" style={prism}>
              {`npm install`}
            </SyntaxHighlighter>
          </li>
          <li>
            Then:
            <SyntaxHighlighter language="jsx" style={prism}>
              {`npm start`}
            </SyntaxHighlighter>
          </li>
          <li>
            Navigate to <code>http://localhost:3000</code>
          </li>
          <li>
            If you don't have cross-env installed globally then run in terminal
            <SyntaxHighlighter language="jsx" style={prism}>
              {`npm i -g cross-env`}
            </SyntaxHighlighter>
          </li>
        </ul>
        <p>You can additionaly use these commands:</p>
        <ul>
          <li>
            in terminal
            <SyntaxHighlighter language="jsx" style={prism}>
              {`npm test`}
            </SyntaxHighlighter>
            (runs the test watcher in an interactive mode)
          </li>
          <li>
            in terminal
            <SyntaxHighlighter language="jsx" style={prism}>
              {`npm run build`}
            </SyntaxHighlighter>
            (builds the app for production to the <code>build</code> folder)
          </li>
        </ul>
        <p>
          Also, for additional information you can refer to{" "}
          <a
            href="https://github.com/facebookincubator/create-react-app/blob/master/README.md#getting-started"
            target="_blank"
            rel="noopener noreferrer"
          >
            Create React App documentation
          </a>
          .
        </p>
        <h3>File structure</h3>
        <SyntaxHighlighter language="jsx" style={prism}>
          {fileStructure}
        </SyntaxHighlighter>
      </div>
    );
  }
}

export default RowGettingStarted;
