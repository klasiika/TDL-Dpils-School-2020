function toArray(obj){
let array=[];
let other=[];
let value;
let length=Object.getOwnPropertyNames(obj).length;
    for(i=0;i<length;i++)
    {
        value=Object.getOwnPropertyNames(obj)[i];
        other.push(value,obj[value]);
        array.push(other);
        other=[];
    }//sent to git 
return array;
}

let obj={
    a:1,
    b:2,
}
console.log(toArray(obj));