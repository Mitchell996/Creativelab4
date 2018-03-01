var app = new Vue({
  el: '#app',
  data: {
    todos: [],
    message: '',
  },
    computed: {
    activeTodos: function() {
      return this.todos.filter(function(item) {
	return !item.completed;
      });
    },
    methods: {
    addItem: function() {
      this.todos.push({text: this.message,completed:false});
      this.message = '';
    },
        completeItem: function(todo) {
      todo.completed = !todo.completed;
    },
         deleteItem: function(item) {
      var index = this.todos.indexOf(item);
      if (index > -1)
	this.todos.splice(index,1);
    },
  }
});