const app = require("express")();
const bodyParser = require("body-parser");
//const mongoose = require("mongoose");
const { MongoClient } = require("mongodb");

// Conecta no MongoDB, não funciona
/* mongoose.connect(
  "mongodb://dev:e609f4f6ac550e8d96b64f835bd36fad@ds135750.mlab.com:35750/auth-jwt-node-react-native"
); */

//T1
const url = 'http://localhost:27017'
  //"mongodb://dev:e609f4f6ac550e8d96b64f835bd36fad@ds135750.mlab.com:35750/auth-jwt-node-react-native";

const mongoose = require('mongoose'); mongoose.set('useCreateIndex', true);

mongoose.connect(url, {
  useUnifiedTopology: true,
  useNewUrlParser: true})
  .then(() => console.log("Connected to Database") )
  .catch(err => console.error("An error has occured", err));
//<

// Carrega o model de Usuário
require("./models/user");

app.use(bodyParser.json());

// Inicia as rotas da API
app.use("/api", require("./controllers/userController"));

app.listen(3000);
