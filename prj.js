
function calculateBill() {
    const unitsInput = document.getElementById("units");
    let units = parseFloat(unitsInput.value);

    unitsInput.classList.remove("invalid");

    if (isNaN(units) || units <= 0) {
        document.getElementById("resultBox").style.display = "block";
        document.getElementById("totalBill").innerHTML = "⚠ Invalid Input!";
        document.getElementById("breakdown").innerHTML = "Please enter a positive number of units.";
        document.getElementById("savingMessage").innerHTML = "";
        document.getElementById("rewardMessage").innerHTML = "";
        unitsInput.classList.add("invalid");
        document.getElementById("resetBtn").style.display = "none";
        return;
    }

    let energyCost = 0;
    let fixedCharge = 0;

    if (units <= 100) {
        energyCost = units * 22.44;
        fixedCharge = 200;
    } else if (units <= 200) {
        energyCost = (100 * 22.44) + ((units - 100) * 28.91);
        fixedCharge = 250;
    } else if (units <= 300) {
        energyCost = (100 * 22.44) + (100 * 28.91) + ((units - 200) * 33.10);
        fixedCharge = 300;
    } else if (units <= 400) {
        energyCost = (100 * 22.44) + (100 * 28.91) + (100 * 33.10) + ((units - 300) * 37.99);
        fixedCharge = 400;
    } else if (units <= 700) {
        energyCost = (100 * 22.44) + (100 * 28.91) + (100 * 33.10) + (100 * 37.99) + ((units - 400) * 42.76);
        fixedCharge = 500;
    } else {
        energyCost = (100 * 22.44) + (100 * 28.91) + (100 * 33.10) + (100 * 37.99) + (300 * 42.76) + ((units - 700) * 45.00);
        fixedCharge = 675;
    }

    let tax = energyCost * 0.10;
    let totalBill = energyCost + tax + fixedCharge;

    document.getElementById("resultBox").style.display = "block";
    document.getElementById("totalBill").innerHTML = "Total Bill: Rs " + totalBill.toFixed(2);
    document.getElementById("breakdown").innerHTML =
        "Energy Cost: Rs " + energyCost.toFixed(2) +
        "<br>Tax (10%): Rs " + tax.toFixed(2) +
        "<br>Fixed Charges: Rs " + fixedCharge;

    let savingMessage = "";
    if (units <= 150) {
        savingMessage = "<span class='green'>Great! Your usage is energy efficient 👍</span>";
    } else if (units <= 300) {
        savingMessage = "Moderate usage. Try reducing AC time or switching to LED bulbs.";
    } else {
        savingMessage = "<span class='red'>High consumption! Consider solar panels or energy-saving appliances.</span>";
    }

    document.getElementById("savingMessage").innerHTML = savingMessage;

    let rewardMessage = units < 120 ? "🌱 You qualify for Green Energy Badge!" : "";
    document.getElementById("rewardMessage").innerHTML = rewardMessage;

    // Show reset button
    document.getElementById("resetBtn").style.display = "block";
}

function resetCalculator() {
    document.getElementById("units").value = "";
    document.getElementById("units").classList.remove("invalid");
    document.getElementById("resultBox").style.display = "none";
    document.getElementById("resetBtn").style.display = "none";
}
