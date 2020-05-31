
//this js file basically deals with all the cookies / localstorage stuff

var cookies = document.cookie;
if(localStorage.length==0){
    //if there is no key in the localstorage show user the message that there are no favs and redirect
    var favdiv = document.getElementById("fav_content");
    var no_cookies = document.createElement("div");
    no_cookies.innerHTML = "Seems like you dont have any favourites yet! <br> redirecting you to homepage....";
    no_cookies.style.color="#e3e3e3";
    no_cookies.style.padding="7px";
    no_cookies.style.border= "1.5px solid gray";
    setTimeout(() => {
        window.location.href="index.html";
    }, 3000);

    favdiv.appendChild(no_cookies);
}
else{
    //if there are any favs in local storage , fill the html page using li's create new li's and append
    for(var i = 0 ;i<localStorage.length;i++){
        console.log(localStorage.key(i));

        var id = localStorage.key(i);
        var name = localStorage.getItem(id);
        console.log(name);
            var list = document.getElementById("fav_main_ul");
            var new_li = document.createElement("li");
            new_li.setAttribute('id', id);
            var url = "viewhero.html#"+id+"#"+name;
            new_li.innerHTML = " <a href = '"+url+"' >"+name+"</a> <button id = 'remfav' onclick='unlove("+id+")'>UNLOVE ME</button>";
            list.appendChild(new_li);
        
    }
}

//if someone click unlove on favourite page that particular item is removed from the localstorage
function unlove(hero_id){
    localStorage.removeItem(hero_id);
    document.getElementById(hero_id).parentNode.removeChild(document.getElementById(hero_id));
}