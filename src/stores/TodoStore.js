import { observable, action, autorun } from 'mobx';
import TodoModel from './TodoModel';

class TodoStore {
    @observable todos = [];
    lastID = 0;

    @observable
    todosA = [];

    @action
    addTodo(title) {
        this.todos = this.todosA;
        this.todos.push(
            new TodoModel(this, title, false, this.lastID++, false)
        );

        this.todosA = this.todos;
        this.todosA.forEach(todo => {});
    }

    @action
    removeTodo(myid) {
        this.todosA.remove(this.todosA[myid]);
        this.lastID = this.lastID - 1;
        this.todosA.forEach(todo => {
            if (todo.id > myid) {
                todo.id = todo.id - 1;
            } else if (todo.id < myid) {
                todo.id = todo.id;
            }
        });

        this.todos = this.todosA;
    }

    @action
    All() {
        autorun(() => {
            this.todos = this.todosA.filter(todo => todo.completed !== '');
        });
    }
    @action
    Active() {
        autorun(() => {
            this.todos = this.todosA.filter(todo => todo.completed === false);
        });
    }

    @action
    Complete() {
        autorun(() => {
            this.todos = this.todosA.filter(todo => todo.completed === true);
        });
    }

    @action
    Clear() {
        for (let i = 0; i < this.todosA.length; i++) {
            if (this.todosA[i].completed === true) {
                this.todosA.remove(this.todosA[i]);
                this.todosA.forEach(todo => {
                    if (todo.id > i) {
                        todo.id = todo.id - 1;
                    } else if (todo.id < i) {
                        todo.id = todo.id;
                    }
                });
                this.lastID--;
                i--;
            }
        }

        this.todos = this.todosA;
    }
}

const todoStore = new TodoStore();
export default todoStore;
