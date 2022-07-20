<template>
  <div class="sideBar">
    <section class="sideBar">
      <aside>视频新闻
        <router-link to="/list/video">MORE &gt;&gt;</router-link>
      </aside>
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="el in videoArr" :key="el.id">
          <router-link :to="'/detailVideo/' + el.id">
            <img :src="el.src" alt="">
          </router-link>
        </el-carousel-item>
      </el-carousel>
    </section>

    <section class="sideBar">
      <aside>图片新闻
        <router-link to="/list/image">MORE &gt;&gt;</router-link>
      </aside>
      <el-carousel indicator-position="outside" height="260px">
        <el-carousel-item v-for="el in imageArr" :key="el.id">
          <router-link :to="'/detailImage/' + el.id">
            <img :src="el.src" alt="">
          </router-link>
        </el-carousel-item>
      </el-carousel>
    </section>

    <section class="sideBar" style="background-color:white">
      <aside>最新新闻
        <router-link to="/list/newest">MORE &gt;&gt;</router-link>
      </aside>

      <ul class="newest">
        <li v-for="el in newsetArr" :key="el.id">
          <router-link :to="'/detail/newest/' + el.id">
            <el-row :gutter="10">
              <el-col :span="4">
                <section>
                  <span v-text="el.day"></span>
                  <span v-text="el.monthYear"></span>
                </section>
              </el-col>
              <el-col :span="16">
                <article v-text="el.title"></article>
              </el-col>
              <el-col :span="4">
                <aside>
                  <el-icon color="red">
                    <View />
                  </el-icon>800
                </aside>
              </el-col>
            </el-row>
          </router-link>
        </li>
      </ul>
    </section>

    <section class="sideBar" style="background-color:white">
      <aside>热点新闻
        <router-link to="/list/newhot">MORE &gt;&gt;</router-link>
      </aside>

      <ul class="newest">
        <li v-for="el in newhotArr" :key="el.id">
          <router-link :to="'/detail/newhot/' + el.id">
            <el-row :gutter="10">
              <el-col :span="4">
                <section>
                  <span v-text="el.day"></span>
                  <span v-text="el.monthYear"></span>
                </section>
              </el-col>
              <el-col :span="16">
                <article v-text="el.title"></article>
              </el-col>
              <el-col :span="4">
                <aside>
                  <el-icon color="red">
                    <View />
                  </el-icon>800
                </aside>
              </el-col>
            </el-row>
          </router-link>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'sideBarComponents',
  data() {
    return {
      videoArr: [],
      imageArr: [],
      newsetArr: [],
      newhotArr: [],
    }
  },
  mounted() {
    let arr = this.$store.state.extraData;
    if (arr.length === 0) {
      this.$axios.get('getMsgObj').then(rs => {
        arr = rs;
        this.public(arr);
      })
    } else {
        this.public(arr);
    }

  },
  methods: {
    public(arr) {
      this.newsetArr = arr[0].map(el => {
        let d = new Date(el.updatedAt)
        return { id: el.id, title: el.title, day: d.getDate(), monthYear: (d.getMonth() + 1) + '-' + d.getFullYear() }
      });

      this.newhotArr = arr[1].map(el => {
        let d = new Date(el.updatedAt)
        return { id: el.id, title: el.title, day: d.getDate(), monthYear: (d.getMonth() + 1) + '-' + d.getFullYear() }
      });

      this.imageArr = arr[2].map(el => {
        return { id: el.id, src: this.$store.state.URL + 'photoes/' + el.src };
      });
      this.videoArr = arr[3].map(el => {
        return { id: el.id, src: this.$store.state.URL + 'video/' + el.src };
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
section.sideBar {
  // display: flex;
  border: 1px solid #587ba0;
  border-radius: 4px;
  margin-bottom: 20px;

  aside {
    background-color: #3574b8;
    line-height: 2;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    color: white;

    a,
    a:visited {
      color: white;
      text-decoration: none;

      &:hover {
        color: blue;
      }
    }
  }

  .el-carousel{

    img{
      width: 100%;
      height: 100%;
    }
  }

  ul.newest {
    list-style: none;
    padding: 10px 5px 0 7px;
    margin: 0;

    li {
      border-bottom: 1px dashed gainsboro;

      a,
      a:visited {
        text-decoration: none;

        .el-row {

          .el-col {

            section {
              text-align: center;
              line-height: 1.2;
              background-color: rgb(57, 111, 219);
              border-radius: 5px;
              padding: 2px;
              box-sizing: border-box;

              span {
                display: block;
                color: white;

                &:nth-child(2) {
                  font-size: 14px;
                }
              }
            }

            article {
              height: 60px;
              line-height: 30px;
              overflow: hidden;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              text-overflow: ellipsis;
              -webkit-box-orient: vertical;
            }

            aside {
              line-height: 1;
              background-color: transparent;
              color: gray;

              .el-icon {
                margin-top: 30px;
              }

            }
          }
        }


      }

      &:last-child {
        border: none;
      }
    }

  }
}
</style>
