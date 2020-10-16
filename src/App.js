import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from "react-router-dom";
import styled from "styled-components";

// import Header from "./components/Header";
import Home from "./components/Home";
import PizzaForm from "./components/PizzaForm";
import Confirmation from "./components/Confirmation";

// const AppContainer = styled.div`
// 	width: 100%;
// `;

const Header = styled.div`
	width: 100%;
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-between;
	align-items: center;

	h1 {
		text-transform: uppercase;
		color: red;
	}

	nav {
		display: inline-flex;
		flex-flow: row nowrap;
		justify-content: space-evenly;
		align-items: center;
		overflow: auto;
		a {
			display: inline-block;
			width: 100px;
			padding: 15px 0;
			text-align: center;
			text-decoration: none;
			color: black;
			background-color: white;
			border: 1px solid black;
			&:hover {
				background-color: lightblue;
			}
		}
	}
`;

const initFormValues = {
	id: "",
	size: "",
	sauce: "",
	toppings: [],
	glutenFree: false,
	instructions: "",
	number: 1,
};

const initFormErrors = {
	id: "",
	size: "",
	sauce: "",
	toppings: "",
	glutenFree: "",
	instructions: "",
	number: "",
};

const initOrders = [];

const App = () => {

	// * STATES                                       //
	const [orders, setOrders] = useState(initOrders);
	const [formValues, setFormValues] = useState(initFormValues);
	const [formErrors, setFormErrors] = useState(initFormErrors);
	const [isDisabled, setIsDisabled] = useState(true);

	//* HELPER FUNCTIONS                              //
	const formChange = (name, value) => {
		
	};

	// *      RENDER                                  //
	return (
		<div className="App">
			{/* <Header /> */}
			<Header className="header">
				<h1>Lambda Eats</h1>
				<nav>
					<Link to="/">Home</Link>
					<Link to="/pizza-form">Pizza?</Link>
				</nav>
			</Header>
			<Switch>
				<Route path="/pizza-form/confirm">
					<Confirmation />
				</Route>
				<Route path="/pizza-form">
					<PizzaForm values={formValues} errors={formErrors} disabled={isDisabled} change={formChange} submit={formSubmit} />
				</Route>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
		</div>
	);
};
export default App;
