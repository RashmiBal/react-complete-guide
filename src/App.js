import React,{Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name:'Max', age:28},
      {name:'Manu', age:29},
      {name:'Stephanie', age:26}
    ],
    otherState: 'some other value'
  }
switchNameHandler=(newName) => {
  //console.log('was clicked');
  this.setState({persons:
    [
      {name:newName, age:28},
      {name:'Manu', age:29},
      {name:'Stephanie', age:27}
    ]
  }) 
}

nameChangedHandler = (event) => {
  this.setState({persons:
    [
      {name:'Max', age:28},
      {name:event.target.value, age:29},
      {name:'Stephanie', age:26}
    ]
  }) 
}

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    return(
      <div className="App">
      <h1>I am a React app</h1>
      <p>this is a para</p>
      <button style={style}
      onClick={()=> this.switchNameHandler('Maxi-namefrombutton')}>Switch Name</button>
      <Person 
      name={this.state.persons[0].name} 
      age={this.state.persons[0].age}/>
      <Person 
      name={this.state.persons[1].name} 
      age={this.state.persons[1].age}
      click={this.switchNameHandler.bind(this,'Maximilian!!')}
      changed={this.nameChangedHandler}>Hobby is horse riding</Person>
      <Person 
      name={this.state.persons[2].name} 
      age={this.state.persons[2].age}/>
      {/* <Person name="Max" age="28"/>
      <Person name="Manu" age="29">Hobby is horse riding</Person>
      <Person name="Stephanie" age="26"/> */}
    </div>
    )
  }
}
// Also works...
// function App() {
//   return (
//     <div className="App">
//       <h1>I am a React app</h1>
//       <p>this is a para</p>
//       <button>Switch Name</button>
//       <Person name="Max" age="28"/>
//       <Person name="Manu" age="29">Hobby is horse riding</Person>
//       <Person name="Stephanie" age="26"/>
//     </div>
//   );
//   //return React.createElement('div',{className:'App'},React.createElement('h1',null,'I am a react app!!!'));
// }

export default App;
