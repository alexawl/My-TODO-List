import React from "react";

//include images into your bundle

//create your first component
export class Todolist extends React.Component {
	render() {
		return (
			<div className="maincontainer">
				<div className="tittle">todos</div>
				<div className="lista">lista</div>
			</div>
		);
	}
}
