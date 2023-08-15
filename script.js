//Custom Function
function calculateTip(){
    //store the data of inputs
    var name = document.getElementById("name").value;
    var billAmount = document.getElementById("billAmount").value;
    var serviceQuality = document.getElementById("serviceQuality").value;
    var numPeople = document.getElementById("numPeople").value;

    //quick validation - check not $0! use some logic to check if there is a bill amount and service quality, otherwise put up an alert
    if(billAmount === "" || serviceQuality == 0) {
        window.alert("Enter values");
        return; // This will prevent the functions from continuing
    }

    //Check to see if this input is empty or less than equal to 1
    if(numPeople === "" || numPeople <= 1) {
        numPeople = 1;
        document.getElementById("each").style.display = "none";
    } else{
        document.getElementById("each").style.display = "block";
    }
    
    //Do some maths! what variables do we multiply and divide??
    var total = (billAmount * serviceQuality) / numPeople;
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);
    

    //Display the tip!
    document.getElementById("totalTip").style.display = "block"
    document.getElementById("tip").innerHTML = total;

    //Display a message
    if(name !== "") {
        window.alert("Your tip amount has been calculated, " + name);
    }
}

// Hide the tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

// Clicking the button calls our custom function
document.getElementById("calculate").onclick = function(){calculateTip();};




