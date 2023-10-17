document.addEventListener('DOMContentLoaded', function() {
    flatpickr("#dob", {
        dateFormat: "m/d/Y",
        maxDate: "today"
    });
});

document.getElementById('calculate-btn').addEventListener('click', function() {
    calculateAge();
});

function calculateAge() {
    var dob = new Date(document.getElementById("dob").value);
    var today = new Date();
    var age = today.getFullYear() - dob.getFullYear();
    var m = today.getMonth() - dob.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
        age--;
    }
    document.getElementById("result").innerHTML = "Your age is: " + age;
}
