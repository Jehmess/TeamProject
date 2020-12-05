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
    let element6 = document.getElementById('h2-dm')
    element6.classList.toggle('h2-dm');
};

// TODO LOCAL STORAGE COOKIES
// if dark-mode = true





// Donation Section
// TODO Validation Module
function validateForm(e){

    // private function for validating the form
    e.preventDefault();
    var valid = true;

    //display warning when validation = flase
    if(donateForm.fname.value == ""){
        document.getElementById('nameWarning').innerHTML = '* Enter a valid first name';
        valid = false;
    }
    if(donateForm.addresss.value == ""){
        document.getElementById('addWarning').innerHTML = '* Enter a valid address';
        valid = false;
    }
    if(donateForm.phoneNum.value == ""){
        document.getElementById('numWarning').innerHTML = '* Enter a valid phone number';
        valid = false;
    }

    if(valid){
        /// find out what goes here
        // for the testing here is an alert
        alert('yeah its gucci')
    }

    return valid
}

// Events
document.querySelector('#fname').addEventListener('blur', function(){
    if(this.value !== ''){
        nameWarning.innerHTML = '';
    }
});
document.getElementById('addresss').addEventListener('blur', function(){
    if(this.value !== ''){
        addWarning.innerHTML = '';
    }
});
document.getElementById('phoneNum').addEventListener('blur', function(){
    if(this.value !== ''){
        numWarning.innerHTML = '';
    }
});


document.donateForm.addEventListener('submit', validateForm);
