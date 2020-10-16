import * as Yup from "yup";

const formSchema = Yup.object().shape({
	size: Yup
		.string()
		.oneOf(["xl", "lg", "md", "sm"])
		.required(),
	sauce: Yup
		.string()
		.oneOf(["og-red", "garlic-ranch", "bbq", "spinach-alfredo"])
		.required(),
	// toppings: Yup
	// 	.array()
	// 	.of(
	// 		Yup.string().min(0).max(10))
	// 	.required(),
	pepperoni: Yup.boolean().notRequired(),
	sausage: Yup.boolean().notRequired(),
	canadianBacon: Yup.boolean().notRequired(),
	spicyItalianSausage: Yup.boolean().notRequired(),
	grilledChicken: Yup.boolean().notRequired(),
	onions: Yup.boolean().notRequired(),
	greenPepper: Yup.boolean().notRequired(),
	dicedTomatoes: Yup.boolean().notRequired(),
	blackOlives: Yup.boolean().notRequired(),
	roastedGarlic: Yup.boolean().notRequired(),
	artichokeHearts: Yup.boolean().notRequired(),
	threeCheese: Yup.boolean().notRequired(),
	pineapple: Yup.boolean().notRequired(),
	extraCheese: Yup.boolean().notRequired(),
	glutenFree: Yup
		.boolean()
		.required(),
	name: Yup
		.string()
		.required("Name is required")
		.min(3, "Name must be at least 3 characters long"),
	instructions: Yup.string().notRequired(),
	number: Yup.number().positive().min(1).max(20),
});

export default formSchema;

// const initFormValues = {
// 	id: "",
// 	size: "",
// 	sauce: "",
// 	toppings: [],
// 	glutenFree: false,
// 	instructions: "",
// 	number: 1,
// };