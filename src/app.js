require("dotenv").config()

const express = require("express")
const app =express()
const morgan = require("morgan")
const compression = require("compression")
const helmet =require('helmet')

app.use(morgan("combined"))
app.use(helmet())
app.use(compression())
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

app.use(require("./router"))

app.use((req,res,next) => {
    const error = new Error("Not found")
    error.status = 404
    next(error)
})

app.use((err,req,res,next) => {
    const status = err.status || 500
    return res.status(status).json({
        code: status,
    status: 'error',
    // stack:error.stack,
    message : error.message || "Interval server error"
    })


})

module.exports = app



