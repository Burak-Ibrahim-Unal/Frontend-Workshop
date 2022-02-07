import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

const BarChartBarV2 = () => {
  const testData1 = [22, 19, 33, 56, 82, 43, 22, 32, 42, 54, 63, 98, 64, 15, 66 ];
  const testData2 = [60, 35, 20, 18, 80, 67, 33, 52, 48, 64, 73, 78, 34, 45, 46,];
  const testData3 = [22, 19, 33, 56, 82, 43, 22, 32, 42, 54, 63, 98, 64, 15, 66 ];

  const testLabels= [
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
  ];
  return (
    <div>
      <Bar
        data={{
          labels: testLabels,
          datasets: [
            {
              label: "Vardiya 1",
              data: testData1,
              backgroundColor: ["rgba(255, 0, 0, 0.5)"],
              borderColor: ["rgba(255, 0, 0, 1)"],
              borderWidth: 3,
            },
            {
              label: "Vardiya 2",
              data: testData2,
              backgroundColor: ["rgba(255, 215, 0, 0.5)"],
              borderColor: ["rgba(255, 215, 0, 1)"],
              borderWidth: 3,
            },
            {
              label: "Vardiya 3",
              data: testData3,
              backgroundColor: ["rgba(0, 0, 255, 0.5)"],
              borderColor: ["rgba(0, 0, 255, 1)"],
              borderWidth: 3,
            },
          ],
        }}
        height={700}
        width={200}
        plugins={[ChartDataLabels]}
        options={{
          responsive: true,
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
                stacked: true,
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

export default BarChartBarV2;
