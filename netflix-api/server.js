const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/UserRoutes");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.set("strictQuery", false);


mongoose.connect("mongodb+srv://admin:admin@cluster0.emsng.mongodb.net/?retryWrites=true&w=majority",{useNewUrlParser: true,useUnifiedTopology:true}
).then(()=>{
    console.log("DB connected")
})

app.use("/api/user", userRoutes);

app.listen(5000, () => {
  console.log("server started on port 5000");
});