const fs = require("fs/promises");
const contactsPath = require("./db/contacts.json");

// fs.readFile("./db/contacts.json", "utf-8")
//   .then((data) => console.log(data))
//     .catch((error) => console.log(error.message));

const readFile = async () => {
  const text = await fs.readFile("./db/contacts.json", "utf-8");
  console.log("text");
};
readFile();

module.exports = { contactsPath };
console.log(contactsPath);
