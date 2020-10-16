import * as Yup from "yup";

const formSchema = Yup.object().shape({
	size: Yup
		.string()
		.oneOf(["xl, lg, md, sm"])
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
	pepperoni: Yup.boolean(),
	sausage: Yup.boolean(),
	canadianBacon: Yup.boolean(),
	spicyItalianSausage: Yup.boolean(),
	grilledChicken: Yup.boolean(),
	onions: Yup.boolean(),
	greenPepper: Yup.boolean(),
	dicedTomatoes: Yup.boolean(),
	blackOlives: Yup.boolean(),
	roastedGarlic: Yup.boolean(),
	artichokeHearts: Yup.boolean(),
	threeCheese: Yup.boolean(),
	pineapple: Yup.boolean(),
	extraCheese: Yup.boolean(),
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