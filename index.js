import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())

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

const users = []

app.post("/sign-up", (req, res) => {
    const user = req.body
    users.push(user)
    res.send("OK, você logou com sucesso!")
})

app.post("/tweets", (req, res) => {
    const {username, tweet} = req.body
    const response = users.find(user => user.username === username)
    const avatar = response.avatar

    const newTweet = {
        username,
        tweet,
        avatar
    }

    tweets.push(newTweet)
    res.send("OK, você tweetou com sucesso!")
})

app.get("/tweets", (req, res) => {
    res.send(tweets)
})

app.listen(5000)