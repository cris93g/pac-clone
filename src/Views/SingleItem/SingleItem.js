import React, { Component } from 'react';
import axios from 'axios';
import './SingleItem.css';
import { connect } from 'react-redux';
import GuyFeatures from '../../components/GuyFeatured/GuyFeatures';
import GirlFeatured from '../../components/GirlFeatured/GirlFeatured';
import { Link } from 'react-router-dom';
import { addToCart } from '../../redux/ducks/itemReducer';
class SingleItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			product: [],
			featured: [],
			se: true
		};
		// this.findMatchingSex = this.findMatchingSex.bind(this);
		this.refreshPage = this.refreshPage.bind(this);
	}
	componentDidMount() {
		axios
			.post(`api/item`, {
				id: this.props.match.params.id
			})
			.then((response) => {
				this.setState({ product: response.data });
			});

		axios.get(`/api/women`).then((response) => {
			this.setState({ featured: response.data });
		});
	}
	refreshPage(event) {
		console.log(this.state.product);
		axios
			.post(`api/item`, {
				id: this.state.product['0'].id
			})
			.then((response) => {
				this.setState({ product: response.data });
			});
		this.setState({ se: false });
	}
	render() {
		console.log(this.props);
		const { product, featured } = this.state;

		const shuffled = featured ? featured.sort(() => 0.5 - Math.random()) : 'none';
		console.log(this.state);
		return (
			<div>
				<div>
					{product ? (
						product.map((item) => {
							return (
								<div className="itemContainer">
									<div className="leftItem">
										<img style={{ width: '90%' }} src={item.picture} />
									</div>
									<div className="rightItem">
										<h1>{item.brand}</h1>
										<h2>{item.name}</h2>
										<h3>{item.price}</h3>
										<p>{item.description}</p>
										<button onClick={() => addToCart(item)} className="cartButton">
											ADD TO BAG
										</button>
									</div>
									<div />
								</div>
							);
						})
					) : (
						''
					)}
				</div>
				<div className="bottomSingle">
					<h2>YOU MAY ALSO LIKE</h2>
					{console.log(product['0'])}
				</div>
				<div>
					{product ? (
						product.map((item) => {
							if (item.sex == 'f') {
								return (
									<div className="featuredItems">
										{shuffled ? (
											shuffled.slice(-4).map((item) => {
												return (
													<div>
														<div>
															<Link to={`/item/${item.id}`}>
																<img
																	style={{ width: '90%' }}
																	src={item.picture}
																	className="feauturedPic"
																/>
															</Link>
														</div>
														<p>{item.name}</p>
														<p>{item.price}</p>
													</div>
												);
											})
										) : (
											''
										)}
									</div>
								);
							}
							// else {
							// 	return (
							// 		<div>

							// 		</div>
							// 	);
							// }
						})
					) : (
						'none'
					)}
				</div>
				<div>{}</div>
			</div>
		);
	}
}
const mapStateToProps = (state) => state;
export default connect(mapStateToProps, { addToCart })(SingleItem);
