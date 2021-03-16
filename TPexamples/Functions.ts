interface person{
    name:string,
    uid:string|number

}


function greet(user: person){
    console.log(`${user.name} says hello`);
}