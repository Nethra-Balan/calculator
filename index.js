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
    let ans = myEval(exp);
    let tans=ans.toString().slice(0,11)
    document.getElementById("text").value =tans;
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
function myEval(exp){
    let numbers=[];
    let operators=[];
    let i=0;
    let neg=0;
    while(i<exp.length){
        if(i==0 && exp[i]=='-'){
            neg=1;
            i++;
            continue;
        }
        if(!isNaN(exp[i]) || exp[i]=='.'){
            let currNum="";
            while(i<exp.length && (!isNaN(exp[i]) || exp[i]=='.')){
                currNum += exp[i];
                i++;
            }
            if(neg){
                 numbers.push(-Number(currNum));
                 neg=0;
            }
            else {
               numbers.push(Number(currNum));
            }
        }
        else{
            while(operators.length>0 && precedence(operators.at(-1))>=precedence(exp[i])){
                let b=numbers.pop();
                let a=numbers.pop();
                let op=operators.pop();
                switch(op){
                    case '+':
                        numbers.push(a+b);
                        break;
                    case '-':
                        numbers.push(a-b);
                        break;
                    case '*':
                        numbers.push(a*b);
                        break;
                    case '/':
                        numbers.push(a/b);
                        break;
                }
            }
            operators.push(exp[i]);
            i++;
        }
    }
    while(operators.length>0){
        let b=numbers.pop();
                let a=numbers.pop();
                let op=operators.pop();
                switch(op){
                    case '+':
                        numbers.push(a+b);
                        break;
                    case '-':
                        numbers.push(a-b);
                        break;
                    case '*':
                        numbers.push(a*b);
                        break;
                    case '/':
                        numbers.push(a/b);
                        break;
                }
    }
    return numbers.pop();
}
function precedence(op){
    if(op=='/') return 4;
    if(op=='*') return 3;
    if(op=='+') return 2;
    if(op=='-') return 1;
    return 0;
}