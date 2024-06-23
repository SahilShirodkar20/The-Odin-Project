const cont = document.querySelector(".bigcontainer");
let n = parseInt(prompt("Please enter the number of squares per side you want"), 10);




for (let i = 0; i < n * n; i++) {
    const block = document.createElement("div");
    block.classList.add("inside");
    block.style.width = `${100 / n}%`;
    block.style.height = `${100 / n}%`;
    cont.appendChild(block);

    // Add event listeners for mouseover and mouseout
    block.addEventListener("mouseover", function() {
        block.style.backgroundColor = "yellow"; // Change to desired color on hover
    });

    block.addEventListener("mouseout", function() {
        block.style.backgroundColor = "red"; // Reset to initial color when not hovering
    });
}
