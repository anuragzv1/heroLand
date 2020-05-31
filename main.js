





var input_field = document.getElementById("main_input");
input_field.addEventListener('keyup', function (e) {
    
    if(e.keyCode==37 || e.keyCode==38 || e.keyCode==39 || e.keyCode==40){
    }
    else{
        console.log("Inputted name is :" + input_field.value);
        console.log("input field length==" + input_field.value.length);
    
        if (input_field.value.length == 0) {
            document.getElementById("search_results").style.display = "none";
            document.getElementById("search_results").style.boxShadow = "0";
            var old_results = document.getElementsByClassName("result_div");
            for (let i = 0; i < old_results.length; i++) {
                old_results[i].parentNode.removeChild(old_results[i]);
            }
        }
        
    
        else {
            document.getElementById("search_results").style.display = "block";
            document.getElementById("search_results").style.boxShadow = " 3px 7px 11px 3px #888888";
    
            var old_results = document.getElementsByClassName("result_div");
            for (let i = 0; i < old_results.length; i++) {
                old_results[i].parentNode.removeChild(old_results[i]);
            }
            setTimeout(function(){} , 500);
    
            var xmlHttp = new XMLHttpRequest();
    
            xmlHttp.onreadystatechange = function () {
                if (this.status == 200 && this.readyState == 4) {
                    var result = JSON.parse(this.response);
                    if (result.response == "success") {
                        //result.results.reverse();
                        for (var i = 0; i < result.results.length; i++) {
                            var nameOfHero = result.results[i].name;
                            var id = result.results[i].id;
                            var new_div = document.createElement("new_div");
                            new_div.classList.add("result_div");
                            var ele = " <a target='_BLANK' href = viewhero.html#" + id + "#" + nameOfHero + ">" + nameOfHero + "</a>";
                            new_div.innerHTML = ele;
                            var parentOfThese = document.getElementById("search_results");
                            parentOfThese.insertBefore(new_div, parentOfThese.childNodes[0]);
                            parentOfThese.appendChild(new_div);
    
                        }
                    }
                }
            }
            xmlHttp.open("GET", "https://superheroapi.com/api.php/1964526473682940/search/" + input_field.value );
            xmlHttp.send();
    
        }   
    }

});


