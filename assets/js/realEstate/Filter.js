import React, { Component} from 'react'

export default class Filter extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe'
    }
  }

  render () {
    return (<section id="filter">
      <div className="inside">
        <h4>Filter</h4>
        <select name="neighborhood" className="filter-selects" onChange={this.props.change}>
          <option value="Ridgewood">Ridgewood</option>
          <option value="Richmond">Richmond</option>
          <option value="Annapolis">Annapolis</option>
          <option value="Laurel">Laurel</option>
        </select>
        <select name="housetype" className="filter-selects" onChange={this.props.change}>
          <option value="Rancher">Rancher</option>
          <option value="Single-Family">Single Family</option>
          <option value="Apartment">Apartment</option>
          <option value="Condo">Condo</option>
        </select>
        <select name="bedrooms" className="filter-selects" onChange={this.props.change}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <div className="filters price">
          <span className="title">Price</span>
          <input type="text" name="min_price" className="min-price" value={this.props.globalState.min_price} onChange={this.props.change}/>
          <input type="text" name="max_price" className="max-price" value={this.props.globalState.max_price} onChange={this.props.change}/>
        </div>
        <div className="filters floor-space">
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
            <input name="checkbox" value="gym" type="checkbox" onChange={this.props.change}/>
          </label>
        </div>
      </div>  
    </section>)
  }
}
