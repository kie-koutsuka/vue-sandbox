<template>

  <!-- モーダル -->
  <dataMod
    v-if="isModalOpen"
    :initialData="editingResident"
    @submit="handleSubmit"
    @close="closeModal"
  />

  <!-- 本体 -->
  <div>
    <table>
      <tr v-for="resident in residents" :key="resident.id">
        <td>{{ resident.id }}</td>
        <td>{{ resident.name }}</td>
        <td><button @click="openEditModal(resident)">編集</button></td>
      </tr>
    </table>  
    <button @click="openAddModal">追加</button>
  </div>
</template>


<script setup>
import { ref } from 'vue'
import dataMod from './dataMod.vue'

const residents = ref([
  { id: 1, name: '田中 太郎' },
  { id: 2, name: '山田 花子' }
])

const isModalOpen = ref(false)
const editingResident = ref(null) // null: 追加モード、object: 編集モード

function openAddModal() {
  editingResident.value = null
  isModalOpen.value = true
}

function openEditModal(resident) {
  // オブジェクトのコピーを渡す
  editingResident.value = { ...resident }
  isModalOpen.value = true
}

function closeModal() {
  isModalOpen.value = false
}

</script>