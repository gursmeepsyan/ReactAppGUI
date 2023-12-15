# ReactAppGUI


  ## Features

  - Upload a CSV file and view its contents in a table.
  - Visualize the data using a responsive bar chart.
  - Automatic row selection simulation to demonstrate dynamic chart updates.
  - Stylish and responsive design with Bootstrap.


  ## Libraries Used

  - **React**: A JavaScript library for building user interfaces.
  - **PapaParse**: A powerful CSV parsing library for JavaScript.
  - **Chart.js**: A simple yet flexible JavaScript charting library.
  - **Bootstrap**: A popular front-end framework for building responsive and stylish web applications.


  1. **Clone the repository:**
     ```bash
     git clone https://github.com/your-username/csv-reader-app.git
     ```

  2. **Navigate to the project directory:**
     ```bash
     cd csv-reader-app
     ```

  3. **Install dependencies:**
     ```bash
     npm install
     ```

  4. **Run the application:**
     ```bash
     npm start
     ```

  5. **Open your browser and visit [http://localhost:3000](http://localhost:3000).**


  1. Click the "Choose File" button to upload a CSV file.
  2. View the data in the table.
  3. Click on a row to select it, and observe the dynamic updates in the bar chart.


  - **src/App.jsx**: The main React component that defines the application logic.
  - **src/App.css**: Styles for the application components.
  - **public**: Static assets and HTML template.


  - Adjust the chart size and styling in `App.css` under `.chart-container` and `.Bar`.
  - Modify the simulation delay in the `simulateRowSelection` function in `App.jsx`.


<details>
  <summary>Click to expand the License section</summary>

  This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
</details>
