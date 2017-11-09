import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: []
    }

  }

  //One initial mount we want to populate some data
  //Once component mounts a 'GET' is sent to the server
  
  componentDidMount() {
   $.ajax({
    url: 'repos',
    type: 'GET',
    success: function(data) {
      console.log('Incoming Data', data);
    },
    error: function(data) {
      console.log('No data yet!');
    }});  
  }

  search (term) {
    console.log(`${term} was searched`);
    // TODO
    //POST REQUEST FROM REACT HERE
    //WORKS FINE!!!
    $.ajax({
      url: 'repos',
      type: 'POST',
      data: {'username': `${term}`},
      success: function(data) {
        console.log('Bye Bye Data');
      },
      error: function(data) {
        console.log('Data still here :(');
      }});
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));