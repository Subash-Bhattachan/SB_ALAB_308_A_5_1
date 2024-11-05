const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const phoneNumber = document.getElementById("phonenumber");
const emailAddress = document.getElementById("emailaddress");
const radioInputs = document.querySelectorAll(".radio-input");
const yesRadio = document.getElementById('yesRadio');
const noRadio = document.getElementById('noRadio');
let title = document.querySelector("title");
let submitBtn = document.querySelector("submit");


export function validateFirstName() {
    const firstNameVal = firstName.value.trim();
    
    
    //clearErrorFor(firstName);  
    if(firstNameVal.length == 0) {
        setErrorFor(firstName, "First name cannot be blank.")
        firstName.focus();
        return false;
    }

    if(firstNameVal.length < 2) {
        // show error and error class
        setErrorFor(firstName, "First name cannot be less than two characters.")
        firstName.focus();
        return false;
    }
    

    else if(firstNameVal.length > 30) {
        // show error and error class
        setErrorFor(firstName, "First name cannot be more than thirty characters.")
        firstName.focus();
        return false;
    }
    
    
    else if(!firstNameVal.match(/^[A-Za-z]+$/)){
        setErrorFor(firstName, "First name must contain letters only.")
        firstName.focus();
        return false;
    }

    else {
        setSuccessFor(firstName)
    }
//clearErrorFor(firstName);    
return firstNameVal; 


};

///////////////////////////////
export function validateLastName() {
    const lastNameVal = lastName.value.trim();
    
    if(lastNameVal.length == 0) {
        setErrorFor(lastName, "Last name cannot be blank.")
        lastName.focus();
        return false;
    }

    else if(lastNameVal.length < 2) {
        // show error and error class
        setErrorFor(lastName, "Last name cannot be less than two characters.")
        
        
        lastName.focus();
        return false;
    }

    else if(lastNameVal.length > 30) {
        // show error and error class
        setErrorFor(lastName, "Last name cannot be more than thirty characters.")
        
        
        lastName.focus();
        return false;
    }
    
    else if(!lastNameVal.match(/^[A-Za-z]+$/)){
        setErrorFor(lastName, "Last name must contain letters only.")
        lastName.focus();
        return false;
    }
    else {
        setSuccessFor(lastName)
    }

return lastNameVal;     
};

//////////////////////////////////
export function validatePhone() {
    const phoneNumberVal = phoneNumber.value.trim();

    if(phoneNumberVal.length === 0) {
        setErrorFor(phoneNumber, "Phone number cannot be blank.")
        phoneNumber.focus();
        return false;
    }

    else if(phoneNumberVal.length != 10) {
        setErrorFor(phoneNumber, "Phone number cannot be more or less than 10 digits.")
        phoneNumber.focus();
        return false;
    }

    else if(!phoneNumberVal.match(/^\d+$/)) {
        setErrorFor(phoneNumber, "Phone number must contain only numbers.")
        phoneNumber.focus();
        return false;
    }
    else {
        setSuccessFor(phoneNumber)
    }


    return phoneNumberVal;
};

//////////////////////////////////////
export function validateEmail() {
    let emailAddressVal = emailAddress.value.trim().toLowerCase();
    const atpos = emailAddressVal.indexOf("@");
    const dotpos = emailAddressVal.lastIndexOf(".");
  
    if (emailAddressVal === "") {
      setErrorFor(emailAddress, "Please provide an email.");
      emailAddress.focus();
      return false;
    }
  
    else if (atpos < 1) {
      setErrorFor(emailAddress, 
        "@ symbol must not be at the beginning of the email."
      );
      emailAddress.focus();
      return false;
    }
  
    else if (dotpos - atpos < 2) {
      setErrorFor(emailAddress, 
        "\nYou must include a domain name after the @ symbol."
      );
      emailAddress.focus();
      return false;
    }
  
    else if (emailAddressVal.endsWith("@example.com")) {
      setErrorFor(emailAddress, 
        "Your email address cannot be example.com."
      );
      emailAddress.focus();
      return false;
    }
  
    else {
      setSuccessFor(emailAddress)
  }
  
    return emailAddressVal;
  }

  ////////////////////////////////////////
  const radioGroup = document.querySelector(".radio-group");
const radioGroups = document.querySelectorAll('input[name="option"]');

export function validateRadioGroup() {
    
    let selectedValue1 = Array.from(radioGroups).find(radio => radio.checked);
    
    if(!selectedValue1) {
        setErrorFor(radioGroup, "Are you attending the party or not?");
        radioGroups[0].focus();
        

    } 
    else {
        clearErrorFor(radioGroup);

        if (selectedValue1.value === "yes") {
                        const numberOfPeople = dropDown.value;
                        if (numberOfPeople) {
                            window.alert(`Thank you for confirming that you are coming!\n We appreciate you bringing ${numberOfPeople}.`);
                        } 
                    } 
                    
        else {
                window.alert("Thank you for confirming that you are not coming. \n You can exit the application.");
                }    
                form.reset(); 
        }
        
    }


//////////////////////////////////////
// writing function to update the selection and change the parent color
export function updateChoice() {
    let selectedValue = "";
    radioInputs.forEach(input => {
        if (input.checked) {
            selectedValue = input.value;
        
        }
    });

console.log("Selected Option:", selectedValue);

// here the parent node is radioGroup and the children nodes are label elements such as radio buttons and text
if (selectedValue === "yes") {
    radioGroup.style.color = "green";
    //yesRadio.style.backgroundColor = 'green'; // not working as intended
    //noRadio.style.backgroundColor = ''; // not working as intended
} 
else if (selectedValue === "no") {
    radioGroup.style.color = "red";
    //noRadio.style.backgroundColor = 'red'; // not working as intended
    //yesRadio.style.backgroundColor = ''; // not working as intended
    
} 
else {
    radioGroup.style.color = "";
     
}
}


// to print out the error message
export function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    small.innerText = message; // add error message inside small
    formControl.className = "form-control error";
}


// to print out the success message
export function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
    
}

// to clear the error message
export function clearErrorFor(input) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small")
     formControl.className = "form-control success";
    small.innerText = "";
    //small.innerText = none;
    
}

