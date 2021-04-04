//classlist - shows/gets all classes
//contains - checks classlist for specific class
//add -add class
//remove - remove class
//toggle - toggles class


const navToggle = document.querySelector(".nav-toggle");
const links: HTMLElement | null = document.querySelector(".links");

navToggle!.addEventListener("click",function(){
    //console.log(links!.classList);
    // if(links?.classList.contains("show-links")){
    //     links.classList.remove("show-links");
    // }else{
    //     links!.classList.add("show-links");
    // }
    links?.classList.toggle("show-links");
});
