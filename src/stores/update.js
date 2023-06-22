import { defineStore } from 'pinia';

export const updateStore = defineStore('update', {
    state: () => ({
        name: '',
        email: '',
    }),
    actions: {
        setName(name) {
            this.name = name;
        },
        setEmail(email) {
            this.email = email;
        },
        clearForm() {
            this.name = '';
            this.email = '';
        },
    },
});

export const useUpdateStore = () => {
    return updateStore();
};