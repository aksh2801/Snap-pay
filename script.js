const toggleBtn = document.getElementById("darkModeToggle");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        toggleBtn.innerText = "Light Mode";
    } else {
        toggleBtn.innerText = "Dark Mode";
    }
});
const trading = document.querySelector('.cta-button')
console.log(trading)
trading.addEventListener('click',()=>{
    alert('Trading feature coming soon..')
})