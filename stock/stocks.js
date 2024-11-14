let howManyYearsBack = 1;
const monthsInYear = 12;
let chartInstance = null;
let csvData = [];

        function fileSelected() {
            const fileInput = document.getElementById('fileInput');
            const file = fileInput.files[0];

            if (file && file.type === 'text/csv') {
                const reader = new FileReader();
                reader.onload = function(e) {
                    const text = e.target.result;
                    csvData = parseCSV(text);
                    visualize();
                };
                reader.readAsText(file);
            } else {
                alert('Please select a valid CSV file.');
            }
        }
        function parseCSV(text) {
          const rows = text.split('\n');
        
          // Remove the first row (header) and filter out empty rows
          const data = rows.slice(1)
                           .filter(row => row.trim() !== '')  // Remove empty rows
                           .map(row => row.split(','));  // Split by commas
        
          console.log(data);  // Optional: to see the processed data in the console
          return data;
        }
        
      

        function calculateLastYearsHighs(checkHowManyPastYears, data) {
            let storagePerBusinessMonth = Array.from({ length: monthsInYear }, () => []);
            let currentYear = "0000";
            let monthCounter = 0;
            let numberOfYearsTotal = 0;

            // Organize data by month and year
            for (let i = 0; i < data.length; i++) {
              const year = data[i][0].substring(0, 4); // Extract year from the first column
              console.log(data[i][0])
              if (year !== 'Date') {
                if (year !== currentYear) {
                    numberOfYearsTotal++;
                    currentYear = year;
                    monthCounter = 0;
                }
                storagePerBusinessMonth[monthCounter].push(data[i]);
                monthCounter++;
              }
            }

            let monthlyHighestValuesPerYear = Array(monthsInYear).fill(0);

            for (let i = 0; i < monthsInYear; i++) {
                for (let j = 0; j < checkHowManyPastYears; j++) {
                    if (storagePerBusinessMonth[i] && storagePerBusinessMonth[i][numberOfYearsTotal - 1 - j]) {
                        monthlyHighestValuesPerYear[i] += parseFloat(storagePerBusinessMonth[i][numberOfYearsTotal - 1 - j][2]); // "High" value
                    }
                }
                monthlyHighestValuesPerYear[i] /= checkHowManyPastYears;
            }
            console.log(checkHowManyPastYears)

            return monthlyHighestValuesPerYear;
        }

        function showMonthBasedGraph(monthlyHighestValuesPerYear, howManyYearsBack) {
          const ctx = document.getElementById('plot').getContext('2d');
          if (chartInstance) {
              chartInstance.destroy();
          }
      
          chartInstance = new Chart(ctx, {
              type: 'line',
              data: {
                  labels: Array.from({ length: monthsInYear }, (_, i) => i + 1),
                  datasets: [{
                      label: `Durchschnitt pro Monat über die letzten ${howManyYearsBack} Jahre`,
                      data: monthlyHighestValuesPerYear,
                      borderColor: 'rgba(75, 192, 192, 1)',
                      fill: false,
                      tension: 0.1
                  }]
              },
              options: {
                  responsive: true,
                  maintainAspectRatio: false,
                  scales: {
                      x: {
                          title: {
                              display: true,
                              text: 'Monat'
                          },
                          ticks: {
                              stepSize: 1
                          }
                      },
                      y: {
                          title: {
                              display: true,
                              text: 'Wert in €'
                          },
                          ticks: {
                              stepSize: 5,
                          },
                          min: 0,  // Always start the y-axis at 0
                          beginAtZero: true,  // Force the chart to always start at zero
                          type: 'linear'  // Ensure the y-axis is using a linear scale
                      }
                  }
              }
          });
      }
      
          

        function updateAndVisualize() {
            howManyYearsBack = parseInt(document.querySelector("#yearsBack").value);
            visualize();
        }

        async function visualize() {
            if (csvData.length === 0) {
                alert('Please load a CSV file first.');
                return;
            }

            const monthlyData = calculateLastYearsHighs(howManyYearsBack, csvData);
            console.log(monthlyData);
            showMonthBasedGraph(monthlyData, howManyYearsBack);
        }