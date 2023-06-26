const express = require("express");
const app = express();
const PORT = 3000;


const {insertData, removeData, updateData,TABLE_NAME} = require("./user.js");

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World");
}

);
//insert the user data
app.post("/insert", (req, res) => {
    const {name, age} = req.body;
    insertData(TABLE_NAME, name, age);
    res.send("data inserted successfully");
}
);
//delete the user data
app.delete("/delete", (req, res) => {
    const {id} = req.body;
    removeData(TABLE_NAME, id);
    res.send("data deleted successfully");
}

);

//update the user data
app.put("/update", (req, res) => {
    const {id, name, age} = req.body;
    updateData(TABLE_NAME, id, name, age);
    res.send("data updated successfully");
}

);

