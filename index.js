import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())

// Os primeiros 10 tweets foram criados na mão! Facilitou na hora de codar, por isso deixei.
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
    }
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

    tweets.unshift(newTweet)
    res.status(201).send("OK, você tweetou com sucesso!")
})

app.get("/tweets", (req, res) => {
    const page = parseInt(req.query.page)
    let limitedTweets;

    for (let i = 0; i < page; i++){
        limitedTweets = tweets.slice(i * 10, page * 10)
    }
    
    res.send(limitedTweets)
})

app.get("/tweets/:username", (req, res) => {
    const username = req.params.username
    const userTweets = tweets.filter(t => t.username === username)
    res.status(200).send(userTweets)
})

app.listen(5000)