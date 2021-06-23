import React from 'react';
import Search from '../Search/Search';
import './SearchForm.css';
import TelegramIcon from '@material-ui/icons/Telegram';
import { Link } from 'react-router-dom';

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

        <br/><br/>

        {/* Quick Links */}
        <h3 className="footer_ul_amrc">Quick Links to visit</h3>
        <ul className="footer_ul_amrc" style={{color: '#333333', textDecoration: 'underline'}}>
            <li><a href={'/search?how to do'}>how to do</a></li>
            <li><a href={'/search?Remove Background'}>Remove Background</a></li>
            <li><a href={'/search?Shadows Mirror Reflection'}>Shadows Mirror Reflection</a></li>
            <li><a href={'/search?Logo Design'}>Logo Design</a></li>
            <li><a href={'/search?Vectorization tree'}>Vectorization tree</a></li>
            <li><a href={'/search?Hair Masking/Clipping'}>Hair Masking/Clipping</a></li>
        </ul>



      </div>
    );
  }
}