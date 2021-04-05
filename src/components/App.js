import TrelloList from './TrelloList';
import { connect } from 'react-redux';
import React, { Component } from 'react';

class App extends Component {
  render() {
    const { lists } = this.props;
    return (
      <div className="App">
        <h2>Jaeyoung Trello</h2>
        <div style={styles.listsContainer}>
          {lists.map((lists) => (
            <TrelloList title={lists.title} cards={lists.cards} />
          ))}
        </div>
      </div>
    );
  }
}

const styles = {
  listsContainer: {
    display: 'flex',
    flexDirection: 'row',
    
  },
};

const mapStateToProps = (state) => ({
  lists: state.lists,
});
export default connect(mapStateToProps)(App);
