
let sceneNumber = 1;
advance.addEventListener("click", advanceScene);
function advanceScene() {

    if (sceneNumber === 1) {
        document.getElementById("sceneimage").src = "./images/forest1.jpg";
        document.getElementById("caption").textContent = " You stand at the entrance to the forest. You can see the light filtering through the trees. Hayden tells you that nothing is hidden somewhere in this forest.";
        sceneNumber++;
    } else if (sceneNumber === 2) {
        document.getElementById("sceneimage").src = "./images/forest2.jpg";
        document.getElementById("caption").textContent = " You move deeper in. The trees are thick and the path is narrow. Hayden encourages you to be one with the forest.";
        sceneNumber++;
    } else if (sceneNumber === 3) {
        document.getElementById("sceneimage").src = "./images/forest3.jpg";
        document.getElementById("caption").textContent = " You have reached the heart of the forest. It is very quiet here. Hayden sees a treasure in the center of the grove.";
        sceneNumber++;
    } else if (sceneNumber === 4) {

        document.getElementById("caption").textContent = "";  
        advance.disabled = true;
        document.getElementById("endmessage").classList.remove("hidden");
    }
}