/*-------------Form Validation-------------*/

const form = document.getElementById("İletişimFormu");
const errormsg = document.getElementById("error");

if (form) {
    form.addEventListener('submit', function(e){
    e.preventDefault();

    const name = document.getElementById("ad").value.trim();
    const email = document.getElementById("posta").value.trim();
    const number = document.getElementById("tc").value.trim();
    const phone = document.getElementById("telefon").value.trim();

    if(name.length<3){
        errormsg.innerText = "İsim en az 3 karakter içermelidir";
        return;
    }

    if(!email.includes('@') || !email.includes(".")){
        errormsg.innerText = "Email geçerli değil";
        return;
    }

    if(number.length < 11){
        errormsg.innerText = "Geçerli bir T.C. Numarası giriniz (en az 11 hane)";
        return;
    }

    if (phone.length < 10) {
        errormsg.innerText = "Geçerli bir telefon numarası giriniz (en az 10 hane)";
        return;
    }


    errormsg.innerText = "";

    saveName();
    saveGender();
    saveEmail();
    saveNumber();
    savePhone();
    saveInstitution();
    saveReason();
    saveDescription();

    alert("Form geçerli! Gönderiliyor")
    });
}


/*-------------Local Storage-------------*/
function saveName() {
  const name = document.getElementById("ad").value.trim();
  const surname = document.getElementById("soyad").value.trim();
  
  localStorage.setItem("Username", `${name} ${surname}`);
}

function saveGender() {
  const gender = document.getElementById("cinsiyet").value;
  localStorage.setItem("Cinsiyet", gender);
}

function saveEmail() {
  const email = document.getElementById('posta').value;
  localStorage.setItem("Email", email);
}

function saveNumber() {
  const number = document.getElementById('tc').value;
  localStorage.setItem("TC Number", number);
}

function savePhone() {
  const phone = document.getElementById("telefon").value.trim();
  localStorage.setItem("Telefon", phone);
}

function saveInstitution() {
  const institution = document.getElementById("kurum").value;
  localStorage.setItem("Kurum", institution);
}

function saveReason() {
  const reason = document.getElementById("sebep").value;
  localStorage.setItem("Şikayet Sebebi", reason);
}

function saveDescription() {
  const description = document.getElementById("aciklama").value.trim();
  localStorage.setItem("Açıklama", description);
}

/*-------------Dark/Light Mode-------------*/

const temaBtn = document.getElementById("temaBtn");

if (localStorage.getItem("tema") === "dark") {
  document.body.classList.add("dark-mode");
  if (temaBtn) temaBtn.innerText = "☀️ Aydınlık Mod";
}

if (temaBtn) {
  temaBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("tema", "dark");
      temaBtn.innerText = "☀️ Aydınlık Mod";
    } else {
      localStorage.setItem("tema", "light");
      temaBtn.innerText = "🌙 Karanlık Mod";
    }
  });
}