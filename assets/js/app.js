var app = new Vue({

    el: '#app',
    data:{
        content: '',
  
        comments:['test'],
        value: 1,
     
        vote:0,
    },

  
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