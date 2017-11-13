import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import getCards from '../FunctionalComponents/getCards/getCards'
import './Cards.css';

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blackCards:null,
      whiteCards:null
    } 
  }
  componentDidMount() {
    let cards = getCards();
    console.log(cards)
    console.log(cards.whiteCards)
    this.setState({
      blackCards:cards.blackCards,
      whiteCards:cards.whiteCards
    })
  }
  loadBlackCards() {
    return this.state.blackCards.map((e, i)=>{
      return (
        <section id={'black_card_'+(i+1)} className='black_card'>
          <div className='question_text'>{e.text}</div>
          <div className='bottom_card_div'>
            <div className='icon_section'>
              <div className='book_icon'/>
              <div className='devs_against_humanity'>Devs Against Humanity</div>
            </div>
            <div className='pick_num_cards'>Pick {e.pick}</div>
          </div>
        </section>
      )
    })
    
  }
  render() {
    return (
      <main>
        <Link to='/Board'> Board</Link>
        <div className='cards_container'>
          {this.state.blackCards? this.loadBlackCards() : 'loading...'}
        </div>
      </main>
    )
  }
}

export default Cards;