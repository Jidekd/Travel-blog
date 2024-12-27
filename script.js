document.addEventListener("DOMContentLoaded", () => {
    
    const seeMoreButton = document.getElementById("see-more-button");
    const extraText = document.getElementById("extra-text");

    
    seeMoreButton.addEventListener("click", () => {
        if (extraText.style.display === "none") {
            
            extraText.style.display = "inline";
            seeMoreButton.innerText = "See Less";
        } else {
            
            extraText.style.display = "none";
            seeMoreButton.innerText = "See More";
        }
    });
});

document.getElementById('toggle-dark-mode').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    const nav = document.querySelector('nav');
    nav.classList.toggle('dark-mode');
  });
  