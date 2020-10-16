import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from "react-router-dom";
import styled from "styled-components";
import * as Yup from "yup";
import axios from "axios";

// import Header from "./components/Header";
import formSchema from "./validation/formSchema";
import Home from "./components/Home";
import PizzaForm from "./components/PizzaForm";
import Confirmation from "./components/Confirmation";
import Axios from "axios";

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
	// id: "",
	size: "",
	sauce: "",
	// toppings: {
		pepperoni: false,
		sausage: false,
		canadianBacon: false,
		spicyItalianSausage: false,
		grilledChicken: false,
		onions: false,
		greenPepper: false,
		dicedTomatoes: false,
		blackOlives: false,
		roastedGarlic: false,
		artichokeHearts: false,
		threeCheese: false,
		pineapple: false,
		extraCheese: false,
	// },
	glutenFree: false,
	instructions: "",
	name: "",
	number: 1,
};

const initFormErrors = {
	// id: "",
	size: "",
	sauce: "",
	toppings: "",
	glutenFree: "",
	instructions: "",
	name: "",
	number: "",
};

const initOrders = [];

const toppingsOptions = [
	"pepperoni",
	"sausage",
	"canadianBacon",
	"spicyItalianSausage",
	"grilledChicken",
	"onions",
	"greenPepper",
	"dicedTomatoes",
	"blackOlives",
	"roastedGarlic",
	"artichokeHearts",
	"threeCheese",
	"pineapple",
	"extraCheese"
];

const App = () => {

	// * STATES                                       //
	const [orders, setOrders] = useState(initOrders);
	const [formValues, setFormValues] = useState(initFormValues);
	const [formErrors, setFormErrors] = useState(initFormErrors);
	const [isDisabled, setIsDisabled] = useState(true);

	//* HELPER FUNCTIONS                              //
	const postOrder = (newOrder) => {
		axios.post("https://reqres.in/api/pizza", newOrder)
			.then(res => {
				console.log(res);
				setOrders([...orders, res.data]);
				console.log(orders);
			})
			.catch(err => {
				console.log(err);
			})
	};

	const formSubmit = () => {
		const newOrder = {
			size: formValues.size,
			sauce: formValues.sauce,
			toppings: toppingsOptions.filter(topping => formValues[topping]),
			glutenFree: formValues.glutenFree,
			name: formValues.name,
			instructions: formValues.instructions,
			number: formValues.number,
		};
		postOrder(newOrder);
	}

	const formChange = (key, value) => {
		Yup.reach(formSchema, key)
			.validate(value)
			.then(() => {
				setFormErrors({ ...formErrors, [key]: "" });
			})
			.catch(err => {
				setFormErrors({ ...formErrors, [key]: err.errors[0] });
			});

		setFormValues({ ...formValues, [key]: value })
	};
	// const toppingsChange = (topping, value) => {
	// 	Yup.reach(formSchema, toppings)
	// 		.validate(topping)
	// 		.then(() => {
	// 			setFormErrors({...formErrors, []})
	// 		})
	// }
	// const formSubmit = () => { };

	//* SIDE EFFECTS                                    //
	useEffect(() => {
		formSchema.isValid(formValues).then(valid => {
			setIsDisabled(!valid);
		})
	}, [formValues]);

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
					<PizzaForm values={formValues} errors={formErrors} disabled={isDisabled} change={formChange} submit={formSubmit} toppingsOptions={toppingsOptions} />
					{
						orders.map(order => {
							return (
							<div key={order.id} className="order">
								<p>SIZE: {order.size}</p>
								<p>SAUCE: {order.sauce}</p>
								<p>TOPPINGS: {order.toppings.toString()}</p>
								<p>GF: {order.glutenFree ? "true" : "false"}</p>
								<p>NAME: {order.name}</p>
								<p>NUMBER: {order.number}</p>
							</div>
							);
						})
					}
				</Route>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
		</div>
	);
};
export default App;
