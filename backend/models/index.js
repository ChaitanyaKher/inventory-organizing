const mongoose = require("mongoose")
const uri = "mongodb+srv://chaitanyakher2131996:JJWiM3pUAE1b5rwQ@cluster0.sygwa15.mongodb.net/"

function main() {
  mongoose.connect(uri).then(()=> {
    console.log("Successfully connected to DB!");
  }).catch((err)=> {
    console.log("Error: ", err);
  })
}

module.exports = { main };