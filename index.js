"use strict";
var cardholderInputState = false;
var cardnumberInputState = false;
var expirydateInputState = false;
var expirysdateInputState = false;
var cvdateInputState = false
//To get the form id
const form =document.getElementById('form');
console.log(form);

//To get the cardholdername
const cardholderInput=document.getElementById('namer');
console.log(cardholderInput);
//to get the cardnumber
const cardnumberInput=document.getElementById('cardnumber');
console.log(cardnumberInput)
//to get the expiry date
const expirydateInput=document.getElementById('expirydate');
console.log(expirydateInput);
//To get the expirys date
const expirysdateInput=document.getElementById('expirysdate');
console.log(expirysdateInput);
//To get the cvdate
const cvdateInput=document.getElementById('cvdate');
console.log(cvdateInput);
const div15=document.querySelector('.div15');
console.log(div15);
const div16 =document.querySelector('.div16');
console.log(div16);
//let's add an event listener to the form button so that we can click it and added an event to prevent the form from submitting
form.addEventListener('submit',(event) =>{
event.preventDefault();
validateform();

//caling the inputvaliditycheck()function in the form event listener
inputValidityCheck()
inputValidity();
})

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}
const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

//writing a function for success but it won't display any message

function validateform() {
    //cardholdername
    const regexr = /^.{3,18}$/;

    if(cardholderInput.value.trim()==''){
        setError(cardholderInput, "Card Holder name can't be blank");
    }else if((regexr.test(cardholderInput.value))){
        setSuccess(cardholderInput);
        cardholderInputState = true;
    }else{
        setError(cardholderInput, 'Wrong CardHoldername')
    }
    const regex =/^\d{16}$/;
    if (cardnumberInput.value.trim()==''){
        setError(cardnumberInput,"Card Number can't be blank");
    }else if((regex.test(cardnumberInput.value.trim()))){
        setSuccess(cardnumberInput);
        cardnumberInputState = true;
    }else if (cardnumberInput.value){
        setError(cardnumberInput,'wrong format,numbers only')
    }
    const regexre =/^\d{2}$/;
    if (expirydateInput.value.trim()==''){
        setError(expirydateInput,"can't be blank");
    }else if(regexre.test(expirydateInput.value)){
        setSuccess(expirydateInput);
        expirydateInputState = true;   
    } else if (expirydateInput.value){
        setError(expirydateInput, 'Wrong format')
    }
    const regexeres =/^\d{2}$/;
    if (expirysdateInput.value.trim()==''){
        setError(expirysdateInput,"can't be blank");
        
    }else if(regexeres.test(expirysdateInput.value)){
        setSuccess(expirysdateInput);
        expirysdateInputState = true;
  }else if (expirysdateInput.value){
        setError(expirysdateInput, 'Wrong format')
    }
    const regexerese =/^\d{3}$/
    if (cvdateInput.value.trim()==''){
        setError(cvdateInput,"can't be blank");
    }else if((regexerese.test(cvdateInput.value.trim()))){
        setSuccess(cvdateInput);
        cvdateInputState = true
    }else if (cvdateInput.value){
        setError(cvdateInput, 'Wrong format,numbers only')}
}


//creating a input validity function to check if the cardholderinput state and other are true
function inputValidityCheck(){
    //assing the button a variable by calling it through the DOM
const submitButton =document.querySelector(`.btn`);
console.log(submitButton);
    if (cardholderInputState && cardnumberInputState && expirydateInputState  && expirysdateInputState && cvdateInputState){
       submitButton.addEventListener('click',function(){
//added a class list of hidden in the css code ,so we remove the hidden class when the validation are right and and  also added a display
//of style to be none
        div15.classList.remove("hidden");
        div16.style.display="none";
       })
    }

};
function inputValidity(){
const continueButton=document.querySelector('.btns');
console.log(continueButton);
    if (cardholderInputState && cardnumberInputState && expirydateInputState  && expirysdateInputState && cvdateInputState){
       continueButton.addEventListener('click',function(){
        div15.classList.add("hidden");
        div16.style.display="block";
       })
    }

};