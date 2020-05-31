var GHO;   //global object that holds everything about the current superhero!


//when this function is called the viewhero.html page is filled with the required data
function fillAllData(id){

    xmlHttp = new XMLHttpRequest();

    xmlHttp.onreadystatechange = function () {
        if (this.status == 200 && this.readyState == 4) {
            var returndata = JSON.parse(this.response);   
            GHO = returndata;
            console.log( GHO );

            //setting image
            var image  = document.getElementById("photo_hero");
            image.src = GHO.image.url;
            //setting name
            var name_div = document.getElementById("name_hero");
            name_div.innerText = GHO.name;

            //setting id
            var id_div = document.getElementById("id_hero");
            id_div.innerText = GHO.id;

            //setting powerstats using for i loop in result.powerstats
            var ps_list = document.getElementById("powerstats");
            for(let i in GHO.powerstats){
                var li = document.createElement("li");
                li.innerText = i+ ":"+GHO.powerstats[i];
                ps_list.appendChild(li);
                
            }

            //setting biography
            var bio_list = document.getElementById("biography");

            for(let i in GHO.biography){
                var li = document.createElement("li");
                li.innerText = i+ ":"+GHO.biography[i];
                bio_list.appendChild(li);
            }

        }
    }


    xmlHttp.open("GET" , "https://superheroapi.com/api.php/1964526473682940/"+id);
    xmlHttp.send();
}


//this function takes the id of whatever superhero page is open and adds it to the localStorage array

function addToCookies(){
    console.log(localStorage);
    if(localStorage.getItem(GHO.id)==undefined) {
        alert("Now you love "+ GHO.name);
        localStorage.setItem(GHO.id , GHO.name);
    }
    else alert("Hey! thats already a loved one!");
    console.log(localStorage);
}