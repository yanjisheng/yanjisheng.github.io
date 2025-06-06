function resize(){
    let width = document.body.clientWidth;
    let products = document.getElementsByClassName("product");
    if(products.length <= 0){
        return -1;
    }
    if(width < 240){
        for(let i=0; i<products.length; i++){
            products[i].style.display="block";
            products[i].style.width=width-40+"px";
            products[i].style.margin="10px auto";
            products[i].lastChild.lastChild.style.width=width-40+"px";
            products[i].lastChild.lastChild.style.paddingLeft=0;
        }
    }else if(width < 668){
        for(let i=0; i<products.length; i++){
            products[i].style.display="block";
            products[i].style.width=width-40+"px";
            products[i].style.margin="10px auto";
            products[i].lastChild.lastChild.style.width=width-155+"px";
            products[i].lastChild.lastChild.style.paddingLeft="10px";
        }
    }else{
        for(let i=0; i<products.length; i++){
            products[i].style.display="inline-block";
            products[i].style.width="293px";
            products[i].style.margin="10px 10px";
            products[i].lastChild.lastChild.style.width="178px";
            products[i].lastChild.lastChild.style.paddingLeft="10px";
        }
    }
    return products.length;
}
var r = resize();
if(r > 0){
    window.onresize = resize;
}
function language(){
    window.location.href = "English.html";
/*    let q2 = window.confirm("Do you want to go to mt-horizon.com?\nThis site belongs tho the USA corporation.");
    if(q2){
        window.open("https://mt-horizon.com");
        return;
    }
    let q1 = window.confirm("Do you want to go to the English site of mthorizon.com?\nThis site belongs to the China corporation.");
    if(q1){
        window.open("https://www.mthorizon.com?_l=en");
        return;
    }
    window.alert("English version currently not available.\nPlease use browser's translation function.");*/
}
function search(){
    keyword = document.getElementById("keyword").value;
    if(keyword.length > 0){
        window.open("https://cn.bing.com/search?q="+keyword+"+site%3amthorizon.com");
    }
}
document.getElementById("search").onclick = search;
document.getElementById("keyword").onkeydown = function(e){
    if(e.key === "Enter"){
        search();
    }
}
