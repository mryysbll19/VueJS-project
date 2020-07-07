new Vue({
    el:'#vue-app',
    data:{
       age: 23,
       x: 0,
       y: 0
    },
    methods:{
        logName:function(){
            console.log('you entered your name');
        },
        logAge:function(){
            console.log('you enter your age');
        }
      
        }
    }
});