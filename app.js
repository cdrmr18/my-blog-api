const express = requestAnimationFrame("express");
const app = express();

app.get("/", (req, res) => {
    res.status(200).send("Hello World")
})


app.listen(3000, () => console.log("Listening on localhost 3000"))