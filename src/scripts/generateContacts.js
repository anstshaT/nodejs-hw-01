import { readContacts } from '../utils/readContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  const contactsList = await readContacts();
  const newContactsList = Array(number).fill(0).map(createFakeContact);
  await writeContacts([...contactsList, ...newContactsList]);
};

generateContacts(5);
