const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();

const dataFile = "./clientData.json";

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

const messageFromClient = (req, res) => {

  const clientData = req.body;

  // Read old data
  let existingData = [];

  if (fs.existsSync(dataFile)) {
    const fileContent = fs.readFileSync(dataFile, "utf-8");

    if (fileContent) {
      existingData = JSON.parse(fileContent);
    }
  }

  // Add new client data
  existingData.push(clientData);

  // Save updated array
  fs.writeFileSync(
    dataFile,
    JSON.stringify(existingData, null, 2)
  );

  res.json({
    success: true,
    message: "Data stored successfully",
  });
};

app.get("/", (req, res) => {
  res.send("this is server side of portfolio :)");
});

app.post("/", messageFromClient);

app.listen(3000, () => {
  console.log("server is running on port 3000");
});