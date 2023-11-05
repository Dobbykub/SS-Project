<template>
    <div>
        <h1>Get Microwave By Id</h1>
        <hr>
        <p>ID : {{ microwave.id }}</p>
        <p>ชื่อ : {{ microwave.name }}</p>
        <p>กำลัง : {{ microwave.power }}</p>
        <p>ราคา : {{ microwave.price }}</p>
        <p>วิธีการใช้งาน : {{ microwave.usage }}</p>
        <p>
            <button v-on:click="navigateTo('/microwave/edit/' + microwave.id)" class="edit-button">แก้ไขไมโคเวฟ</button>
            <button v-on:click="navigateTo('/microwaves')" class="home-button">กลับ</button>
        </p>
        <hr>
    </div>
</template>

<script>
import MicrowaveService from '@/services/MicrowaveService'

export default {
  data() {
    return {
      microwave: null,
    };
  },
  async created() {
    try {
      let microwaveId = this.$route.params.microwaveId;
      this.microwave = (await MicrowaveService.show(microwaveId)).data;
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    async deleteMicrowave(microwave) {
      let result = confirm("ต้องการลบใช่ไหม ?");
      if (result) {
        try {
          await MicrowaveService.remove(microwave.id);
          this.refreshData();
        } catch (err) {
          console.log(err);
        }
      }
    },
  },
};
</script>

<style scoped>
.edit-button {
  background-color: #007bff;
  
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  margin-right: 5px;
}
.home-button {
  background-color: #674397;
  
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  margin-right: 5px;
}
</style>

