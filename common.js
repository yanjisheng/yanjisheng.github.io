function f(){
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
}
var r = f();
if(r !== -1){
    window.onresize = f;
}
function language(){
    alert("English version currently not available.");
}
function search(){
    keyword = document.getElementById("keyword").value;
    window.open("https://cn.bing.com/search?q="+keyword+"+site%3amthorizon.com");
}
document.getElementById("search").onclick = search;
document.getElementById("keyword").onkeydown = function(e){
    if(e.key === "Enter"){
        search();
    }
}
