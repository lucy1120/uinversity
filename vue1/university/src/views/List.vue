<template>
    <div class="list" :style="{ width: $store.state.screenW + 'px' }">
        <el-row :gutter="30">
            <el-col :span="16">
                <el-card class="box-card">
                    <template #header>
                        <div class="card-header">
                            <span color="white">
                                <el-icon :size="15" >
                                    <HomeFilled />
                                </el-icon>
                                <router-link :to="'/'" style="color: white;">首页</router-link>
                            </span>
                            <span style="color:white;font-weight: bold;">{{ listName }}</span>
                        </div>
                    </template>
                    <ul>
                        <li v-for="el in arr" :key="el.id">
                            <router-link :to="detailName + el.id">
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
    name: 'listCom',
    data() {
        return {
            listName: '',  //中文
            listLabel: '',   //标签（英文）
            curPage: 0,
            arr: [],
            total: 0,
            detailName:''
        }
    },
    mounted() {  // 从其他页面跳过来的时候触发
        this.listLabel = this.$route.params.newType;
        this.subPage();
    },
    methods: {
        pageChange(num) {
            this.curPage = num - 1;
            this.subPage();
        },
        subPage() {
            const dataType = this.listLabel;
            switch (dataType) {
                case 'headlines':
                    this.listName = '关注头条';
                    this.detailName='/detail/headlines/'
                    break;
                case 'comprehensive':
                    this.listName = '综合新闻';
                    this.detailName='/detail/comprehensive/'
                    break;
                case 'learning':
                    this.listName = '学术动态';
                    this.detailName='/detail/learning/'
                    break;
                case 'story':
                    this.listName = '师大故事';
                    this.detailName='/detail/story/'
                    break;
                case 'video':
                    this.listName = '视频新闻';
                    this.detailName='/detailVideo/'
                    break;
                case 'Images':   // image
                    this.listName = '图片新闻';
                    this.detailName='/detailImage/'
                    break;
                case 'newest':
                    this.listName = '最新新闻';
                    this.detailName='/detail/newest/'
                    break;
                case 'newhot':
                    this.listName = '热点新闻';
                    this.detailName='/detail/newhot/'
                    break;
            }

            let clsType = '';
            if (dataType === 'video') {
                clsType = 'Video'
            } else if (dataType === 'image') {
                clsType = 'Images'
            } else {
                clsType = 'news'
            }

            let params = { type: dataType, start: this.curPage * 5, clsType }
            this.$axios.get('getListMsg', { params }).then(rs => {
                if (dataType === 'video' || dataType === 'image') {
                    this.arr = rs.map(el => {
                        let obj = {};
                        obj.param = el.content;
                        obj.src =
                            (dataType === 'video') ? this.$store.state.URL + 'video/' + el.src : this.$store.state.URL + 'photoes/' + el.src;
                        obj.date = new Date(el.updatedAt).toLocaleDateString();
                        obj.id = el.id;
                        obj.title = el.title;
                        return obj;
                    })
                } else {
                    this.arr = rs.map(el => {
                        let obj = {};
                        obj.param = el.content.match(/<p>[^>]+>/)[0].replace(/<p>|<\/p>/g, '');
                        let src = el.content.match(/src="[^"]+"/)[0];
                        obj.src = src.substring(5, src.length - 1);
                        obj.date = new Date(el.updatedAt).toLocaleDateString();
                        obj.id = el.id;
                        obj.title = el.title;
                        return obj
                    })

                }

            });
            params = { type: dataType, clsType }
            this.$axios.get('getListTotal', { params }).then(rs => {
                this.total = rs;
            })
        }
    },
    components: {
        SideBar
    },
    watch: {  //从主页到列表页 只能触发钩子函数， 从列表页到列表页 触发路由 监听路由不变
        $route() {
            this.listLabel = this.$route.path.substr(6);
            this.subPage();
        }
    }
}
</script>

<style lang="less" scoped>
div.list {
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
                        }
                    }

                    aside {
                        width: 200px;
                        margin-left: 10px;
                        display: flex;
                        justify-content: center;
                        align-items: center;

                        img {
                            width: 100%;
                            height: 150px;
                        }
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