$(document).ready(function() {
    $("#loginForm").submit(function(e) {
        e.preventDefault();

        var username = $("#username").val();
        var password = $("#password").val();

        // Simple hardcoded login check
        if(username === "sec.koiychi@mawd" && password === "password@secretary.mawd") {
            $("#message").text("Login successful!").css("color", "green");
            // Redirect or perform further action
            window.location.href = "HTML/archive.html";
        } else {
            $("#message").text("Invalid credentials!").css("color", "red");
        }
    });
});