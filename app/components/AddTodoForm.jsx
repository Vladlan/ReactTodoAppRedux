var React = require('react');

var AddTodoForm = React.createClass({
    onSubmit: function (e) {
        e.preventDefault();
        var todoText = this.refs.todoText.value;

        if (todoText) {
            this.refs.todoText.value = '';
            this.props.onAddTodo(todoText);
        }
        else {
            this.refs.todoText.focus();
        }
    },
   render: function () {
       return (
           <div>
               <form ref="form" onSubmit={this.onSubmit} className="AddTodoForm">
                   <input className="AddTodo" type="text" ref="todoText"
                          placeholder="Enter todo"/>
                   <button className="button expanded">Submit</button>
               </form>
           </div>
       )
   }
});

module.exports = AddTodoForm;