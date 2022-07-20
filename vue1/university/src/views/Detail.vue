<template>
    <div class="detail" :style="{ width: $store.state.screenW + 'px' }">
        <el-row :gutter="30">
            <el-col :span="16">
                <el-card class="box-card">
                    <template #header>
                        <div class="card-header">
                            <router-link to="/">首页</router-link> /
                            <router-link :to="typeName">列表页</router-link> / <span v-text='newName'></span>...
                        </div>
                    </template>
                    <h4 v-text="obj.title" style="text-align:center;"></h4>
                    <p v-text="obj.date" style="text-align:center;"></p>
                    <div class="content" v-html="obj.content"></div>
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
    name: 'detailC',
    data() {
        return {
            obj: {},
            typeName: '',
            newName: ''
        }
    },
    mounted() {
        const id = this.$route.params.id;
        const newType = this.$route.params.newType;
        this.loadData(newType,id);
    },
    components: {
        SideBar
    },
    watch: {
        $route() {
            console.log(this.$route.params.newType);
           const id = this.$route.params.id;
           const newType = this.$route.params.newType;
           this.loadData(newType,id);
        }
    },
    methods: {
        loadData(newType,id) {
            switch (newType) {
                case 'headlines':
                    this.typeName = '/detail/headlines'
                    this.newName = '关注头条'
                    break;
                case 'comprehensive':
                    this.detailName = '/detail/comprehensive'
                    this.newName = '综合新闻'
                    break;
                case 'learning':
                    this.detailName = '/detail/learning'
                    this.newName = '学术动态'
                    break;
                case 'story':
                    this.detailName = '/detail/story'
                    this.newName = '师大故事'
                    break;
                case 'newest':
                    this.detailName = '/detail/newest'
                    this.newName = '最新新闻'
                    break;
                case 'newhot':
                    this.detailName = '/detail/newhot'
                    this.newName = '热点新闻'
                    break;
            }


            this.$axios.get('getDetail', { params: { tableName: 'News', id } }).then(rs => {
                this.obj.title = rs.title;
                const d = new Date(rs.updatedAt);
                this.obj.date = d.getFullYear() + '年' + d.getMonth() + 1 + '月' + d.getDate() + '日'
                const con = rs.content.replace(/<img /g, '<img style="width:100%"')
                this.obj.content = con;
            })
        }
    }

}
</script>

<style scoped lang="less">
div.detail {
    margin: 60px auto 30px;

    .box-card {
        border: 1px solid #eedfad;
        background-color: #fff;

        .card-header {
            line-height: 40px;
            color: white;

            a,
            a:visited {
                color: white;
            }
        }

        .content {
            line-height: 35px;
            text-indent: 2em;
        }
    }


}
</style>