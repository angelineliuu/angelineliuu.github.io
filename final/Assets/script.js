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
        legend: {display: false},
}
})})

$(document).ready(function() {
  var canvas = $("#Entity")
  var xValues = ["Private","Non-Proft", "Educational", "Public", "Investors", "Self-Owned", "Unknown"];
  var yValues = [104,26, 18,18,14,8,1];
  var barColors = ["#373b67", "#373b67", "#373b67", "#373b67", "#373b67", "#373b67", "#373b67"];

  var Entity = new Chart(canvas, {
    type: "bar",  
    data: {
    labels: xValues,
    datasets: [{
        backgroundColor: barColors,
        data: yValues,}]},
    options: {
        title: {
        display: true,
        text: "Entity Type",
        fontSize: 20,
        fontColor: "#20b965"},
        legend: {display: false}
}
})})

$(document).ready(function() {
  var canvas = $("#Year")
  var xValues = [1636,1831,1841,1861,1864,1866,1868,1872,1873,1885,1898,1902,1906,1911, 1914,1919,1924,1930,1935,1943,1945,1948,1953,1957,1958,1975,1976,1981,1982,1984,1985,1986,1987,1988,1989, 1991, 1992, 1993, 1994,1997,
    1998,
    1999,
    2000,
    2001,
    2002,
    2003,
    2004,
    2006,
    2007,
    2008,
    2009,
    2010,
    2011,
    2012,
    2013,
    2014,
    2015,
    2016,
    2017,
    2018,
    2019,
    2020,
    2021,
    2022,];
  var yValues = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1, 2, 1,1,1,1,3,2,3,1,3,1,1,2,2,3,2,4,4,1,4,1,3,1,2,6,4,7,5,6,13,7,11,13,7,11,14,9,1];
  var barColors = new Array(63).fill('#20b965');

  var Year = new Chart(canvas, {
    type: "bar",  
    data: {
    labels: xValues,
    datasets: [{
        backgroundColor: barColors,
        data: yValues,}]},
    options: {
        title: {
        display: true,
        text: "Year Founded",
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
        legend: {position:'right', maxHeight: 30},
        responsive: false
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
        legend: {position:'right', maxHeight: 30},
        responsive: false
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
        legend: {position:'right', maxHeight: 30},
        responsive: false
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
        legend: {position:'right', maxHeight: 30},
        responsive: false
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
        legend: {position:'right', maxHeight: 30},
        responsive: false
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
        legend: {position:'right', maxHeight: 30},
        responsive: false
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
        legend: {position:'right', maxHeight: 30},
        responsive: false
      }
    }
)})