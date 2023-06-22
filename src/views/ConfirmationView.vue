<template>
  <div>
    <h2>確認画面</h2>

    <p>名前: {{ name }}</p>
    <p>メールアドレス: {{ email }}</p>

    <button @click="register">登録</button>
    <button @click="cancel">キャンセル</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useFormStore } from '@/stores/store';
import axios from 'axios';

const store = useFormStore();

const name = store.name;
const email = store.email;

const router = useRouter();

async function register() {
  const data = {
    name,
    email
  };

  try {
    const response = await axios.post('http://localhost:8080/api/create/confirm', data);
    console.log('登録が完了しました', response);
    router.push({ name: 'users' });
    store.clearForm();
  } catch (error) {
    console.error('エラー:', error);
  }
}

function cancel() {
  store.clearForm();
  router.push({ name: 'users' });
}
</script>
