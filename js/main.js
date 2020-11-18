var app = new Vue({
el: '#root',
data: {
  myTodos: [],
  todo: "",
  messageErr: "Inserisci qualcosa da fare!"
},
methods:{
  addTodo: function(){

    if(this.todo==""){

      alert(this.messageErr);
      
    }else{

      this.myTodos.push(this.todo);
      this.todo = "";

    }
  },
  removeTodo: function(index){
    this.myTodos.splice(index, 1);
  }
}
});
