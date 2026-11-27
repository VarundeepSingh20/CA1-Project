// Find a suggested collection centre
function findCentre() {
    var city = document.getElementById("city").value.toLowerCase();

    if (city == "jalandhar") {
        alert("Suggested centre: Community Centre near PAP Chowk, Jalandhar.");
    }
    else if (city == "hoshiarpur") {
        alert("Suggested centres: Hoshiarpur Bypass and Bus Stand.");
    }
    else if (city == "amritsar") {
        alert("Suggested centre: Collection point on the Jalandhar-side of Amritsar.");
    }
    else if (city == "phagwara") {
        alert("Suggested centre: Community collection point in Phagwara.");
    }
    else {
        alert("No sample centre listed for this city. Please contact the organisers by email.");
    }
}


// Donation pledge confirmation
function pledge() {
    var name = document.getElementById("donorName").value;

    var jackets = Number(document.getElementById("jackets").value);
    var sweaters = Number(document.getElementById("sweaters").value);
    var blankets = Number(document.getElementById("blankets").value);
    var kids = Number(document.getElementById("kidsWear").value);

    var total = jackets + sweaters + blankets + kids;

    if (total <= 0) {
        alert("Please enter at least one item to donate.");
    }
    else {
        alert("Thank you, " + name + "! Your donation pledge has been recorded ");
    }
}


// Pickup request
function pickup() {
    var name = document.getElementById("pickupName").value;
    var count = Number(document.getElementById("garmentCount").value);

    if (count < 10) {
        alert("Pickup is available for 10 or more garments.");
    }
    else {
        alert("Thank you, " + name + "! Your pickup request is noted for this demo.");
    }
}
