const focusTextField = document.querySelector('#name').focus();
const jobRole = document.querySelectorAll('#title');
const form = document.querySelector('form');

for (let index = 0; index < jobRole.length; index++) {
    console.log(jobRole.item[index]);
}