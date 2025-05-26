<template>
  <div>
    <h1>服薬管理表印刷システム</h1>
    <ul>
        <li><router-link to="/residentsList">入居者情報</router-link></li>
        <li><router-link to="/clinicList">処方医院</router-link></li>
        <li><router-link to="/drugList">薬名称</router-link></li>
    </ul>
      <!-- <router-link to="/prescriptionDrugsList/:residentsId?run">服薬情報</router-link> -->
    <router-view />
  </div>
  
</template>

<style>
ul {
  display: flex;
}

li {
  list-style: none;
  margin: 5px;
}

</style>