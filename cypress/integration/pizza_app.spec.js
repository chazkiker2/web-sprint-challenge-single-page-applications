/// <reference types="cypress" />

describe("MVP tests", () => {
	beforeEach(() => {
		cy.visit("http://localhost:3000/pizza-form");
	})

	const nameIn = () => cy.get("input[name='name']");
	const instructIn = () => cy.get("textarea[name='instructions']");


	describe("can add text to text inputs", () => {
		it("can add text to text-based inputs", ()=>{
			nameIn().should("have.value", "").type("Text").should("have.value", "Text");
			instructIn().should("have.value", "").type("lorem ipsum lorem ipsum text here, here, and here").should("have.value", "lorem ipsum lorem ipsum text here, here, and here");
		})
		
	})
})