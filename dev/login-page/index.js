const forgotPasswordText = document.getElementById("forgotPassword");
const loginAccount = document.getElementById("signInAccount");
const signInText = document.getElementById("signInAccount");
const forgotPasswordField = document.getElementById("forgotEmail");
const mainForm = document.getElementById("voyager-main-form");
const signInBtn = document.getElementById("signinBtn");
const resetBtn = document.getElementById("resetBtn");
const formHead = document.getElementById("formTitle");
const signInCredentials = document.getElementById("signCred")
const forgotCredentials = document.getElementById("forgotCred")


forgotPasswordText.onclick = function() {
    resetPassWord()
};
loginAccount.onclick = function() {
    signIn()
};

function resetPassWord(){
    forgotCredentials.style.display="none"
    signInCredentials.style.display="block"
    forgotPasswordText.style.display="none"
    forgotPasswordField.style.display="block";
    resetBtn.style.display="block"
    mainForm.style.display="none";
    signInBtn.style.display="none"
    formHead.innerHTML = "Reset Password"
}
function signIn(){
    forgotCredentials.style.display="block"
    signInCredentials.style.display="none"
    forgotPasswordText.style.display="block"
    forgotPasswordField.style.display="none";
    resetBtn.style.display="none"
    mainForm.style.display="flex";
    signInBtn.style.display="block"
    formHead.innerHTML = "LOG IN"
}