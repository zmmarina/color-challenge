let input = document.querySelectorAll("input");


for (let i = 0; i<input.length; i++){
    input[i].addEventListener("input", function(){
        let red = document.getElementById("red").value,
            green = document.getElementById("green").value,
            blue = document.getElementById("blue").value;
        
        
        let showRed = document.getElementById("outputRed");
        showRed.textContent = red;
        let showGreen = document.getElementById("outputGreen");
        showGreen.textContent = green;
        let showBlue = document.getElementById("outputBlue");
        showBlue.textContent = blue;
    

        let button = document.getElementById("button");
        button.style.background = `rgb(${red}, ${green}, ${blue})`;
    });
}



