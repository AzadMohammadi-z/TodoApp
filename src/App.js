import React, { Component } from 'react';
import TodoEntry from './components/TodoEntry';
import TodoItems from './components/TodoItems';
import TodoFooter from './components/TodoFooter';
import DevTool from 'mobx-react-devtools';
import { observer } from 'mobx-react';

@observer
class App extends Component {
    render() {
        return (
            <div id="todoapp" className="todoapp">
                <DevTool />
                <TodoEntry />
                <TodoItems />
                <TodoFooter />
            </div>
        );
    }
}

export default App;
