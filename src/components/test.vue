<template>
  <el-container style="height: 500px; border: 1px solid #eee">

    <el-main>
      <!--<ul>-->
        <!--<li v-for="item in tableData">-->
          <!--{{item}}-->
        <!--</li>-->
      <!--</ul>-->
      <!--<el-table :data="tableData">-->
        <!--<el-table-column prop="date" label="日期" width="140">-->
        <!--</el-table-column>-->
        <!--<el-table-column prop="name" label="姓名" width="120">-->
        <!--</el-table-column>-->
        <!--<el-table-column prop="address" label="地址">-->
        <!--</el-table-column>-->
      <!--</el-table>-->
      <el-row :gutter="10">
        <el-col class='hidden-xl-only' :xs="8" :sm="6" :md="4" :lg="3" :xl="1" ><div class="grid-content bg-purple hidden-xl-only"></div></el-col>
        <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light"></div></el-col>
        <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple"></div></el-col>
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light"></div></el-col>
      </el-row>
    </el-main>



  </el-container>

</template>

<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>

<script>
  export default {
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(30).fill(item)
      }
    }
  };
</script>
