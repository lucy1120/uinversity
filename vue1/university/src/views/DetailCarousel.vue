<template>
    <div class="DetailCarousel" :style="{ width: $store.state.screenW + 'px' }">
        <el-row :gutter="30">
            <el-col :span="16">
                <el-card class="box-card">
                    <template #header>
                        <div class="card-header">
                            <router-link to="/">首页</router-link> / 详细情况...
                        </div>
                    </template>
                    <h4 v-text="obj.title"></h4>
                    <p v-text="obj.date"></p>
                    <img :src="imageSrc" alt="">
                    <div v-html="obj.content"></div>
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
    name: 'DetailCarouselC',
    data(){
        return{
            obj:{},
            imageSrc:''
        }
    },
    components:{
        SideBar
    },
    mounted(){
        const id = this.$route.params.id;
        const params={id,tableName:'Adv'}
        this.$axios.get('getDetail',{params:params}).then(rs=>{
            let d = new Date(rs.updatedAt)
            const date = d.getFullYear()+'年'+(d.getMonth()+1)+"月"+d.getDate()+'日';
            this.imageSrc=this.$store.state.URL+'adv/'+rs.src;
            // const src = this.$store.state.URL + 'adv/' + rs.src;
            const content = rs.content.replace(/<img[^>]+>/g,'').replace(/<p>&nbsp;<\/p>/g);
            this.obj = {id:rs.id,date,title:rs.title,content};
            // this.obj = { id: rs.id, date: date, title: rs.title, src: src, content: content };
        })
    }

}
</script>

<style scoped lang="less">
div.DetailCarousel{
    margin:60px auto 30px;

    .el-card{
        border:1px solid #eedfad;
        background-color: #fff;

        img{
            width: 100%;
        }
    }

    .card-header{
        line-height: 40px;
        color: white;
        
        a,a:visited{
            color: white;
        }
    }
    
}
</style>