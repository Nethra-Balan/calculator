let exp="";
let prevop='';
function copy(id){
    let str=document.getElementById("text").value;
    if(str.length>10){
        return;
    }
    if(prevop){
    document.getElementById(prevop).style.color='white';
    document.getElementById(prevop).style.backgroundColor='orange';
    document.getElementById("text").value="";
    prevop='';
    }
    document.getElementById("text").value+=id;
    exp+=id;
}
function sign(id){
    if(prevop){
        document.getElementById(prevop).style.color='white';
        document.getElementById(prevop).style.backgroundColor='orange';
        document.getElementById("text").value="";
    }
    document.getElementById(id).style.color='orange';
    document.getElementById(id).style.backgroundColor='white';
    // document.getElementById("text").value+=id;
    exp+=id;
    prevop=id;
}
function clearInput(){
    document.getElementById("text").value="";
    exp="";
}
function solve(){
    document.getElementById("text").value = math.evaluate(exp);
}
function changesign(){
        let num=Number(document.getElementById("text").value);
        document.getElementById("text").value=-num;
        exp=-num;
}
function percent(){
    exp /= 100;
    document.getElementById("text").value=exp;
}