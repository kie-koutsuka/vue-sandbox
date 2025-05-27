<template>
  <div>
    <h2>処方薬情報一覧</h2>
     <p>選択された入居者IDは {{ residentId }}</p>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
const residentId = route.params.residentId
</script>
