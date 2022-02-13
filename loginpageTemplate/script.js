const pwShow = document.querySelector(".show"),
createPw = document.querySelector("#createPw"),
confirmPw = document.querySelector("#confirmPw"),
alertIcon = document.querySelector(".errorIcon"),
alertText = document.querySelector(".text"),
submitBtn = document.querySelector("#button");

// js code to show hide password
pwShow.addEventListener("click", ()=>{

    if((createPw.type === "password") && (confirmPw.type === "password" )){
        createPw.type = "text";
        confirmPw.type = "text";
        pwShow.classList.replace("fa-eye-slash", "fa-eye");
    }else {
        createPw.type = "password";
        confirmPw.type = "password";
        pwShow.classList.replace("fa-eye", "fa-eye-slash");
    }

});

// js code to check and confirm input field's password

createPw.addEventListener("input", ()=>{
    let inputValue = createPw.value.trim();  // trim function don not  count more than one space


    if(inputValue.length >= 8){
        confirmPw.removeAttribute("disabled");
        submitBtn.removeAttribute("disabled");
        submitBtn.classList.add("active");
    }else{
        confirmPw.setAttribute("disabled" , true);
        submitBtn.setAttribute("disabled" , true);
        submitBtn.classList.remove("active");
        confirmPw.value = "";
        alertText.innerText ="Enter at least 8 characters";
        alertText.style.color = "#a6a6a6";
        alertIcon.style.display = "none";
    }
});

submitBtn.addEventListener("click", ()=>{
    if(createPw.value === confirmPw.value){
        alertText.innerText = "Passwor matched";
        alertIcon.style.display = "none";
        alertText.style.color = "#4070F4";
    }else {
        alertText.innerText = "Passwor did't matched";
        alertText.style.color = "#D93025";
        alertIcon.style.display = "block";
    }
});