import React, { Component } from "react";
import { connect } from "react-redux";
import { getProductById } from "../actions/product-actions";


class Productd extends Component {
  // constructor
  componentDidMount() {
    let {id} = this.props.match.params;
    this.props.getProduct(id);
    console.log(id);
  }
  render() {
    let {product} = this.props;
    console.log(product)
    return (
        <>
          <h3> Details of Product </h3>
            <div className="row">
                <div className="col-md-4">
                    <img src={product.imageURL} alt={product.name} style={{ height: 200 }}
                        className="img img-thumbnail" />
                </div>

                <div>
                    <table class="table table-striped">
                        <tr>
                            <td class="table-primary">Name</td>
                            <td><div className="card-title">{product.name}  </div></td>
                        </tr>
                        <tr>
                            <td class="table-primary">Description </td>
                            <td>  <div className="card-text">{product.description}</div></td>
                        </tr>
                        <tr>
                            <td class="table-primary">Price</td>
                            <td><div className="card-text">{product.price}</div></td>
                        </tr>
                        <tr>
                            <td class="table-primary">Stock</td>
                            <td><div className="card-text">{product.stock}</div></td>
                        </tr>

                    </table>

                </div>
            </div>
        </>
    );
  }
}

const stateAsProps = (state) => (
    {
        product: state.products.item
    }
)

const actionsAsProps = {
    getProduct: getProductById
}
export default connect(stateAsProps, actionsAsProps)(Productd);