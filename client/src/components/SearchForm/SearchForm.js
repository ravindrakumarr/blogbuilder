import React from 'react';
import Search from '../Search/Search';
import './SearchForm.css';
import TelegramIcon from '@material-ui/icons/Telegram';

export default class SearchForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: ""
    }
  }

  handleInputChanged(event) {
    this.setState({
      searchQuery: event.target.value
    });
  }

  handleButtonClicked() {
    var searchQuery = this.state.searchQuery;
    window.location.href = "http://localhost:3000/search?" + searchQuery;

    //ALERT ALERT ALERT 
    //the above code has to be improvised as per routing concepts
  }

  render() {
    return  (
      <div>
        <input type="text" 
            value={this.state.searchQuery} 
            onChange={this.handleInputChanged.bind(this)} 
            className="input"
            placeholder="Search Posts"
        />
        <button onClick={this.handleButtonClicked.bind(this)} className="submit-button">
          <TelegramIcon className="icon"/>
        </button>
      </div>
    );
  }
}