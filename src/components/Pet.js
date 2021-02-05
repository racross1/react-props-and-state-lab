import React from 'react'

class Pet extends React.Component {


  chooseButton = () => {
    console.log(this.props.pet.isAdopted)
    if (!this.props.pet.isAdopted) {
      return <button className="ui primary button"  onClick={(e) => this.props.onAdoptPet(this.props.pet.id)}>Adopt pet</button>
    } else {
      return <button className="ui disabled button">Already adopted</button>
    }
  }
  //new function to show button or not based on adopted status of pet, and then in render below include curlybrackets call to this function
  //{this.adoptedButton()} << this is what to put in the render


  render() {
    return (
      <div id={this.props.pet.id} className="card">
        <div className="content">
          <a className="header">
            {this.props.pet.gender === 'female'? '♀' : '♂'}
            {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight} lb(s)</p>
          </div>
        </div>
        <div className="extra content">
          {this.chooseButton()}
          {/* <button disabled={!this.props.pet.isAdopted} className="ui disabled button">Already adopted</button>
          <button disabled={this.props.pet.isAdopted} className="ui primary button"  onClick={(e) => this.props.onAdoptPet(this.props.pet.id)}>Adopt pet</button> */}
        </div>
      </div>
    )
  }
}

export default Pet

// disabled={!this.props.pet.isAdopted} 
// { this.props.pet.isAdopted? className="ui primary button" : className="ui disabled button"}