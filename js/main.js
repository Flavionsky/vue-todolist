var app = new Vue({
el: '#root',
data: {
  myTodos: [],
    todo: "",
  messageErr: "Inserisci qualcosa da fare!"
},
methods:{
  addTodo(){

    if(this.todo==""){

      alert(this.messageErr);

    }else{
      let todoObj = {
        todoel:this.todo,
        isActive: undefined
      };
      this.myTodos.push(todoObj);
      this.todo = "";
    }
  },
  removeTodo(index){
    this.myTodos.splice(index, 1);
  },
  addColor(index){
    console.log(this.myTodos.isActive)
    if (this.myTodos[index].isActive == undefined){
      this.myTodos[index].isActive = "green"
    }else{
      this.myTodos[index].isActive = undefined
    };
  },
}
});

// rewrite: function(index){
//   this.myTodos.splice(index, 1);
// }
// <a @click="rewrite(index)" href="#"><i class="fas fa-pencil-alt"></i></a>
