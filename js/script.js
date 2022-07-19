// Hidden age and birhday error warning
var ageError = document.getElementById("ageError");
var birthdayError = document.getElementById("birthdayError");
ageError.style.visibility = "hidden";
birthdayError.style.visibility = "hidden";


function controlBirthdayAndAge() {
    var ageError = document.getElementById("ageError");
    var birthdayError = document.getElementById("birthdayError");
    var userinput = document.getElementById("birthday").value;
    var age = document.getElementById("age").value;
    var birthday = new Date(userinput);
    //calculate month difference from current date in time  
    var month_diff = Date.now() - birthday.getTime();

    //convert the calculated difference in date format  
    var age_dt = new Date(month_diff);

    //extract year from date      
    var year = age_dt.getUTCFullYear();
    //now calculate the age of the user  
    var computeage = Math.abs(year - 1970);

    if (computeage != age) {
        ageError.style.visibility = "visible";
        birthdayError.style.visibility = "visible";
        return false;
    } else {
        ageError.style.visibility = "hidden";
        birthdayError.style.visibility = "hidden";
    }

    return true;
}
// Other cryptocurrency

var radioCryptocurrency = document.getElementById("radioCryptocurrency");
var textAreaCryptocurrency = document.getElementById("textAreaCryptocurrency");
textAreaCryptocurrency.style.display = 'none';
textAreaCryptocurrency.style.visibility = 'hidden';

// Other country input

var checkboxCountryOther = document.getElementById("checkboxCountryOther");
var textCountryOther = document.getElementById("textCountryOther");
textCountryOther.style.visibility = "hidden";

checkboxCountryOther.addEventListener('change', () => {
    if (checkboxCountryOther.checked) {
        textCountryOther.style.visibility = 'visible';
        textCountryOther.value = "";
    } else {
        textCountryOther.style.visibility = 'hidden';
    }
});

var magic = document.getElementsByClassName("magic");
magic[0].style.display = "none";
magic[0].style.visibility = 'hidden';
magic[1].style.display = "none";
magic[1].style.visibility = 'hidden';
magic[2].style.display = "none";
magic[2].style.visibility = 'hidden';
// Pay by payment cart

function showOptions() {
    var payCard = document.getElementById('paymentCard');
    var magic = document.getElementsByClassName("magic");
    if (payCard.checked) {
        magic[0].style.display = "block";
        magic[0].style.visibility = 'visible';
        magic[1].style.display = "block";
        magic[1].style.visibility = 'visible';
        magic[2].style.display = "block";
        magic[2].style.visibility = 'visible';
    } else {
        magic[0].style.display = "none";
        magic[0].style.visibility = 'hidden';
        magic[1].style.display = "none";
        magic[1].style.visibility = 'hidden';
        magic[2].style.display = "none";
        magic[2].style.visibility = 'hidden';

    }

    var radioCryptocurrency = document.getElementById("radioCryptocurrency");
    var textAreaCryptocurrency = document.getElementById("textAreaCryptocurrency");

    if (radioCryptocurrency.checked) {
        textAreaCryptocurrency.style.visibility = 'visible';
        textAreaCryptocurrency.style.display = 'block';
    } else {
        textAreaCryptocurrency.style.display = 'none';
        textAreaCryptocurrency.style.visibility = 'hidden';
    }

}

var subjectObject = {
    "Europe": {
        "Italy": ["San Marino", "Venice", "Naples", "Bari"],
        "Greece": ["Athens", "Thessaloniki"],
        "Croatia": ["Zadar", "Pula", "Split", "Makarska"]
    },
    "North America": {
        "United States": ["San Francisco", "New York", "Miami"],
        "Dominican republic": ["Santo Domingo", "San Juan", "Ponce"]
    }
};
window.onload = function() {
    var subjectSel = document.getElementById("continents");
    var topicSel = document.getElementById("state");
    var chapterSel = document.getElementById("city");
    for (var x in subjectObject) {
        subjectSel.options[subjectSel.options.length] = new Option(x, x);
    }
    subjectSel.onchange = function() {
        //empty Chapters- and Topics- dropdowns
        chapterSel.length = 1;
        topicSel.length = 1;
        //display correct values
        for (var y in subjectObject[this.value]) {
            topicSel.options[topicSel.options.length] = new Option(y, y);
        }
    };
    topicSel.onchange = function() {
        //empty Chapters dropdown
        chapterSel.length = 1;
        //display correct values
        var z = subjectObject[subjectSel.value][this.value];
        for (var i = 0; i < z.length; i++) {
            chapterSel.options[chapterSel.options.length] = new Option(z[i], z[i]);
        }
    };
};

var emailError = document.getElementById("emailError");
emailError.style.visibility = "hidden";

function controlEmail() {
    var emailError = document.getElementById("emailError");
    var email = document.getElementById("email");
    if (email.value.match(email.pattern)) {
        emailError.style.visibility = "hidden";
        return true;
    } else {
        emailError.style.visibility = "visible";
    }
    return false;
}

function requiredInput() {
    var requiredSurname = document.getElementById("surname").value;
    var requiredAge = document.getElementById("age").value;
    var requiredBirthday = document.getElementById("birthday").value;
    var requiredEmail = document.getElementById("email").value;
    var requiredTelephoneNumber = document.getElementById("telephoneNumber").value;

    if (requiredSurname == "") {
        document.getElementById("requiredSurname").style.visibility = "visible";
        return false;
    } else {
        document.getElementById("requiredSurname").style.visibility = "hidden";
    }

    if (requiredAge == "") {
        document.getElementById("requiredAge").style.visibility = "visible";
        return false;
    } else {
        document.getElementById("requiredAge").style.visibility = "hidden";
    }

    if (requiredBirthday == "") {
        document.getElementById("requiredBirthday").style.value = "visible";
        return false;
    } else {
        document.getElementById("requiredBirthday").style.visibility = "hidden";
    }

    if (requiredEmail == "") {
        document.getElementById("requiredEmail").style.visibility = "visible";
        return false;
    } else {
        document.getElementById("requiredEmail").style.visibility = "hidden";
    }

    if (requiredTelephoneNumber == "") {
        document.getElementById("requiredTelephoneNumber").style.visibility = "visible";
        return false;
    } else {
        document.getElementById("requiredTelephoneNumber").style.visibility = "hidden";
    }
    return true;
}

function validateForm() {

    return controlBirthdayAndAge() && controlEmail() && requiredInput();
}