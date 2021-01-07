function validate() {
        var name = document.getElementById('firstName').value.trim();
        var lastname = document.getElementById('lastName').value.trim();
        var mail = document.getElementById('mail').value.trim();
        var age = document.getElementById('age').value.trim();
        var pass1 = document.getElementById('pass1').value.trim();
        var pass2 = document.getElementById('pass2').value.trim();
        var phone = document.getElementById('phone').value.trim();

        var nameok = false;
        var lastnameok = false;
        var mailok = false;
        var ageok = false;
        var passok = false;
        var phoneok= false;


        if (name.length > 0 && isNaN(name)) {
                nameok = true;
                document.getElementById('firstName').style.backgroundColor="green";
        } else {
                document.getElementById('firstName').style.backgroundColor="red";
                alert("Please type your correct first name!!");
        }
        if (lastname.length > 0 && isNaN(lastname)) {
                lastnameok = true;
                document.getElementById('lastName').style.backgroundColor="green";
        } else {
                document.getElementById('lastName').style.backgroundColor="red";
                alert("Please type your correct last name!!");
        }
        if (pass1.length > 0 && pass2.length > 0 && pass1==pass2){
                passok = true;
                document.getElementById('pass1').style.backgroundColor="green";
            document.getElementById('pass2').style.backgroundColor="green";
        } else {
            document.getElementById('pass1').style.backgroundColor="red";
            document.getElementById('pass2').style.backgroundColor="red";
                alert("Please check your password!!");
        }
        if (mail.indexOf("@") > -1) {
                mailok = true;
                document.getElementById('mail').style.backgroundColor="green";
        } else {
                document.getElementById('mail').style.backgroundColor="red";
                alert("Please type your correct mail address !!");
        }
        if (!isNaN(age)) {
                ageok = true;
                document.getElementById('age').style.backgroundColor="green";
        } else {
                document.getElementById('age').style.backgroundColor="red";
                alert("Please put the age here and please use only numbers !!");
        }
    if (!isNaN(phone)) {
            phoneok = true;
            document.getElementById('phone').style.backgroundColor="green";
    } else {
            document.getElementById('phone').style.backgroundColor="red";
            alert("Please put the phone here and please use only numbers !!");
    }
        return nameok && lastnameok && mailok && ageok && passok && phoneok;
}