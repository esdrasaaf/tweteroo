import express from 'express'
import cors from 'cors'
const app = express()
app.use(cors())

const tweets = [
    {
        username: "igorhnovais",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        tweet: "ossada"
    },
    {
        username: "pedrola",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        tweet: "vou jogar um lolzin"
    },
    {
        username: "juaomagrin",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        tweet: "tão de saca telha"
    },
    {
        username: "callisto",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        tweet: "aoba"
    },
    {
        username: "lusca",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        tweet: "consigo rodar vários servers sem desligar o pc"
    },
    {
        username: "gugga",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        tweet: "que isso gente"
    },
    {
        username: "dani",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        tweet: "oii gentee"
    },
    {
        username: "erick",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        tweet: "dixtzin galera?"
    },
    {
        username: "caioba",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        tweet: "vou morar na antártica"
    },
    {
        username: "cintragui",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        tweet: "ó os cara kkkk"
    },
]

const user = [
    {
        username: 'esdras_aaf', 
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info" 
    }
]

app.get("/tweets", (req, res) => {
    res.send(tweets)
})

app.listen(5000)