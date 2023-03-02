<template>
  <Loading :active="isLoading"></Loading>
  <div class="container">
    <div class="step">
      <i class="bi bi-check-circle-fill"></i>
      <span class="process-line"></span>
      <i class="bi bi-check-circle-fill"></i>
    </div>
    <form class="form-wrap">
      <div class="form-container m-auto">
        <h2>{{ form.title }}</h2>
        <img src="@/assets/work-order.png" alt="" />
        <p class="text-center">{{ form.message }}</p>
      </div>
    </form>
  </div>
</template>

<script>
import {apiData} from '@/utils/api.js';
export default {
  name: 'OrderConfirm',
  data() {
    return {
      isLoading: false,
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
        title: '',
      },
    };
  },

  mounted(){
    apiData().then((res)=> {
      this.isLoading = true,
      this.form.title = res.data.title.zh_CN;
      this.form.message = res.data.message.zh_CN;
      this.isLoading = false;
    })
  }
};
</script>

<style lang="scss" scoped>
.step {
  i {
    color: green;
  }
}
.form-container{
  h2{
    margin-bottom: 30px;
  }
  p{
    padding: 20px 0;
  }
}
</style>
