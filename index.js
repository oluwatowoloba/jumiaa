const express = require("express")
app = express()
const cors = require("cors")
app.use(cors())

app.use(express.json())

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log("Listening to the port");
    
})

app.get("/jumia", (req, res) => {
    res.status(200).json({
        message: "Welcome to Jumai"
    })
})