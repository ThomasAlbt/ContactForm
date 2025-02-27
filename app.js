import AddContact from "./AddContact.js"
import ShowContact from "./ShowContact.js"

new Vue ({
    el:"#app",
    components: { AddContact, ShowContact },
    
    data: {
        contacts: [],
    },

    methods: {
        loadContact() {
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                const contact = JSON.parse(localStorage.getItem(key));
                this.contacts.push(contact);
            }
        },
        save() {
            for (let i = 0; i < this.contacts.length; i++) {
                const contact = this.contacts[i];
                const toString = JSON.stringify(contact);
                localStorage.setItem(contact.email, toString);
            }
        },
        deleteContact(email) {
            if(confirm("Vous etes sur de vouloir supprimer ce contact ?")) {
                this.contacts = this.contacts.filter(contact => contact.email !== email);
                localStorage.removeItem(email);
            }
        }
    },

    created() {
        this.loadContact()
    }
})