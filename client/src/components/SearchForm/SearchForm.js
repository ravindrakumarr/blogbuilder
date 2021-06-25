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


    handleButtonClicked() {
      var searchQuery = this.state.searchQuery;
      window.location.href = "http://localhost:3000/search?" + searchQuery;
      //ALERT ALERT ALERT 
      //the above code has to be improvised as per routing concepts
    }


   handleKeypress (event) {
    //it triggers by pressing the enter key
    if (event.keyCode === 13 || event.key === 'Enter' ) {
      this.handleButtonClicked();
    }
  };


  handleInputChanged(event) {
    this.setState({
      searchQuery: event.target.value
    });
  }


  render() {
    return  (
      <div>
        <input type="text" 
            value={this.state.searchQuery} 
            onChange={this.handleInputChanged.bind(this)} 
            className="input"
            placeholder="Search for blogs"
            onKeyPress={this.handleKeypress.bind(this)}
        />
        <div style={{display: 'none'}}>
          <button onClick={this.handleButtonClicked.bind(this)} className="submit-button">
            <TelegramIcon className="icon"/>
          </button>
        </div>

        <br/><br/>

        {/* Quick Links */}
        <h3 className="footer_ul_amrc">Quick Links to visit</h3>
        <ul className="footer_ul_amrc" style={{color: '#333333', textDecoration: 'underline'}}>
            <li><a href={'/search?how to do'}><span className="blue-links">how to do</span></a></li>
            <li><a href={'/search?Remove Background'}><span className="blue-links">Remove Background</span></a></li>
            <li><a href={'/search?Shadows Mirror Reflection'}><span className="blue-links">Shadows Mirror Reflection</span></a></li>
            <li><a href={'/search?Logo Design'}><span className="blue-links">Logo Design</span></a></li>
            <li><a href={'/search?Vectorization tree'}><span className="blue-links">Vectorization tree</span></a></li>
        </ul>

        <br/>

        <h3 className="footer_ul_amrc">Some Popular Hashtags</h3>
        <ul className="footer_ul_amrc" style={{color: '#333333', textDecoration: 'underline'}}>
            <li><a href={'/search?how to do'}><span className="blue-links">#howto</span></a></li>
            <li><a href={'/search?Remove Background'}><span className="blue-links">#ProceudreTo</span></a></li>
            <li><a href={'/search?Shadows Mirror Reflection'}><span className="blue-links">#CreateThis</span></a></li>        
        </ul>



      </div>
    );
  }
}