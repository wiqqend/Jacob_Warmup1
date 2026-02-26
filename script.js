// Reqs
// Declare a variable (sceneNumber for example) that tracks which scene is currently displayed. Start it at 1.
// Write a function called advanceScene that:
// Checks the value of your tracking variable (sceneNumber).
// Updates the src attribute of the <img> element to the next image. Combine your knowledge of if{} else{} statements with this link to achieve img src manipulation in JS. see link: HTML DOM Image src Property
// Updates the caption text to match the new image.
// Increments your tracking variable.
// When the final image is reached, reveals the hidden end message (hint: use classList.remove to remove a hidden class) and disables the button (hint: use button.disabled = true).
// Attach an event listener to the button that calls advanceScene on each click.

let sceneNumber = 1;
advance.addEventListener("click", advanceScene);
function advanceScene() {

    if (sceneNumber === 1) {
        document.getElementById("sceneimage").src = "/images/forest1.jpg";
        document.getElementById("caption").textContent = " You stand at the entrance to the forest. The light is warm. The path ahead is clear. Dr. Ralls is waiting.";
        sceneNumber++;
    } else if (sceneNumber === 2) {
        document.getElementById("sceneimage").src = "/images/forest2.jpg";
        document.getElementById("caption").textContent = " You move deeper in. The trees close around you. The light grows thin. Jamie encourages you to seek the One Piece.";
        sceneNumber++;
    } else if (sceneNumber === 3) {
        document.getElementById("sceneimage").src = "/images/forest3.jpg";
        document.getElementById("caption").textContent = " You have reached the heart of the forest. It is very quiet here. Jiya sees a treasure in the center of the grove.";
        sceneNumber++;
    } else if (sceneNumber === 4) {

        document.getElementById("caption").textContent = "";
        sceneNumber++;    
        advance.disabled = true;
        document.getElementById("endmessage").classList.remove("hidden");
    }
}