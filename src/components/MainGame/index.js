import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import GameImage from '../GameImage/index'
import GameResult from '../GameResult/index'
import {
  BackgroundContainer,
  GameImageItems,
  ModalRulesContainer,
  GameRulesImage,
  GameRulesButton,
  CloseBtn,
  GameImageContainer,
} from './styledComponents'
import './index.css'

import GameScore from '../GameScore/index'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class MainGame extends Component {
  state = {
    score: 0,
    isTrue: true,
    userText: '',
    randomText: '',
    resultText: '',
  }

  incScore = () => {
    this.setState(prevState => prevState.score + 1)
  }

  decScore = () => {
    this.setState(prevState => prevState.score - 1)
  }

  startGame = id => {
    const {score} = this.state
    const randomNumber = Math.floor(Math.random() * choicesList.length)
    const randomChoice = choicesList[randomNumber].id

    let result: ''
    if (id === 'ROCK' && randomChoice === 'ROCK') {
      result = 'IT IS DRAW'
    } else if (id === 'ROCK' && randomChoice === 'PAPER') {
      result = 'YOU LOSE'
      this.incScore()
    } else if (id === 'ROCK' && randomChoice === 'SCISSORS') {
      result = 'YOU WON'
      this.incScore()
    } else if (id === 'SCISSORS' && randomChoice === 'SCISSORS') {
      result = 'IT IS DRAW'
    } else if (id === 'SCISSORS' && randomChoice === 'ROCK') {
      result = 'YOU LOSE'
      this.decScore()
    } else if (id === 'SCISSORS' && randomChoice === 'PAPER') {
      result = 'YOU WON'
      this.incScore()
    } else if (id === 'PAPER' && randomChoice === 'ROCK') {
      result = 'YOU WON'
      this.decScore()
    } else if (id === 'PAPER' && randomChoice === 'PAPER') {
      result = 'IT IS DRAW'
    } else {
      result = 'YOU LOSE'
      this.decScore()
    }

    let updatedScore = score
    if (result === 'YOU WON') {
      updatedScore = score + 1
    } else if (result === 'YOU LOSE') {
      updatedScore = score - 1
    } else {
      updatedScore = score
    }

    this.setState(prevState => ({
      userText: id,
      randomText: choicesList[randomNumber].id,
      resultText: result,
      isTrue: !prevState.isTrue,
      score: updatedScore,
    }))
  }

  restartGame = () => {
    this.setState(prevState => ({
      isTrue: !prevState.isTrue,
      userText: '',
      randomText: '',
    }))
  }

  render() {
    const {score, isTrue, resultText, randomText, userText} = this.state
    return (
      <BackgroundContainer>
        <GameScore score={score} />
        {isTrue ? (
          <GameImageItems>
            {choicesList.map(item => (
              <GameImage key={item.id} startGame={this.startGame} item={item} />
            ))}
          </GameImageItems>
        ) : (
          <GameImageContainer>
            <GameResult
              choicesList={choicesList}
              resultText={resultText}
              randomText={randomText}
              userText={userText}
              restartGame={this.restartGame}
            />
          </GameImageContainer>
        )}

        <Popup
          modal
          trigger={<GameRulesButton>Rules</GameRulesButton>}
          className="popup-content"
        >
          {close => (
            <ModalRulesContainer>
              <CloseBtn type="button" onClick={() => close()}>
                <RiCloseLine />
              </CloseBtn>
              <GameRulesImage
                src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png "
                alt="rules"
              />
            </ModalRulesContainer>
          )}
        </Popup>
      </BackgroundContainer>
    )
  }
}

export default MainGame
