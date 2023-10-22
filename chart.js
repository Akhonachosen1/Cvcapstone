// Create a 3D pie chart
var ctx = document.getElementById("myChart").getContext("2d");
var chartContainer = document.querySelector(".chart-container");

var chart = new Chart(ctx, {
  type: "doughnut3d",
  data: {
    labels: ["Full stack web development", "Application developer", "Cybersecurity"],
    datasets: [{
      data: [10, 20, 30],
      backgroundColor: ["red", "green", "blue"]
    }]
  },
  options: {
    animation: {
      duration: 2000,
      easing: "easeOutQuart"
    }
  }
});

// Add the chart to the chart container
chartContainer.appendChild(chart.canvas);
