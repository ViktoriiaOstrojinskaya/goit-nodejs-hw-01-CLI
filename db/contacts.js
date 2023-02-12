const fs = require("fs/promises");
const path = require("path");
const uuid = require("uuid");

const contactsPath = path.join(__dirname, "contacts.json");

async function listContacts() {
  const data = await fs.readFile(contactsPath);
  const result = JSON.parse(data);
  return result;
}
// listContacts().then((value) => console.log(value));

async function getContactById(contactId) {
  const data = await listContacts();
  const result = data.find((item) => item.id === contactId);
  return result ? result : null;
}
// getContactById("5").then((value) => console.log(value));

async function removeContact(contactId) {
  const data = await listContacts();
  const index = data.findIndex((contact) => contact.id === contactId);
  const removedContact = data[index];

  if (index === -1) {
    data.splice(index, 1);
    await fs.writeFile(contactsPath, JSON.stringify(data));
  }
  return removedContact ? removedContact : null;
}
// removeContact("2");

async function addContact(name, email, phone) {
  const data = await listContacts();
  const newContact = {
    id: uuid.v4(),
    name,
    email,
    phone,
  };
  data.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(data));
  return newContact;
}
// addContact("Agapio", "agapio@gmail.com", "719-234-5555");

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
