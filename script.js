// script.js

document.addEventListener("DOMContentLoaded", function () {

    // Change input color when typing
    let inputs = document.querySelectorAll("input, textarea");

    inputs.forEach(function(input) {
        input.addEventListener("keyup", function() {
            this.style.backgroundColor = "#f0fff5";
        });
    });

    // Button hover effect
    let buttons = document.querySelectorAll("button, input[type='submit'], input[type='reset']");

    buttons.forEach(function(btn) {
        btn.addEventListener("mouseover", function() {
            this.style.backgroundColor = "green";
            this.style.color = "white";
        });

        btn.addEventListener("mouseout", function() {
            this.style.backgroundColor = "";
            this.style.color = "";
        });
    });

    // Form interaction
    let form = document.querySelector("form");

    if (form) {
        form.addEventListener("submit", function(e) {
            e.preventDefault();

            // Page becomes green when submitted
            document.body.style.backgroundColor = "#dff7ea";

            // Reset form automatically
            form.reset();
        });
    }

    // Table row hover effect (Dashboard page)
    let rows = document.querySelectorAll("table tr");

    rows.forEach(function(row, index) {
        if (index > 0) {
            row.addEventListener("mouseover", function() {
                this.style.backgroundColor = "#dff7ea";
            });

            row.addEventListener("mouseout", function() {
                this.style.backgroundColor = "white";
            });
        }
    });

});