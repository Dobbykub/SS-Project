<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    
    <div class="grid-container">
      <router-link to="/microwaves" class="grid-item">
        <img src="./pic/microwave1.jpg" alt="Microwave 1" />
        <p>ดูข้อมูลMicrowaveทั้งหมด</p>
      </router-link>
      <router-link to="/microwave/create" class="grid-item" >
        <img src="./pic/microwave2.jpg" alt="Microwave 2" class="small-image"/>
        <p>Create Microwave</p>
      </router-link>
      <router-link to="/microwave/edit/:microwaveId" class="grid-item">
        <img src="./pic/microwave3.jpg" alt="Microwave 3" class="small-image"/>
        <p>Edit Microwave</p>
      </router-link>
      <!--<router-link to="/microwave/:microwaveId" class="grid-item">
        <img src="./pic/microwave1.jpg" alt="Microwave 4" />
        <p>login</p>
      </router-link>
      <router-link to="/user/create" class="grid-item">
        <img src="./pic/microwave1.jpg" alt="Microwave 5" />
        <p>ไมโครเวฟ</p>
      </router-link>
      <router-link to="/page6" class="grid-item">
        <img src="./pic/microwave1.jpg" alt="Microwave 6" />
        <p>ไมโครเวฟ</p>
      </router-link>-->
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Microwave',
    };
  },
};
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
.grid-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* แบ่งเป็น 2 คอลัมน์ */
  grid-gap: 20px; /* ระยะห่างระหว่างคอลัมน์และแถว */
  
}
.grid-item {
  border: 1px solid #ccc;
  padding: 10px;
  text-align: center;

}

.small-image {
  max-width: 80%; /* ปรับขนาดความกว้างของรูปภาพ */
  max-height: 72%; /* ปรับขนาดความสูงของรูปภาพ */
}


img {
  width: 100%;
  height: auto;
}
a {
  color: #42b983;
  text-decoration: none;
}
</style>
