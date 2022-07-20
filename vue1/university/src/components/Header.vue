<template>
  <div class="header">
    <div class="one">
      <el-row :style="{ width: $store.state.screenW + 'px' }">
        <el-col :span="10">
          <router-link to="/">信息门户</router-link>
          <router-link to="/">信息公开</router-link>
          <router-link to="/">联系校领导</router-link>
          <router-link to="/">教师邮箱</router-link>
          <router-link to="/">学生邮箱</router-link>
          <router-link to="/">师大云盘</router-link>
        </el-col>
        <el-col :span="4">
          <router-link to="/" style="background-color:transparent;position: absolute;z-index: 10;">
            <img src="../assets/images/logo1.png" width="150">
          </router-link>
        </el-col>
        <el-col :span="10">
          <router-link to="/">师大新闻</router-link>
          <router-link to="/">English Version</router-link>
          <router-link to="/">校友之家</router-link>
          <router-link to="/">教师邮箱</router-link>
          <router-link to="/">珠海校区</router-link>
          <router-link to="/search">
            <el-icon>
              <Search />
            </el-icon>
          </router-link>
        </el-col>
      </el-row>
    </div>
    <div class="two" style="background-color: white;border-bottom: 1px solid #cecece;">
      <el-row :style="{ width: $store.state.screenW + 'px', height: '42px', margin: 'auto' }">
        <el-col :span="10" style="height:100%">
          <el-menu style="height:100%;border:none;" :default-active="activeIndex"
          mode="horizontal"
            @select="handleSelect"
            router
            >
            <el-sub-menu index="1">
              <template #title>学校概况</template>
              <el-menu-item index="1-1">item one</el-menu-item>
              <el-menu-item index="1-2">item two</el-menu-item>
              <el-menu-item index="1-3">item three</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="2">
              <template #title>组织机构</template>
              
              <el-menu-item index="2-1"><a href="http://www.cqwu.edu.cn">重庆文理学院</a></el-menu-item>
              <el-menu-item index="2-2">item two</el-menu-item>
              <el-menu-item index="2-3">item three</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="3">
              <template #title>学部院系</template>
              <el-menu-item index="3-1">item one</el-menu-item>
              <el-menu-item index="3-2">item two</el-menu-item>
              <el-menu-item index="3-3">item three</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="4">
              <template #title>教育教学</template>
              <el-menu-item index="4-1">item one</el-menu-item>
              <el-menu-item index="4-2">item two</el-menu-item>
              <el-menu-item index="4-3">item three</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="5">
              <template #title>科学研究</template>
              <el-menu-item index="5-1">item one</el-menu-item>
              <el-menu-item index="5-2">item two</el-menu-item>
              <el-menu-item index="5-3">item three</el-menu-item>
            </el-sub-menu>
          </el-menu>
        </el-col>
        <el-col :span="4" style="margin-top: 42px;">
          <router-link to="/" style="background-color:transparent">
            <img src="../assets/images/logo_bg.png" alt="" width="200">
          </router-link>
        </el-col>
        <el-col :span="10" style="height:100%">
          <el-menu style="height:100%;border:none;" :default-active="activeIndex" class="el-menu-demo" mode="horizontal"
            @select="handleSelect">
            <el-sub-menu index="1">
              <template #title>招生就业</template>
              <el-menu-item index="1-1">item one</el-menu-item>
              <el-menu-item index="1-2">item two</el-menu-item>
              <el-menu-item index="/about">item three</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="2">
              <template #title>人才招聘</template>
              <el-menu-item index="2-1">item one</el-menu-item>
              <el-menu-item index="2-2">item two</el-menu-item>
              <el-menu-item index="2-3">item three</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="3">
              <template #title>合作交流</template>
              <el-menu-item index="3-1">item one</el-menu-item>
              <el-menu-item index="3-2">item two</el-menu-item>
              <el-menu-item index="3-3">item three</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="4">
              <template #title>图书档案</template>
              <el-menu-item index="4-1">item one</el-menu-item>
              <el-menu-item index="4-2">item two</el-menu-item>
              <el-menu-item index="4-3">item three</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="5">
              <template #title>校园生活</template>
              <el-menu-item index="5-1">item one</el-menu-item>
              <el-menu-item index="5-2">item two</el-menu-item>
              <el-menu-item index="5-3">item three</el-menu-item>
            </el-sub-menu>
          </el-menu>
        </el-col>
      </el-row>


    </div>
  </div>
</template>

<script>
export default {
  name: 'headerComponents',
  data() {
    return {}
  },
  methods: {
    handleSelect(val) {
      alert(val)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
div.header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;

  .one {
    height: 40px;
    background: url(../assets/header_bg.jpg);

    .el-row {
      margin: auto;

      .el-col {
        display: flex;
        justify-content: space-around;
        height: 100%;
      }

      a,
      a:visited {
        color: white;
        line-height: 40px;
        text-decoration: none;
        padding: 0 5px;

        &:hover {
          background-color: white;
          color: rgb(2, 2, 98);
        }

        .el-icon svg {
          font-weight: bold;
          color: white;
          margin-top: 10px;
        }
      }



    }
  }

  .two {
    box-shadow: 1px 1px 12px -1px #69696c;
    background-color: white;

    .el-col{
      display: flex;
      justify-content: center;
    }
  }
}
</style>
