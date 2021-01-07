function validate() {
  var name = document.getElementById("firstName").value.trim();
  var lastname = document.getElementById("lastName").value.trim();
  var mail = document.getElementById("mail").value.trim();
  var comment = document.getElementById("comment").value.trim();

  var nameok = false;
  var lastnameok = false;
  var mailok = false;
  var commentok = false;

  if (name.length > 0 && isNaN(name)) {
    nameok = true;
    document.getElementById("firstName").style.backgroundColor = "green";
    document.getElementById("firstName").style.color = "black";
  } else {
    document.getElementById("firstName").style.backgroundColor = "red";
    alert("Please type your correct first name!!");
  }
  if (lastname.length > 0 && isNaN(lastname)) {
    lastnameok = true;
    document.getElementById("lastName").style.backgroundColor = "green";
    document.getElementById("lastName").style.color = "black";
  } else {
    document.getElementById("lastName").style.backgroundColor = "red";
    alert("Please type your correct last name!!");
  }
  if (mail.indexOf("@") > -1) {
    mailok = true;
    document.getElementById("mail").style.backgroundColor = "green";
    document.getElementById("mail").style.color = "black";
  } else {
    document.getElementById("mail").style.backgroundColor = "red";
    alert("Please type your correct mail address !!");
  }

  if (comment.split(" ").length > 10) {
    commentok = true;
    document.getElementById("comment").style.backgroundColor = "green";
    document.getElementById("comment").style.color = "black";
  } else {
    document.getElementById("comment").style.backgroundColor = "red";
    alert("Please type minimum 10 word to send message!!");
  }

  return nameok && lastnameok && mailok && commentok;
}
