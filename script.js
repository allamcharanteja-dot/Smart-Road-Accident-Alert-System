function analyzeAccident(){

    let location = document.getElementById("location").value;
    let speed = parseInt(document.getElementById("speed").value);
    let weather = document.getElementById("weather").value;
    let impact = document.getElementById("impact").value;

    if(!location || !speed || !weather || !impact){
        alert("Please fill all fields!");
        return;
    }

    document.getElementById("displayLocation").innerText = location;
    document.getElementById("displaySpeed").innerText = speed + " km/h";
    document.getElementById("displayWeather").innerText = weather;
    document.getElementById("displayImpact").innerText = impact;

    let riskScore = 0;

    if(speed > 100) riskScore += 3;
    else if(speed > 60) riskScore += 2;
    else riskScore += 1;

    if(weather === "Rainy" || weather === "Foggy") riskScore += 2;
    if(weather === "Stormy") riskScore += 3;

    if(impact === "High") riskScore += 3;
    else if(impact === "Medium") riskScore += 2;
    else riskScore += 1;

    let alertBox = document.getElementById("alertBox");

    if(riskScore >= 7){
        alertBox.innerText = "🚨 HIGH ALERT: Immediate Emergency Response Required!";
        alertBox.className = "alert high";
    }
    else if(riskScore >= 5){
        alertBox.innerText = "⚠ MEDIUM ALERT: Ambulance & Traffic Control Notified.";
        alertBox.className = "alert medium";
    }
    else{
        alertBox.innerText = "✅ LOW ALERT: Minor Incident Recorded.";
        alertBox.className = "alert low";
    }
}