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