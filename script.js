window.addEventListener("DOMContentLoaded", function () {
  
    // Get the form elements
    var form = document.getElementById("form");

  //add event listener for form submission
  form.addEventListener("submit", function (e) {
    e.preventDefault();


    calculateDoses();
  });
    var msg = [];
    function calculateDoses () {
        var flag = 0;

        document.getElementById("newTestosteroneDose").textContent="";
        document.getElementById("lastTestosteroneDoseLabel").textContent="";

        var appendcontent = document.getElementById("appendcontent");
        appendcontent.innerHTML = "";


        var lastTestosteroneDose = +document.getElementById("lastTestosteroneDose").value;

        document.getElementById("lastTestosteroneDoseLabel").textContent=lastTestosteroneDose;

        //id ="updatePSA" value
        var updatePSA = document.getElementById("updatePSA").value;

        //id ="symptompRelief" value
        var symptompRelief = document.getElementById("symptomRelief").value;



        //get checkbox values
        var sleepIssues = document.getElementById("sleepIssues").checked;
        var nightSweats = document.getElementById("nightSweats").checked;
        var moodiness = document.getElementById("moodiness").checked;
        var lowLibido = document.getElementById("lowLibido").checked;
        var brainFrog = document.getElementById("brainFog").checked;
        var jointPain = document.getElementById("jointPain").checked;
        var depressionAnxiety = document.getElementById("depressionAnxiety").checked;
        var farigue = document.getElementById("fatigue").checked;
        var other = document.getElementById("other").checked; 

        if(updatePSA === "No")
        {
            flag = 1;
            document.getElementById("newTestosteroneDose").textContent= lastTestosteroneDose + "mg Pellets";

            appendcontent.innerHTML = "<p> AUA recommends annual PSA test over 55 years of age.</p>";

            // return;
        }

        if(flag!=1 && symptompRelief==="Yes" && (sleepIssues || nightSweats || moodiness || lowLibido || brainFrog || jointPain || depressionAnxiety || farigue || other))
        {
            flag = 1;
            document.getElementById("newTestosteroneDose").textContent= lastTestosteroneDose + "mg Pellets";

            appendcontent.innerHTML = "";
            // return;
        }

        if(flag !=1 && symptompRelief === "No")
        {
            flag = 1;
            var newTestosteroneDose = lastTestosteroneDose + 200;
            document.getElementById("newTestosteroneDose").textContent= newTestosteroneDose + "mg Pellets";

            appendcontent.innerHTML = "<p> Dosage is increased one level due to lack of symptom relief.</p>";

            // return;
        }

        if(flag!=1 && symptompRelief === "Yes")
        {
            flag = 1;
            var newTestosteroneDose = lastTestosteroneDose - 200;

            if(newTestosteroneDose < 0)
            {
                newTestosteroneDose = 0;
            }
            document.getElementById("newTestosteroneDose").textContent= newTestosteroneDose + "mg Pellets";

            appendcontent.innerHTML = "<p> Dosage is decreased one level due to symptom relief</p>";
        }




    }



    
    
});