
function openNav() {
  document.getElementById("myTopnav").style.height = "235px";
  document.getElementById("main").style.marginTop = "235px";
  document.getElementById("button-open").style.display = "none";
}

function closeNav() {
  document.getElementById("myTopnav").style.height = "0";
  document.getElementById("main").style.marginTop = "0";
  document.getElementById("button-open").style.display = "block";
}

// filter

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// slide from left

/* function openNav() {
  document.getElementById("myTopnav").style.width = "300px";
  document.getElementById("main").style.marginLeft = "300px";
  document.getElementById("button-open").style.display = "none";
}

function closeNav() {
  document.getElementById("myTopnav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.getElementById("button-open").style.display = "block";
} */


/* window.onload = function () {
  w = document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth;
  var targetWidth = 768;
  if (w >= targetWidth) {
  
  }
  else {
    
  }
}; */