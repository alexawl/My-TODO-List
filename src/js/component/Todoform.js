import React from "react";
import shortid from "shortid";

//include images into your bundle

//create your first component
export class TodoForm extends React.Component {
	state = {
		text: ""
	};

	keyPress(e) {
		if (e.keyCode === 13) {
			this.state.text == "" ? null : console.log("validando input");
		}
	}

	render() {
		return (
			<input
				placeholder="What needs to be done?"
				onChange={e => this.setState({ text: e.target.value })}
				onKeyDown={e => this.keyPress(e)}
			/>
		);
	}
}
