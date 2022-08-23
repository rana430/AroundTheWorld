var emailarray = [];
var passwordarray = [];
emailarray[0] = "Hala@yahoo.com";
emailarray[1] = "Hana@yahoo.com";
emailarray[2] = "Haya@yahoo.com";
passwordarray[0] = "@234567";
passwordarray[1] = "1@34567";
passwordarray[1] = "12@4567";

function validateForm() {
  var valid = true;
  if (document.inputForm.fn.value == "") {
    alert("First name is empty");
    document.inputForm.fn.focus();
    valid = false;
  } else if (document.inputForm.em.value == "") {
    alert("Email is empty");
    document.inputForm.em.focus();
    valid = false;
  } else if (document.inputForm.ln.value == "") {
    alert("Last name is empty");
    document.inputForm.ln.focus();
    valid = false;
  } else if (document.inputForm.pass.value == "") {
    alert("Password is empty");
    document.inputForm.pass.focus();
    valid = false;
  } else if (document.inputForm.genre.value == "") {
    alert("Select the gender");
    document.inputForm.genre.focus();
    valid = false;
  } else {
    if (
      document.inputForm.em.value.indexOf("@") == -1 ||
      document.inputForm.em.value.indexOf(".") == -1
    ) {
      alert("Please Enter valid email, e.g:info@yahoo.com");
      document.inputForm.em.focus();
      valid = false;
    } else if (
      document.inputForm.pass.value.indexOf("!") == -1 &&
      document.inputForm.pass.value.indexOf("@") == -1 &&
      document.inputForm.pass.value.indexOf("#") == -1 &&
      document.inputForm.pass.value.indexOf("$") == -1 &&
      document.inputForm.pass.value.indexOf("%") == -1 &&
      document.inputForm.pass.value.indexOf("^") == -1 &&
      document.inputForm.pass.value.indexOf("&") == -1 &&
      document.inputForm.pass.value.indexOf("*") == -1 &&
      document.inputForm.pass.value.indexOf("_") == -1 &&
      document.inputForm.pass.value.indexOf("-") == -1 &&
      document.inputForm.pass.value.indexOf("=") == -1 &&
      document.inputForm.pass.value.indexOf("+") == -1 &&
      document.inputForm.pass.value.indexOf("÷") == -1 &&
      document.inputForm.pass.value.indexOf("×") == -1 &&
      document.inputForm.pass.value.indexOf("<") == -1 &&
      document.inputForm.pass.value.indexOf(">") == -1 &&
      document.inputForm.pass.value.indexOf("/") == -1 &&
      document.inputForm.pass.value.indexOf("|") == -1
    ) {
      alert(
        "Password must include at least one special character e.g:@,&,*... (not any kind of brackets or punctuation) "
      );
      document.inputForm.pass.focus();
      valid = false;
    } else {
      emailarray[3] = document.inputForm.em.value;
      passwordarray[3] = document.inputForm.pass.value;

      window.open("home.html");

      alert("Registered");
    }
  }

  return valid;
}

function login() {
  if (
    (document.loginForm.email.value == emailarray[0] &&
      document.loginForm.password.value == passwordarray[0]) ||
    (document.loginForm.email.value == emailarray[1] &&
      document.loginForm.password.value == passwordarray[1]) ||
    (document.loginForm.email.value == emailarray[2] &&
      document.loginForm.password.value == passwordarray[2]) ||
    (document.loginForm.email.value == emailarray[3] &&
      document.loginForm.password.value == passwordarray[3])
  ) {
    window.open("home.html");
  } else {
    alert("Email or password is wrong");
  }
}
