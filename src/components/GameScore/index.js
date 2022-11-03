import {Component} from 'react'
import {
  GameBoardContainer,
  ScoreTextContainer,
  GameText,
  GameResultContainer,
  ScoreText,
  Score,
  GameResult,
} from './StyledComponent'

class GameScore extends Component {
  render() {
    const {score} = this.props

    return (
      <GameBoardContainer>
        <ScoreTextContainer>
          <ScoreText>
            ROCK <br /> PAPER <br /> SCISSORS
          </ScoreText>
        </ScoreTextContainer>
        <GameResultContainer>
          <GameResult>
            <GameText>Score</GameText>
            <Score>{score}</Score>
          </GameResult>
        </GameResultContainer>
      </GameBoardContainer>
    )
  }
}

export default GameScore
