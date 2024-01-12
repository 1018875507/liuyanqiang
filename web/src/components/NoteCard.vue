<template>
    <div class="aa-node-card" :style="{width:width,background:cardColor[card.imgurl] }">
        <div class="top">
            <p class="time">{{ dateOne(card.moment) }}</p>
            <p class="label1">{{ label[card.type][card.label] }}</p>
        </div>
        <p class="message">{{card.message}}</p>
        
        <div class="foot">
            <div class="foot-left">
                <div class="icon1">
                    <span class="iconfont icon-aixin1"></span>
                    <span class="value">{{ card.like }}</span>
                </div>
                <div class="icon1">
                    <span class="iconfont icon-liuyan"></span>
                    <span class="value">{{ card.comment }}</span>
                </div>
                
            </div>
            <div class="name">{{ card.name }}</div>
        </div>
    </div>
</template>

<script>
import { label,cardColor } from '@/untils/data';
import { dateOne } from '../untils/GetTime';
    export default {
        data(){
            return {
                label,
                dateOne,
                cardColor
            }
        },
        props: {
            width: {
                default: "278px",
            },
            
            note: {
                default: {},
            },
        },
        computed:{
            card(){
                return this.note;
            }
        },
        created(){
            console.log(this.card);
            
        }
    }
</script>

<style lang="less" scoped>

@font-face {
    font-family: "fa";        //自定义字体名称
    src:url("../assets/fonts/小可奶酪体商用免费@庆科字体.ttf");       //字体包路径
    
}

.aa-node-card{
    height: 240px;
    padding: 10px 20px 0px;
    margin: 10px;
    box-sizing: border-box;
    .top{
        display: flex;
        justify-content: space-between;
        p{
            color: @gary-2;
            font-size: 12px;
            padding: 0px 0px 10px 0px;
        }
    }
    .message{
        height: 175px;
        font-size: 16px;
        color: @gary-0;
        line-height: 22px;
        text-align: justify;
        font-weight: 440;
        letter-spacing: 0;
        font-family: 'fa';
    }
    .foot{
        display: flex;
        justify-content: space-between;
        
    }
    .foot-left{
        display: flex;
        justify-content: space-between;
        position: relative;
        bottom: 0px;
        .value{
            padding-left: 5px;

        }
        .icon1{
            padding-right: 5px;
        }
    }
}
</style>