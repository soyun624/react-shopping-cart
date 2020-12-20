const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const shortid = require("shortid");
var path = __dirname + '/server/build';

const app = express();
app.use(express.static(path));

var corsOptions = {
  origin: "http://localhost:8081"
};
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost/react-shopping-cart-db", {
  useNewUrlParser: true,
  useCreateindex: true,
  useUnifiedTopology: true,
});

const Product = mongoose.model(
  "products",
  new mongoose.Schema({
    _id: { type: String, default: shortid.generate },
    title: String,
    description: String,
    image: String,
    price: Number,
    availableSizes: [String],
  })
);

app.get("/api/products", async (req, res) => {
  const products = await Product.find({});
  res.send(products);
});

app.post("/api/products", async(req, res) => {
  const newProduct = new Product(req.body);
  const savedProduct = await newProduct.save();
  res.send(savedProduct);
});

app.delete("/api/products/:id", async(req, res) => {
  const deletedProduct = await Product.findByIdAndDelete(req.params.id);
  res.send(deletedProduct);
});

app.get('/', function (req,res) {
  res.sendFile(path + "index.html");
});

//require("./server/routes/turorial.routes")(app);

// const port = process.env.PORT || 5000;
// app.listen(port, () => console.log("serve at http://localhost:5000"));

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});