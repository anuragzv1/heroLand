


var cookies = document.cookie;
if(localStorage.length==0){
    var favdiv = document.getElementById("fav_content");
    var no_cookies = document.createElement("div");
    no_cookies.innerHTML = "Seems like you dont have any favourites yet! <br> redirecting you to homepage....";

    setTimeout(() => {
        window.location.href="index.html";
    }, 3000);

    favdiv.appendChild(no_cookies);
}
else{
    
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


function unlove(hero_id){
    localStorage.removeItem(hero_id);
    document.getElementById(hero_id).parentNode.removeChild(document.getElementById(hero_id));
}