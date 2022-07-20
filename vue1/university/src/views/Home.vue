<template>
  <div class="home">
    <div class="one">
      <el-carousel height="500px">
        <el-carousel-item v-for="el in arrOne" :key="el.id">
          <router-link :to="'/detailCarousel/' + el.id">
            <img :src="el.imgSrc" alt="" height="500" width="1920">
          </router-link>
        </el-carousel-item>
      </el-carousel>
      <aside></aside>
    </div>
    <div class="two">
      <el-row :style="{ width: $store.state.screenW + 'px' }">
        <el-col :span="10" class="two01">
          <el-divider />
        </el-col>
        <el-col :span="4" style="text-align:center;margin-top:10px;">
        <router-link to="/list/headlines">
          <img src="@/assets/images/title01.png" alt="">
          <el-icon color="white" class="is-loading">
            <Loading />
          </el-icon></router-link>
        </el-col>
        <el-col :span="10" class="two01">
          <el-divider />
        </el-col>
      </el-row>
      <el-row :style="{ width: $store.state.screenW + 'px' }">
        <el-col :span="6" v-for="el in arrTwo" :key="el.id" class="two02" style="padding-left:10px;">
          <el-card :body-style="{ padding: '0px' }" style="border: 1px solid #ccc;
            background-color: #8fd5f9;
            padding: 5px 3px 70px;
            position: relative;
            border-radius: 5px;">
            <h4 v-text="el.title" style="display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
            height: 3em;
            line-height: 1.5em;
            text-align: justify;
            font-size: 16px;
            color: #222;
            font-weight: 400;
            margin: 10px;"></h4>
            <img :src="el.src" alt="" style="width: 100%; height:200px;" />
            <div class="two01">
              <router-link :to="'/detail/headline/' + el.id" style="text-decoration:none ;position: absolute;
    right: 30px;
    bottom: 10px;
    font-size: 18px;
    color: white;
   ">详细内容>></router-link>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <div class="three">
      <el-row :style="{ width: $store.state.screenW + 'px' }">
        <el-col :span="10" class="two01">
          <el-divider style="background-color: #afc1d7;" />
        </el-col>
        <el-col :span="4" style="text-align:center;margin-top:10px;">
        <router-link to="/list/headlines">
          <img src="@/assets/images/title02.png" alt="">
          <el-icon color="white" class="is-loading" style="color: #74808e;">
            <Loading />
          </el-icon>
          </router-link>
        </el-col>
        <el-col :span="10" class="two01">
          <el-divider style="background-color: #afc1d7;" />
        </el-col>
      </el-row>
      <el-row :style="{ width: $store.state.screenW + 'px' }">
        <el-col :span="6" v-for="el in arrThree" :key="el.id" class="two02" style="padding-left:10px;">
          <el-card :body-style="{ padding: '0px' }" style="border: 1px solid #ccc;
            background-color: white;
            padding: 5px 3px 70px;
            position: relative;
            border-radius: 5px;">
            <h4 v-text="el.title" style="display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
            height: 3em;
            line-height: 1.5em;
            text-align: justify;
            font-size: 16px;
            color: #222;
            font-weight: 400;
            margin: 10px;"></h4>
            <img :src="el.src" alt="" style="width: 100%; height:200px;" />
            <p v-text="el.param" style="display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 4;
            overflow: hidden;"></p>
            <div class="two01">
              <router-link :to="'/detail/headline/' + el.id" style="text-decoration:none ;position: absolute;
    right: 30px;
    bottom: 10px;
    font-size: 18px;
    color: #8fd5f9;
   ">详细内容>></router-link>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <div class="four">
      <el-row :style="{ width: $store.state.screenW + 'px' }">
        <el-col :span="10" class="two01">
          <el-divider style="background-color: #afc1d7;" />
        </el-col>
        <el-col :span="4" style="text-align:center;margin-top:10px;">
          <router-link to="/list/headlines">
            <img src="@/assets/images/title03.png" alt="">
            <el-icon color="white" class="is-loading" style="color: #74808e;">
              <Loading />
            </el-icon>
          </router-link>
        </el-col>
        <el-col :span="10" class="two01">
          <el-divider style="background-color: #afc1d7;" />
        </el-col>
      </el-row>
      <el-row :style="{ width: $store.state.screenW + 'px' }">
        <el-col :span="6" v-for="el in arrFour" :key="el.id" class="two02" style="padding-left:10px;padding-top:10px;">
          <el-card :body-style="{ padding: '0px' }" style="border: 1px solid #ccc;
            background-color: white;
            padding: 5px 3px 70px;
            position: relative;
            border-radius: 5px;">
            <h4 v-text="el.title" style="display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
              overflow: hidden;
              height: 3em;
              line-height: 1.5em;
              text-align: justify;
              font-size: 16px;
              color: #00a4df;
              font-weight: 400;
              margin: 10px;"></h4>
            <img :src="el.src" alt="" style="width: 100%; height:200px;" />
            <p v-text="el.param" style="display: -webkit-box;
                  -webkit-box-orient: vertical;
                  -webkit-line-clamp: 4;
                  overflow: hidden;
                  line-height: 1.5em;
                  height: 6em;
                  font-size: 14px;
                  padding: 0 5px;
                  margin: 7px 0;">
            </p>
            <div class="two01">
              <router-link :to="'/detail/headline/' + el.id" style="text-decoration:none ;position: absolute;
                    right: 30px;
                    bottom: 10px;
                    font-size: 18px;
                    color: #8fd5f9;
                         ">详细内容>>
              </router-link>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <div class="five">
      <el-row :style="{ width: $store.state.screenW + 'px' }">
        <el-col :span="10" class="two01">
          <el-divider style="background-color: #275484;" />
        </el-col>
        <el-col :span="4" style="text-align:center;margin-top:10px;">
        <router-link to="/list/headlines">
          <img src="@/assets/images/title04.png" alt="">
          <el-icon color="white" class="is-loading" style="color: #74808e;">
            <Loading />
          </el-icon></router-link>
        </el-col>
        <el-col :span="10" class="two01">
          <el-divider style="background-color: #275484;" />
        </el-col>
      </el-row>
      <el-row :style="{ width: $store.state.screenW + 'px' }">
        <el-col :span="6" v-for="el in arrFive" :key="el.id" class="two02" style="padding-left:10px;padding-top:10px;">
          <el-card :body-style="{ padding: '0px' }" style="border: 1px solid #ccc;
            background-color: #8fd5f9;
            padding: 5px 5px 5px;
            position: relative;
            border-radius: 5px;">
            <img :src="el.src" alt="" style="width: 100%; height:300px;" />
          </el-card>
        </el-col>
      </el-row>
    </div>
    <div class="public six">
      <div class="subSix" :style="{ width: $store.state.screenW + 'px' }">
        <el-row :gutter="30">
          <el-col :span="12">
            <div class="head">
              <el-row>
                <el-col :span="10" class="two01">
                  <el-divider></el-divider>
                </el-col>
                <el-col :span="4" style=" text-align: center;margin-top: 10px;">
                  <router-link to="/listNotice">
                    <img src="@/assets/images/title05.png" alt="">
                    <el-icon class="is-loading">
                      <Loading />
                    </el-icon>
                  </router-link>

                </el-col>
                <el-col :span="10" :style="{ width: $store.state.screenW + 'px' }">
                  <el-divider></el-divider>
                </el-col>
              </el-row>

            </div>
            <div class="body">
              <el-card class="sixCard">
                <div :style="{ height: sixCardH + 'px' }" :scrollTop="moveTop" @mouseover="sixStop" @mouseout="sixMove">
                  <router-link :title="el.title" :to="'/detailNotice/' + el.id" v-for="el in arrSix" :key="el.id">
                    <b v-text="el.index + '.' + el.title"></b>
                    <span v-text="el.date"></span>
                  </router-link>
                </div>

              </el-card>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="head">
              <el-row>
                <el-col :span="10" class="two01">
                  <el-divider></el-divider>
                </el-col>
                <el-col :span="4" style=" text-align: center;margin-top: 10px;">
                  <router-link to="/listNotice">
                    <img src="@/assets/images/title06.png" alt="">
                    <el-icon class="is-loading">
                      <Loading />
                    </el-icon>
                  </router-link>

                </el-col>
                <el-col :span="10" :style="{ width: $store.state.screenW + 'px' }">
                  <el-divider></el-divider>
                </el-col>
              </el-row>

            </div>
            <div class="bodyTwo">
              <el-row :gutter="30">
                <el-col :span="12">
                  <a href="http://www.baidu.com">
                    <img src="@/assets/images/a1.jpg" alt="">
                    <el-icon :size="30">
                      <ZoomIn />
                    </el-icon>
                  </a>
                </el-col>
                <el-col :span="12">
                  <a href="http://www.baidu.com">
                    <img src="@/assets/images/a2.jpg" alt="">
                    <el-icon :size="30">
                      <ZoomIn />
                    </el-icon>
                  </a>
                </el-col>
                <el-col :span="12">
                  <a href="http://www.baidu.com">
                    <img src="@/assets/images/a3.jpg" alt="">
                    <el-icon :size="30">
                      <ZoomIn />
                    </el-icon>
                  </a>
                </el-col>
                <el-col :span="12">
                  <a href="http://www.baidu.com">
                    <img src="@/assets/images/a4.jpg" alt="">
                    <el-icon :size="30">
                      <ZoomIn />
                    </el-icon>
                  </a>
                </el-col>
                <el-col :span="12">
                  <a href="http://www.baidu.com">
                    <img src="@/assets/images/a2.jpg" alt="">
                    <el-icon :size="30">
                      <ZoomIn />
                    </el-icon>
                  </a>
                </el-col>
                <el-col :span="12">
                  <a href="http://www.baidu.com">
                    <img src="@/assets/images/a1.jpg" alt="">
                    <el-icon :size="30">
                      <ZoomIn />
                    </el-icon>
                  </a>
                </el-col>
              </el-row>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="seven"></div>
    <div class="eight"></div>
  </div>
