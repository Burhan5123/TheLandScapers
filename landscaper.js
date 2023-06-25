function choosePlanter() {
    var id = document.querySelector('input[name="planter"]:checked').value;
    var xhr = new XMLHttpRequest();
    var output = "";
    if(id == "squareCube"){
        xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200 ) {
        document.getElementById("display").innerHTML = output;
        document.getElementById("planters").innerHTML = xhr.responseText;
      }
    };
        xhr.open("GET", "Square-RectangularCubes.html", true);
        xhr.send();
  }
        if(id == "flatBottom"){
        xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
        document.getElementById("display").innerHTML = output;6
        document.getElementById("planters").innerHTML = xhr.responseText;
      }
    };
        xhr.open("GET", "Flatbottomedcylinders.html", true);
        xhr.send();
      }

        if(id == "halfSpherical"){
        xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {    
        document.getElementById("display").innerHTML = output;
        document.getElementById("planters").innerHTML = xhr.responseText;
        }
      };
        xhr.open("GET", "Spherical.html", true);
        xhr.send();
  }

        if(id == "truncCone"){
        xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {  
         document.getElementById("display").innerHTML = output;
        document.getElementById("planters").innerHTML = xhr.responseText;
        }
    };
        xhr.open("GET", "TruncatedCone.html", true);
        xhr.send();
 }
}

function orderPlanter()
{
  var id = document.querySelector('input[name="planter"]:checked').value;
  
  if(id == "squareCube"){
    squareCubes();
  }
  else if(id == "flatBottom"){
    cylinder();
  }
  else if(id == "halfSpherical"){
    spherical();
  }
  else if(id == "truncCone"){
    truncatedCone();
  }
}

function squareCubes(){
    var fullName = document.getElementById("fullname").value;
    var address = document.getElementById("address").value;
    var postalCode = document.getElementById("postalcode").value;
    var result = "";
    result = "<table><tr><td> Name:</td><td>" + fullName +"</td></tr>" +"<tr><td> Address:</td><td>" + address +"</td></tr>" + "<tr><td> Postal Code:</td><td>" + postalCode +"</td></tr>" + "</table><br>";
  

    var planterType = "Square/Rectangular Cubes";
    var length = parseFloat(document.getElementById("length").value);
    var width = parseFloat(document.getElementById("width").value);
    var height = parseFloat(document.getElementById("height").value);
    

    const PERVOLUMECOST = 0.001;

    var volume = length * width * height;
    var volumeCost = PERVOLUMECOST * volume;
    var output = result + planterType + "<br> Length: " + length + "cm <br> Width: " + width + "cm <br> Height: " + height + "cm <br> Volume: " + volume.toFixed(2) + "cm³ <br> Total Cost: $" + volumeCost.toFixed(2);
    document.getElementById("display").innerHTML = output;

}

function cylinder(){
    var fullName = document.getElementById("fullname").value;
    var address = document.getElementById("address").value;
    var postalCode = document.getElementById("postalcode").value;
    var result = "";
    result = "<table><tr><td> Name:</td><td>" + fullName +"</td></tr>" +"<tr><td> Address:</td><td>" + address +"</td></tr>" + "<tr><td> Postal Code:</td><td>" + postalCode +"</td></tr>" + "</table><br>";

    var planterType = "Flat bottomed cylinders";
    var radius = parseFloat(document.getElementById("radius").value);
    var height = parseFloat(document.getElementById("height").value);

    const PERVOLUMECOST = 0.0012;
    const PI = 3.142;

    var volume = PI * radius * radius * height;
    var volumeCost = PERVOLUMECOST * volume;
    var output = result + planterType + "<br> Radius: " + radius + "cm <br> Height: " + height + "cm <br> Volume: " + volume.toFixed(2) + "cm³ <br> Total Cost: $" + volumeCost.toFixed(2);
    document.getElementById("display").innerHTML = output;
}

function spherical(){
    var fullName = document.getElementById("fullname").value;
    var address = document.getElementById("address").value;
    var postalCode = document.getElementById("postalcode").value;
    var result = "";
    result = "<table><tr><td> Name:</td><td>" + fullName +"</td></tr>" +"<tr><td> Address:</td><td>" + address +"</td></tr>" + "<tr><td> Postal Code:</td><td>" + postalCode +"</td></tr>" + "</table><br>";

    var planterType = "½ Spherical";
    var radius = parseFloat(document.getElementById("radius").value);

    const PERVOLUMECOST = 0.0015;
    const PI = 3.142;

    var volume =1/2 * (4/3 * PI* radius * radius * radius);
    var volumeCost = PERVOLUMECOST * volume;
    var output = result + planterType + "<br> Radius: " + radius + "cm <br> Volume: " + volume.toFixed(2) + "cm³ <br> Total Cost: $" + volumeCost.toFixed(2);
    document.getElementById("display").innerHTML = output;
}

function truncatedCone(){
    var fullName = document.getElementById("fullname").value;
    var address = document.getElementById("address").value;
    var postalCode = document.getElementById("postalcode").value;
    var result = "";
    
    result = "<table><tr><td> Name:</td><td>" + fullName +"</td></tr>" +"<tr><td> Address:</td><td>" + address +"</td></tr>" + "<tr><td> Postal Code:</td><td>" + postalCode +"</td></tr>" + "</table><br>";

    var planterType = "Truncated cone";
    var radius1 = parseFloat(document.getElementById("radius1").value);
    var radius2 = parseFloat(document.getElementById("radius2").value);
    var height = parseFloat(document.getElementById("height").value);


    const PERVOLUMECOST = 0.002;
    const PI = 3.142;

    var volume = 1 / 3 * PI * ((radius1 * radius1) + (radius1 * radius2) + (radius2 * radius2)) * height;
    var volumeCost = PERVOLUMECOST * volume;
    var output = result + planterType + "<br> Radius 1: " + radius1 + "cm <br> Radius 2: " + radius2 + "cm <br> Height: " + height + "cm <br> Volume: " + volume.toFixed(2) + "cm³ <br> Total Cost: $" + volumeCost.toFixed(2);
    document.getElementById("display").innerHTML = output;


}