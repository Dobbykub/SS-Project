<template>
  <div class="container mt-5">
    <h1 class="mb-4">Create Microwave</h1>
    <form v-on:submit.prevent="createMicrowave">
      <div class="form-group">
        <label for="name">ชื่อ:</label>
        <input type="text" class="form-control" id="name" v-model="microwave.name">
      </div>
      <div class="form-group">
        <label for="power">กำลัง:</label>
        <input type="text" class="form-control" id="power" v-model="microwave.power">
      </div>
      <div class="form-group">
        <label for="price">ราคา:</label>
        <input type="text" class="form-control" id="price" v-model="microwave.price">
      </div>
      <div class="form-group">
        <label for="usage">วิธีการใช้งาน:</label>
        <input type="text" class="form-control" id="usage" v-model="microwave.usage">
      </div>
      <div v-if="showError" class="alert alert-danger mt-3">
        โปรดใส่กำลังและราคาเป็นตัวเลข
      </div>
      <button type="submit" class="create-button">Create Microwave</button>
      <button v-on:click="navigateTo('/microwaves')" class="home-button">กลับ</button>
    </form>
  </div>
</template>


<script>
import MicrowaveService from '@/services/MicrowaveService'
export default {
    data() {
        return {

            microwave: {
            name: "",
            power: "",
            price: "",
            usage: "",
            }
        }
    },
    methods: {
      async createMicrowave() {
  try {
    const response = await MicrowaveService.post(this.microwave);
    // ตรวจสอบข้อมูลที่คืนกลับจากเซิร์ฟเวอร์
    console.log('รายละเอียดการสร้างไมโครเวฟ:', response.data);
    // ทำการเปลี่ยนหน้าไปยังหน้าสมุดโทรศัพท์หลังจากสร้างไมโครเวฟสำเร็จ
    this.$router.push({
      name: 'microwaves',
    });
  } catch (error) {
    console.error('เกิดข้อผิดพลาดในการสร้างไมโครเวฟ:', error);
    // แสดงข้อความข้อผิดพลาดที่ได้จากเซิร์ฟเวอร์ (ถ้ามี)
    if (error.response && error.response.data) {
      console.error('ข้อความข้อผิดพลาดจากเซิร์ฟเวอร์:', error.response.data);
    }
  }
}

}
};
</script>

<style scoped>
.container {
  max-width: 400px;
}

.form-group {
  margin-bottom: 20px;
}

.alert {
  padding: 10px;
}

.form-control-file {
  background-color: transparent;
  border: 1px solid #ccc;
}

.create-button {
  background-color: #007bff;
  /* สีน้ำเงิน */
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  margin-right: 5px;
}
.home-button {
  background-color: #674397;
  /* สีน้ำเงิน */
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  margin-right: 5px;
}
</style>
