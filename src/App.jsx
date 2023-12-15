import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import { Bar } from 'react-chartjs-2';
import './App.css';
import { Chart, registerables } from 'chart.js';
import 'bootstrap/dist/css/bootstrap.min.css';

Chart.register(...registerables);

function App() {
  const [csvData, setCsvData] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [selectedRowIndex, setSelectedRowIndex] = useState(null);
  const [chartData, setChartData] = useState(null);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];

    Papa.parse(file, {
      header: true,
      dynamicTyping: true,
      complete: (result) => {
        setHeaders(Object.keys(result.data[0]));
        setCsvData(result.data);
      },
    });
  };

  useEffect(() => {
    // Function to simulate row selection with a delay
    const simulateRowSelection = async () => {
      for (let i = 0; i < csvData.length; i++) {
        await new Promise((resolve) => setTimeout(resolve, 50)); // Adjust the delay as needed
        setSelectedRowIndex(i);
      }
    };

    // Simulate row selection after file is uploaded
    if (csvData.length > 0) {
      simulateRowSelection();
    }
  }, [csvData]);

  useEffect(() => {
    if (selectedRowIndex !== null) {
      const selectedRow = csvData[selectedRowIndex];

      const chartData = {
        labels: headers.slice(1), // Exclude the first column
        datasets: [
          {
            label: 'Values',
            data: headers.slice(1).map((header) => selectedRow[header]),
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      };

      setChartData(chartData);
    }
  }, [selectedRowIndex, csvData, headers]);

  const handleRowClick = (index) => {
    setSelectedRowIndex(index);
  };

  return (
    <div className="app-container">
      <h1>CSV Reader</h1>
      <div className="flex-container">
        <div className="table-container">
          <table>
            <thead>
              <tr>
                {headers.map((header, index) => (
                  <th key={index}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {csvData.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  onClick={() => handleRowClick(rowIndex)}
                  className={selectedRowIndex === rowIndex ? 'highlighted' : ''}
                >
                  {headers.map((header, colIndex) => (
                    <td key={colIndex}>{row[header]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="selected-row-container">
          <h2>Selected Time Stamp:</h2>
          <p>{selectedRowIndex !== null ? selectedRowIndex + 1 : 'No row selected'}</p>
        </div>
        <div className="chart-container">
          {chartData && (
            <Bar
              data={chartData}
              options={{
                scales: {
                  x: {
                    type: 'category',
                    labels: headers.slice(1), // Exclude the first column
                  },
                  y: {
                    beginAtZero: true,
                  },
                },
              }}
            />
          )}
        </div>
      </div>
      <input type="file" accept=".csv" onChange={handleFileUpload} />
    </div>
  );
}

export default App;
