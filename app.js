function compile(){
document.getElementById("html").innerHTML = "Enter HTML Code" ;
document.getElementById("css").innerHTML = "Enter CSS Code" ;
document.getElementById("js").innerHTML = "Enter JS Code" ;

var html = document.getElementById("html") ;
var css = document.getElementById("css") ;
var js = document.getElementById("js") ;

var code = document.getElementById("output").contentWindow.document ;
document.body.onkeyup=function(){
code.open();
code.writeln(html.value + "<style>" + css.value + "</style>" + "<script>" + js.value + "</script>" );
code.close() ;
};
}
compile() ;

/*
document.getElementById("html").innerHTML = localStorage["ht"] || "Enter HTML Code" ;
document.getElementById("css").innerHTML = localStorage["cs"] || "Enter CSS Code" ;
document.getElementById("js").innerHTML = localStorage["jss"] || "Enter JS Code" ;

setInterval(function(){
localStorage["ht"]=document.getElementById("html").innerHTML ;
localStorage["cs"]=document.getElementById("css").innerHTML ;
localStorage["jss"]=document.getElementById("js").innerHTML ;
} , 1000) ;
*/