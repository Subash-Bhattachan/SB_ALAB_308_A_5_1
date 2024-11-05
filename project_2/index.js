import { validateFirstName, validateLastName, validatePhone, validateEmail, validateRadioGroup, setErrorFor, setSuccessFor, clearErrorFor, updateChoice  } from "./functions.js"
    


const form = document.getElementById("form");
const radioInputs = document.querySelectorAll(".radio-input");
const input = document.querySelector('input[type="text"]');
let message = "";


form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    if(checkInputs(e)) {
        setTimeout(() => {
            form.submit();
        }, 2000); // to delay the submission by 2 seconds
    }
});

function checkInputs(e) {
    
    const firstNameVal = validateFirstName();
    if (firstNameVal === false) {
        //e.returnValue = false;
        return false;
    }

    const lastNameVal = validateLastName();
    if (lastNameVal === false) {
        return false;
    }

    const phoneNumberVal = validatePhone();
    if (phoneNumberVal === false) {
        return false;
    }


    const emailAddressVal = validateEmail();
    if (emailAddressVal === false) {
        return false;
    }

    const radioGroupVal = validateRadioGroup();
    if (radioGroupVal === false) {
        return false;
    }

    const dropDownVal = validateDropDown();
    if (dropDownVal === false) {
        return false;
    }

    this.submit();
    //form.reset();
    return true;

}

///////////////////////////////////////////
validateFirstName();
   
///////////////////////////////////////////
validateLastName();

///////////////////////////////////////////
validatePhone()

///////////////////////////////////////////
validateEmail()

///////////////////////////////////////////
validateRadioGroup()

///////////////////////////////////////////

// creating the dropdown menu to pick options from
const dropDown = document.getElementById("dynamic-dropdown");
const options = ["One person", "Two people", "Three people", "Four people", "Five people"];


// using DocumentFragment for efficient option creation
const fragment = document.createDocumentFragment();

// using for loop to populate the dropdown with options
options.forEach(option => {
    const opt = document.createElement("option");
    opt.value = option;
    opt.textContent = option;
    fragment.appendChild(opt); // this appends each option to the fragment created 
});

// now appending all the options to the dropdown 
dropDown.appendChild(fragment);

// adding an event handler when an user changes the dropdown menu
dropDown.addEventListener("change", function() {
    window.alert("You have selected: " + this.value);
    const selectedValue = this.value;

    // this changes the title attribute of the dropdown 
    this.setAttribute("title", `Selected: ${selectedValue}`);

    // looping through the options to modify the selected one
    for(let i = 0; i < dropDown.options.length; i++) {
        const option = dropDown.options[i];  
        if (option.value === selectedValue) {
            option.style.backgroundColor = "red"; // to highlight the selection
            
        }
        else {
            option.style.backgroundColor = ""; // to reset others that is not selected
        }
    
    }

});


///////////////////////////////////////////


updateChoice(); 

// adding event listener to radio
radioInputs.forEach(input => {
    input.addEventListener("change", updateChoice);
});


setErrorFor(input, message);
setSuccessFor(input);  
clearErrorFor(input)


