import app from "./app.js"
import connectDB from "./db.js";


connectDB();

app.get("/app", (req, res) => {
    res.json({ message: "Hola desde el servidor!" });
});

app.listen(3000)
console.log('Server on port', 3000)