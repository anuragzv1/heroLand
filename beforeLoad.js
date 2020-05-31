var GHO;

function fillAllData(id){

    xmlHttp = new XMLHttpRequest();

    xmlHttp.onreadystatechange = function () {
        if (this.status == 200 && this.readyState == 4) {
            var returndata = JSON.parse(this.response);   
            GHO = returndata;
            console.log( GHO );

            var image  = document.getElementById("photo_hero");
            image.src = GHO.image.url;

            var name_div = document.getElementById("name_hero");
            name_div.innerText = GHO.name;
            var id_div = document.getElementById("id_hero");
            id_div.innerText = GHO.id;

            var ps_list = document.getElementById("powerstats");

            

            for(let i in GHO.powerstats){
                var li = document.createElement("li");
                li.innerText = i+ ":"+GHO.powerstats[i];
                ps_list.appendChild(li);
                
            }

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


function addToCookies(){
    console.log(localStorage);
    if(localStorage.getItem(GHO.id)==undefined) {
        alert("Now you love "+ GHO.name);
        localStorage.setItem(GHO.id , GHO.name);
    }
    else alert("Hey! thats already a loved one!");
    console.log(localStorage);
}