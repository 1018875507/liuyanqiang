<template>
    <div class="wall-message">
     <p class="title">{{ wallType[id].name }}</p>
     <p class="slogan">{{ wallType[id].slogan }}</p>
     <div class="label">
        <p class="label-list">全部</p>
        <div class="label-list" v-for="{item,index} in label[id]" :key="index">{{ item }}</div>
        <p class="label-list">1</p>
    </div>   
    </div>
    
</template>

<script>
import { wallType,label } from '@/untils/data';

    export default {
        data(){
            return {
                wallType,
                label,
                id:0,
            }
        }
        
    }
</script>

<style lang="less" scoped>
.wall-message{
    height: 480px;
    position: relative;
    top:50px;
    z-index: 99;
    .title{
        font-size: 36px;
        text-align: center;
        color: @gary-0;
    }
    .slogan{
        font-size: 12px;
        text-align: center;
        color: @gary-0;
    }
    .label{
        height: 300px;
    }
}
</style>