<template>
  <el-container>
    <el-header><v-header :user="user"></v-header></el-header>
    <el-container>
      <el-aside><v-menu></v-menu></el-aside>
      <el-container>
        <el-main><router-view></router-view></el-main>
        <!--<el-footer>Footer</el-footer>-->
      </el-container>
    </el-container>
  </el-container>
</template>
<script>
  import header from '../components/header/header.vue';
  import menu from '../components/menu/menu.vue';
  export default {
    data () {
      return {
        user: {
          name: "OverrideRe"
        }
      };
    },
    created () {
    },
    beforeCreate () {
    },
    components: {
      'v-header': header,
      'v-menu': menu
    }
  };
</script>
<style scoped>

  body {
    font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif;
    background-color: #fff;
  }

  .el-header{
    padding:0px;
  }

  .el-aside{
    border-right: solid 1px #ccc;
  }

  .el-container{
    height: 100%;
  }

</style>

