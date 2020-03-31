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

