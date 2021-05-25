// EX7.: Write a function to change the h1 text

const changeH1 = () => document.getElementsByTagName("h1")[0].innerText = "Puppy Land"
changeH1()

// EX8.: Write a function to change the page background color

const changePageBackgroundColor = () => document.body.style.backgroundColor = "#00bcd4"
changePageBackgroundColor()

// EX9.: Write a function to change the footer address with a fake one

const changeAddres = () => {
    let footerParagraphs = document.querySelectorAll("footer>section>p"); // Get the list of paragraphs
    footerParagraphs[0].innerText = "High Heaven"
    footerParagraphs[1].innerText = "777"
}
changeAddres()

// EX10.: Write a function to add a CSS class to every Amazon link

const addClassTOAmazonLinks = () => {
    let links = document.querySelectorAll("a")   // Get the list of links

    for (const link of links)                    // Loop through each link
        link.classList.add("amazon")             // Add .amazon class to the current link
}
addClassTOAmazonLinks()

// EX11: Write a function to toggle a CSS class for all the trs in the table; that class should set the visibility of the image

const addToggleClassToImageOnAllImages = () => {
    let images = document.querySelectorAll("img")               // Get the list of links
    
    for (const image of images)                                 // Loop through each link
        image.onclick = () => image.classList.toggle("image")   // Each object (image) from the list, each image has a property/attribute named onclick, which will receive the value of a function 
}
addToggleClassToImageOnAllImages()

// EX12: Write a function totr the price of each product in a different one every time it's invoked

const changeBackgroundColor = () => {
    let trs = document.querySelectorAll("tr")                                   // Get the list of table rows

    for (const tr of trs) {                                                     // Loop over the list / Get the items from the list one by one
    
        tr.onclick = function () {                                              // Each object (table row) from the list has a property/attribute onclick, whichi will receive the value of a function 
            let color = "#" +  Math.floor(Math.random()*16777215).toString(16)  // Assign/create a random color
            tr.style.backgroundColor = color                                    // Acces the backgrond color on the object (table row) and assign to it the random color 
        }
    }                                                                           // Get the next object (table row) from the list until the list is empty
}
changeBackgroundColor()





