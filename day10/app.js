document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("alertBtn");

    if (btn) {
        btn.addEventListener("click", function () {
            alert("Button clicked!");
            
        });
        btn.addEventListener("click", function () {
        btn.style.backgroundColor = "#6f00ffff"; 
});
    }
});

