const express = require("express");
require("dotenv").config();
const Sequelize = require("sequelize");
const cors = require("cors");

const PORT = process.env.PORT;

const seq = new Sequelize("note_app", "root", process.env.PASSWORD, {
  host: "localhost",
  dialect: "mysql",
});

const note = seq.define("notes", {
  content: Sequelize.STRING,
});

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to Note App");
});

app.post("/notes/posts", async (req, res) => {
  const { content } = req.body;
  try {
    const data = await note.create({
      content,
    });
    res.status(200).send(data);
  } catch (err) {
    console.log(err);
    res.status(400).send({
      message: err.message,
    });
  }
});

app.get("/notes", async (req, res) => {
  try {
    const data = await note.findAll();
    res.status(200).send(data);
  } catch (err) {
    console.log(err);
    res.status(400).send({
      message: err.message,
    });
  }
})

app.put("/notes/edit/:id", async (req, res) => {
  try {
    const { content } = req.body;
    const noteId = req.params.id;
    const result = await note.update({ content }, { where: { id: noteId } });
    res.status(200).send({
      isError: false,
      data: result,
    });
  } catch (err) {
    console.log(err);
    res.status(400).send({
      message: err.message,
    });
  }
});

app.delete("/notes/delete/:id", async (req, res) => {
  try {
    const data = await note.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).send({
      isError: false,
      data,
    });
  } catch (err) {
    console.log(err);
    res.status(400).send({
      message: err.message,
    });
  }
});

seq.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`DB connected PORT ${8001}`);
  });
});
