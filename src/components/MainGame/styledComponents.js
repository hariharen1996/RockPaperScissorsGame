import styled from 'styled-components'

export const BackgroundContainer = styled.div`
  background-color: #223a5f;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const GameImageItems = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 50px;
`

export const ModalRulesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`

export const GameRulesImage = styled.img`
  width: 500px;
  @media screen and (max-width: 768px) {
    width: 300px;
  }
`

export const GameRulesButton = styled.button`
  align-self: flex-end;
  background-color: #ffffff;
  padding: 5px 16px;
  border: none;
  outline: none;
  color: #223a5f;
  font-family: 'Bree Serif';
  border-radius: 10px;
  margin-right: 20px;
  cursor: pointer;
`

export const CloseBtn = styled.button`
  align-self: flex-end;
  margin: 10px;
  background-color: #faf1fe;
  color: #223a5f;
  border: none;
  outline: none;
  padding: 5px;
  cursor: pointer;
  font-size: 15px;
  margin-top: 20px;
  @media screen and (max-width: 768px) {
    margin-top: 100px;
  }
`
export const GameImageContainer = styled.div`
  margin-right: 70px;
`
