// Code here
document.addEventListener('DOMContentLoaded', ()=> {
   const url = "http://localhost:3000/beers/1"
   

   fetch(url)
    .then(res => res.json())
    .then(beer => {
        renderBeer(beer)
  
    })



     function renderBeer(beer){
         
        //  let main =document.querySelector('main')
         let div =document.querySelector('div')
         let h2 = document.querySelector('h2')
         let form = document.querySelector('form')
         let h3_first = document.querySelector('h3')
         let h3_second = document.querySelector('h3')
         let textarea = document.querySelector('textarea')
         let button = document.querySelector('button')
         let img = document.querySelector('img')

        main.className = 'main'

        div.className = 'beer-details'
        h2.innerText = beer.name 

        form.className = 'description' 
        textarea.innerText = beer.description 

        img.src = beer.image_url 

        h3_first.innerText = beer.reviews

        div.append(h2, form, textarea, img, h3_first, h3_second )
        main.append(div) 


     }


}) 

