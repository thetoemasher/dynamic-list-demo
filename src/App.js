import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Select from './Select'

class App extends Component {
  constructor() {
    super()
    this.state = {
      list: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
      choice1: '',
      choice2: '',
      choice3: '',
    }
  }

  updateChoice = (value, choice) => {
    this.setState({[choice]: value})
  }

  render() {
    let {choice1, choice2, choice3} = this.state
    let list1 = this.state.list.map(l => {
      if(l !== choice2 && l !== choice3) {
        return (
          <option value={l}>{l}</option>
        )
      }
    })
    let list2 = this.state.list.map(l => {
      if(l !== choice1 && l !== choice3) {
        return (
          <option value={l}>{l}</option>
        )
      }
    })
    let list3 = this.state.list.map(l => {
      if(l !== choice1 && l !== choice2) {
        return (
          <option value={l}>{l}</option>
        )
      }
    })
    console.log(choice3)
    return (
      <div>
        What's up
        <Select list={this.state.list} selectFn={(e) => this.updateChoice(e.target.value, 'choice1')} choice1={choice2} choice2={choice3}/>
        {choice1 ?
          <Select list={this.state.list} selectFn={(e) => this.updateChoice(e.target.value, 'choice2')} choice1={choice1} choice2={choice3}/> : null
        }
        {choice2 ?
          <Select list={this.state.list} selectFn={(e) => this.updateChoice(e.target.value, 'choice3')} choice1={choice1} choice2={choice2}/> : null
        }
      </div>
    );
  }
}

export default App;
