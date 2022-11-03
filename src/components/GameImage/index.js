import {Component} from 'react'
import {GameImageLists, Button, Image} from './styledComponent'

class GameImage extends Component {
  render() {
    const {item, startGame} = this.props

    const selectImage = () => {
      startGame(item.id)
    }

    let uniqueId = ''
    switch (item.id) {
      case 'ROCK':
        uniqueId = 'rockButton'
        break
      case 'SCISSORS':
        uniqueId = 'scissorsButton'
        break
      default:
        uniqueId = 'paperButton'
        break
    }

    return (
      <GameImageLists>
        <Button type="button" onClick={selectImage} data-testid={uniqueId}>
          <Image src={item.imageUrl} alt={item.id} />
        </Button>
      </GameImageLists>
    )
  }
}

export default GameImage
