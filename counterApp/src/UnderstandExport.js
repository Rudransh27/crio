function sum(a,b){
    return a+b;
}

function minus(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

export {sum, minus} // this are the named export here order of function exports not matter
export default multiply; // as only one default function can be exported we dont need brackets