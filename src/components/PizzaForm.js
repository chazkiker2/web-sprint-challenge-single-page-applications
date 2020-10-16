import React from "react";
import styled from "styled-components";

const ToggleSwitch = styled.label`
	position: relative;
	display: inline-block;
	width: 60px;
	height: 34px;
	input {
		opacity: 0;
		width: 0;
		height: 0;
	}
	.slider {
		position: absolute;
		cursor: pointer;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #ccc;
		-webkit-transition: .4s;
		transition: .4s;
		&:before {
			position: absolute;
			content: "";
			height: 26px;
			width: 26px;
			left: 4px;
			bottom: 4px;
			background-color: white;
			-webkit-transition: .4s;
			transition: .4s;
		}
	}
	input:checked + .slider {
		background-color: #2196F3;
	}
	input:checked + .slider:before {
		-webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
	}
`;


const PizzaForm = props => {
	const { values, submit, change, disabled, toppingsOptions } = props;

	const onChange = (evt) => {
		const { name, value, type, checked } = evt.target;
		// console.log(name, value, type, checked);
		if (name.includes("top-")) {
			const val = name.split("-");
			// console.log(val);
			change("toppings", val[1]);
		} else {
			const valueToUse = (type === "checkbox") ? checked : value;
			// console.log(name, valueToUse);
			change(name, valueToUse);
		}
	};

	const onSubmit = (evt) => {
		evt.preventDefault();
		submit();
	}
	return (
		<form className="formContainer" onSubmit={onSubmit}>
			<div className="form-header">
				<h3>Build Your Own Pizza</h3>
				<div className="form-hero"></div>
			</div>
			<div className="form-group submit">
				<h2>Build Your Own Pizza</h2>
				<div>
					Choice of Size
					<h6>Required</h6>
					<select name="size" value={values.size} onChange={onChange}>
						<option>Select</option>
						<option value="xl">Extra Large</option>
						<option value="lg">Large</option>
						<option value="md">Medium</option>
						<option value="sm">Small</option>
					</select>
				</div>
				<div>
					Choice of Sauce
					<h6>Required</h6>
					<label>
						Original Red
						<input type="radio" name="sauce" value="og-red" checked={values.sauce === "og-red"} onChange={onChange} />
					</label>
					<label>
						Garlic Ranch
						<input type="radio" name="sauce" value="garlic-ranch" checked={values.sauce === "garlic-ranch"} onChange={onChange} />
					</label>
					<label>
						BBQ Sauce
						<input type="radio" name="sauce" value="bbq" checked={values.sauce === "bbq"} onChange={onChange} />
					</label>
					<label>
						Spinach Alfredo
						<input type="radio" name="sauce" value="spinach-alfredo" checked={values.sauce === "spinach-alfredo"} onChange={onChange} />
					</label>
				</div>
				<div>
					Add Toppings
					<h6>Choose up to 10</h6>
					{
						toppingsOptions.map(top => {
							return (
								<label>
									<input key={top} type="checkbox" name={top} onChange={onChange} />
									{top}
								</label>
							);
						})
					}
				</div>
				<div>
					Choice of Substitute
					<h6>Choose up to 1.</h6>
					<ToggleSwitch class="switch">
						<input type="checkbox" name="glutenFree" checked={values.glutenFree}
							onChange={onChange} />
						<span className="slider"></span>
					</ToggleSwitch>
					<p>Gluten Free Crust</p>
				</div>
			</div>
			<div>
				Special Instructions
				<textarea name="instructions" value={values.instructions} rows="2" cols="35" placeholder={"Anything else you'd like to add?"} onChange={onChange} />
			</div>
			<div>
				<label>
					Name
					<input type="text" name="name" value={values.name} placeholder={"Your name here"} onChange={onChange} />
				</label>
			</div>
			<div>
				<input type="number" name="number" value={values.number} min="1" max="20" onChange={onChange} />
			</div>
			<button id="submitBtn" disabled={disabled}>Add to Order</button>
		</form>
	);
};

export default PizzaForm;