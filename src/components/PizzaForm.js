import React, { useState, useEffect } from "react";


const PizzaForm = props => {
	const { values, errors, submit, change, disabled} = props;

	const onChange = (evt) => {
		const { name, value, type, checked } = evt.target;
		const valueToUse = (type === "checkbox") ? checked: value;
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
			</div>
		</form>
	);
};

export default PizzaForm;