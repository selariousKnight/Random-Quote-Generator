let quoteEle = document.getElementById('quote');

let authorEle = document.getElementById('author');

function generateQuote(){
    let url = 'https://type.fit/api/quotes'

    fetch(url)
    .then((response)=>{
        return response.json()
    }).then((data)=>{
       let quote = data[ Math.floor((Math.random()*1500))]
        quoteEle.textContent = quote.text
        authorEle.textContent = quote.author ? quote.author : "Unknown"
        

    })
}
