<template>
  <div class="list_header_container">
    <h1>Currency Process List</h1>
    <button @click="ToBack()" class="list_header_btn">Go Back</button>
  </div>
</template>

<script>
export default {
  methods: {
    ToBack() {
      this.$router.push("/main");
    },
  },
};
</script>

<style>
.list_header_container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.list_header_btn {
  border-radius: 20px;
  border: none;
  width: 100px;
  height: 50px;
  cursor: pointer;
  background: cornflowerblue;
  color: white;
}
</style>
