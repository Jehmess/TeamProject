// Deep sea
function deepSea(){
    let element = document.getElementById('banner')
    element.classList.toggle('darkMode');
    let element2 = document.getElementById('body')
    element2.classList.toggle('body2');
    let element3 = document.getElementById('topHead')
    element3.classList.toggle('topHead2');
    let element4 = document.getElementById('footer')
    element4.classList.toggle('footer2');

    let element5 = document.getElementById('navBar')
    element5.classList.toggle("navBar2");
    // TODO Only Grabs one ID
    let element6 = document.getElementById('h3-dm')
    element6.classList.toggle('h3-dm')
};

// TODO LOCAL STORAGE COOKIES
// if dark-mode = true





// * Donation Page 
// * Feild validation
const form = document.getElementById('donateForm');
// inputs
const name = document.getElementById('fullName');
const phone = document.getElementById('telephone');
const address = document.getElementById('address');
const postCode = document.getElementById('postalCode');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});
function checkInputs(){
    const nameValue = name.value.trim();
    const phoneValue = phone.value.trim();
    const addressValue = address.value.trim();
    const postCodeVale = postCode.value.trim();

    if (nameValue === ''){
        //show error
        //add error class
        setErrorFor(nameValue, 'Name can not be blank')
    } else{
        // add success class
        setSuccessFor(nameValue)
    }
}

function setErrorFor(input, message){
    const formControl = input.parentElement; 
    const errorMsg = formControl.querySelectorAll('small');
    // add error message
    errorMsg.innerText = message;
    // add error class
    document.getElementById('hidden-p').className = '.form-control error'
}
