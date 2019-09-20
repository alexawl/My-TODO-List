import React from "react";

//include images into your bundle

//import your own components
import { TodoForm } from "./Todoform.js";

//create your first component
export class Todolist extends React.Component {
	constructor() {
		super();
		this.state = {
			list: ["Wash my hands", "Close the door", "Pay bills"]
		};
		this.addToDo = this.addToDo.bind(this);
	}

	addToDo(todo) {
		console.log(this.state);
		this.setState({ list: [...this.state.list, todo] });
	}

	render() {
		return (
			<div className="maincontainer">
				<div className="tittle">todos</div>
				<div className="lista">
					<TodoForm addToDo={this.addToDo} />

					{this.state.list.map(item => {
						return <p key={Math.random}>{item}</p>;
					})}
					<div className="footer">{this.state.list.length} items</div>
				</div>
			</div>
		);
	}
}
