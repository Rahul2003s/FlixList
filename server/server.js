require('dotenv').config()

const express = require('express')
const watchlistRoutes = require('./routes/watchlist')
//express app
const app = express()


//middleware
app.use(express.json())

app.use((req,res,next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/watchlist',watchlistRoutes)

// listen for requests
app.listen(process.env.PORT,() => {
    console.log("Listening on port 4000!!!!")
})


/*
GET /watchlist ---> gets all the watchlists
POST /watchlist ---> creates a new watchlist
*/

