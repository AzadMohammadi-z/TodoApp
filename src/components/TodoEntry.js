import React, { Component } from 'react';
import todoStore from '../stores/TodoStore';
import { observer } from 'mobx-react';

@observer
class TodoEntry extends Component {
    state = {
        value: ''
    };
    handleKeyDown = event => {
        if (event.keyCode !== 13) {
            return;
        }
        event.preventDefault();
        document.getElementById('place').placeholder = 'What needs to be done?';
        todoStore.addTodo(this.state.value);
        this.setState({
            value: ''
        });
    };
    render() {
        return (
            <header className="header">
                <h1>TodoApp</h1>
                <input
                    id="place"
                    value={this.state.value}
                    onChange={event =>
                        this.setState({ value: event.target.value })
                    }
                    onKeyDown={event => this.handleKeyDown(event)}
                    type="text"
                    className="new-todo"
                    placeholder="what needs to be done ?"
                />
            </header>
        );
    }
}

export default TodoEntry;
