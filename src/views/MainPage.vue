<template>
  <div class="container">
    <div class="select_container">
      <div class="form_div">
        <span>Currency</span>
        <select class="select" v-model="currency">
          <option v-for="(value, index) in currencyList" :key="index">
            {{ value.id }}
          </option>
        </select>
      </div>

      <div class="form_div">
        <span>To Currency</span>
        <select class="select" v-model="to_currency">
          <option v-for="(value, index) in currencyList" :key="index">
            {{ value.id }}
          </option>
        </select>
      </div>
    </div>

    <br />
    <br />

    <div class="form_div">
      <span>Amount</span>
      <input class="amount_input" type="number" v-model="amount" />
    </div>

    <br />
    <br />

    <div class="btn_container">
      <button class="send_btn" @click="sendForm()">Send</button>
      <button class="route_btn" @click="ToProcessList()">Process List</button>
    </div>

    <br />
    <br />

    <div class="result_container">
      <p class="result_txt">{{ result }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainPage",
  data() {
    return {
      currencyList: [],
      currency: {},
      to_currency: {},
      amount: "",
      result: "",
    };
  },
  created: function () {
    this.$axios
      .get(
        `https://free.currconv.com/api/v7/currencies?apiKey=8c988b8e5a2cedc31e03`
      )
      .then((res) => {
        this.currencyList = [
          res.data.results.AUD,
          res.data.results.AZN,
          res.data.results.BGN,
          res.data.results.BHD,
          res.data.results.CAD,
          res.data.results.CHF,
          res.data.results.CNY,
          res.data.results.EUR,
          res.data.results.GBP,
          res.data.results.JPY,
          res.data.results.KRW,
          res.data.results.QAR,
          res.data.results.RUB,
          res.data.results.SAR,
          res.data.results.TRY,
          res.data.results.USD,
        ];
      });
  },
  methods: {
    sendForm() {
      this.$axios
        .get(
          `https://free.currconv.com/api/v7/convert?q=${this.currency}_${this.to_currency}&compact=ultra&apiKey=8c988b8e5a2cedc31e03`
        )
        .then((res) => {
          this.$store.commit("setCurrencyProcessList", {
            currency: this.currency,
            to_currency: this.to_currency,
            amount: this.amount,
            result:
              JSON.stringify(res.data).split(":")[1].split("}")[0] *
              this.amount,
          });
          this.result =
            JSON.stringify(res.data).split(":")[1].split("}")[0] * this.amount;
        });
    },
    ToProcessList() {
      this.$router.push("/process_list");
    },
  },
};
</script>

<style>
.container {
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.form_div {
  display: flex;
  flex-direction: column;
}

span {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
}

.select_container {
  width: 50%;
  justify-content: space-around;
  display: flex;
}
.select {
  width: 150px;
  height: 30px;
  border: 1px solid cornflowerblue;
  border-radius: 10px;
}

.amount_input {
  width: 200px;
  height: 20px;
  border-radius: 10px;
  border: 1px solid cornflowerblue;
}

.btn_container {
  display: flex;
  width: 50%;
  justify-content: space-around;
}

.send_btn {
  width: 100px;
  height: 30px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  background: cornflowerblue;
  color: white;
}

.route_btn {
  width: 100px;
  height: 30px;
  border-radius: 20px;
  border: 1px solid cornflowerblue;
  cursor: pointer;
  background: white;
  color: cornflowerblue;
}

.result_container {
  width: 50%;
  background: cornflowerblue;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.result_txt {
  color: white;
  font-size: 20px;
  font-weight: bold;
}
</style>
