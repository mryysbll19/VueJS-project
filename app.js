
new Vue({
    el: '#vue-app',
    data:{
        output:'Your fav food'
    },
    methods:{
        readRefs=function(){
          console.log(this.$refs.input.value);
          this.ouput= this.$refs.input.value;
    }
}
});
