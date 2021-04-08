function showOverlay() {
    let overlay = document.createElement("div");
    overlay.classList.add("overlay");
    document.body.appendChild(overlay);
};

function closeSecurity(){
    document.querySelector(".overlay").remove();
    document.querySelector(".security").remove();
};

showOverlay();

let httpRequest = new XMLHttpRequest();
httpRequest.onreadystatechange = function() {
    if (httpRequest.readyState === 4 && httpRequest.status === 200) {
        let security = document.createElement("div");
        security.classList.add("security");
        document.body.appendChild(security);
        security.innerHTML = httpRequest.responseText;
    }
}
httpRequest.open(`GET`, `popup.txt`, true);
httpRequest.send();


