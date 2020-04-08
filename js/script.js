/*PROJECT 3: INTERACTIVE FORM
    BY: DIEGO HERNANDEZ NAVARRO 
    07/04/2020
*/ 


const focusTextField = document.querySelector('#name').focus(); //Sets a focus state on the Name textfield
const otherTextField = document.querySelector('#other-title');
const select = document.querySelector('#title');

/*JOB ROLE SECTION*/ 
/*
    - Hide the Other text-field section initially
    - Added an Event Listener that listens for a click and if Other is 
    selected from the Job Roles the text-field will appear
*/ 
otherTextField.style.display = 'none';

select.addEventListener('click', () => {
    if (select.value === 'other') {
        console.log(select.value);      
        otherTextField.style.display = '';        
    } else {
        console.log(select.value);
        otherTextField.style.display = 'none'; 
    }
});



/** T SHIRT INFO **/

/*Hides the Select Theme option */
const selectTheme = document.querySelector('option[value="select theme"]');
selectTheme.hidden = true;
/*Selects the text content of the Color label*/
const colorLabel = document.querySelector('label[for="color"]');
colorLabel.textContent = 'Please select a T-shirt theme'

const colors = document.querySelector('#color');
colors.hidden = true; /*Hides drop down menu*/

/*Hides all the color options from drop down menu*/ 
const cornflowerBlue = document.querySelector('option[value="cornflowerblue"]');
cornflowerBlue.hidden = true;

const darkslategrey = document.querySelector('option[value="darkslategrey"]');
darkslategrey.hidden = true;

const gold = document.querySelector('option[value="gold"]');
gold.hidden = true;

const tomato = document.querySelector('option[value="tomato"]');
tomato.hidden = true;

const steelblue = document.querySelector('option[value="steelblue"]');
steelblue.hidden = true;

const dimgrey = document.querySelector('option[value="dimgrey"]');
dimgrey.hidden = true;

/*Selects the select-design section*/ 
const design = document.querySelector('#design');
/*Sets a listener for changes in the option selection, depending on the 
  selections certain options will be appearing.
*/
design.addEventListener('change', (event) =>{

    if(event.target.value === 'js puns'){ 
        colors.hidden = false;
        colors.value = "cornflowerblue";
        cornflowerBlue.hidden = false;
        darkslategrey.hidden = false;
        gold.hidden = false;
        tomato.hidden = true;
        steelblue.hidden = true;
        dimgrey.hidden = true;
    } else if(event.target.value === 'heart js') {
        colors.hidden = false;
        colors.value = "tomato";
        tomato.hidden = false;
        steelblue.hidden = false;
        dimgrey.hidden = false;
        colors.hidden = false;
        cornflowerBlue.hidden = true;
        darkslategrey.hidden = true;
        gold.hidden = true;
    }
});


/*ACTIVITY SECTION*/

const totalLabel = document.createElement('h3'); //Creates the element that will show up in the form

const activitySection = document.querySelector('.activities'); //Selects the activity section
activitySection.appendChild(totalLabel); 

let sumOfActivities = 0; //global variable that controls the total costs

activitySection.addEventListener('change', (e) =>{
    const activity = e.target; //references the element that was just clicked
    const activityDataCost = parseInt(e.target.getAttribute('data-cost')); //gets the cost of the activity
    
    //Updating total activity cost

    if(activity.checked){
        sumOfActivities += activityDataCost;
        totalLabel.textContent = `Total: $ ${sumOfActivities}`;   
    } else{
        sumOfActivities -= activityDataCost;
        totalLabel.textContent = `Total: $ ${sumOfActivities}`;
    }

    //Disabling conflicting activities
    const activityDayAndTime = e.target.getAttribute('data-day-and-time'); //gets the info of the activity day and time
    const checkboxes = document.querySelectorAll('.activities input'); //gets all the checkboxes 
    
    for (let i = 0; i < checkboxes.length; i++) {

        const input = checkboxes[i].getAttribute('data-day-and-time') //
        //console.log(input);
        

        /*
            If the target activity {INPUT} and {activityDayAndTime}
            occurs the same day and time and its different than the 
            one that was just clicked then we can check if the
            activity was checked and enable/disable the checkbox
        */ 

        if (input === activityDayAndTime && activity !== checkboxes[i]) { 
            if (activity.checked) {
                checkboxes[i].disabled = true;
            } else {
                checkboxes[i].disabled = false;
            }
        } 
    }
});



/*PAYMENT SECTION*/ 

const creditCard = document.querySelector('#credit-card');
const paypal = document.querySelector('#paypal');
const bitcoin = document.querySelector('#bitcoin');

const selectPayment = document.querySelector('option[value="select method"]');//gets the select method option

selectPayment.hidden = true; //hides the option

paypal.style.display = 'none';
bitcoin.style.display = 'none';

const selectValue = document.querySelector('#payment');
selectValue.value = 'credit card';
console.log(selectValue.value);

