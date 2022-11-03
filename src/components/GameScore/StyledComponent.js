import styled from 'styled-components'

export const GameBoardContainer = styled.div`
  border: 1px solid #ffffff;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  width: 90%;
  justify-content: space-between;
  align-items: center;
  margin-left: 25px;
  margin-right: 25px;
`

export const ScoreTextContainer = styled.div``

export const ScoreText = styled.h1`
  color: #ffffff;
  font-size: 20px;
  font-family: 'Roboto';
`

export const GameResultContainer = styled.div`
  background-color: #ffffff;
  height: 115px;
  width: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 15px;
`

export const GameResult = styled.div``

export const GameText = styled.p`
  color: #223a5f;
  font-family: 'Bree Serif';
  font-size: 25px;
  text-align: center;
`

export const Score = styled.p`
  color: #223a5f;
  font-size: 35px;
  font-family: 'Roboto';
  font-weight: 600;
  text-align: center;
`
