<template>
  <div class="footer">
    <div class="one">
      <el-row :style="{ width: $store.state.screenW + 'px' }">
        <el-col :span="6">
          <el-row>
            <el-col :span="8" class="sina"></el-col>
            <el-col :span="8">
              <img src="@/assets/images/ma01.png" style="width: 89px;height:89px"/>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8" class="weixin"></el-col>
            <el-col :span="8">
              <img src="@/assets/images/ma02.png" />
            </el-col>
          </el-row>

        </el-col>
        <el-col :span="9" class="bottom-center">
          <h4>@北京师范大学</h4>
          <p>花不语，鸟轻啼<br>
            连雨不知春已去<br>
            五月携着晚风来
          </p>
        </el-col>
        <el-col :span="9" class="bottom-center right">
          <h4>@北京师范大学</h4>
          <p>北国的春，迟缓但热烈<br>
            斜照暖阳，温润微风<br>
            油绿青草，氤氲花香<br>
            师大之美，馨香四方</p>
        </el-col>
      </el-row>
    </div>
    <div class="two">
      <p>© 版权所有 北京师范大学 <strong>|</strong>地址：北京市新街口外大街19号 &nbsp;&nbsp; 邮编：100875 <strong>|</strong>
        <a href="https://beian.miit.gov.cn" style=" color: white;">京ICP备10031106号-58 </a>
        京公网安备110402430002号<strong>|</strong>
        <span class="tel">电话查号台：010-58806183 </span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'footerComponents'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
div.footer {
  width: 100%;

  div.one {
    background-color: #eaeef5;
    padding: 30px 0 50px;

    .el-row {
      margin: auto;

      .el-col {

        .el-row {

          .sina {
            height: 90px;
            width: 90px;
            background: #00aecd url(../assets/images/sina.png) no-repeat center center;
            background-size: 90px 90px;
            margin :0 10px 10px 0;
          }

          .weixin {
            height: 90px;
            width: 90px;
            margin-top: 7px;
            background: #2a79a7 url(../assets/images/weixin.png) no-repeat center center;
            background-size: 90px 90px;
            margin :0 10px 10px 0;
          }
        }
      }

      .bottom-center {
        h4 {
          background: url(../assets/images/small_sina.png) no-repeat left center;
          padding-left: 40px;
        }

        p {
          line-height: 2;
          color: gray;
        }

        &.right{
          padding-left: 40px;

          h4{
            background: url(../assets/images/small_weixin.png) no-repeat left center;
          }
        }
      }
    }
  }

  div.two {
    line-height: 80px;
    background: url(../assets/images/footer_bg.jpg) no-repeat center center;

    p {
      margin: auto;
      color: white;
      text-align: center;
      font-size: 17px;

      span {
        display: inline-block;
        background: url(../assets/images/tel_bg.png) no-repeat left center;
        padding-left: 40px;
        margin-left: 10px;
      }
    }
  }
}
</style>
