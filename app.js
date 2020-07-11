var data = {
    name: 'Ysa'
}

Vue.component('greeting',{
    template: '<p>Hey there, I am {{ name }} . <button v-on:click="changeName">Change Name</button> </p>',
    data: function(){
        return {
            name: 'Ysa'
        }
    },
    methods: {
        changeName: function(){
            this.name = 'Joneil';
        }
    }  
});


new Vue({
    el: '#vue-app-one'
});

new Vue({
    el: '#vue-app-two'
})