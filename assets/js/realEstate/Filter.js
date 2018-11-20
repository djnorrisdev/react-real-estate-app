import React, { Component} from 'react'

export default class Filter extends Component {
  constructor () {
    super()
    this.state = {
    }
    this.cities = this.cities.bind(this)
    this.homeTypes = this.homeTypes.bind(this)
    this.bedrooms = this.bedrooms.bind(this)
  }

  componentWillMount() {
    this.props.populateAction()
  }

  cities() {
    if (this.props.globalState.populateFormsData.cities != undefined) {
      const {cities} = this.props.globalState.populateFormsData
      // console.log(cities)
      return cities.map((item) => {
        return(
        <option key={item} value={item}>{item}</option>
        )
      })
    }
  }

  homeTypes() {
    if (this.props.globalState.populateFormsData.homeTypes != undefined) {
      const {homeTypes} = this.props.globalState.populateFormsData
      // console.log(homeTypes)
      return homeTypes.map((item) => {
        return(
        <option key={item} value={item}>{item}</option>
        )
      })
    }
  }

  bedrooms() {
    if (this.props.globalState.populateFormsData.bedrooms != undefined) {
      const {bedrooms} = this.props.globalState.populateFormsData
      // console.log(bedrooms)
      return bedrooms.map((item) => {
        return(
        <option key={item} value={item}>{item}+ BR</option>
        )
      })
    }
  }

  render () {
    return (<section id="filter">
      <div className="inside">
        <h4>Filter</h4>
        <label htmlFor="city">City</label>
        <select name="city" className="filters city" onChange={this.props.change}>
          <option value="All">All</option>
          {this.cities()}
        </select>
        <label htmlFor="homeType">Home Type</label>
        <select name="homeType" className="filters homeType" onChange={this.props.change}>
          <option value="All">All</option>
          {this.homeTypes()}
        </select>
        <label htmlFor="bedrooms">Bedrooms</label>
        <select name="bedrooms" className="filters bedrooms" onChange={this.props.change}>
        {this.bedrooms()}
        </select>
        <div className="filters price">
          <span className="title">Price</span>
          <input type="text" name="min_price" className="min-price" value={this.props.globalState.min_price} onChange={this.props.change}/>
          <input type="text" name="max_price" className="max-price" value={this.props.globalState.max_price} onChange={this.props.change}/>
        </div>
        <div className="filters floor_space">
          <span className="title">Floor Space</span>
          <input type="text" name="min_floor_space" className="min-floor-space" value={this.props.globalState.min_floor_space} onChange={this.props.change}/>
          <input type="text" name="max_floor_space" className="max-floor-space" value={this.props.globalState.max_floor_space} onChange={this.props.change}/>
        </div>
        <div className="filters extras">
        <span className="title">Extras</span>
          <label htmlFor="extras">
            <span>Elevators</span>
            <input name="elevator" value="elevator" type="checkbox" onChange={this.props.change}/>
          </label>
          <label htmlFor="extras">
            <span>Swimming Pool</span>
            <input name="swimming_pool" value="swimming_pool" type="checkbox" onChange={this.props.change}/>
          </label>
          <label htmlFor="extras">
            <span>Finished Basement</span>
            <input name="finished_basement" value="finished_basement" type="checkbox" onChange={this.props.change}/>
          </label>
          <label htmlFor="extras">
            <span>Gym</span>
            <input name="gym" value="gym" type="checkbox" onChange={this.props.change}/>
          </label>
        </div>
      </div>  
    </section>)
  }
}
