// JavaScript Document

//Creating the functions ChangeDropDown and submit so user can enter a location different than what's currently available on drop down list
function ChangeDropDown(drop) {
    let optionTxt = drop.form.elements["location-txt"];
    if (optionTxt) {
        optionTxt.style.display = (drop.value === "") ? "" : "none";
        if (drop.value === "")
            optionTxt.focus();
    }
}

