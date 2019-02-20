    // //FETCH
    // fetch('http://localhost:5000/quotes')
    // .then(r => r.json())
    // .then(json => parseQuote(json))


// const getQuoteArb = (x) => {
//     console.log(2, x)
//     const arItem = document.createElement('li')
//     arItem.textContent = x.quotear;
//     console.log(x.quotear)

//     document.querySelector('ul').appendChild(arItem)
// }

// const getQuoteEng = (x) => {
//     console.log(4, x)
//     const engItem = document.createElement('li')
//     engItem.textContent = x.quoteen
//     console.log(x.quoteen)

//     document.querySelector('ul').appendChild(engItem)
// }
// const getAuthor = (x) => {
//     console.log(5, x)
//     const authorItem = document.createElement(`li`)
//     authorItem.textContent = `- ${x.name}`;

//     document.querySelector(`ul`).appendChild(authorItem)
// }

// const parseQuote = (data) => {
//     getQuoteArb(data)
//     getQuoteEng(data);
//     getAuthor(data);
// }
window.onload = () => {
fetch ("http://localhost:5000/quotes")
    .then(response => response.json())
    .then(json => getQuote(json))
}
    const author = document.querySelector('h4')
    const quoteAr = document.querySelector('h2')
    const quoteEn = document.querySelector('h3')
    const content = document.querySelector(".content")

    const getQuote = (quotes) => {
        console.log(quotes);
        const handleClickButton = () => {
            //get random
            const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
            console.log(1, randomQuote)
            console.log(`test: ${randomQuote}`)

            //Quote Arabic h2
            content.appendChild(quoteAr)
            quoteAr.textContent = `${randomQuote.quotear}`;

            //Quote English h3
            content.appendChild(quoteEn)
            quoteEn.textContent = `"${randomQuote.quoteen}"`;

            //Author h4
            content.appendChild(author)
            author.textContent = `- ${randomQuote.name}`
        }
        document.querySelector(".btn").addEventListener("click", handleClickButton);
    }






