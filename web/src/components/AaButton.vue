<template>
    <button :class="[size,nom]" class="Aa-button"><slot></slot></button>
</template>

<script>
    export default {
        props: {
            size: {
                default:'base',
            },
            nom: {
                default:'primary',
            },
        }
    }
</script>

<style lang="less" scoped>
.Aa-button {
    text-align: center;
    border: none;
}
.max{
    min-width: 120px;
    height: 48px;
    border-radius: 24px;
    padding: 0 24px;
    
}
.base{
    width: 100px;
    height: 24px;
    border-radius: 24px;
    padding: 0 24px;
    
}
.small{
    width: 80px;
    height: 12px;
    border-radius: 24px;
    padding: 0 24px;
    
}
.primary{
    background: @gary-4;
    color:@gary-0 ;
}
.secondary{
    background: @gary-0;
    color:@gary-4 ;
    border: 1px solid @gary-0;
}
.cprimary{
    background: @paimary-color;
    color:@gary-4 ;
    font-weight: 600;
}
.csecondary{
    background: @gary-4;
    color:@gary-0 ;
   
}


</style>