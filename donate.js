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
    if(donateForm.lname.value == ""){
        document.getElementById('lnameWarning').innerHTML = '* Enter a valid Last Name';
        valid = false;
    }
    if(donateForm.birth.value == ""){
        document.getElementById('birthWarning').innerHTML = '* Enter a valid Birthday';
        valid = false;
    }
    if(donateForm.city.value == ""){
        document.getElementById('city').style.borderColor = 'red';
        valid = false;
    }
    if(donateForm.province.options.selectedIndex === 0){
        valid = false;
        document.getElementById('provinceWarning').innerHTML = '*'
        document.getElementById('province').style.borderColor = 'red';
    }
    

    if(valid){
        /// find out what goes here
        // for the testing here is an alert
        alert('yeah its gucci')
    }

    return valid
}

window.onload=function(){
    document.getElementById('fnames').addEventListener('blur', function(){
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
    document.getElementById('lname').addEventListener('blur', function(){
        if(this.value !== ''){
            lnameWarning.innerHTML = '';
        }
    });
    document.getElementById('birth').addEventListener('blur', function(){
        if(this.value !== ''){
            birthWarning.innerHTML = '';
        }
    });
    document.getElementById('city').addEventListener('blur', function(){
        if(this.value !== ''){
            cityWarning.innerHTML = '';
        }
    });
    document.querySelector('#province').addEventListener('click', function(){
        if(donateForm.province.options.selectedIndex !== 0){
            provinceWarning.innerHTML = '';
        }
    });



    document.donateForm.addEventListener('submit', validateForm);
}
    // Events
    

