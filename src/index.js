// Code here
const url = "http://localhost:3000/beers"
document.addEventListener('DOMContentLoaded', ()=>{
fetch(url)
.then(function(res){
    return res.json()
})
.then(function(beers){
    //console.log(beers)
    beers.forEach(function(beer){
        renderBeer(beer)
    })
})

function renderBeer(beer){
    //target name, image, description and reviews
    //name
    const div = document.querySelector(".beer-details")
    
    //name
    const h2 = document.querySelector('h2')
    h2.innerText = beer.name
    console.log(h2)
    
    // image
    const img = document.querySelector('img')
    img.src = beer.image_url
    
    // description
    const textarea = document.querySelector('textarea')
    textarea.innerText = beer.description
    
    // reviews
    const review = document.querySelector('.review-form')
    review.innerText = beer.reviews
    
    
    
    
    
    
    
    
    
    
}

    
}) // end of EventListener DOMContent