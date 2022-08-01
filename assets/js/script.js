
var userInput = document.getElementById("user");
var ageInput = document.getElementById("age");
var btn = document.getElementById("btn");
var ulList = document.getElementById("ulList");
var pElem = document.getElementById("data");

btn.onclick = function () {
    addUsername();
};

function addUsername() {

    if(userInput.value != "" && ageInput.value != "") {
        
        pElem.style.display = "none";

        if(ageInput.value<0){ageInput.value= ageInput.value * -1};

        ulList.innerHTML +=
        "<li>" + userInput.value.trim() + ", " + ageInput.value + "</li>";
    
        userInput.value = "";
        ageInput.value = "";
    } else {
        // alert("please fill data")
        pElem.style.display = "block";
    }

};
