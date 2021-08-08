/* eslint-disable max-len */
import React, { Component } from 'react';
import HistoryList from '../presentation/HistoryList';
import Results from '../presentation/Results';
import { makeARequest } from '../service/fetchApi';
import styles from './Header.css';
// import Controls

export default class Container extends Component {
    state = {
      url: '',
      method: 'GET',
      rawJSON: '',
      history: [
        {
          id: 'exampleHistory_1',
          hmethod: 'GET',
          URL: 'https://dev.to/'
        },
        {       
          id:'exampleHistory_2',
          hmethod: 'POST',
          URL: 'https://www.amazon.com/'
        },
        {
          id: 'exampleHistory_3',
          hmethod: 'PUT',
          URL: 'https://scottsmiraclegro.com/'
        },
        {
          id: 'exampleHistory_4',
          hmethod: 'DELETE',
          URL: 'https://www.foodnetwork.com/'
        },
      ],
      returnedStat: '[{fake: but real to me}]'
    }

    handleChange = (e) => {
      const { name, value } = e.target;
      this.setState({ [name]: value });
    }

    handleFormSubmit = async (e) => {
      e.preventDefault();
      let result;
      try {
        result = await makeARequest(this.state.method, this.state.url, this.state.rawJSON);
      } catch(err) {
        result = `WRONG, PLEASE ADJUST ${err}!`;
      }
    }

    render() {
      return (
        <div className={styles.container}>
          <Controls
            onChange={this.handleChange}
            submitChange={this.handleFormSubmit}
            url={this.state.url}
            json={this.state.rawJSON}
            method={this.state.method}
          />
          <HistoryList
            history={this.state.history}/>
          <Results    
            results={this.state.returnedStat}/>
        </div>
      );
    }

}

