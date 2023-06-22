import { defineStore } from 'pinia';
//import { ref, computed } from 'vue';

// export const counterStore = defineStore('counter', () => {
//   const count = ref(0);
//   const doubleCount = computed(() => count.value * 2);
//   function increment() {
//     count.value++;
//   }

//   return { count, doubleCount, increment };
// });

export const formStore = defineStore('form', {
  state: () => ({
    id: null,
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

export const useFormStore = () => {
  return formStore();
};
