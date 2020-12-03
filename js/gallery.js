let galleryImages = document.querySelectorAll(".images-gallery");
let getLatestOpenedImg;
let windowWidth = window.innerWith;

if(galleryImages){
    galleryImages.forEach(function(image, index){
        image.onclick = function() {
            let getElementCss = window.getComputedStyle(image);
            let getFullImgUrl = getElementCss.getPropertyValue("background-image");
            let getImgUrlPos = getFullImgUrl.split("images");
            let setNewImgUrl = getImgUrlPos[1].replace('")','');

            getLatestOpenedImg = index + 1;

            let container = document.body;
            let newImgWindow = document.createElement("div");
            container.appendChild(newImgWindow);
            newImgWindow.setAttribute("class", "img-window");
            newImgWindow.setAttribute("onclick", "closeImg()");

            let newImg = document.createElement("img");
            newImgWindow.appendChild(newImg);
            newImg.setAttribute("src", "/images" + setNewImgUrl);
        }
    });
}

function closeImg(){
    document.querySelector(".img-window").remove();

}