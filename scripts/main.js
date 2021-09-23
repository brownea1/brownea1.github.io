var state = false;

function openNav() {
    let btn = document.getElementById("openbtn");
    let sidebar = document.getElementById("mySidepanel");
    let body = document.body;
    if(!state){
        if(screen.width <= 790)
            sidebar.style.width = "100vw";
        else
            sidebar.style.width = "10vw";
        btn.innerHTML = "☰ Close";
        // body.style.gridTemplateAreas = '"navBtn head empty" "nav main contact" "foot foot foot"';
    }
    else{
        sidebar.style.width = "0vw";
        btn.innerHTML = "☰ Menu";
        // body.style.gridTemplateAreas = '"navBtn head empty" "main main contact" "foot foot foot"';
    }
    state = !state;
}