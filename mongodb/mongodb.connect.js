
const mongoose = require("mongoose");
 


//writing a function for our connection
function connectionToMongodb() {
    mongoose.connect('mongodb://localhost:27017/todos')
     
    mongoose.connection.on("connected", () => {
        console.log("mongodb connection successful ")
    });

    mongoose.connection.on("error", (err) => {
        console.log(err)
        console.log("mongodb connection unsuccessful")
    });

}
module.exports = {connectionToMongodb} ;//exporting our function




