import React, {Component} from 'react';
import {TimelineMax, Power4, Power0} from 'gsap';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './Profile.css'

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameCard: {
        clickable: true,
        selected: false,
      }
    }
  }

  componentDidMount() {
    let tl = new TimelineMax()
    tl.from('.profile-container', 1, {opacity: 0})
    
    let ttl = new TimelineMax()
    ttl.staggerFrom('.profile-title div', .5, {marginLeft:'100vw', ease: Power4.easeOut}, .3)
    .to('.profile-subtitle', 1, {opacity: 1}, '+=.3');
  }

  componentWillReceiveProps(props) {
  }
  changePage(e) {
    e.preventDefault();
    let goTo = e.target.getAttribute('href');
    let tl = new TimelineMax({
      onComplete: () => {
        this.props.history.push(goTo);
      }
    });
    tl.to('.profile-container', 1, {opacity:0})
  }
  changeName(e) {
    if (this.state.nameCard.clickable && !this.state.nameCard.selected) {
      let tl = new TimelineMax();
      this.setState({
        nameCard: {
          clickable:false,
          selected:true,
        }
      })
      tl.to('.profile-white-name-card', .5, {transform: 'rotate(0deg)', position: 'relative', left: '-60px', ease:Power4.easeIn})
        .to('.profile-white-name-card', 0, {zIndex:1})
        .to('.profile-white-name-card', .7, {left: '50px', rotationZ:330, ease:Power0.easeIn})
      setTimeout(()=>{
        this.setState({
          nameCard: {
            clickable:true,
            selected:true,
          }
        })
      },1500)
    } else if (this.state.nameCard.clickable && this.state.nameCard.selected) {
      let tl = new TimelineMax();
      this.setState({
        nameCard: {
          clickable: false,
          selected: false,
        }
      })
      tl.to('.profile-white-name-card', .7, {rotationZ:0, position: 'relative', left: '-60px', ease:Power0.easeOut})
        .to('.profile-white-name-card', 0, {zIndex:0})
        .to('.profile-white-name-card', .5, {rotationZ:-30, left: 0, ease: Power4.easeOut})
      setTimeout(()=>{
        this.setState({
          nameCard: {
            clickable:true,
            selected:false,
          }
        })
      },1500)
    }
  }
  render() {
    let user,
        picture,
        name,
        nickname,
        gamesPlayed,
        gamesWon, 
        rank;

        if (this.props && this.props.user) {
            user = this.props.user;
            picture = user.picture;
            name = user.name;
            nickname = user.nickname;
            gamesPlayed = user.games_played;
            gamesWon = user.games_won;
            rank = user.rank;
        }
    return (
      <main className='profile-container'>
        <section className='profile-left-section'>
            <Link to='/' onClick={(e)=>{this.changePage(e)}} className='profile-back-to-menu'/>
            <section className='profile-black-card'>
              <div className='profile-user-section'>
                <div style={{background:'url("' + picture + '") no-repeat center center'}} className='profile-profile-picture'/>
                <div className='profile-games-played'>Games Played: {gamesPlayed} </div>
              </div>
              <div className='profile-info-section'>
                <div className='profile-profile-name'>Name: _____________________</div>
                <div className='profile-nickname'>Nickname: _________________ </div>
              </div>
              <div className='profile-bottom-card-section'>
                <div className='profile-book-icon'/>
                <div className='profile-devs-against-humanity'>Devs Against Humanity</div>
                <div className='profile-rank'>Rank: {rank}</div>
              </div>
            </section>
            <section onClick={(e)=>{this.changeName(e)}} className='profile-white-name-card'>
              <div className='profile-white-name-text'>
                {name}
              </div>
              <div className='profile-bottom-card-section'>
                <div className='profile-book-icon'/>
                <div className='profile-devs-against-humanity'>Devs Against Humanity</div>
              </div>
            </section>
            <section className='profile-white-nickname-card'>
              <div className='profile-white-nickname-text'>
                {nickname}
              </div>
              <div className='profile-bottom-card-section'>
                <div className='profile-book-icon'/>
                <div className='profile-devs-against-humanity'>Devs Against Humanity</div>
              </div>
            </section>
        </section>
        <section className='profile-right-section'>
        <div className='profile-title'>
            <div>Devs</div>
            <div>Against</div>
            <div>Humanity</div>
        </div>
        <div className='profile-subtitle'>Player Profile </div>
        </section>
      </main>
    )
  }
}
function mapStateToProps(state) {
    return {
        user: state.user,
    }
}
export default connect(mapStateToProps)(Profile);