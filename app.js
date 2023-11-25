require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5050;
const dbConnection = require("./dbconfig/connectDb");
const dbUrl = process.env.DBURL;
const routes = require("./Routes/routes");
const cluster = require('cluster')
const os = require('os')

dbConnection(dbUrl);

app.use(express.json());

app.get("/", (req, resp) => {
  resp.status(200).json({ message: "sucess" ,pid:process.pid});

});

app.use("/api", routes);

if(cluster.isPrimary){
  for(let i = 0; i<os.cpus().length; i++){
    cluster.fork()
   
  }
  cluster.on('exit',(worker,code,signal)=>{
    console.log(`worker ${worker.process.pid} killed`);
    cluster.fork()
  })
}else{
  app.listen(PORT, (err) => {
    if (err) {
      console.log("Server error");
    } else {
      console.log("Listning on port " + PORT + " on pid "+process.pid);}
  });}