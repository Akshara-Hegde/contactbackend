const asyncHandler = require("express-async-handler");
const Contact = require("../model/model");

const getAll = asyncHandler(async (req, res) => {
  console.log(req.user.id)
  const contacts = await Contact.find({user_id: req.user.id});
  res.status(200).json(contacts);
});


const create = asyncHandler(async (req, res) => {
  console.log("The request body is :", req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are mandatory !");
  }
  const contact = await Contact.create({
    name,
    user_id: req.user.id,
    email,
    phone,
  });

  res.status(201).json(contact);
});

const getUser = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  res.status(200).json(contact);
});


const updateData = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }

  if (contact.user_id.toString() !== req.user.id) {
    res.status(403);
    console.log("inside update")
    throw new Error("User don't have permission to update other user contacts");
  }

  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json(updatedContact);
});


const deleteData = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  // if (contact.user_id.toString() !== req.user.id) {
  //   res.status(403);
  //   throw new Error("User don't have permission to update other user contacts");
  // }
  await Contact.deleteOne({ _id: req.params.id });
  res.status(200).json(contact);
});


module.exports = {
  getAll,
  create,
  getUser,
  updateData,
  deleteData,

};