</template>

<script>
export default {
  name: 'HomeComponent',
  data() {
    return {
      arrOne: [],
      arrTwo: [],
      arrThree: [],
      arrFour: [],
      arrFive: [],
      arrSix: [],
      sixCardH: 256,
      moveTop: 0,
      timer: null,
    }
  },
  mounted() {
    this.$axios.get('getData').then(rs => {
      console.log(rs)
      this.arrOne = rs[0].map((el) => {
        return { id: el.id, imgSrc: this.$store.state.URL + 'adv/' + el.src }
      });
      this.arrTwo = rs[1].map(el => {
        let src = el.content.match(/src="[^"]+"/)[0]
        src = (src.substring(5, src.length - 1));
        return { id: el.id, src: src, title: el.title }
      });
      this.arrThree = rs[2].map(el => {
        let src = el.content.match(/src="[^"]+"/)[0]
        src = (src.substring(5, src.length - 1));
        let param = el.content.match(/<p>[^>/]+<\/p>/)[0];
        param = param.replace(/<[^>]+>/g, "");
        return { id: el.id, src: src, param: param, title: el.title }
      });
      this.arrFour = rs[3].map(el => {
        let src = el.content.match(/src="[^"]+"/)[0]
        src = (src.substring(5, src.length - 1));
        let param = el.content.match(/<p>[^>/]+<\/p>/)[0];
        param = param.replace(/<[^>]+>/g, "");
        return { id: el.id, src: src, param: param, title: el.title }
      });
      this.arrFive = rs[4].map(el => {
        let src = el.content.match(/src="[^"]+"/)[0]
        src = (src.substring(5, src.length - 1));
        console.log(src);
        return { src: src }
      });
      let temp = rs[5].map((el, i) => {
        let date = new Date(el.updatedAt).toLocaleDateString();
        return { index: i + 1, id: el.id, title: el.title, date: date }
      });
      this.arrSix = [...temp, ...temp];
      this.moveUp()
    })
  },
  methods: {
    moveUp() {
      this.timer = setInterval(() => {
        if (this.moveTop === 256)
          this.moveTop = 0
        else
          this.moveTop++;
      }, 30);
    },
    sixStop() {
      clearInterval(this.timer)
    },
    sixMove() {
      this.moveUp()
    },
  },
  updated() {
    let sixCardH = this.$refs.sixCard.offsetHeight;
    console.log(sixCardH);
  },
  watch: {
    arrSix: {
      deep: true,
      handler() {
        setTimeout(() => {
          // this.sixCardH = parseInt(this.$refs.sixCard.offsetHeight / 2);
          // console.log(sixCardH);
        }, 10);

      }
    }
  }
}
</script>

