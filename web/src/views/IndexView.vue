<template>
    <div class="wall-index">
        <top-bar></top-bar>
        <!-- <video src="../assets/images/qm1.mp4" autoplay="autoplay" muted="muted" loop="loop" class="bg-video"></video> -->
        <router-view></router-view>
        <FootBar></FootBar>
    </div>
</template>

<script>
import TopBar from '@/components/TopBar.vue';
import FootBar from '@/components/FootBar.vue';
    export default {
        components: {
            TopBar,
            FootBar,
        }
        
    }
</script>
<style lang="less" scoped>
.wall-index{
    
    
    .bg-video{
        display:block;
        position: fixed;
        top: 0;
        left: 0;
        width: 1250px;
        height: 750px;
        z-index: -1;
        border: none;
    }
}

</style>

