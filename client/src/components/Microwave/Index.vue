<template>
  <div>
    <h2>Get all microwave</h2>
    <router-link to="/microwave/create" class="btn btn-primary">
      <p>Create Microwave</p>
      
    </router-link>
    <hr>
    <div v-for="microwave in microwaves" :key="microwave.id">
      <p>ID : {{ microwave.id }}</p>
      <p>ชื่อ : {{ microwave.name }} </p>
      <p>กำลัง : {{ microwave.power }}</p>
      <p>ราคา : {{ microwave.price }}</p>
      <p>วิธีการใช้งาน : {{ microwave.usage }}</p>
      <button @click="navigateTo('/microwave/' + microwave.id)" class="view-button">
        ดูข้อมูลไมโครเวฟ
      </button>
      <button @click="navigateTo('/microwave/edit/' + microwave.id)" class="edit-button">
        Edit
      </button>
      <button @click="deleteMicrowave(microwave.id)" class="delete-button">
        Delete
      </button>
      <hr>
    </div>
  </div>
</template>

<script>
import MicrowaveService from '@/services/MicrowaveService';

export default {
  data() {
    return {
      microwaves: [],
    };
  },
  methods: {
    async fetchData() {
      try {
        const response = await MicrowaveService.index();
        this.microwaves = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    navigateTo(route) {
      this.$router.push(route);
    },
    async deleteMicrowave(microwaveId) {
      const confirmed = window.confirm("Are you sure you want to delete this microwave?");
      if (confirmed) {
        try {
          await MicrowaveService.delete({ id: microwaveId });
          this.fetchData();
        } catch (error) {
          console.error(error);
        }
      }
    },
  },
  created() {
    this.fetchData();
  },
};
</script>

<style scoped>
.view-button {
  background-color: #28a745;
  
  color: #fff;
  
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  margin-right: 5px;
}

.edit-button {
  background-color: #007bff;
 
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  margin-right: 5px;
}

.delete-button {
  background-color: #dc3545;
  
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  margin-right: 5px;
}</style>
