function submit() {
    var nameEl = document.getElementById("name");
    var nameError = document.getElementById('name_error');

    if (nameEl.value === '') {
        nameError.innerHTML = "name is required";
        nameEl.style.borderColor = 'red';
        return '';

    } else {
        nameError.innerHTML = "";
        nameEl.style.borderColor = 'green';
    }

    var emailEl = document.getElementById("email");
    var emailError = document.getElementById('email_error');

    if (emailEl.value === '') {
        emailError.innerHTML = "Email is required";
        emailEl.style.borderColor = 'red';
        return '';

    } else {
        emailError.innerHTML = "";
        emailEl.style.borderColor = 'green';
    }

    var mobileEl = document.getElementById("mobile");
    var mobileError = document.getElementById('mobile_error');

    if (mobileEl.value === '') {
        mobileError.innerHTML = "Phone number is required";
        mobileEl.style.borderColor = 'red';
        return '';
    } else if (mobileEl.value.length !== 10) {
        mobileError.innerHTML = "Phone number must be 10 digits";
        mobileEl.style.borderColor = 'red';
        return '';
    } else {
        mobileError.innerHTML = "";
        mobileEl.style.borderColor = 'green';
    }
    var locationEl = document.getElementById("location");
    var locationError = document.getElementById('location_error');

    if (locationEl.value === '') {
        locationError.innerHTML = "location is required";
        locationEl.style.borderColor = 'red';
        return '';

    } else {
        locationError.innerHTML = "";
        locationEl.style.borderColor = 'green';
    }
    var termsEl = document.getElementById("terms");
    var termsError = document.getElementById('terms_error');

    if (termsEl.value === '') {
        termsError.innerHTML = "";
        termsEl.style.Color = 'red';
        return '';

    } else {
        termsError.innerHTML = "";
        termsEl.style.Color = 'green';
    }
    const data = {
        Name: nameEl.value,
        mobile: mobileEl.value,
        email:emailEl.value,
        location: locationEl.value
    };
    
    let dataarr = JSON.parse(localStorage.getItem('profile')) || [];
    let same = false;

    dataarr.forEach(ele => {
        if (ele.mobile === data.mobile) {
            same = true;
        }
    });

    if (same) {
        alert('You already have an account');
    } else {
        dataarr.push(data);
        localStorage.setItem('profile', JSON.stringify(dataarr));
        alert('You have registered successfully');
        window.location.href = "./index.html"; 
    }
}
