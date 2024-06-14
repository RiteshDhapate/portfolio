const express = require('express');
const cors = require('cors');
require('dotenv').config()
const routes = require('./routes/route');


const PORT = process.env.PORT || 2000;
const app = express();

// middlewares
app.use(express.json());
app.use(cors({
     origin:"*"
}));
app.use("/",routes);

app.get("/", (req,res)=>{
    res.send("ritesh portfolio");
})

app.listen(PORT,()=>{
    console.log(`server listening on port ${PORT}`);
});



