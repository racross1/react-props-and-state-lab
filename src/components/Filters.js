import React from 'react'

class Filters extends React.Component {
  constructor() {
    super()

    this.state = {
      filterVal: 'all'
    }
  }
  
  
  handleChange = (e) => {
    // this.setState({
    //   filterVal: e.target.value
    // })
    this.props.onChangeType(e.target.value)
  }

  handleClick = (e) => {
    this.props.onFindPetsClick()
  }
  
  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select onChange={this.handleChange} name="type" id="type">
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button onClick={this.handleClick} className="ui secondary button">Find pets</button>
        </div>
      </div>
    )
  }
}

export default Filters
