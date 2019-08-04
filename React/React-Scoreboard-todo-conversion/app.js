function Header(props){
    return(
        <header>
            <h1>{ props.title}</h1>
            <span className = "to-do-list" >{ props.totalTasks}</span>
        </header>
    )
}


const Task = (props) => {
    return (
        <div className="task">
            <span className="task-name">
                <button className="remove-task" onClick={ () => props.removeTask(props.id) }>x</button>
            {props.task}
            </span>
            <div className="counter">
               <Counter />
            </div>
        </div>
    )
}

class Counter extends React.Component {

    state = {
        score: 0
    };
    
    incrementScore(){
        this.setState( prevState => ({
                score: prevState.score + 1
        }));
    }

    decrementScore(){
        this.setState( prevState =>({
                score: prevState.score - 1
        }));
    }

    render(){ 
        return(
            <div className="counter">
            <button className="counter-action decrement" onClick={() => this.decrementScore()}> - </button>
            <span className="counter-score">{this.state.score}</span>
            <button className="counter-action increment" onClick={() => this.incrementScore()}> + </button>
            </div>
        );
    }
}

class NewTask extends React.Component{
    state = {
        tasks
    };

    addTask() {
        this.setState({
            totalTasks: this.state.totalTasks + 1
        });
    }

    render(){ 
        return(
            <div className="NewTask">
            <button className="task-action add" onClick={() => this.addTask()}> ! </button>
            </div>
        );
    }
};

class App extends React.Component {

    state ={
        tasks: [
            {
                name: "get groceries",
                id: 1
            },
            {
                name: "pick up kids",
                id: 2
            },
            {
                name: "practice kung fu",
                id: 3
            },
            {
                name: "practice react",
                id: 4
            },
            {
                name: "go to movies",
                id: 5
            }
        ]
    };

    handleRemoveTask = (id) =>{
        this.setState( prevState =>{
            return{
                tasks: prevState.tasks.filter( p => p.id !== id )
            };
        });
    }

    handleAddTask = (id) =>{
        this.setState( prevState =>{
            tasks: this.state.tasks + 1
        });
    }

    render(){
        return(
            <div className="to-do-list">
                <Header 
                title="To Do List"
                totalTasks={this.state.tasks.length}
                />
    
                {/* tasks list */}
                {this.state.tasks.map( task =>
                  <Task
                    task={task.name}
                    id={task.id}
                    key={task.id.toString()}
                    removeTask={this.handleRemoveTask}
                  />
                )}
                    <input type="button" id="button1" value="Add" onClick="addTask();"></input>
            </div>
        );
    }
}



ReactDOM.render(
    <App />,
    document.getElementById('root')
);


