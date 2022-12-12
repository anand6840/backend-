const express = require("express");
const { Todomodel } = require("../models/todo.model");

const todoRouter = express.Router();

todoRouter.get(`/`, async (req, res) => {
  try {
    const notes = await Todomodel.find();
    res.send(notes);
  } catch (err) {
    res.status(500).send({ Error: "Something went wrong" });
  }
});

todoRouter.post(`/create`, async (req, res) => {
  try {
    const { title, category, userID } = req.body;
    const notes = new Todomodel({ title, category, userID });
    await notes.save();
    res.send("Notes Created");
  } catch (err) {
    res.status(500).send({ Error: "Something went wrong" });
  }
});
todoRouter.patch(`/update/:id`, async (req, res) => {
  try {
    const data = req.body;
    const id = req.params.id;
    const note = await Todomodel.findByIdAndUpdate({ _id: id });
    res.send("Updated");
  } catch (err) {
    res.send("Update Failed");
  }
});

todoRouter.delete(`/delete`, async (req, res) => {
  try {
  } catch (error) {
    res.status(400).send("Login Failed");
  }
});

module.exports = { todoRouter };
