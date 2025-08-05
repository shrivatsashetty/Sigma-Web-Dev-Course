const btnScrollToTop = document.getElementById("btn-scroll-to-top");

window.addEventListener(
    "scroll",
    showHideBtnScrollToTop
);

/* a function to show or hide the scroll to top button
depending on how far the user has scrolled down  */
function showHideBtnScrollToTop() {
    if (window.scrollY > 670) {
        btnScrollToTop.style.display = "flex";
    }
    else {
        btnScrollToTop.style.display = "none";
    }
}

/* adding the event listner on the scroll to top btn */
btnScrollToTop.addEventListener(
    "click",
    (e) => {
        /* passing a scroll behaviour object to 
        the window.scrollTo function */
        window.scrollTo(
            {
                top: 0,
                behavior: "smooth"
            }
        );
    }
);

