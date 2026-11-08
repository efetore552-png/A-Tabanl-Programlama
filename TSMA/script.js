const form = document.getElementById("İletişimFormu");
const errormsg = document.getElementById("error");

form.addEventListener('submit', function(e){
    e.preventDefault();

    const name = document.getElementById('ad').value.trim();
    const email = document.getElementById('posta').value.trim();
    const number = document.getElementById('tc').value.trim();

    if(name.length<3){
        errormsg.innerText = "İsim en az 3 karakter içermelidir";
        return;
    }

    if(!email.includes('@') || !email.includes(".")){
        errormsg.innerText = "Email geçerli değil";
        return;
    }

    if(number.length < 11){
        errormsg.innerText = "T.C. Numarası en az 11 karakter içermelidir";
        return;
    }

    errormsg.innerText = "";
    alert("Form geçerli! Gönderiliyor")
})