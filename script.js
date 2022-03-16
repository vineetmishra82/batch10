document.getElementById("btn").addEventListener("click", function () {
  var num = document.getElementById("num").value;

  if (num != "") {
    var str = "<h3 class='table'>Table of " + num + "<h3>";

    for (var i = 1; i < 11; i++) {
      str += "<h4 class='table'>" + num + " X " + i + " = " + num * i + "</h4>";
    }

    document.getElementById("tableDiv").innerHTML = str;
  }
});
