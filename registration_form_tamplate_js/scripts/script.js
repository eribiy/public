/**
 * Created by user on 15.02.2017.
 */
var form = document.getElementById("formReg");

function removeErrorElement() {
    var err = document.querySelectorAll(".error");
    for (var i = 0; i < err.length; i++) {
        err[i].remove();
    }
}
function removeClass() {
    var cls = document.querySelectorAll(".errorInp");
    for (var j = 0; j < cls.length; j++) {
        cls[j].className = "input";
    }
}

function createErrorElement(elem, msg) {
    var span = document.createElement("span");
    span.className = "error";
    span.innerHTML = msg;
    elem.parentNode.appendChild(span);
    elem.className = "input errorInp";
}

form.onsubmit = function validateForm() {
    var valid = true;

    var email = document.getElementById("email");
    var password1 = document.getElementById("password1");
    var password2 = document.getElementById("password2");
    var checkbox = document.getElementById("checkbox");

    removeErrorElement();
    removeClass();

    if (email.value == "") {
        createErrorElement(email, "* Enter your email");
        valid = false;
    } else {
        if (!email.value.match(/(\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6})/))/*(/^(\w[-\.\w]*@[a-z]+\.+[a-z]+)$/))*/ {
            createErrorElement(email, "* Email is wrong");
            valid = false;
        } else {
            email.className = "input sucsess";
        }
    }

    if (password1.value == "") {
        createErrorElement(password1, "* Enter your password");
        valid = false;
    } else {
        if (!password1.value.match(/((?=.*\d)(?=.*[a-z])(?=.*[A-Z]){8,15})/)) {
            createErrorElement(password1, "* The password must contain  8 - 15 characters with at least one digit, one uppercase and one lowercase letter");
            valid = false;
        } else {
            password1.className = "input sucsess";
        }
    }

    if (password2.value == "") {
        createErrorElement(password2, "* Enter your password again");
        valid = false;
    } else {
        if (password1.value != password2.value) {
            createErrorElement(password2, "* Passwords do not match");
            valid = false;
        } else {
            if ((password1.value !== "") && (password1.value == password2.value)) {
                password2.className = "input sucsess";
            }
        }
    }

    if (!checkbox.checked) {
        var span = document.createElement("span");
        span.className = "error errCbx";
        span.innerHTML = "* Mark the checkbox";
        checkbox.parentNode.appendChild(span);
        valid = false;
    }

    return valid;

};
