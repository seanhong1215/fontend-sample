<template>
  <div class="container">
    <div class="step">
      <i class="bi bi-1-circle-fill"></i>
      <span class="process-line"></span>
      <i class="bi bi-2-circle-fill"></i>
    </div>
    <form class="form-wrap">
      <h4>My Data</h4>
      <p>Please enter your personal data and press continue</p>
      <div class="form-container m-auto">
      <div class="mb-3 row g-0">
        <div class="col-12">
          <label for="InputName" class="form-label w-100 text-start">Name<span>*</span></label>
          <input type="text" class="form-control col-6" id="InputName" />
        </div>
      </div>
      <div class="mb-3 row g-0">
        <div class="col-12">
          <label for="InputLastName" class="form-label w-100 text-start"
            >Last Name<span>*</span></label
          >
          <input type="text" class="form-control col-6" id="InputLastName" />
        </div>
      </div>
      <div class="d-flex justify-content-end">
        <button type="submit" class="btn btn-primary" @click="myData">Continue</button>
      </div>
    </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "LoginMyData",
  data(){
    return {
    }
  },
  methods: {
    myData(){
      this.$router.push({ path: '/checkout/step-2-payment' })
    }
  }
};
</script>
<style lang="scss" scoped>
  .form-label > span {
    color: red;
  }
</style>
