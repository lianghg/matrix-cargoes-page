<template>
  <el-row :gutter="20">
    <el-col :span="4">
      <img src="./logo.svg" alt="logo" class="header-logo">
    </el-col>
    <el-col :span="18">
      <div class="grid-content bg-purple"></div>
    </el-col>
    <el-col :span="2">
      <el-dropdown>
      <span class="el-dropdown-link">
        操作<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown></el-col>
  </el-row>
</template>
<script>
  export default {
    props: {
      user: {
      }
    },
    data () {
      return {
      };
    },
  };
</script>
<style>
 .el-row,.el-col{
   margin: 0;
   background-color: #77468f;
   height: 100%;
 }

 .header-logo{
   margin: 10px;
 }
  .el-dropdown{
    color:#fff;
    margin-right: 10px;
  }
  .v-header{
    width: 100%;
    height:100%;

  }
  .el-dropdown{
    margin: 18px;
    width: 80px;
  }
</style>
