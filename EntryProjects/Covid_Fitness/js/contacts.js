function validate() {
	// baştaki ve sonraki boşlukları dahil etmemek için trim hazır metodunu kullandım
	var name = document.getElementById("name").value.trim();
	var mail = document.getElementById("email").value.trim();
	var comment = document.getElementById("comment").value.trim();

	var nameok = false;
	var mailok = false;
	var commentok = false;

	//İsim karakter uzunluğu 3'den büyük olacak ve sayılar olmayacak
	if (name.length > 3 && isNaN(name)) {
		nameok = true;
		document.getElementById("name").style.backgroundColor = "green";
		document.getElementById("name").style.color = "black";
	} else {
		document.getElementById("name").style.backgroundColor = "red";
		alert("Lütfen adınızı tam giriniz !!!");
	}

	//Eğer mailde @sembolü varsa çalış yoksa yanlış mesajı ver
	if (mail.indexOf("@") > -1) {
		mailok = true;
		document.getElementById("email").style.backgroundColor = "green";
		document.getElementById("email").style.color = "black";
	} else {
		document.getElementById("email").style.backgroundColor = "red";
		alert("Mailiniz içinde @ olan geçerli bir mail adresi olmalı !!!");
	}
	//Yorum en az 15 karakter olmalı...
	if (comment.length > 15) {
		commentok = true;
		document.getElementById("comment").style.backgroundColor = "green";
		document.getElementById("comment").style.color = "black";
	} else {
		document.getElementById("comment").style.backgroundColor = "red";
		alert("Yorumunuz 15 karakterden daha kısa !!!");
	}
	if (commentok && mailok && commentok) {
		alert("Mesajınız başarıyla alındı !!!");
	}
	return nameok && mailok && commentok;
}
