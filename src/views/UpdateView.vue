<template>
    <div>
        <h1>研修生 編集 確認</h1>
        <div>
            <label>ID: </label>
            <span>{{ store.id }}</span>
        </div>
        <div>
            <label>名前: </label>
            <input type="text" v-model="store.name" />
        </div>
        <div>
            <label>メールアドレス: </label>
            <input type="email" v-model="store.email" />
        </div>
        <button @click="updateUser">更新</button>
        <button @click="cancelUpdate">キャンセル</button>
    </div>
</template>
  
<script setup>
import { useUpdateStore } from '@/stores/update';
import { useRouter } from 'vue-router';
import axios from 'axios';

const store = useUpdateStore();
const router = useRouter();

async function updateUser() {
    try {
        const updatedUser = {
            id: store.id,
            name: store.name,
            email: store.email,
        };

        await axios.put(`http://localhost:8080/api/update/${store.id}`, updatedUser);
        console.log('ユーザーが更新されました');
        router.push('/users');
        store.clearForm();
    } catch (error) {
        console.error(error);
    }
}

async function cancelUpdate() {
    router.push('/users');
    store.clearForm();
}
</script>
  