selectValue.addEventListener('change', (e) =>{
    if(selectValue.value === 'bitcoin'){
        paypal.style.display = 'none';
        bitcoin.style.display = '';
        creditCard.style.display = 'none';
    } else if(selectValue.value === 'paypal'){
        paypal.style.display = '';
        bitcoin.style.display = 'none';
        creditCard.style.display = 'none';
    } else {
        paypal.style.display = 'none';
        bitcoin.style.display = 'none';
        creditCard.style.display = '';
    }
});


/*FORM VALIDATION AND VALIDATION MESSAGES*/ 


const form = document.querySelector("form");
const name = document.querySelector('#name');
const email = document.querySelector('#mail');
const cardNumber = document.querySelector('#cc-num');
const zipCode = document.querySelector('#zip');
const cvv = document.querySelector('#cvv');
//activitySection 
//checkboxes

//name validator
const nameValidator = () => {
    const nameValue = name.value;
    if(nameValue.length > 0){
        name.style.border = '1px solid white';
        return true;
    }else{
        name.style.border = '2px solid red';
        return false;
    }
}

//email validator
const emailValidator = () => {
    const emailValue = email.value;
    const indexOfemail = email.value.indexOf('@');
    const lastIndexOxEmail = email.value.lastIndexOf('.');

    if(indexOfemail > 1 && lastIndexOxEmail > indexOfemail+1 ){
        email.style.border = '1px solid white';
        return true;
    }else{
        email.style.border = '2px solid red';
        return false;
    }

}

const activityValidatorWarning = document.createElement('h3');
activitySection.appendChild(activityValidatorWarning);

//activity section validator
const activityValidator = () => {
    const checkboxes = document.querySelectorAll('.activities input'); //gets all the checkboxes
    for (let i = 0; i < checkboxes.length; i++) {
        if(checkboxes[i].checked){
            activityValidatorWarning.style.display = 'none' /*Only works for submit buttons */ 
            return true;
        } 
    }
    activityValidatorWarning.innerHTML = 'PLEASE SELECT AN ACTIVITY';
    activityValidatorWarning.style.color = 'black';
    activityValidatorWarning.style.display = ''
    return false;
}


//payment section validator

        /*THIS SURELY CAN BE IMPROVED*/ 
const payment = document.querySelector('.payment');
const div = document.createElement('div')
const cardNumberError = document.createElement('h4');
const zipCodeError = document.createElement('h4');
const cvvError = document.createElement('h4');

cardNumberError.innerHTML = 'Card number must be 13-16 continued digits';
zipCodeError.innerHTML = 'ZipCode must be 5 digits';
cvvError.innerHTML = 'Cvv must be 3 digits';

payment.appendChild(div);
div.appendChild(cardNumberError);
div.appendChild(zipCodeError);
div.appendChild(cvvError);
div.style.display = 'none'
const paymentErrorMessage = (error) => {
    if(error === true){
        div.style.display = ''
        return div;
    } else{
        div.style.display = 'none'
        return div;
    }
    
}

//cvv validator
const creditCardValidator = () => {
    const creditCardValue = cardNumber.value;
    console.log(creditCardValue);
    console.log(creditCardValue.length);
    if(selectValue.value === 'credit card' &&  !(creditCardValue.length > 12 && creditCardValue.length < 17)){
        cardNumber.style.border = '2px solid red';
        paymentErrorMessage(true);
        return false;
    }
    cardNumber.style.border = '2px solid rgb(111, 157, 220)';
    paymentErrorMessage(false);
    return true;
}

//cvv validator
const zipCodeValidator = () => {
    const zipCodeValue = zipCode.value;
    console.log(zipCodeValue);
    console.log(zipCodeValue.length);
    if(selectValue.value === 'credit card' &&  zipCodeValue.length !== 5){
        zipCode.style.border = '2px solid red';
       paymentErrorMessage(true);
        return false;
    }
    zipCode.style.border = '2px solid rgb(111, 157, 220)';
    paymentErrorMessage(false);
    return true;
}

//cvv validator
const cvvValidator = () => {
    const cvvValue = cvv.value;
    console.log(cvvValue);
    console.log(cvvValue.length);
    if(selectValue.value === 'credit card' &&  cvvValue.length !== 3){
        cvv.style.border = '2px solid red';
        paymentErrorMessage(true);
        return false;
    }
    cvv.style.border = '2px solid rgb(111, 157, 220)';
   paymentErrorMessage(false);
    return true;
}


/*Listens for submit events and prevents default browser actions*/ 
form.addEventListener('submit', (e) => {

    if(!nameValidator()){
        e.preventDefault();
    }

    if(!emailValidator()){
        e.preventDefault();
    }

    if(!activityValidator()){
        e.preventDefault();
    }
    if(!creditCardValidator()){
        e.preventDefault();
    }
    if(!zipCodeValidator()){
        e.preventDefault();
    }
    if(!cvvValidator()){
        e.preventDefault();
    }


    console.log('Submit handler is functional!');
   });