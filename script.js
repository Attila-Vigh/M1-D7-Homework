// EX7.: Write a function to change the h1 text
const changeH1 = () => document.getElementsByTagName("h1")[0].innerText = "Puppy Land"
changeH1()
// EX8.: Write a function to change the page background color
const changePageBackgroundColor = () => document.body.style.backgroundColor = "#00bcd4"
changePageBackgroundColor()
// EX9.: Write a function to change the footer address with a fake one
const changeAddres = () => {
    let footerParagraphs = document.querySelectorAll("footer>section>p");
    footerParagraphs[1].innerText = "High Heaven"
    footerParagraphs[2].innerText = "777"
}
changeAddres()
// EX10.: Write a function to add a CSS class to every Amazon link
const addClassTOAmazonLinks = () => (
    document.querySelectorAll("a").forEach( 
        link => link.classList.add("amazon") 
    )
)
addClassTOAmazonLinks()
// EX11: Write a function to toggle a CSS class for all the images in the table; that class should set the visibility of the image
const toggleClasses = () => {
    let images = document.querySelectorAll("img")
    for (const image of images) {
        image.classList.toggle("image")        
    }
}
toggleClasses()
