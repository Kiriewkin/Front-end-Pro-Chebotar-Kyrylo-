const contactData = {
    contacts: [
        {contactName:'Ihor', contactEmail:'ihor@gmail.com', contactNumber:'+38068686801'},
        {contactName:'Kyrylo', contactEmail:'kyrylo@gmail.com', contactNumber:'+38068686802'},
        {contactName:'Antonina', contactEmail:'antonina@gmail.com', contactNumber:'+38068686803'},
    ],

    searchUser: function (contactName) {
        return this.contacts.find(contact => contact.contactName === contactName) || null;
    },

    addNewContact: function (contactName, contactEmail, contactNumber) {
        this.contacts.push({
            contactName: contactName,
            contactEmail: contactEmail,
            contactNumber: contactNumber
        })
    },
}

const foundContact = contactData.searchUser('Ihor');
console.log(foundContact);

contactData.addNewContact('Olena', 'olena@gmail.com', '+38068686804');
console.log(contactData.contacts);
