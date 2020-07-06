new Vue({
    el:'#vue-app',
    data:{
        name:'Ysa',
        job:'pharmacist'
    },
    methods:{
        greet: function(time){
            return 'Good' + time + '' + this.name;
        }
    }
});