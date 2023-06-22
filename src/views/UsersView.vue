<template>
  <div class="users">
    <h1>研修生一覧</h1>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>名前</th>
          <th>メールアドレス</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>
            <button @click="deleteUserConfirmation(user)">削除</button>
            <button @click="updateUserConfirmation(user)">編集</button>
          </td>
        </tr>
      </tbody>
    </table>

    <button @click="goToCreateUser">新規作成</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import { useUpdateStore } from '@/stores/update';

const users = ref([]);
const router = useRouter();
const store = useUpdateStore();

function goToCreateUser() {
  router.push('/create');
}

function deleteUserConfirmation(user) {
  const confirmed = confirm(` "${user.name}" を消しますか？`);
  if (confirmed) {
    deleteUser(user.id);
  }
}
function updateUserConfirmation(user) {
  store.id = user.id
  router.push('/update');
}


onMounted(() => {
  fetchData();
});

async function fetchData() {
  try {
    const response = await axios.get('http://localhost:8080/api/users');
    users.value = response.data;
  } catch (error) {
    console.error(error);
  }
}
async function deleteUser(userId) {
  try {
    await axios.delete(`http://localhost:8080/api/delete/${userId}`);
    await fetchData();
  } catch (error) {
    console.error(error);
  }
}

</script>

<style></style>
