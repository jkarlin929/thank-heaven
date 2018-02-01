import React, { Component } from 'react';
import Brand from './Brand';

class Brands extends Component {
  constructor(props){
    super(props);
    this.state = {
      brands: this.props.brands,
      dataLoaded: false
    }
    this.renderBrands = this.renderBrands.bind(this)
  }

  componentDidMount(){
    if(this.state.brands){
      this.setState({
        dataLoaded: true
      })
    }
  }

  renderBrands(brands) {
    return brands.map((brand) => {
      return(
        <Brand key={brand.id} name={brand.name} location={brand.location} image={brand.image} story={brand.story} quote={brand.quote} />
      )
    })
  }

  render() {
    return (
      <div>
        {/* <Header />
        <Logo /> */}
        <h1>Brands</h1>
        <div className="brandList">
          {this.renderBrands(this.state.brands)}
        </div>
        {/* <Instagram />
        <Footer /> */}
      </div>
    );
  }

}

export default Brands;
