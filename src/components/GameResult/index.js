import {Component} from 'react'
import {
  ResultContainer,
  ResultImageContainer,
  PlayerName,
  ResultImage,
  ResultTextContainer,
  ResultText,
  PlayAgainButton,
} from './StyledComponent'

class GameResult extends Component {
  render() {
    const {
      choicesList,
      resultText,
      randomText,
      userText,
      restartGame,
    } = this.props

    const userData = choicesList.filter(item => item.id === userText)
    const randomData = choicesList.filter(item => item.id === randomText)

    return (
      <>
        <ResultContainer>
          <ResultImageContainer>
            <PlayerName>YOU</PlayerName>
            <ResultImage src={userData[0].imageUrl} alt="your choice" />
          </ResultImageContainer>
          <ResultImageContainer>
            <PlayerName>OPPONENT</PlayerName>
            <ResultImage src={randomData[0].imageUrl} alt="opponent choice" />
          </ResultImageContainer>
        </ResultContainer>
        <ResultTextContainer>
          <ResultText>{resultText}</ResultText>
          <PlayAgainButton type="button" onClick={restartGame}>
            Play Again
          </PlayAgainButton>
        </ResultTextContainer>
      </>
    )
  }
}

export default GameResult