<style scoped lang="less">
div.home {
  padding-bottom: 30px;

  div.one {
    .el-carousel {
      margin: 0 auto;
    }

    aside {
      height: 48px;
      background: url(../assets/images/line.png) no-repeat center bottom,
        url(../assets/images/banner_bg01.png) no-repeat center top;
      background-color: #103869;
    }
  }

  div.two {
    background-color: #103869;
    padding-bottom: 30px;

    .el-row {
      margin: auto;

      .el-col .two01 {
        display: flex;
        justify-items: center;
      }

      .el-col .two02 {
        &:not(:last-child) {
          margin-right: 30px;
        }

        padding-left: -10px;
        margin-left: 10px;
        display: flex;
        justify-items: center;

        .el-card {
          background-color: #8fd5f9;
        }

        img {
          width: 283px
        }
      }
    }
  }

  div.three {
    background-color: #cce1fa;
    padding-bottom: 30px;

    .el-row {
      margin: auto;

      .el-col .two01 {
        display: flex;
        justify-items: center;
        background-color: #afc1d7;
      }
    }
  }

  div.four {
    background-color: #eaeef5;
    padding-bottom: 30px;

    .el-row {
      margin: auto;

      .el-col .two01 {
        display: flex;
        justify-items: center;
        background-color: #afc1d7;
      }
    }
  }

  div.five {
    background: url(../assets/images/sdbg.png) no-repeat 50%;
    background-size: cover;
    padding-bottom: 30px;

    .el-row {
      margin: auto;

      .el-col .two01 {
        display: flex;
        justify-items: center;
        background-color: #afc1d7;
      }
    }
  }

  div.public {
    div.head {
      margin: auto;

      .el-col.two01 {
        display: flex;
        justify-content: center;
      }

      .image {
        width: 100%;
      }
    }

    div.body {
      margin: auto;

      .el-card {
        span {
          overflow: hidden;
          -webkit-line-clamp: 2;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
        }

        img {
          width: 100%;
          height: 250px;
          margin-bottom: 40px;
        }
      }
    }

    &.six {
      background-color: #eaeef5;

      .subSix {
        margin: auto;

        .sixCard {

          // height: 90px;
          div {
            // line-height: 32px;
            border: 10px solid #2f2f53;
            background-color: rgb(29, 80, 100);
            overflow: hidden;
          }

          a,
          a:visited {
            display: flex;
            justify-content: space-between;
            text-decoration: none;
            font-family: '宋体';
            line-height: 2;
            border-bottom: 1px dashed #e7dcdc;

            b {
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              color: #eee;
              font-weight: normal;
              max-width: 80%;
              padding-left: 10px;
            }

            span {
              color: #ccc;
              padding-right: 10px;
            }
          }
        }

        .bodyTwo {
          a {
            display: block;
            position: relative;
            margin-bottom: 23px;

            &::before {
              content: '';
              position: absolute;
              width: 0;
              height: 0;
              left: 50%;
              top: 50%;
              background-color: rgba(0, 0, 0, 0.4);
              border: 1px solid #999;
              transition: all 0.4s;
              opacity: 0;
            }

            &:hover {
              .el-icon {
                opacity: 1;
              }

              &::before {
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                opacity: 1;
              }
            }
          }

          img {
            width: 100%;
            height: 90px;
            vertical-align: middle;

          }

          .el-icon {
            position: absolute;
            left: calc(50% - 15px);
            top: calc(50% - 15px);
            color: white;
            opacity: 0;
            transition: all .4s;

          }
        }
      }
    }
  }
}
</style>
