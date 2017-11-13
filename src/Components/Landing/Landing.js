import React, { Component } from 'react';
import { TimelineMax, Power4, Elastic } from 'gsap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import getCards from '../FunctionalComponents/getCards/getCards';
import GameBoard from '../GameBoard/GameBoard';
import './Landing.css';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      whiteCardArr:null,
      blackCardArr:null
    }
  }
  componentDidMount() {
    let cards = getCards();
    let blackCardArr=[cards.blackCards[12], cards.blackCards[64], cards.blackCards[63]];
    let whiteCardArr=[
      cards.whiteCards[25], cards.whiteCards[30], cards.whiteCards[454], cards.whiteCards[385], 
      cards.whiteCards[314], cards.whiteCards[379], cards.whiteCards[8], cards.whiteCards[72],
      cards.whiteCards[303], cards.whiteCards[221], cards.whiteCards[228], cards.whiteCards[106]
    ];
    this.setState({
      whiteCardArr,
      blackCardArr
    })
    let tl = new TimelineMax();
    tl.staggerFrom('.landing_title div', .5, {marginLeft:'100vw', ease: Power4.easeOut}, .3)
    .to('.landing_subtitle', 1, {opacity: 1}, '+=.3');
    
    let ctl = new TimelineMax({
      repeat: -1,
      repeatDelay: 0
    });
    setTimeout(()=>{
      ctl.to('#landing_black_card_1', 1, {bottom:-20, transform:'rotate(340deg)', ease: Power4.easeOut}, '+=1.8')
      .to('#landing_white_card_1', 1, {bottom: -50, transform:'rotate(30deg)', ease:Power4.easeOut})
      .to('#landing_white_card_1', 1.5, {bottom: -400, right: 100,  transform:'rotate(60deg)', ease:Power4.easeIn})
      .to('#landing_white_card_2', 1.5, {bottom: -50, transform:'rotate(30deg)', ease:Power4.easeOut})
      .to('#landing_white_card_2', 1.5, {bottom: -400, right: 100,  transform:'rotate(60deg)', ease:Power4.easeIn})
      .to('#landing_white_card_3', 1.5, {bottom: -50, transform:'rotate(30deg)', ease:Power4.easeOut})
      .to('#landing_white_card_3', 1.5, {bottom: -400, right: 100,  transform:'rotate(60deg)', ease:Power4.easeIn})
      .to('#landing_white_card_4', 1.5, {bottom: -50, transform:'rotate(30deg)', ease:Power4.easeOut})
      .to('#landing_white_card_4', 1.5, {bottom: -400, right: 100,  transform:'rotate(60deg)', ease:Power4.easeIn})
      .to('#landing_black_card_1', 1.5, {bottom: 50, right:-400, transform:'rotate(40deg)', ease:Power4.easeIn}, '-=.5')
      
      .to('#landing_black_card_2', 1, {bottom:-20, transform:'rotate(340deg)', ease: Power4.easeOut})
      .to('#landing_white_card_5', 1, {bottom: -50, transform:'rotate(30deg)', ease:Power4.easeOut})
      .to('#landing_white_card_5', 1.5, {bottom: -400, right: 100,  transform:'rotate(60deg)', ease:Power4.easeIn})
      .to('#landing_white_card_6', 1.5, {bottom: -50, transform:'rotate(30deg)', ease:Power4.easeOut})
      .to('#landing_white_card_6', 1.5, {bottom: -400, right: 100,  transform:'rotate(60deg)', ease:Power4.easeIn})
      .to('#landing_white_card_7', 1.5, {bottom: -50, transform:'rotate(30deg)', ease:Power4.easeOut})
      .to('#landing_white_card_7', 1.5, {bottom: -400, right: 100,  transform:'rotate(60deg)', ease:Power4.easeIn})
      .to('#landing_white_card_8', 1.5, {bottom: -50, transform:'rotate(30deg)', ease:Power4.easeOut})
      .to('#landing_white_card_8', 1.5, {bottom: -400, right: 100,  transform:'rotate(60deg)', ease:Power4.easeIn})
      .to('#landing_black_card_2', 1.5, {bottom: 50, right:-400, transform:'rotate(40deg)', ease:Power4.easeIn}, '-=.5')
      
      .to('#landing_black_card_3', 1, {bottom:-20, transform:'rotate(340deg)', ease: Power4.easeOut})
      .to('#landing_white_card_9', 1, {bottom: -50, transform:'rotate(30deg)', ease:Power4.easeOut})
      .to('#landing_white_card_9', 1.5, {bottom: -400, right: 100,  transform:'rotate(60deg)', ease:Power4.easeIn})
      .to('#landing_white_card_10', 1.5, {bottom: -50, transform:'rotate(30deg)', ease:Power4.easeOut})
      .to('#landing_white_card_10', 1.5, {bottom: -400, right: 100,  transform:'rotate(60deg)', ease:Power4.easeIn})
      .to('#landing_white_card_11', 1.5, {bottom: -50, transform:'rotate(30deg)', ease:Power4.easeOut})
      .to('#landing_white_card_11', 1.5, {bottom: -400, right: 100,  transform:'rotate(60deg)', ease:Power4.easeIn})
      .to('#landing_white_card_12', 1.5, {bottom: -50, transform:'rotate(30deg)', ease:Power4.easeOut})
      .to('#landing_white_card_12', 1.5, {bottom: -400, right: 100,  transform:'rotate(60deg)', ease:Power4.easeIn})
      .to('#landing_black_card_3', 1.5, {bottom: 50, right:-400, transform:'rotate(40deg)', ease:Power4.easeIn}, '-=.5')
      
      .to('#landing_black_card_1', 0, {bottom: -400, right: 300, transform: 'rotate(270deg)'})
      .to('#landing_black_card_2', 0, {bottom: -400, right: 300, transform: 'rotate(270deg)'})
      .to('#landing_black_card_3', 0, {bottom: -400, right: 300, transform: 'rotate(270deg)'})
      
      .to('#landing_white_card_1', 0, {bottom: -400, right: 200, transform: 'rotate(270deg)'})
      .to('#landing_white_card_2', 0, {bottom: -400, right: 200, transform: 'rotate(270deg)'})
      .to('#landing_white_card_3', 0, {bottom: -400, right: 200, transform: 'rotate(270deg)'})
      .to('#landing_white_card_4', 0, {bottom: -400, right: 200, transform: 'rotate(270deg)'})
      .to('#landing_white_card_5', 0, {bottom: -400, right: 200, transform: 'rotate(270deg)'})
      .to('#landing_white_card_6', 0, {bottom: -400, right: 200, transform: 'rotate(270deg)'})
      .to('#landing_white_card_7', 0, {bottom: -400, right: 200, transform: 'rotate(270deg)'})
      .to('#landing_white_card_8', 0, {bottom: -400, right: 200, transform: 'rotate(270deg)'})
      .to('#landing_white_card_9', 0, {bottom: -400, right: 200, transform: 'rotate(270deg)'})
      .to('#landing_white_card_10', 0, {bottom: -400, right: 200, transform: 'rotate(270deg)'})
      .to('#landing_white_card_11', 0, {bottom: -400, right: 200, transform: 'rotate(270deg)'})
      .to('#landing_white_card_12', 0, {bottom: -400, right: 200, transform: 'rotate(270deg)'});
    },1800)
  }
    loadCards() {
      return this.state.blackCardArr.map((e, i)=>{
        return (
          <section id={'landing_black_card_' + (i+1)} className='black_card'>
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
  loadWhiteCards() {
    return this.state.whiteCardArr.map((e, i)=>{
      return (
        <section id={'landing_white_card_' + (i+1)} className='white_card'>
        <div className='question_text'>{e}</div>
        <div className='white_bottom_card_div'>
            <div className='book_icon'/>
            <div className='devs_against_humanity'>Devs Against Humanity</div>
        </div>
      </section>
    )
  })
  }
  updatePlayers(val) {
    this.props.dispatch({
      type:'UPDATE_PLAYERS',
      val
    })
  }
  linkMouseEnter(e) {
    let tl = new TimelineMax();
    tl.to(e.target, .5, {textShadow:'1px 1px 5px red'})
  }
  linkMouseLeave(e) {
    let tl = new TimelineMax();
    tl.to(e.target, .5, {textShadow:'none'})
  }
  render() {
    return (
      <main className='landing_main'>
        <section className='landing_section'>
          <container className='landing_left_container'>
            <div className='landing_title'> 
              <div>Devs</div>
              <div>Against</div>
              <div>Humanity</div>
            </div>
            <div className='landing_subtitle'> A Party Game <br/> for horrible people. </div>
          </container>
          <container className='landing_right_container'>
            <div className='landing_right_text'> 
              <div className='landing_right_title'>How Many Are Playing?</div>
              <div className='landing_right_players'>
                <Link onMouseEnter={(e)=>this.linkMouseEnter(e)} onMouseLeave={(e)=>{this.linkMouseLeave(e)}} className='landing_right_link' to='/Board' component={GameBoard}><div onClick={(e)=>{this.updatePlayers(3)}}>3 players</div></Link>
                <Link onMouseEnter={(e)=>this.linkMouseEnter(e)} onMouseLeave={(e)=>{this.linkMouseLeave(e)}} className='landing_right_link' to='/Board' component={GameBoard}><div onClick={(e)=>{this.updatePlayers(4)}}>4 players</div></Link>
                <Link onMouseEnter={(e)=>this.linkMouseEnter(e)} onMouseLeave={(e)=>{this.linkMouseLeave(e)}} className='landing_right_link' to='/Board' component={GameBoard}><div onClick={(e)=>{this.updatePlayers(5)}}>5 players</div></Link>
              </div>
            </div>
            {this.state.blackCardArr? this.loadCards():'loading...'}
            {this.state.whiteCardArr? this.loadWhiteCards():'loading...'}
          </container>
        </section>
      </main>
    )
  }
}
export default connect()(Landing);