<template>
  <div class="container">
    <div class="step">
      <i class="bi bi-check-circle-fill"></i>
      <span class="process-line"></span>
      <i class="bi bi-2-circle-fill"></i>
    </div>
    <form class="form-wrap">
      <h4>Payment</h4>
      <p>
        After making the payment you will receive a confirmation email with
        details of your purchase
      </p>
      <div class="form-container m-auto">
        <div class="media-area">
          <img src="@/assets/credit-card.png" alt="" width="80">
          <h4>Credit Card</h4>
          <p class="text-center">You will be redirected to a secure payment platform. This is a
secure process. The validation of your payment can take up to

24 hours.</p>
<img src="" alt="">
        </div>
        <div class="d-flex justify-content-between">
          <button type="submit" class="btn btn-primary" @click.prevent="back">
            Back
          </button>
          <button type="submit" class="btn btn-primary" @click.prevent="pay">
            Pay
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "PaymentView",
  data() {
    return {};
  },
  methods: {
    back() {
      this.$router.push({ path: "/checkout/step-1-my-data" });
    },
    pay() {
      this.$router.push({ path: "/checkout/step-3-order-confirmation" });
    },
  },
};
</script>

<style lang="scss" scoped>
.step {
  i:first-child {
    color: green;
  }
}
.form-container {
  padding: 30px;
}
.media-area {
  border: 1px solid #c4c4c4;
  margin-bottom: 40px;
  padding: 30px 15px;
}
</style>
