import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  fetchPets = () => {
    let fetchURL 
    if (this.state.filters.type === 'all'){
      fetchURL = '/api/pets'
    } else {
      fetchURL = `/api/pets?type=${this.state.filters.type}`
    }

    fetch(fetchURL)
    .then(resp => resp.json())
    .then(newPets => this.setState({pets: newPets}))

  }

  changeFilters = (filterVal) => {
    this.setState({
      filters: {
        type: filterVal
      }
    })
    }

  changePetState = (fileteredPets) => {
      this.setState({
        pets: fileteredPets
      })
    }

    onAdoptPet = (petId) => {
      let pets = this.state.pets
      let adoptedPet = pets.find(x => x.id === petId)
      let adoptedPetIndex = pets.indexOf(adoptedPet)
      adoptedPet.isAdopted = true

      pets.splice(adoptedPetIndex, 1, adoptedPet)
      this.setState({
        pets: pets
      })
      console.log(this.state.pets)
    }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.changeFilters} onFindPetsClick={this.fetchPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
