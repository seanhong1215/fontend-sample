<template>
  <Loading :active="isLoading"></Loading>
  <div class="container">
    <div class="step">
      <div class="process">
        <i class="bi bi-check-circle-fill"></i>
        <span class="process-text">{{ $t('common.step1')}} </span>
      </div>
      <div class="process-line"></div>
      <div class="process" v-if="isLoading">
        <i class="bi bi-2-circle-fill" style="color: #1BA1E2;"></i>
        <span class="process-text">{{ $t('common.step2')}} </span>
      </div>
      <div class="process" v-else>
        <i class="bi bi-check-circle-fill" style="color: #198754;"></i>
        <span class="process-text">{{ $t('common.step2')}} </span>
      </div>
    </div>
    <form class="form-wrap">
      <div class="form-container m-auto">
        <h2 ref="orderTitle" >{{ $t('orderTitle') }}</h2>
        <img src="@/assets/img/certification-award-svgrepo-com.svg" alt="certification-award" width="80"/>
        <p ref="orderMessage" class="text-center">{{ $t('orderMessage') }}</p>
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
      isLoading: true,
    };
  },

  mounted(){
    this.$refs.orderTitle.innerText = ''
    this.$refs.orderMessage.innerText = ''
    apiData().then((res)=> {
      this.isLoading = false;
      if(this.$i18n.locale !== 'en'){
        this.$refs.orderTitle.innerText = res.data.title.zh_CN;
        this.$refs.orderMessage.innerText = res.data.message.zh_CN;
      } else {
        this.$refs.orderTitle.innerText = res.data.title.en;
        this.$refs.orderMessage.innerText = res.data.message.en;
      }
    })
  }
};
</script>

<style lang="scss" scoped>
.step {
  .process:first-child i{
    color: #198754;
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
