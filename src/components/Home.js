import React from "react";
import { Route, Link } from "react-router-dom";
import styled from "styled-components";

const HomeContainer = styled.div`
	div.hero-container {
		margin: 0 auto;
		display: flex;
		flex-flow: column nowrap;
		justify-content: center;
		align-items: center;
		background-color: lightgray;
		h3 {
			font-size: 4rem;
		}
		a {
			display: inline-block;
			font-size: 1.4rem;
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

const Home = (props) => {
	return (
		<HomeContainer className="homepage-container">
			<div className="hero-container">
				<h3>Your favorite food, delivered while coding</h3>
				<Link to="/pizza-form">Pizza?</Link>
				{/* <img src={`https://images.unsplash.com/photo-1584365685547-9a5fb6f3a70c?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80`} alt="pizza" /> */}
			</div>
		</HomeContainer>
	)
};

export default Home;