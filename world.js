window.onload = function () {
    let lookupBtn = document.getElementById("lookup");
    let lookupCitiesBtn = document.getElementById("lookup-cities");
    let resultDiv = document.getElementById("result");

    lookupBtn.addEventListener("click", function () {
        let country = document.getElementById("country").value;
        fetch(`world.php?country=${country}`)
            .then(response => response.text())
            .then(data => {
                resultDiv.innerHTML = data;
            });
    });

    lookupCitiesBtn.addEventListener("click", function () {
        let country = document.getElementById("country").value;
        fetch(`world.php?country=${country}&lookup=cities`)
            .then(response => response.text())
            .then(data => {
                resultDiv.innerHTML = data;
            });
    });
};