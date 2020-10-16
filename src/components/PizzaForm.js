import React, { useState, useEffect } from "react";
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
	const { values, errors, submit, change, disabled, toppingsOptions } = props;

	const onChange = (evt) => {
		const { name, value, type, checked } = evt.target;
		const valueToUse = (type === "checkbox") ? checked : value;
		change(name, valueToUse);
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
				<label>
					Choice of Size
					<h6>Required</h6>
					<select name="size" value={values.size} onChange={onChange}>
						<option>Select</option>
						<option value="xl">Extra Large</option>
						<option value="lg">Large</option>
						<option value="md">Medium</option>
						<option value="sm">Small</option>
					</select>
				</label>
				<label>
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

				</label>
				<label>
					Choice of Substitute
					<h6>Choose up to 1.</h6>
					<ToggleSwitch class="switch">
					
						<input type="checkbox" name="gluten-free" checked={values.glutenFree}
							onChange={onChange} />
						<span class="slider"></span>
					Gluten Free Crust
				</ToggleSwitch>
				</label>
			</div>
			<button>Add to Order</button>
		</form>
	);
};

export default PizzaForm;