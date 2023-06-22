<template>
  <div>
    <h2>新規作成</h2>

    <form @submit.prevent="submitForm">
      <div>
        <label for="name">名前:</label>
        <input id="name" type="text" v-model="name" />
      </div>

      <div>
        <label for="email">メールアドレス:</label>
        <input id="email" type="email" v-model="email" />
      </div>

      <button type="submit">確認</button>
      <button type="button" @click="cancel">キャンセル</button>
    </form>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useFormStore } from '@/stores/store';

const router = useRouter();
const store = useFormStore();

let name = store.name;
let email = store.email;

function submitForm() {
  store.setName(name);
  store.setEmail(email);
  router.push({ name: 'confirmation' });
}

function cancel() {
  store.clearForm();
  router.push({ name: 'users' });



}
</script>
