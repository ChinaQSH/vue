<template>
    <div id="app">
        <router-view></router-view>
        <FooterGuide v-show="$route.meta.showFoot"></FooterGuide>

    </div>
</template>

<script>
    import {mapActions} from 'vuex'
    import FooterGuide from './components/FooterGuide/FooterGuide.vue'
    // import {reqFoodCategorys} from "./api"

    export default {
         mounted(){
            // this.$store.dispatch('getAddress')
           // const result=await reqFoodCategorys();
           // console.log(result);
             this.getAddress()
        },
        methods:{
             ...mapActions(['getAddress'])
        },
        components: {
            FooterGuide

        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    #app
        width 100%
        height 100%
        background #f5f5f5
</style>
