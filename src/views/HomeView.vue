<template>
  <main>
    <h1>研修生コミュニティ</h1>
    <button @click="goToUsers">一覧</button>

  </main>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goToUsers = () => {
  router.push('/users')
}
</script>
