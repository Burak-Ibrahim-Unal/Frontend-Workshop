import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";



const BarChartPie = () => {
  return (
    <div>
      <Pie
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
                22, 19, 33, 56, 82, 43, 22, 32, 42, 54, 63, 98, 64, 15, 66,
              ],
              backgroundColor: [
                "rgba(0, 0, 0, 0.5)",
                "rgba(192, 192, 192, 0.5)",
                "rgba(128, 128, 128, 0.5)",
                "rgba(255, 0, 0, 0.5)",
                "rgba(153, 102, 255, 0.5)",
                "rgba(255, 159, 64, 0.5)",
                "rgba(255, 192, 203, 0.5)",
                "rgba(128, 0, 0, 0.5)",
                "rgba(128, 0, 128, 0.5)",
                "rgba(255, 0, 255, 0.5)",
                "rgba(0, 128, 0, 0.5)",
                "rgba(0, 255, 0, 0.5)",
                "rgba(255, 215, 0, 0.5)",
                "rgba(255, 165, 0, 0.5)",
                "rgba(0, 0, 255, 0.5)",
                "rgba(0, 0, 128, 0.5)",
                "rgba(0, 128, 128, 0.5)",
                "rgba(0, 255, 255, 0.5)",
              ],
              borderColor: [
                "rgba(0, 0, 0, 1)",
                "rgba(192, 192, 192, 1)",
                "rgba(128, 128, 128, 1)",
                "rgba(255, 0, 0, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
                "rgba(255, 192, 203, 1)",
                "rgba(128, 0, 0, 1)",
                "rgba(128, 0, 128, 1)",
                "rgba(255, 0, 255, 1)",
                "rgba(0, 128, 0, 1)",
                "rgb(0, 255, 0, 1)",
                "rgba(255, 215, 0, 1)",
                "rgba(255, 165, 0, 1)",
                "rgba(0, 0, 255, 1)",
                "rgba(0, 0, 128, 1)",
                "rgba(0, 128, 128, 1)",
                "rgba(0, 255, 255, 1)",
              ],
              borderWidth: 3,
            },
          ],
        }}
        height={700}
        width={200}
        plugins={[ChartDataLabels]}
        options={{
          datalabels: {
            anchor: "end",
            align: "top",
            formatter: Math.round,
            font: {
              weight: "bold",
            },
          },
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

export default BarChartPie;
