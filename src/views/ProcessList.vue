<template>
  <div>
    <ListHeader />
    <table>
      <tr>
        <th>Currency</th>
        <th>To Currency</th>
        <th>Amount</th>
        <th>Result</th>
        <th>Delete</th>
      </tr>
      <tr v-for="(value, index) in getCurrencyProcessList" :key="index">
        <th>{{ value.currency }}</th>
        <th>{{ value.to_currency }}</th>
        <th>{{ value.amount }}</th>
        <th>{{ value.result }}</th>
        <th class="delete_row">
          <button @click="DeleteProcessListItem(index)">X</button>
        </th>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ListHeader from "../components/ListHeader.vue";

export default {
  components: {
    ListHeader,
  },
  computed: {
    ...mapGetters({
      getCurrencyProcessList: "_getCurrencyProcessList",
    }),
  },
  methods: {
    DeleteProcessListItem(index) {
      this.$store.commit("deleteCurrencyProcessListItem", {
        index,
      });
    },
  },
};
</script>

<style scoped>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}

.delete_row {
  display: flex;
  align-items: center;
  justify-content: center;
}

.delete_row button {
  background: red;
  color: white;
  border: none;
  height: 30px;
  width: 30px;
  border-radius: 15px;
  cursor: pointer;
}
</style>
