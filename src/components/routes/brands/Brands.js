import React, { Component } from 'react';
import Logo from '../../Logo';
import Brand from './Brand';
class Brands extends Component {
  constructor(props){
    super(props);
    this.state = {
      brands: this.props.brands,
      dataLoaded: false
    }
    this.renderBrands = this.renderBrands.bind(this);
    this.passFilmData = this.passBrandData.bind(this);
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
  passBrandData(brands) {
    return brands.map((brand) => {
      return (
       <div key={brand.id}>
         {this.state.brands ? <Brand name={brand.name} image={brand.image} description={brand.description} /> : ''}
       </div>
    )})
  }
  render() {
    return (
      <div>
        <Logo />
        <h1>Brands</h1>
        <div>
          <hr className="line" />
          <img src="http://res.cloudinary.com/camcash17/image/upload/v1517430458/001-toy-train_gapuot.png" />
        </div>
        <div className="brandList">
          {this.state.dataLoaded ? <div>{this.renderBrands(this.state.brands)}</div> : ''}
          {this.state.brands ? <div>{this.passBrandData(this.state.brands)}</div> : ''}
        </div>
      </div>
    );
  }
}
export default Brands;
