function buy(e){
if(e.id="b11"){
  
    fetch("http://localhost:5001/book/1").then(response=>response.json()).then(data=>console.log(data));
     

}else if(e.id="b22"){
    alert("Hello! I am an alert box!!");

}else if(e.id="b33"){
    alert("Hello! I am an alert box!!");

}else if(e.id="b44"){
    alert("Hello! I am an alert box!!");

}
}
