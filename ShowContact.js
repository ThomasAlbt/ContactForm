export default Vue.component("ShowContact", {
    props: ['contact'],

    methods: {
        deleteContact() {
            this.$emit('delete-contact', this.contact.email);
        }
    },

    template: `
    <div class="showContact">
        <p>{{ contact.lastName }}</p>
        <p>{{ contact.firstName }}</p>
        <p>{{ contact.phoneNumber }}</p>
        <p class="email">{{ contact.email }}</p>
        <i class="fa-solid fa-pen-to-square"></i>
        <i class="fa-solid fa-delete-left" @click="deleteContact"></i>
    </div>  
    `,
})