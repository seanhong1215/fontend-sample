<template>
       <nav class="navbar navbar-expand-lg">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav ms-auto">
      <li class="nav-item">
        <a class="nav-link" aria-current="page"><i class="bi bi-question-circle"></i>HELP</a>
      </li>
      <li class="nav-item">
        <a class="nav-link"><i class="bi bi-person-circle"></i>SIGN IN</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          {{ lang }}</a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="#" @click.prevent="handleChangeLang">{{ locale[0] }}</a></li>
            <li><a class="dropdown-item" href="#" @click.prevent="handleChangeLang">{{ locale[1] }}</a></li>
          </ul>
      </li>
    </ul>
  </div>
   </nav>
</template>
<script>
export default {
    name: 'Navbar',
    data() {
        return {
          locale: ['EN', 'CH'],
          lang: 'EN'
        }
    },
  methods: {
    handleChangeLang(e){
      if(e.target.innerText === 'EN'){
        this.$i18n.locale = 'en'
        this.lang = 'EN'
      }else if(e.target.innerText === 'CH'){
        this.$i18n.locale = 'zhCn'
        this.lang = 'CH'
      }
    },
  }
};
</script>
<style lang="scss" scoped>
ul, li {
  list-style: none;
}
.navbar{
    // max-width: 1200px;
    padding-right: 60px;
}
.nav-item{
    padding-left: 24px;
    i{
        color: #168BF1;
        margin-right: 8px;
    }
  }
</style>
