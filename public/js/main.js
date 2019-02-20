window.onload = () => {
fetch ("https://secret-tor-72530.herokuapp.com/quotes")
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






