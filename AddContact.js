export default Vue.component("AddContact", {
    template: `
        <form action="" @submit.prevent="createContact">
            <h1>Ajouter un contact</h1>

            <label for="lastName">Nom</label>
            <input type="text" v-model="lastName" id="lastName">

            <label for="firstName">Prénom</label>
            <input type="text" v-model="firstName" id="firstName">

            <label for="phoneNumber">Téléphone</label>
            <input type="tel" v-model="phoneNumber" id="phoneNumber" maxlength="10">

            <label for="email">Email</label>
            <input type="email" v-model="email" id="email">

            <button id="addFormButton">Ajouter</button>
        </form>

        <div class="modal" v-if="showModal">
            <div class="modal-content">
                <span class="close" @click="closeModal">&times;</span>
                <p>{{ errorMessage }}</p>
            </div>
        </div>
    `,

    props: ['contacts'],

    data() {
        return {
            lastName: '',
            firstName: '',
            phoneNumber: '',
            email: '',
            showModal: false,
            errorMessage: ''
        };
    },

    methods: {
        createContact() {
            if (!this.lastName || !this.firstName || !this.phoneNumber || !this.email) {
                alert("Tous les champs sont obligatoires.");
                return;
            }

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(this.email)) {
                alert("Veuillez entrer une adresse email valide.");
                return;
            }

            const phonePattern = /^\d{10}$/;
            if (!phonePattern.test(this.phoneNumber)) {
                alert("Veuillez entrer un numéro de téléphone valide (10 chiffres).");
                return;
            }

            const contact = {
                lastName: this.lastName,
                firstName: this.firstName,
                phoneNumber: this.phoneNumber,
                email: this.email
            };
            this.contacts.push(contact);

            const toString = JSON.stringify(contact);
            localStorage.setItem(this.email, toString);

            this.lastName = '';
            this.firstName = '';
            this.phoneNumber = '';
            this.email = '';
        },
        showError(message) {
            this.errorMessage = message;
            this.showModal = true;
        }
    }
});