import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';

import { addToCart } from '../../redux/ducks/itemReducer';

class SearchResults extends Component {
	constructor(props) {
		super(props);
		this.state = {
			products: [],
			words: '',
			product: [],
			welp: []
		};
	}

	componentDidMount() {
		axios.get(`/api/allItems`).then((response) => {
			this.setState({
				products: response.data
			});
		});
	}

	render() {
		let { products } = this.state;

		function search(names, array) {
			let empty = [];
			console.log(array.names);
			for (let i = 0; i < array.length; i++) {
				console.log(array[i].name);
				if (array[i].name.toLowerCase().includes(names.toLowerCase())) {
					empty.push(array[i]);
					return empty;
				}
			}
		}

		return (
			<div clasName="topdiv">
				<div className="MenWrapper">
					{products ? (
						products.map((product) => {
							if (product.name.toLowerCase().includes(this.props.match.params.id.toLowerCase())) {
								console.log(product);
								return (
									<div className="menCardWrapper">
										<div style={{ marginTop: '2%' }}>
											<img style={{ width: '80%' }} src={product.picture} />
											<p>{product.name}</p>
											<p>{product.price}</p>
										</div>
									</div>
								);
							}
						})
					) : (
						<h1>'no search results'</h1>
					)}
				</div>
			</div>
		);
	}
}
const mapStateToProps = (state) => state;
export default connect(mapStateToProps, { addToCart })(SearchResults);
