var progress = document.getElementById("animationProgress");
var config = {
  type: "line",
  data: {
    labels: [
      1.03,
      2.03,
      3.03,
      4.03,
      5.03,
      6.03,
      7.03,
      8.03,
      9.03,
      10.03,
      11.03,
      12.03,
      13.03,
      14.03,
      15.03,
      16.03,
      17.03,
      18.03,
      19.03,
      20.03,
      21.03,
      22.03,
      23.03,
      24.03,
      25.03,
      26.03,
      27.03,
      28.03,
      29.03,
      30.03,
      31.03,
      1.04,
      2.04, 
      3.04,
      4.04
    ],
    datasets: [
      {
        label: "Broj zaraženih",
        fill: false,
        borderColor: window.chartColors.red,
        backgroundColor: window.chartColors.red,
        data: [
          0,
          0,
          0,
          0,
          2,
          2,
          3,
          3,
          3,
          5,
          7,
          11,
          13,
          18,
          24,
          25,
          26,
          38,
          63,
          89,
          93,
          126,
          136,
          166,
          176,
          191,
          237,
          258,
          323,
          368,
          420,
          459,
          533,
          579, 
          617
        ]
      },
      {
        label: "Broj oporavljenih",
        fill: false,
        borderColor: window.chartColors.blue,
        backgroundColor: window.chartColors.blue,
        data: [
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          5,
          5,
          8,
          17,
          17,
          19,
          20,
          27,
          28
        ]
      },
      {
        label: "Broj preminulih",
        fill: false,
        borderColor: window.chartColors.yellow,
        backgroundColor: window.chartColors.yellow,
        data: [
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          3,
          3,
          3,
          4,
          5,
          6,
          10,
          13,
          13,
          16,
          17,
          21
        ]
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: "Prikaz rasta broja zaraženih"
    },
    animation: {
      duration: 3000,
      onProgress: function(animation) {
        progress.value = animation.currentStep / animation.numSteps;
      },
      onComplete: function() {
        window.setTimeout(function() {
          progress.value = 0;
        }, 2000);
      }
    }
  }
};

window.onload = function() {
  var ctx = document.getElementById("canvas").getContext("2d");
  window.myLine = new Chart(ctx, config);
};
