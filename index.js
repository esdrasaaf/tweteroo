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
    const {username, avatar} = req.body

    const objUser = {
        username,
        avatar
    }
    
    if (!username || !avatar) {
        return res.status(400).send("Todos os campos são obrigatórios!")
    }

    users.push(objUser)
    res.status(201).send("OK, você logou com sucesso!")
})

app.post("/tweets", (req, res) => {
    const username = req.headers.user
    const tweet = req.body.tweet

    if (!username || !tweet) {
        return res.status(400).send("Todos os campos são obrigatórios!")
    }

    let response = users.find(user => user.username === username)
    let avatar = response.avatar

    const newTweet = {
        username,
        tweet,
        avatar
    }

    tweets.push(newTweet)
    res.status(201).send("OK, você tweetou com sucesso!")
})

app.get("/tweets", (req, res) => {
    res.send(tweets)
})

app.listen(5000)