// Donation Section
// TODO Validation Module
function validateForm(e){

    // private function for validating the form
    e.preventDefault();
    var valid = true;

    //display warning when validation = flase
    if(donateForm.fname.value == ""){
        document.getElementById('nameWarning').innerHTML = '*';
        document.getElementById('fnames').style.borderColor = 'red';
        valid = false;
    }
    if(donateForm.addresss.value == ""){
        document.getElementById('addWarning').innerHTML = '*';
        document.getElementById('addresss').style.borderColor = 'red';
        valid = false;
    }
    if(donateForm.phoneNum.value == ""){
        document.getElementById('numWarning').innerHTML = '*';
        document.getElementById('phoneNum').style.borderColor = 'red';
        valid = false;
    }
    if(donateForm.lname.value == ""){
        document.getElementById('lnameWarning').innerHTML = '*';
        document.getElementById('lname').style.borderColor = 'red';
        valid = false;
    }
    if(donateForm.birth.value == ""){
        document.getElementById('birthWarning').innerHTML = '*';
        document.getElementById('birth').style.borderColor = 'red';
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
    // TODO Email
    if(donateForm.email.value == ""){
        document.getElementById('emailWarning').innerHTML = '*';
        document.getElementById('email').style.borderColor = 'red';
    }
    // TODO Country
    if(donateForm.country.options.selectedIndex === 0){
        valid = false;
        document.getElementById('countryWarning').innerHTML = '*';
        document.getElementById('country').style.borderColor = 'red';
    }

    if(valid){
        document.getElementById('displayer').style.visibility = 'visible';
    }

    return valid
}

function resetForm(){
    document.getElementById('donateForm').reset();
}

window.onload=function(){
    document.getElementById('fnames').addEventListener('blur', function(){
        if(this.value !== ''){
            nameWarning.innerHTML = '';
            fname.style.remove.borderColor;
        }
    });
    document.getElementById('addresss').addEventListener('blur', function(){
        if(this.value !== ''){
            addWarning.innerHTML = '';
            addresss.style.remove.borderColor;
        }
    });
    document.getElementById('phoneNum').addEventListener('blur', function(){
        if(this.value !== ''){
            numWarning.innerHTML = '';
            phoneNum.style.remove.borderColor;
        }
    });
    document.getElementById('lname').addEventListener('blur', function(){
        if(this.value !== ''){
            lnameWarning.innerHTML = '';
            lname.style.remove.borderColor;
        }
    });
    document.getElementById('birth').addEventListener('blur', function(){
        if(this.value !== ''){
            birthWarning.innerHTML = '';
            birth.style.remove.borderColor;
        }
    });
    document.getElementById('city').addEventListener('blur', function(){
        if(this.value !== ''){
            cityWarning.innerHTML = '';
            city.style.remove.borderColor;
        }
    });
    document.querySelector('#province').addEventListener('click', function(){
        if(donateForm.province.options.selectedIndex !== 0){
            provinceWarning.innerHTML = '';
            province.style.remove.borderColor;
        }
    });
    document.querySelector('#country').addEventListener('click', function(){
        if(donateForm.country.options.selectedIndex !== 0){
            countryWarning.innerHTML = '';
            country.style.remove.borderColor;
        }
    });
    document.getElementById('email').addEventListener('blur', function(){
        if(this.value !== ''){
            emailWarning.innerHTML = '';
            email.style.remove.borderColor;
        }
    });

    document.donateForm.addEventListener('reset', resetForm)



    document.donateForm.addEventListener('submit', validateForm);
}




// Paypal
function initPayPalButton() {
    paypal.Buttons({
      style: {
        shape: 'rect',
        color: 'gold',
        layout: 'vertical',
        label: 'pay',
        
      },

      createOrder: function(data, actions) {
        return actions.order.create({
          purchase_units: [{"amount":{"currency_code":"USD","value":1}}]
        });
      },

      onApprove: function(data, actions) {
        return actions.order.capture().then(function(details) {
          alert('Transaction completed by ' + details.payer.name.given_name + '!');
        });
      },

      onError: function(err) {
        console.log(err);
      }
    }).render('#paypal-button-container');
  }
  initPayPalButton();
    

