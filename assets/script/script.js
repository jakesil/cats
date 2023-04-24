// make a variable and set the button to it
const button = document.querySelector ("#clickCat");
const cats_container = document.querySelector("#cats-container");
// make the button listen for click
function handleClick(){
    cats_container.id="show"
};
button.addEventListener("click",handleClick);
// make the cats show up