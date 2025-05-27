<template>
  <div>
      <h2>入居者情報入力</h2>
      <!-- モーダル -->
    <dataMod
      v-if="isModalOpen"
      :initialData="editingResident"
      @submit="handleSubmit"
      @close="closeModal"
    />

    <!-- 本体 -->
    <div>
      <P>選択中の入居者様は<span>{{selectedResident?.name || "未選択" }}</span>です</P>
      <p>ID：{{ selectedResidentId }}</p>
      <button :disabled="!selectedResidentId" @click="goToNextPage">入居者を確定する</button>
      
      <table>
        <tr v-for="resident in residents" :key="resident.id">
          <td>
            <input type="radio" class="residentId" name="residentId" :value="resident.id" v-model="selectedResidentId"/>
          </td>
          <td>{{ resident.name }}</td>
          <td><button @click="openEditModal(resident)">編集</button>
              <button @click="openEditModal(resident)">削除</button>
          </td>
        </tr>
      </table> 
      <!-- <ResidentForm /> 　明細部分だけコンポーネントに出来るか？-->
      <button @click="openAddModal">追加</button>
    </div>
  </div>

      
</template>

<script setup>
// import ResidentForm from '../components/ResidentForm.vue'
import { ref, computed } from 'vue'
import dataMod from '../components/dataMod.vue'
import { useRouter } from 'vue-router'

//テスト用データーーーーーーーーーーーーーーーーーーーー
//本番ではJSONから取得する
const residents = ref([
  { id: 1, name: '田中 太郎' },
  { id: 2, name: '山田 花子' }
])
//テスト用データーーーーーーーーーーーーーーーーーーーー

const selectedResidentId = ref(null)//入居者ID
const isModalOpen = ref(false)//モーダルの開閉フラグ
const editingResident = ref(null) //モーダルを何モードで開くか　 null: 追加モード、object: 編集モード
const router = useRouter()

// 選択中の入居者オブジェクトを取得する
const selectedResident = computed(() =>
  residents.value.find(r => r.id === selectedResidentId.value)
)



function goToNextPage() { // 処方薬情報一覧へ
  if (selectedResidentId.value) {
    router.push({
      name: 'prescriptionDrugsList', // ルート名（routes定義でつけた name）
      params: { residentId: selectedResidentId.value }
    })
  } else {
    alert('入居者を選択してください')
  }
}


//モーダル操作ーーーーーーーーーーーーーーーーーーーー

function openAddModal() { //追加モーダル起動
  editingResident.value = null
  isModalOpen.value = true
}

function openEditModal(resident) {//編集モーダル起動
  // オブジェクトのコピーを渡す
  editingResident.value = { ...resident }
  isModalOpen.value = true
}

function closeModal() {//モーダルを閉じる
  isModalOpen.value = false
}


</script>
