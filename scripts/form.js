const pass1 = document.querySelector("#password");
const pass2 = document.querySelector("#confirm_password");
const message = document.querySelector("#notSame");

pass2.addEventListener("focusout", checkSame);

function checkSame() {
    if (pass1.value !== pass2.value) {
        message.textContent = "Please Re-enter password. They must be the same!";
        message.style.visibility = "show";
		pass2.style.backgroundColor = "#fff0f3";
		pass2.value = "";
		pass2.focus();
	} else {
		message.style.display = "none";
		pass2.style.backgroundColor = "#fff";
		pass2.style.color = "#000";
    }
}