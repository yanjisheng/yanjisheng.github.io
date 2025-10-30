var url = window.location.href;
var url1 = "";
url1 = url.substring(url.lastIndexOf("/"));
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
            products[i].style.width=width/2-42+"px";
            products[i].style.margin="10px 10px";
            products[i].lastChild.lastChild.style.width=width/2-157+"px";
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
}
var keywords = ["测力台", "电荷放大器", "制动测试", "温度", "数据采集", "三向力"];
var index = Math.floor(Math.random() * keywords.length);
function updateKeyword(){
    if(index >= keywords.length){
        index = 0;
    }
    document.getElementById("keyword").value = keywords[index];
    index += 1;
}
var u = setInterval(updateKeyword, 10000);
document.getElementById("keyword").onfocus = function(){
    clearInterval(u);
}
function search(){
    let keyword = document.getElementById("keyword").value;
    if(keyword.length > 0){
        window.open("https://cn.bing.com/search?q="+keyword);
    }
}
document.getElementById("search").onclick = search;
document.getElementById("keyword").onkeydown = function(e){
    if(e.key === "Enter"){
        search();
    }
}
