/**
 * Created by user on 24.02.2017.
 */

$(document).ready(function () {

    function createErrorElement(elem, msg) {
        $(elem).after(msg);
        $(elem).addClass("errorInp");
        $("input + span").addClass("error");
    }

    function removeErrorElement() {
        $(".error").remove();
        $(".errorInp").removeClass("errorInp");
    }

    $("#formReg").submit(function () {
        var valid = true;

        removeErrorElement();

        if ($("#email").val() == "") {
            createErrorElement("#email", "<span>* Enter your email</span>");
            valid = false;
        } else {
            if (!$("#email").val().match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)) {
                createErrorElement("#email", "<span>* Email is wrong</span>");
                valid = false;
            } else {
                $("#email").addClass("sucsess");
            }
        }

        if ($("#password1").val() == "") {
            createErrorElement("#password1", "<span>* Enter your password</span>");
            valid = false;
        } else {
            if (!$("#password1").val().match(/((?=.*\d)(?=.*[a-z])(?=.*[A-Z]){8,15})/)) {
                createErrorElement("#password1", "<span>* The password must contain  8 - 15 characters with at least one digit, one uppercase and one lowercase letter</span>");
                valid = false;
            } else {
                $("#password1").addClass("sucsess");
            }
        }

        if ($("#password2").val() == "") {
            createErrorElement("#password2", "<span>* Enter your password again</span>");
            valid = false;
        } else {
            if ($("#password1").val() != $("#password2").val()) {
                createErrorElement("#password2", "<span>* Passwords do not match</span>");
                valid = false;
            } else {
                if (($("#password2").val() != "") && ($("#password1").val() == $("#password2").val())) {
                    $("#password2").addClass("sucsess");
                }
            }
        }

        if (!$("#checkbox").prop("checked")) {
            createErrorElement("#checkbox", "<span>* Mark the checkbox</span>");
            $("#checkbox + span").addClass("errCbx");
            valid = false;
        }


            return valid;
        })
});
