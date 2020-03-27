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
