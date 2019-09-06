import React, { Component } from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";

import { connect } from "react-redux";

import { addToCart } from "../../redux/ducks/itemReducer";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      words: "",
      product: [],
      welp: []
    };
    this.search = this.search.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    axios.get(`/api/allItems`).then(response => {
      this.setState({
        products: response.data
      });
    });
  }

  search(namekey, array) {
    let empty = [];
    for (let i = 0; i < array.length; i++) {
      console.log(array[i].name);
      if (array[i].name.toLowerCase().includes(namekey.toLowerCase())) {
        empty.push(array[i]);
        console.log(empty);
        this.setState({ welp: empty });
      }
    }
  }
  onChangeHandler(e) {
    this.setState({ words: e.target.value });
  }
  onSubmit() {
    this.search(this.state.words, this.state.products);
  }
  render() {
    const { welp } = this.state;
    return (
      <div>
        <input onChange={e => this.onChangeHandler(e)} />
        <button onClick={this.onSubmit}>SUBMIT</button>
        <div clasName="topdiv">
          <div className="MenWrapper">
            {welp
              ? welp.map(pro => {
                  return (
                    <div>
                      <div className="menCardWrapper">
                        <img
                          src={pro.picture}
                          className="card_pic"
                          alt="products"
                        />
                        <p>{pro.name}</p>

                        <p>{pro.price}</p>
                      </div>
                    </div>
                  );
                })
              : "none"}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => state;
export default connect(
  mapStateToProps,
  { addToCart }
)(Search);
