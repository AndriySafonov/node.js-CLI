console.log('Welkome to Node.js!');

const contacts = require('./db/contacts');

const invokeActions = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case 'read':
      const allContacts = await contacts.listContacts();
      return console.log(allContacts);
    case 'getById':
      const oneContact = await contacts.getContactById(id);
      return console.log(oneContact);
  }
};

// invokeActions({ action: 'read' });
invokeActions({ action: 'getById', id: 'AeHIrLTr6JkxGE6SN-0Rw' });

// // Виклик функції для виведення списку контактів
// contacts.listContacts();

// // Виклик функції для отримання контакту за ідентифікатором
// const contactId = "9o5z76778"; // Задайте власний ідентифікатор контакту
// contacts.getContactById(contactId);

// // Виклик функції для видалення контакту за ідентифікатором
// contacts.removeContact(contactId);

// // Виклик функції для додавання нового контакту
// const newName = "John Doe"; // Задайте власні дані для нового контакту
// const newEmail = "john.doe@example.com";
// const newPhone = "(123) 456-7890";
// contacts.addContact(newName, newEmail, newPhone);