function compute(){
    p = document.getElementById("principal").value;
    r = document.getElementById("interest").value;
    t = document.getElementById("year").value;
    var interest = (p*r*t)/100;
    
    document.getElementById("deposit").innerHTML = p;
    document.getElementById("rate").innerHTML = r.toString() + '%';
    document.getElementById("amount").innerHTML = parseFloat(p) + parseFloat(interest);
    document.getElementById("end-year").innerHTML = parseInt(2021) + parseInt(t);
}

function sliderChange(){
    var value = document.getElementById('interest').value;
    document.getElementById('interest-display').innerHTML = value.toString() + '%';
}