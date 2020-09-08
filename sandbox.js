// // Loops

// // for loop

// for(let i = 0; i < 5; i++){
//     console.log(i);
// }

// const names = ['Alex', 'Deniss', 'Max', 'Ivan'];

// for(let i = 0; i < names.length; i++){
//     console.log(names[i]);
// }

// // while loop

// let j = 0;

// while(j < 5){
//     console.log(`Current number: ${j}`);
//     j++;
// }

// //if statement

// const age = 18;

// if (age > 21){
//     console.log('Welcome to our page');
// }

// const workers = ['Deniss', 'Alex', 'Ina', 'Maria'];

// if (workers.length > 3){
//     console.log('That is big company');
// }

// // else if 

// const password = 'pssword123121';

// if(password.length > 12 && password.includes('@')){
//     console.log('password is strong');
// } else if(password.length > 8 || password.includes('@')){
//     console.log('Password is too short or not strong');
// } else if(!password.length == 10){
//     console.log('We do not like your password');
// } else {
//     console.log('Password is weak');
// }

// console.log(!true);
// console.log(!false);

// //let ages = [9, 18, 35, 15]
// //Loops through all elemnt (ages) and
// // print if this person can drink alcohol

// let ages = [9, 18, 35, 15];
// let time = 21;
// //If time > 22 - age doesn't matter, no alco
// for (let i = 0; i < ages.length; i++){
//     if(ages[i] >= 18){
//         console.log(`You can drink alco, you are ${ages[i]}`);
//     } else {
//         console.log('You too young for alco');
//     }
// }

// //my new code -L 

// function greet () 
// {
//     console.log('Hello!');
// }
// // greet();
// // greet();
// // greet();


// const speak = function(name='Maris', surname='Axe') 
// {
//     console.log(`Hello ${name} ${surname}`);
// }

// speak('Deniss','Ivanov');
// // speak('Ina');
// // speak();

// const calulateArea = funcition(radiuss);
// {
//     let area=3.14*radiuss**2;
//     return area; 
// }

// const myCircle = calulateArea(5);
// console.log(myCircle);

// const arrowCalculateArea=radiuss=>3.14*radius**2;
// console.log(`Area is: ${arrowCalculateArea(10)}`);


// const bill = (product,tax) =>
// {
//     let total=0;
//     for (let i=0; i < product.length;i++)
//     {
//         total += product[i]+product[i]* tax;
//     }
//     console.log(`Total: ${total}`); 
// }
// bill([1,2],5);// don't forget this part 


// let people =['Max','Deniss','Alex','Ivan'];
// {
//     //for
// }
// people.forEach(person=>
// {
// console.log(person);
// })
let array = [89,46,0,35];
//let x=0;

const sortArray = (array) => {
    for(let i=0;i<array.length;i++) {
        for (let j=0; j<array.length;j++){
            //console.log(j);
            if(array[i]<array[j]) {
                let x= array[i];
                array[i]=array[j];
                array[j]=x;
            }
        }
  }
  return array;
}
console.log(sortArray(array));

  
  
  
  
  
  
    // {if( i>0)
    //     {
    //     if (array[i]>array[i+1]){
    //    //swap them in places kind off...
    //     b= array[i];
    //     array[i]=array[i+1];
    //     array[i]=b;
    //     }
      
    // }

//     }
//     console.log(b); 
// }
// sortArray(array);//