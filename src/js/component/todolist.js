import React from "react";
import uid from "uid";

//include images into your bundle

//import your own components
import { TodoForm } from "./Todoform.js";

//create your first component
export class Todolist extends React.Component {
	constructor() {
		super();
		this.state = {
			list: [
				{ id: uid(), todo: "Take a shower" },
				{ id: uid(), todo: "Repair the car" }
			]
		};
		this.addToDo = this.addToDo.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	addToDo(todo) {
		const todos = {
			id: uid(),
			todo: todo
		};
		this.setState({ list: [...this.state.list, todos] });
	}

	handleClick(e, id) {
		e.preventDefault();
		console.log("HICE CLICK", id);
		const todoList = this.state.list.filter(item => {
			return item.id != id;
		});
		this.setState({ list: todoList });
	}

	render() {
		return (
			<div className="maincontainer">
				<div className="tittle">todos</div>
				<div className="lista">
					<TodoForm addToDo={this.addToDo} />
					<ul>
						{this.state.list.map(item => {
							return (
								<li key={item.id}>
									{item.todo}
									<span
										className="times fa fa-times"
										onClick={e =>
											this.handleClick(e, item.id)
										}
									/>
								</li>
							);
						})}
					</ul>
					<div className="footer">{this.state.list.length} items</div>
				</div>
			</div>
		);
	}
}
