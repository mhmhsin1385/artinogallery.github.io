

// header
const header = document.getElementById("header")

if (window.scrollY > 0) {
    header.style.backgroundColor = 'White'

}

var isScrollDown = false
window.onscroll = function () {

    if (this.scrollY > 0 && !isScrollDown) {

        header.animate([
            // keyframes
            { backgroundColor: 'rgba(255, 255, 255, 0.85)' },
            { backgroundColor: 'White' }
        ],
            {
                // timing options
                duration: 200
            });
        header.style.backgroundColor = 'White'
        isScrollDown = true
    }
    if (this.scrollY == 0 && isScrollDown) {
        header.animate([
            // keyframes
            { backgroundColor: 'White' },
            { backgroundColor: 'rgba(255, 255, 255, 0.85)' }

        ], {
            // timing options
            duration: 200
        });
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.85)'
        isScrollDown = false
    }
}










//slider 

const artSlider = document.querySelector("#slider-arts")

const artButtons = document.querySelectorAll(".slider-button-arts")

const artImages = document.querySelectorAll(".image-art")

const artScroll = document.querySelector("#art-scroll")

let artScrollCount= artSlider.childElementCount - 2
artScroll.style.width = 100 / artScrollCount + "%"

let artCurrentLeft = 0;
let artNextLeft = 0;

artButtons.forEach(b => {
    b.addEventListener("click", () => {

        let imgWidth = artSlider.firstElementChild.clientWidth
        var a = 3 * imgWidth + 10
        if (b.id == "left") {

            artSlider.scrollLeft -= imgWidth + 6

            if (artNextLeft > 0) {
                artCurrentLeft = artNextLeft
                artNextLeft -= artScroll.clientWidth
                artScroll.animate([
                    // keyframes
                    { left: artCurrentLeft + "px" },
                    { left: artNextLeft + "px" }

                ], {
                    // timing options
                    duration: 200
                });
                artScroll.style.left = artNextLeft + "px"
            }
        }
        else if (b.id == "right") {

            artSlider.scrollLeft += imgWidth + 6


            if (artNextLeft + artScroll.clientWidth < artScroll.parentElement.clientWidth) {
                artCurrentLeft = artNextLeft
                artNextLeft += artScroll.clientWidth
                artScroll.animate([
                    // keyframes
                    { left: artCurrentLeft + "px" },
                    { left: artNextLeft + "px" }

                ], {
                    // timing options
                    duration: 200
                });
                artScroll.style.left = artNextLeft + "px"
            }
        }
    })


})

const previewImageArt = document.querySelector("#preview-art")



artImages.forEach(img => {
    img.addEventListener("click", () => {
        let imageSrc = img.getAttribute("src")
        previewImageArt.setAttribute("src", imageSrc)
    })

    img.addEventListener("mouseover", () => {

        img.animate([{ filter: 'grayscale(100%)' }, { filter: 'grayscale(0%)' }], { duration: 50 })
        img.style.filter = 'grayscale(0%)'

    })

    img.addEventListener("mouseout", () => {

        img.animate([{ filter: 'grayscale(0%)' }, { filter: 'grayscale(100%)' }], { duration: 100 })
        img.style.filter = 'grayscale(100%)'
    })
})






//profiles


const profilesSlider = document.querySelector("#slider-profiles")

const profilesButtons = document.querySelectorAll(".slider-button-profiles")

const profilesImages = document.querySelectorAll(".image-art")

const profilesScroll = document.querySelector("#profiles-scroll")

let profilesScrollCount= profilesSlider.childElementCount - 4
profilesScroll.style.width = 100 / profilesScrollCount + "%"

let profilesCurrentLeft = 0;
let profilesNextLeft = 0;

profilesButtons.forEach(b => {
    b.addEventListener("click", () => {

        let imgWidth = profilesSlider.firstElementChild.clientWidth
        var a = 3 * imgWidth + 10
        if (b.id == "left") {

            profilesSlider.scrollLeft -= imgWidth + 5
            
            if (profilesNextLeft > 0) {

                profilesCurrentLeft = profilesNextLeft
                profilesNextLeft -= profilesScroll.clientWidth
                profilesScroll.animate([
                    // keyframes
                    { left: profilesCurrentLeft + "px" },
                    { left: profilesNextLeft + "px" }

                ], {
                    // timing options
                    duration: 200
                });
                profilesScroll.style.left = profilesNextLeft + "px"
            }
            
        }
        else if (b.id == "right") {

            profilesSlider.scrollLeft += imgWidth + 5

            if (profilesNextLeft + profilesCurrentLeft  + profilesScroll.clientWidth   < profilesScroll.parentElement.clientWidth) {

                profilesCurrentLeft = profilesNextLeft
                profilesNextLeft += profilesScroll.clientWidth
                profilesScroll.animate([
                    // keyframes
                    { left: profilesCurrentLeft + "px" },
                    { left: profilesNextLeft + "px" }

                ], {
                    // timing options
                    duration: 200
                });
                profilesScroll.style.left = profilesNextLeft + "px"
            }
            
        }
    })


})



const profilesMouseEvent =document.querySelectorAll(".profiles-mouse-event-div")




profilesMouseEvent.forEach(pm =>{
    
    pm.addEventListener("mouseover", () => {
        var index = Array.prototype.indexOf.call(profilesMouseEvent, pm)
        profilesSlider.children[index].animate([{ filter: 'grayscale(100%)',scale:"1" }, { filter: 'grayscale(0%)',scale:"0.96" }], { duration: 50 })
        profilesSlider.children[index].style.filter = 'grayscale(0%)'
        profilesSlider.children[index].style.scale = '0.96'

    })

    pm.addEventListener("mouseout", () => {
        var index = Array.prototype.indexOf.call(profilesMouseEvent, pm)
        profilesSlider.children[index].animate([{ filter: 'grayscale(0%)',scale:"0.96" }, { filter: 'grayscale(100%)',scale:"1" }], { duration: 100 })
        profilesSlider.children[index].style.filter = 'grayscale(100%)'
        profilesSlider.children[index].style.scale = '1'
    })
})









//categories


const categoriesSlider = document.querySelector("#slider-categories")

const categoriesButtons = document.querySelectorAll(".slider-button-categories")


let categoriesCurrentLeft = 0;
let categoriesNextLeft = 0;

categoriesButtons.forEach(b => {
    b.addEventListener("click", () => {

        let imgWidth = categoriesSlider.firstElementChild.clientWidth
        var a = 3 * imgWidth + 10
        if (b.id == "left") {

            categoriesSlider.scrollLeft -= imgWidth + 5
            
            
            
        }
        else if (b.id == "right") {

            categoriesSlider.scrollLeft += imgWidth + 5

            
            
        }
    })


})

const categories = categoriesSlider.childNodes

categories.forEach(cat => {
    
    cat.addEventListener("mouseover", () => {


        cat.animate([{ filter: 'grayscale(100%)',scale:"1"}, { filter: 'grayscale(0%)',scale:'0.96' }], { duration: 100 })
        cat.style.filter = 'grayscale(0%)'
        cat.style.scale = '0.96'

        

    })
    
    cat.addEventListener("mouseout", () => {

        cat.animate([{ filter: 'grayscale(0%)',scale:'0.96' }, { filter: 'grayscale(100%)',scale:"1"}], { duration: 200 })
        cat.style.filter = 'grayscale(100%)'
        cat.style.scale = '1'
        
    })
})




















const scrollDown = document.querySelector("#scroll-down")


scrollDown.addEventListener("click",()=>{
    window.scrollTo(0 , 740)
})









