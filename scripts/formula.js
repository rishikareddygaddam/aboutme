const regex=/^[a-zA-Z]+$/;
function Concatenation() {
    const FirstName =document.getElementById("firstname").value;
    const LastName =document.getElementById("lastname").value;
    if(validation(FirstName) === null || validation(LastName) === null) {
        alert("invalid input");
    } else {
        const FullName = FirstName.concat(" ").concat(LastName);
        document.getElementById("demo").innerHTML="You have submitted successfully! Your Full name is ".concat(FullName);
        localStorage.setItem('Full Name is:' ,FullName)
        localStorage.setItem('First Name: ',FirstName)
        localStorage.setItem('Last Name: ',LastName)
    }
}

function validation(name) {
    if(regex.test(name)) {
        return name;
    } else {
        return null;
    }
}

function loadDoc() {
    var xhttp;
    if (window.XMLHttpRequest) {
        
        xhttp = new XMLHttpRequest();
        } else {
        
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        document.getElementById("aj").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "./rishika.txt", true);
    xhttp.send();
    }

    $(document).ready(function(){
        $("#flip").click(function(){
          $("#panel").slideDown("slow");
        });
      });