import React from "react";

//include images into your bundle

//import your own components
import { TodoForm } from "./Todoform.js";

//create your first component
export class Todolist extends React.Component {
	state = {
		list: ["Wash my hands", "Close the door", "Pay bills"]
	};

	render() {
		return (
			<div className="maincontainer">
				<div className="tittle">todos</div>
				<div className="lista">
					<TodoForm />
					{this.state.list.map(item => {
						return <p key={Math.random}>{item}</p>;
					})}
				</div>
			</div>
		);
	}
}
