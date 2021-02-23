import React, { Component } from "react";
import API from "../Utils/API";
import SearchForm from "./SearchForm";
import SearchRes from "./SearchRes";

export default class Table extends Component {
	state = {
		res: [],
		search: "",
	};

	componentDidMount() {
		API.search()
			.then((res) => {
				this.setState({ res: res.data.results });
				console.log(this.state.res);
			})
			.catch((err) => {
				console.log(err);
			});
	}

	handleInputChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
		console.log(event.target.value);
	};

	render() {
		return (
			<div>
				<SearchForm
					value={this.state.search}
					handleInputChange={this.handleInputChange}
				/>

				{this.state.results && <SearchRes name={this.state.results} />}
			</div>
		);
	}
}
