/// <reference types="cypress" />

describe("MVP tests", () => {
	
	beforeEach(() => {
		cy.visit("http://localhost:3000");
		cy.get("#link1").click();
	})

	const nameIn = () => cy.get("input[name='name']");
	const instructIn = () => cy.get("textarea[name='instructions']");
	const pepperoniCheckbox = () => cy.get("input[name='pepperoni']");
	const sausageCheckbox = () => cy.get("input[name='sausage']");
	const onionsCheckbox = () => cy.get("input[name='onions']");

	describe("can add correct input into each form element", () => {
		it("can add text to text-based inputs", ()=>{
			nameIn().should("have.value", "").type("Text").should("have.value", "Text");
			instructIn().should("have.value", "").type("lorem ipsum lorem ipsum text here, here, and here").should("have.value", "lorem ipsum lorem ipsum text here, here, and here");
		})
		it("can select multiple toppings", () => {
			pepperoniCheckbox().should("not.be.checked").check().should("be.checked");
			sausageCheckbox().should("not.be.checked").check().should("be.checked");
			onionsCheckbox().should("not.be.checked").check().should("be.checked");
		})
	})
})