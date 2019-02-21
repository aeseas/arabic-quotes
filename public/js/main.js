window.onload = () => {
    fetch ("https://secret-tor-72530.herokuapp.com/quotes")
        .then(response => response.json())
        .then(json => getQuote(json))
    }

    
    // RANDOM QUOTE
    const getQuote = (quotes) => {
        console.log(quotes);

        const author = document.querySelector('h4')
        const quoteAr = document.querySelector('h2')
        const quoteEn = document.querySelector('h3')
        const content = document.querySelector(".content")
        
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
    
        handleClickButton();
        
        document.querySelector(".btn").addEventListener("click", handleClickButton);
    }
    
    
    // CREATE QUOTE
    document.querySelector('#create').addEventListener('click', function(e){
        e.preventDefault()

        let quoteAr = document.getElementById("quoteArabic").value;
        let quoteEn = document.getElementById("quoteEnglish").value;
        let author = document.getElementById("author").value;
    
        const addQuote = {
            method: 'post',
            mode : "cors",
            headers: {"content-type": "application/json"},
            // converts a JavaScript object or value to a JSON string, 
            body: JSON.stringify({
                "quotear":`${quoteAr}`,
                "quoteen": `${quoteEn}`,
                "name": `${author}`
            })
        }    
        
        console.log(quoteAr + " is added to your database" +
        "\n" + quoteEn + " is added to your database" +
        "\n" + author + " is added to your database" 
        )
    
        fetch('quotes/create', addQuote)
    })