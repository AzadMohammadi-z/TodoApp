import Clear from './Clear';
import React, { Component } from 'react';
import todoStore from '../stores/TodoStore';
import { observer } from 'mobx-react';

@observer
class TodoFooter extends Component {
    constructor(props) {
        super(props);
        this.active = this.active.bind(this);
        this.complete = this.complete.bind(this);
        this.all = this.all.bind(this);

        this.state = {
            selectedAll: true,
            selectedActive: false,
            selectedComplete: false
        };
    }
    all() {
        this.setState({
            selectedAll: true,
            selectedActive: false,
            selectedComplete: false
        });
        todoStore.All();
    }
    active() {
        this.setState({
            selectedAll: false,
            selectedActive: true,
            selectedComplete: false
        });
        todoStore.Active();
    }
    complete() {
        this.setState({
            selectedAll: false,
            selectedActive: false,
            selectedComplete: true
        });
        todoStore.Complete();
    }

    render() {
        if (todoStore.todosA.length > 0) {
            return (
                <div className="footer">
                    <button className="todo-count">
                        <span>
                            {
                                todoStore.todosA.filter(
                                    todo => todo.completed === false
                                ).length
                            }
                        </span>
                        <strong> items left</strong>
                    </button>
                    <ul className="filters">
                        <li onClick={this.all}>
                            <button>
                                <a
                                    className={
                                        this.state.selectedAll
                                            ? 'selected'
                                            : ' '
                                    }
                                >
                                    {' '}
                                    All
                                </a>
                            </button>
                        </li>

                        <li onClick={this.active}>
                            <button type="submit">
                                <a
                                    className={
                                        this.state.selectedActive
                                            ? 'selected'
                                            : ' '
                                    }
                                >
                                    {' '}
                                    Active
                                </a>
                            </button>
                        </li>

                        <li onClick={this.complete}>
                            <button type="submit">
                                <a
                                    className={
                                        this.state.selectedComplete
                                            ? 'selected'
                                            : ' '
                                    }
                                >
                                    Completed
                                </a>
                            </button>
                        </li>
                    </ul>
                    <Clear />
                </div>
            );
        } else {
            return null;
        }
    }
}
export default TodoFooter;
