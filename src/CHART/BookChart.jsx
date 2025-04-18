import React from "react";
import ApexChart from "react-apexcharts";

function BookChart() {
   const data = [
      { bookName: "The Great Gatsby", totalPages: 192 },
      { bookName: "To kill a mocking bird", totalPages: 281 },
      { bookName: "1984", totalPages: 328 },
      { bookName: "The Alchemist", totalPages: 177 },
      { bookName: "Pride and prejudice", totalPages: 279 },
   ];

   const chartOptions = {
      chart: {
         type: "bar",
         height: 400,
         toolbar: { show: false },
         animations: {
            enabled: true,
            easing: "easeinout",
            speed: 800,
            animateGradually: {
               enabled: true,
               delay: 150,
            },
            dynamicAnimation: {
               enabled: true,
               speed: 350,
            },
         },
      },
      plotOptions: {
         bar: {
            borderRadius: 12,
            columnWidth: "45%",
            distributed: true,
            endingShape: "rounded",
         },
      },
      dataLabels: {
         enabled: true,
         style: {
            fontSize: "16px",
            fontWeight: "bold",
            colors: ["#333"],
         },
      },
      xaxis: {
         categories: data.map((d) => d.bookName),
         labels: {
            style: {
               fontSize: "14px",
               colors: ["#008FFB", "#00E396", "#FEB019", "#FF4560", "#FF0000"],
               fontWeight: 600,
            },
         },
      },
      yaxis: {
         labels: {
            style: {
               fontSize: "14px",
            },
         },
      },
      colors: ["#008FFB", "#00E396", "#FEB019", "#FF4560", "#FF0000"],
      tooltip: {
         theme: "dark",
         y: {
            formatter: function (val) {
               return `${val} pages`;
            },
         },
      },
      grid: {
         borderColor: "#f1f1f1",
         strokeDashArray: 5,
      },
      legend: { show: false },
   };

   const series = [
      {
         name: "Total Pages",
         data: data.map((d) => d.totalPages),
      },
   ];

   return (
      <div className="container mx-auto py-10">
         <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">🌍 World's Best Styled Book Chart</h2>
         <div className="rounded-xl shadow-xl bg-white p-4">
            <ApexChart options={chartOptions} series={series} type="bar" height={400} />
         </div>
      </div>
   );
}

export default BookChart;
