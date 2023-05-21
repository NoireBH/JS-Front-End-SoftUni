function solve(string){

    let regex = /#[A-Za-z]+/g
   let array = string.match(regex);

   for (let index = 0; index < array.length; index++) {
        array[index] = array[index].slice(1);
    
   }
    
   for (let index = 0; index < array.length; index++) {
    console.log(array[index]);
    
   }
    
}


 solve('The symbol # is known #variously in English-speaking #regions as the #number sign');