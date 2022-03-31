// function getInputValue() {
//     var inputVal = document.getElementById("info").value;
//     alert(inputVal)
// }
function getInputValue() {
    var value = document.getElementById("info").value;
    var str ;
    if (value == "Telefon") {
        str = "Adidas telefonos ügyfélszolgálat telefonszáma: 800-982-9337.\nAdidas telefonos ügyfélszolgálati idő: Hétfő-Szombat: 09:00-17:00 PST.";
    } 
    else if  (value == "Csevegés") {
        str ="https://www.adidas.com/us/help";
    }
    else if (value == "Email") {
        str ="Adidas ügyfélszolgálati e-mail cím: customerservice@shopadidas.com.";
    }
    else if (value == "Webpage") {
        str ="Ügyfélszolgálat, tudásközpont és önkiszolgálás az https://www.adidas.com/us/help";
    }
    alert(str)
}
// function getInputValue() {
//    var inputVal = document.getElementById("info").value;
//     alert(inputVal)
// }