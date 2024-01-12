<template>
    <div class="wall-message">
     <p class="title">{{ wallType[id].name }}</p>
     <p class="slogan">{{ wallType[id].slogan }}</p>
    <div class="label">
        <p class="label-list" :class="{labelselect:nlabel==-1}" @click="selectnode(-1)">全部</p>
        <p class="label-list" :class="{labelselect:nlabel==index}" v-for="(item,index) in label[id]" :key="index" @click="selectnode(index)">{{ item }}</p>
    </div>   
    <div class="card">
        <NoteCard v-for="(e,index) in note" :key="index" :note="e"></NoteCard>
    </div>
    <div class="add">
        <span class="iconfont icon-tianjia"></span>
    </div>    
        
      
    </div>
    
</template>

<script>
import { wallType,label } from '@/untils/data';
import NoteCard from '@/components/NoteCard.vue';
import {note} from '../mock/index';
    export default {
        data(){
            return {
                wallType,
                label,
                id:0,
                nlabel:-1,
                note:note.data,

            }
        },
        components:{
            NoteCard,
        },
        methods:{
            selectnode(i){
                this.nlabel=i;
            }
        },
        
        
    }
</script>

<style lang="less" scoped>
.wall-message{
     height: 1200px;
     position: relative;
     top:50px;
     z-index: 99;
     
    overflow-y:hidden;
    .title{
        font-size: 36px;
        text-align: center;
        color: @gary-0;
    }
    .slogan{
        font-size: 12px;
        text-align: center;
        color: @gary-0;
        margin-top: 10px;
    }
    .label{
        display: flex;
        justify-content: center;
        margin-top: 10px;
        .label-list{
          padding:0px 20px;  
          color: @gary-0;
          box-sizing: border-box;
        }
        .labelselect{
            color: @gary-4;
            background-color: @gary-0;
            border: 1px solid @gary-0;
            text-align: center;
            border-radius: 14px;
            padding-right: 0px 20px;  
            
        }
        
    }
    .card{
        display: flex;
        flex-wrap: wrap;
    }
    .add{
        width: 58px;
        height: 58px;
        display: flex;
        font-size: 16px;
    }
}
</style>