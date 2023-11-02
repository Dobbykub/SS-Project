<template>
  <div>
    <h1>Edit Microwave</h1>
    <form v-on:submit.prevent="editMicrowave">
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
      <p>
        <button type="submit" class="edit-button">Submit</button>
        <button v-on:click="navigateTo('/microwaves')" class="home-button">กลับ</button>

      </p>
    </form>
    <hr>
  </div>
</template>

<script>
import MicrowaveService from "@/services/MicrowaveService";

export default {
  data() {
    return {
      microwave: {
        id: null, // เพิ่มฟิลด์ id เพื่อเก็บรหัสของไมโครเวฟ
        name: "",
        power: "",
        price: "",
        usage: "",
      },
    };
  },
  methods: {
        async editMicrowave() {
            try {
                await MicrowaveService.put(this.microwave);
                this.$router.push({
                    name: 'microwaves'
                })
            } catch (err) {
                console.log(err)
            }
        }
    },
    async created() {
        try {
            let microwaveId = this.$route.params.microwaveId
            this.microwave = (await MicrowaveService.show(microwaveId)).data
        } catch (error) {
            console.log(error)
        }
    }
}
</script>

<style scoped>
.form-group {
  margin-bottom: 20px;
}

.edit-button {
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
