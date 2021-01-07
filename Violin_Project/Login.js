function validate() {
    var mail = document.getElementById('mail').value.trim();
    var pass1 = document.getElementById('pass1').value.trim();

    var mailok = false;
    var passok = false;

    if (pass1.length > 0 ){
        passok = true;
        document.getElementById('pass1').style.backgroundColor="green";
    } else {
        document.getElementById('pass1').style.backgroundColor="red";
        alert("Please check your password!!");
    }
    if (mail.indexOf("@") > -1) {
        mailok = true;
        document.getElementById('mail').style.backgroundColor="green";
    } else {
        document.getElementById('mail').style.backgroundColor="red";
        alert("Please type your correct mail address !!");
    }
    return mailok &&  passok ;
}