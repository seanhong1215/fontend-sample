<template>
  <div class="container">
    <div class="step">
      <div class="process">
        <i class="bi bi-1-circle-fill"></i>
        <span class="process-text">{{ $t('common.step1')}} </span>
      </div>
      <div class="process-line"></div>
      <div class="process">
        <i class="bi bi-2-circle-fill"></i>
        <span class="process-text">{{ $t('common.step2')}} </span>
      </div>
    </div>
    <Form class="form-wrap" v-slot="{ errors }" @submit="onSubmit">
      <h4 class="form-title">{{ $t('loginTitle')}}</h4>
      <p class="form-message">{{ $t('loginMessage')}}</p>
      <div class="form-container m-auto">
      <div class="mb-3 row g-0">
        <div class="col-12">
          <label for="InputName" class="form-label w-100 text-start">{{ $t('formFirstName')}}<span>*</span></label>
          <Field
            id="InputName"
            name="Name"
            type="text"
            class="form-control"
            :class="{ 'is-invalid': errors['Name'] }"
            placeholder="please enter Name"
            rules="required"
            v-model="form.user.firstName"
          ></Field>
          <error-message name="Name" class="invalid-feedback"></error-message>
        </div>
      </div>
      <div class="mb-3 row g-0">
        <div class="col-12">
          <label for="InputLastName" class="form-label w-100 text-start"
            >{{ $t('formLastName')}}<span>*</span></label
          >
          <Field
            id="InputLastName"
            name="LastName"
            type="text"
            class="form-control"
            :class="{ 'is-invalid': errors['LastName'] }"
            placeholder="please enter LastName"
            rules="required"
            v-model="form.user.lastName"
          ></Field>
          <error-message name="LastName" class="invalid-feedback"></error-message>
        </div>
      </div>
      <div class="d-flex justify-content-end">
        <button type="submit" class="btn btn-primary">{{ $t('common.continue')}} <i class="bi bi-arrow-right"></i></button>
      </div>
    </div>
  </Form>
  </div>
</template>

<script>
export default {
  name: "LoginMyData",
  data(){
    return {
      form: {
        user: {
          firstName: '',
          lastName: ''
        },
      },
    }
  },
  methods: {
    onSubmit(){
      if(this.form.user.firstName !== ''){
        this.$router.push({ path: '/step-2-payment' })
      }
    }
  }
};
</script>
<style lang="scss" scoped>
  .form-label > span {
    color: #e44d55;
  }
  .invalid-feedback {
    text-align: left;
  }

</style>
