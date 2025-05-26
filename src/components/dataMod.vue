<template>
  <div class="modal">
    <div class="modal-content">
      <h3>{{ form.id ? '編集' : '追加' }}フォーム</h3>
      <form @submit.prevent="submit">
        <input v-model="form.name" placeholder="名前を入力" />
        <button type="submit">保存</button>
        <button type="button" @click="$emit('close')">キャンセル</button>
      </form>
      </div>
  </div>
</template>

<script setup>
import { reactive, watch, toRefs } from 'vue'
const props = defineProps({
  initialData: Object
})

const emit = defineEmits(['submit', 'close'])

const form = reactive({
  id: null,
  name: ''
})

// propsが変わったらフォームに反映
watch(() => props.initialData,
 (newVal) => {
                if (newVal) {
                  form.id = newVal.id
                  form.name = newVal.name
                } else {
                  form.id = null
                  form.name = ''
                }
              },
 { immediate: true }
)

function submit() {
  emit('submit', { ...form })
}
</script>

<style>
.modal {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
}
.modal-content {
  background: white;
  padding: 1rem;
  margin: 5% auto;
  width: 300px;
}
</style>