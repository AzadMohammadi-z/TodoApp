import React, { Component } from 'react';
import { observer } from 'mobx-react';
import todoStore from '../stores/TodoStore';

@observer
class TodoItem extends Component {
    onToggle = () => {
        this.props.todo.toggle();
    };
    constructor(props) {
        super(props);
        this.handleDestroy = this.handleDestroy.bind(this);
    }
    handleDestroy() {
        todoStore.removeTodo(this.props.todo.id);
    }
    render() {
        const { todo } = this.props;
        return (
            <li className={todo.completed ? 'completed' : ' '}>
                <div className="view">
                    <input
                        onChange={this.onToggle}
                        type="checkbox"
                        className="toggle"
                        vlaue="on"
                        checked={todo.completed}
                    />
                    <label>{todo.title}</label>
                    <button className="destroy" onClick={this.handleDestroy} />
                </div>
            </li>
        );
    }
}

export default TodoItem;
