const express = require(`express`)
const cors = require(`cors`)


const app = express()
app.use(express.json())
app.use(cors())

const seed = require(`./seed.js`)
const {login, register, assignCats, displayAllCats, displayOwnedCats, display5Stars, display4Stars, display3Stars} = require(`./controller.js`)

app.post(`/api/login`, login)
app.post(`/api/register`, register)
app.post(`/api/rollcats`, assignCats)
app.get(`/api/getallcats`, displayAllCats)
app.get(`/api/get5stars`, display5Stars)
app.get(`/api/get4stars`, display4Stars)
app.get(`/api/get3stars`, display3Stars)
app.post(`/api/getownedcats`, displayOwnedCats)

// seed()
app.listen(4000, () => console.log(`Gaming on port 4000`))