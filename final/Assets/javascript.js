function openTab(evt, Titles) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(Titles).style.display = "block";
  evt.currentTarget.className += " active";
}

$(document).ready(function() {
  var canvas = $("#BCorp")
  var xValues = ["Yes","No"];
  var yValues = [5,184];
  var barColors = ["#373b67","gray"];

  var BCorp = new Chart(canvas, {
    type: "bar",  
    data: {
    labels: xValues,
    datasets: [{
        backgroundColor: barColors,
        data: yValues,}]},
    options: {
        title: {
        display: true,
        text: "BCorp Certification Status",
        fontSize: 20,
        fontColor: "#20b965"},
        legend: {display: false}
}
})})

$(document).ready(function() {
  var canvas = $("#Industry")
  var xValues = ["Food Manufacturing", "Finance and Insurance", "Media and Information Services", "Civic and Social Organizations", "Healthcare and Social Assistance", "Education Services", "Agriculture", "Automotive",  "Commercial Services", "General Manufacturing", "Utilities", "Food Services"];
  var yValues = [39, 33, 27, 26, 22, 20, 11, 3, 2, 2, 1, 3];
  var barColors = ['darkblue', "blue","lightblue", "skyblue", "teal", "orange", "red", 'pink', 'yellow', 'darkgreen', 'green', 'lightgreen']

  var Industry = new Chart(canvas, {
    type: "pie",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: yValues
      }]
    },
    options: {
      title: {
        display: true,
        text: "Industry Distribution",
        fontSize: 20,
        fontColor: "#20b965"},
        legend: {position:'right', maxHeight: 30}
      }
    }
)})

$(document).ready(function() {
  var canvas = $("#Industry1")
  var xValues = ["Food Manufacturing", "Finance and Insurance", "Media and Information Services", "Civic and Social Organizations", "Healthcare and Social Assistance", "Education Services", "Agriculture", "Automotive",  "Commercial Services", "General Manufacturing", "Utilities", "Food Services"];
  var yValues = [0, 1, 0, 20, 2, 2, 1, 0, 0, 0, 0, 0];
  var barColors = ['darkblue', "blue","lightblue", "skyblue", "teal", "orange", "red", 'pink', 'yellow', 'darkgreen', 'green', 'lightgreen']

  var Industry = new Chart(canvas, {
    type: "pie",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: yValues
      }]
    },
    options: {
      title: {
        display: true,
        text: "Industry Distribution",
        fontSize: 20,
        fontColor: "#20b965"},
        legend: {position:'right', maxHeight: 30}
      }
    }
)})

$(document).ready(function() {
  var canvas = $("#Industry2")
  var xValues = ["Food Manufacturing", "Finance and Insurance", "Media and Information Services", "Civic and Social Organizations", "Healthcare and Social Assistance", "Education Services", "Agriculture", "Automotive",  "Commercial Services", "General Manufacturing", "Utilities", "Food Services"];
  var yValues = [0, 0, 1, 0, 1, 16, 0, 0, 0, 0, 0, 0];
  var barColors = ['darkblue', "blue","lightblue", "skyblue", "teal", "orange", "red", 'pink', 'yellow', 'darkgreen', 'green', 'lightgreen']

  var Industry = new Chart(canvas, {
    type: "pie",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: yValues
      }]
    },
    options: {
      title: {
        display: true,
        text: "Industry Distribution",
        fontSize: 20,
        fontColor: "#20b965"},
        legend: {position:'right', maxHeight: 30}
      }
    }
)})

$(document).ready(function() {
  var canvas = $("#Industry3")
  var xValues = ["Food Manufacturing", "Finance and Insurance", "Media and Information Services", "Civic and Social Organizations", "Healthcare and Social Assistance", "Education Services", "Agriculture", "Automotive",  "Commercial Services", "General Manufacturing", "Utilities", "Food Services"];
  var yValues = [0, 13, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0];
  var barColors = ['darkblue', "blue","lightblue", "skyblue", "teal", "orange", "red", 'pink', 'yellow', 'darkgreen', 'green', 'lightgreen']

  var Industry = new Chart(canvas, {
    type: "pie",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: yValues
      }]
    },
    options: {
      title: {
        display: true,
        text: "Industry Distribution",
        fontSize: 20,
        fontColor: "#20b965"},
        legend: {position:'right', maxHeight: 30}
      }
    }
)})

$(document).ready(function() {
  var canvas = $("#Industry4")
  var xValues = ["Food Manufacturing", "Finance and Insurance", "Media and Information Services", "Civic and Social Organizations", "Healthcare and Social Assistance", "Education Services", "Agriculture", "Automotive",  "Commercial Services", "General Manufacturing", "Utilities", "Food Services"];
  var yValues = [1, 1, 3, 0, 0, 0, 1, 0, 0, 0, 0, 2];
  var barColors = ['darkblue', "blue","lightblue", "skyblue", "teal", "orange", "red", 'pink', 'yellow', 'darkgreen', 'green', 'lightgreen']

  var Industry = new Chart(canvas, {
    type: "pie",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: yValues
      }]
    },
    options: {
      title: {
        display: true,
        text: "Industry Distribution",
        fontSize: 20,
        fontColor: "#20b965"},
        legend: {position:'right', maxHeight: 30}
      }
    }
)})

$(document).ready(function() {
  var canvas = $("#Industry5")
  var xValues = ["Food Manufacturing", "Finance and Insurance", "Media and Information Services", "Civic and Social Organizations", "Healthcare and Social Assistance", "Education Services", "Agriculture", "Automotive",  "Commercial Services", "General Manufacturing", "Utilities", "Food Services"];
  var yValues = [32, 17, 19, 5, 17, 1, 7, 2, 1, 2, 0, 1];
  var barColors = ['darkblue', "blue","lightblue", "skyblue", "teal", "orange", "red", 'pink', 'yellow', 'darkgreen', 'green', 'lightgreen']

  var Industry = new Chart(canvas, {
    type: "pie",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: yValues
      }]
    },
    options: {
      title: {
        display: true,
        text: "Industry Distribution",
        fontSize: 20,
        fontColor: "#20b965"},
        legend: {position:'right', maxHeight: 30}
      }
    }
)})

$(document).ready(function() {
  var canvas = $("#Industry6")
  var xValues = ["Food Manufacturing", "Finance and Insurance", "Media and Information Services", "Civic and Social Organizations", "Healthcare and Social Assistance", "Education Services", "Agriculture", "Automotive",  "Commercial Services", "General Manufacturing", "Utilities", "Food Services"];
  var yValues = [6, 1, 4, 0, 2, 1, 1, 1, 1, 0, 1, 0];
  var barColors = ['darkblue', "blue","lightblue", "skyblue", "teal", "orange", "red", 'pink', 'yellow', 'darkgreen', 'green', 'lightgreen']

  var Industry = new Chart(canvas, {
    type: "pie",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: yValues
      }]
    },
    options: {
      title: {
        display: true,
        text: "Industry Distribution",
        fontSize: 20,
        fontColor: "#20b965"},
        legend: {position:'right', maxHeight: 30}
      }
    }
)})