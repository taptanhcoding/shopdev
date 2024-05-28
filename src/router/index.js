const express =require("express")

const router = express.Router()

router.get("/api/ping",(req,res,next) => {
    return res.json({
        "message": "Pong"
    })
})


module.exports = router