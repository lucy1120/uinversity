<template>
    <div class="list search" :style="{ width: $store.state.screenW + 'px' }">
        <el-row :gutter="30" style="line-height:36px;margin-bottom:20px;">
            <el-col :span="2">搜索内容</el-col>
            <el-col :span="6">
                <el-input v-model="keyword" placeholder="请输入您要查询的内容" />
            </el-col>
            <el-col :span="2" style="text-align:right;">类别</el-col>
            <el-col :span="3">
                <el-select placeholder="请选择" v-model="newType">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
            </el-col>
            <el-col :span="2">
                <el-button type="primary" @click="search">搜索</el-button>
            </el-col>
        </el-row>

        <el-row :gutter="30">
            <el-col :span="16">
                <el-card class="box-card" v-show="arr.length">
                    <template #header>
                        <div class="card-header">
                            <span color="white">
                                <el-icon :size="15">
                                    <HomeFilled />
                                </el-icon>
                                <router-link :to="'/'" style="color: white;">首页</router-link>
                            </span>
                        </div>
                    </template>
                    <!-- 通知的列表页 -->
                    <ul class="ul2" v-if="tableName === 'Notice'">
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

                    <!-- 非通知的列表页 -->
                    <ul class="ul1" v-else>
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
    name: 'searchC',
    data() {
        return {
            curPage: 0,
            arr: [],
            total: 0,
            detailName: '',
            keyword: '',
            tableName: '',
            options: [
                { value: 'headlines', label: '关注头条' },
                { value: 'comprehensive', label: '综合新闻' },
                { value: 'learning', label: '学术动态' },
                { value: 'story', label: '师大故事' },
                { value: 'newest', label: '最新新闻' },
                { value: 'newhot', label: '热点新闻' },
                { value: 'Video', label: '视频新闻' },
                { value: 'Images', label: '图片新闻' },
                { value: 'Notice', label: '通知公告' },
            ],
            newType: { value: -1, label: '===请选择===' },
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
        search() {
            if (this.newType === '===请选择===') return;
            let tableName = 'News';
            this.detailName = '/detail/' + this.newType + '/';
            switch (this.newType) {
                case 'Video':
                    tableName = 'Video';
                    this.detailName = '/detailVideo/'
                    break;
                case 'Images':
                    tableName = 'Images';
                    this.detailName = '/detailImage/'
                    break;
                case 'Notice':
                    tableName = 'Notice';
                    this.detailName = '/detailNotice/'
                    break;
            }

            this.tableName = tableName;

            this.subPage();

            const params = {
                type: this.newType,
                tableName,
                keyword: this.keyword
            }
            this.$axios.get('getSearchTotal', { params }).then(rs => {
                this.total = rs;
            });
        },
        subPage() {
            const params = {
                type: this.newType,
                start: this.curPage * 5,
                tableName: this.tableName,
                keyword: this.keyword
            };
            this.$axios.get('getSearchMsg', { params }).then(rs => {
                if (this.newType === 'Video' || this.newType === 'Images') {
                    this.arr = rs.map(el => {
                        let obj = {};
                        obj.param = el.content;
                        obj.src =
                            (this.newType === 'Video') ? this.$store.state.URL + 'video/' + el.src : this.$store.state.URL + 'photoes/' + el.src;
                        obj.date = new Date(el.updatedAt).toLocaleDateString();
                        obj.id = el.id;
                        obj.title = el.title;
                        return obj;
                    })
                } else if (this.newType === 'Notice') {
                    this.arr = rs.map(el => {
                        let obj = {};
                        obj.param = el.content.replace(/ /g, '').replace(/<br>/g, '');
                        let d = new Date(el.updatedAt)
                        obj.date = d.getFullYear() + '年' + (d.getMonth() + 1) + "月" + d.getDate() + '日';
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
        }
    },
    components: {
        SideBar
    },
    watch: {
        $route() {
            this.listLabel = this.$route.path.substr(6);
            this.subPage();
        }
    }

}
</script>

<style lang="less" scoped>
div.search {
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

        ul.ul1 {
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

                        img{
                            width: 100%;
                        }
                    }
                }
            }
        }

        ul.ul2 {
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

                        img{
                            width: 100%;
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