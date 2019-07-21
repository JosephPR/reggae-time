// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React, { Component } from 'react';
/*import Calendar from 'rc-calendar';*/
import './App.css';
const color = '#568f0e';
const myStyle = 'rebeccapurple';
const goldenRatioArr = [1,2,3,5,8,13,21,34,55,89,144];
const fibTimesTwo = goldenRatioArr.map(number => number * 1.618)
const fib = fibTimesTwo.map(number => <li>{number}</li>)
const names = ["Joe"," John","Mike","Liz", "Steph" ]
const letters = "BCDFGHJKLMNPRSTVWZ"
const map = Array.prototype.map
const words = map.call(letters, eachLetter => (
 `${eachLetter}alk `
))

export default class App extends Component{
  constructor(){
    super()
    this.state ={

    }
  }


  render () {


    return (
      <>
      <nav className="nav"><b>Reggae Time</b></nav>
      <div className="App">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/ykzTx2NviUc" frameborder="10" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" title="80s" allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/quvsj04WexE" frameborder="10" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" title="mrsun" allowfullscreen></iframe>
          <div
            css={css`
              padding: 32px;
              background-color: green;
              font-size: 24px;
              border-radius: 4px;
              &:hover {
                color: yellow;
              }
            `}
          >
            Hover to change color.
          </div>
      <ul css={css`
        padding: 32px;
        background-color: yellow;
        font-size: 24px;
        border-radius: 4px;
        &:hover {
          color: ${color};
        }
      `}>{names.map(name => <li key={name}> {name}</li>)}</ul>
        <h4 css={css`
          padding: 32px;
          background-color: red;
          font-size: 24px;
          border-radius: 4px;
          &:hover {
            color: ${myStyle};
          }
        `}>Numbers Map</h4>
        {fib}
      </div>
        <h1>{words}</h1>
        <img src="https://storage.googleapis.com/gweb-uniblog-publish-prod/original_images/The_Force_is_Strong.gif" alt="samurai" />
        <img src="http://clipart-library.com/new_gallery/fairy-clipart-64.gif" alt="samurai" />
        <img src="https://media.giphy.com/media/l1J9zY2YGELd0AbMQ/giphy.gif" alt="pageworms" />
        <footer className="footer">I said hello sun</footer>
      </>
    );
  }

}
