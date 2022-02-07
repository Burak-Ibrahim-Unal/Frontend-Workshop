import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

const BarChartLine = () => {
  return (
    <div>
      <Line
        data={{
          labels: [
            "Malzeme 1",
            "Malzeme 2",
            "Malzeme 3",
            "Malzeme 4",
            "Malzeme 5",
            "Malzeme 6",
            "Malzeme 7",
            "Malzeme 8",
            "Malzeme 9",
            "Malzeme 10",
            "Malzeme 11",
            "Malzeme 12",
            "Malzeme 13",
            "Malzeme 14",
            "Malzeme 15",
          ],
          datasets: [
            {
              label: "Vardiya 1",
              data: [
                22, 19, 33, 56, 82, 43, 22, 32, 42, 54, 63, 98, 54, 15, 66,
              ],
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
              ],
              borderWidth: 5,
            },
            {
              label: "Vardiya 2",
              data: [
                60, 35, 20, 18, 80, 67, 33, 52, 48, 64, 73, 78, 54, 45, 46,
              ],
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
              ],
              borderWidth: 5,
            },
            {
              label: "Vardiya 3",
              data: [
                50, 25, 80, 68, 80, 33, 32, 12, 22, 84, 33, 78, 54, 45, 36,
              ],
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
              ],
              borderWidth: 5,
            },
          ],
        }}
        height={700}
        width={200}
        plugins={[ChartDataLabels]}
        options={{
          datalabels: {
            anchor: "center",
            align: "top",
            formatter: Math.round,
            font: {
              weight: "bold",
            },
          },
          responsive: true,
          animations: {
            tension: {
              duration: 2000,
              easing: "easeInQuad",
              from: 0.2,
              to: 0,
              loop: true,
            },
          },
          interaction: {
            mode: "index",
            titleColor: "white",
            titleMarginBottom: 3,
            footerColor: "red",
          },
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
              max: 100,
              min: 0,
              borderColor: "red",
              ticks: {
                font: {
                  size: 16,
                  weight: "bold",
                },
              },
            },
            x: {
              ticks: {
                font: {
                  size: 16,
                  weight: "bold",
                },
              },
            },
          },
          plugins: {
            datalabels: {
              anchor: "end",
              align: "top",
              formatter: Math.round,
              font: {
                weight: "bold",
                color:"white",
              },
            },
            tooltip: {
              enabled: true,
            },
            title: {
              display: true,
              text: "TEST VARDİYA RAPORU",
              font: {
                size: 26,
                weight: "bold",
              },
              // color:"red",
            },
            subtitle: {
              display: false,
              text: "Altyazı Test",
            },
            legend: {
              labels: {
                // This more specific font property overrides the global property
                  
                font: {
                  size: 16,
                },
                fullSize: true,
              },
            },
          },
        }}
      />
    </div>
  );
};

export default BarChartLine;
