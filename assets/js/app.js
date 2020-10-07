var app = new Vue({

    el: '#app',
    data:{
        content: '',
        // message1: 'Hello World!',
        // message2:'yes its me',
        comments:['test'],
        value: 1,
        // down: 6,
        // int3: 10,
        vote:0,
    },

    // computed: {
    //     sum: function(){
    //         return this.int1 + this.int2;
    //     }
    // },
    methods:{

        addComment:function(){

            this.comments.push(this.content);
            this.content='';
        },

        upVote: function(){
            return this.vote  = this.vote + this.value;
        },

        downVote: function(){

            return this.vote  = this.vote - this.value;        
        }

    }


 })