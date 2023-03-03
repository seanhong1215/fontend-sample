<template>
  <div class="container">
    <div class="step">
      <div class="process">
        <i class="bi bi-check-circle-fill"></i>
        <span class="process-text">{{ $t('common.step1')}} </span>
      </div>
      <div class="process-line"></div>
      <div class="process">
        <i class="bi bi-2-circle-fill"></i>
        <span class="process-text">{{ $t('common.step2')}} </span>
      </div>
    </div>
    <form class="form-wrap">
      <h4 class="form-title">{{ $t('paymentTitle')}}</h4>
      <p class="form-message">
        {{ $t('paymentMessage')}}
      </p>
      <div class="form-container m-auto">
        <div class="media-area">
          <img src="@/assets/img/credit-card.png" alt="credit-card" width="80">
          <h4>{{ $t('creditCardTitle')}}</h4>
          <p class="text-center">{{ $t('creditCardMessage')}}</p>
          <div class="media-wrap d-flex justify-content-center">
            <img src="@/assets/img/Visa_Logo.png" alt="Visa" width="60">
            <img src="@/assets/img/Mastercard-logo.png" alt="Mastercard" width="60">
          </div>
        </div>
        <div class="d-flex justify-content-between">
          <button type="button" class="btn btn-primary" @click.prevent="back">
            <i class="bi bi-arrow-left"></i>{{ $t('common.btnBack')}} 
          </button>
          <button type="button" class="btn btn-primary" @click.prevent="pay">
            {{ $t('common.btnPay')}} <i class="bi bi-arrow-right"></i>
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
      this.$router.push({ path: "/" });
    },
    pay() {
      this.$router.push({ path: "/step-3-order-confirmation" });
    },
  },
};
</script>

<style lang="scss" scoped>
.step {
  .process:first-child i{
    color: #198754;
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
.media-wrap img:first-child {
  margin-right: 12px;
}
.btn:first-child i {
  margin-right: 4px;
}

</style>
