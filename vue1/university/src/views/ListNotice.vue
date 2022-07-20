<template>
    <div class="listNotice" :style="{ width: $store.state.screenW + 'px' }">
        <el-row :gutter="30">
            <el-col :span="16">
                <el-card class="box-card">
                    <template #header>
                        <div class="card-header">
                            <span color="white">
                                <el-icon :size="15">
                                    <HomeFilled />
                                </el-icon>
                                <router-link :to="'/'" style="color: white;">首页</router-link>
                            </span>
                            <span style="color:white;font-weight: bold;">通知公告</span>
                        </div>
                    </template>
                    <ul>
                        <li v-for="el in arr" :key="el.id">
                            <router-link :to="'/detailNotice/' + el.id">
                                <article>
                                    <h4 v-text="el.title"></h4>
                                    <p v-text="el.param"></p>
                                    <section>
                                        <el-icon>
                                            <Timer />
                                        </el-icon>
                                        <span v-text="el.date"></span>
                                        <el-icon>
                                            <View />
                                        </el-icon>200
                                    </section>
                                </article>
                                <aside>
                                    <img :src="el.src" alt="">
                                </aside>
                            </router-link>
                        </li>
                    </ul>
                    <div class="page">
                        <el-pagination background layout="prev,pager,next" @current-change="pageChange" :page-size="5"
                            :total="total"></el-pagination>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="8">
                <SideBar></SideBar>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import SideBar from '@/components/SideBar.vue';
export default {
    name: 'listNoticeCom',
    data() {
        return {
            curPage: 0,
            arr:[],
            total:0,
        }
    },
    mounted() {  // 从其他页面跳过来的时候触发
        this.subPage();
    },
    methods: {
        pageChange(num) {
            this.curPage = num - 1;
            this.subPage();
        },
        subPage() {
            let clsType = '';
            let params = { type: 'ok', start: this.curPage * 5, clsType: 'Notice' }
            this.$axios.get('getListMsg', { params }).then(rs => {
                this.arr = rs.map(el => {
                    let obj = {};
                    obj.param = el.contentmatch(/<p>[^>]+>/)[0].replace(/<p>|<\/p>/g, '');
                    let d = new Date(el.updatedAt)
                    obj.date = d.getFullYear()+'年'+(d.getMonth()+1)+"月"+d.getDate()+'日';
                    obj.id = el.id;
                    obj.title = el.title;
                    return obj;
                })
            });
            params = { type: 'ok', clsType }
            this.$axios.get('getListTotal', { params }).then(rs => {
                this.total = rs;
            })
        }
    },
    components: {
        SideBar
    },

}
</script>

<style lang="less" scoped>
div.listNotice {
    margin: 60px auto 35px;

    .box-card {
        border: 1px solid #c5e5fb;

        .card-header {
            display: flex;
            justify-content: space-between;
            align-items: center;

            span {
                color: white;

                a {
                    font-size: 16px;
                    margin-top: -1px;
                    position: absolute;
                    margin-left: 5px;
                    text-decoration: none;
                }
            }
        }

        ul {
            list-style: none;

            li {
                background-color: #fff;
                margin-bottom: 20px;
                padding: 15px;

                a,
                a:visited {
                    text-decoration: none;
                    display: flex;


                    article {
                        flex: 1;

                        p {
                            display: -webkit-box;
                            -webkit-box-orient: vertical;
                            -webkit-line-clamp: 4;
                            text-overflow: ellipsis;
                            text-indent: 2em;
                            font-size: 15px;
                            line-height: 1.2;
                            margin: 0 0 15px;
                        }

                        section {
                            font-size: 12px;
                            color: gainsboro;
                            font-family: 'simsun';
                        }
                    }

                    aside {
                        width: 200px;
                        margin-left: 10px;
                    }
                }
            }
        }

        div.page {
            text-align: right;
        }
    }



}
</style>