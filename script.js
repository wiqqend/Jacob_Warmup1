
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
        advance.disabled = true;
        document.getElementById("endmessage").classList.remove("hidden");
    }
}