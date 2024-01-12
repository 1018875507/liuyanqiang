<template>
    <div class="top-bar">
        <div class="logo">
            <img src="../assets/images/eye-solid.svg">
            <div class="logo-name">流转时光</div>
        </div>
        <div class="menu">
            <AaButton  nom="cprimary" class="menu-message">留言墙</AaButton>
            <AaButton  nom="csecondary" class="menu-photo">照片墙</AaButton>
        </div>
        <div class="user">
            <div class="user-head"></div>
        </div>

    </div>
</template>

<script>
import AaButton from './AaButton.vue';
    export default {
        components: {
            AaButton,
        }
        
    }
</script>

<style lang="less" scoped>
.top-bar {
    width: 1200px;
    height: 52px;
    background: rgba(255, 255, 255,1);
    box-shadow: 0px 0px 1px 0px rgba(0,0,0,0.1);
    top:0;
    left: 0;
    z-index: 999;
    display: flex;
    position: fixed;
    justify-content: space-between;
    align-items: center;
    padding: 0 30;
    box-sizing: border-box;
    .logo{
        display: flex;
        align-items: center;
        padding-left: 10px;
        .logo-name{
            font-size: 20px;
            color: @gary-1;
            text-align: justify;
            font-weight: 600;
            padding-left: 20px;
        }
    }
    .menu{
        padding-left: 150px;
        .menu-message{
            margin-right: 24px;
        }
        
    }
    .user{
        width: 300px;
        .user-head{
            float: right;
            height: 36px;
            width: 36px;
            border-radius: 50%;
            background-color:blue ;
        }
    }
}
</style>