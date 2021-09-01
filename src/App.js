import React from "react";
import "./App.css";
import MemoryCard from "./components/MemoryCard";

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function generateDeck() {
  const symbols = ["∆", "ß", "£", "§", "•", "$", "+", "ø"];
  const deck = [];
  for (let count = 0; count <= 16; count++) {
    deck.push({
      isFlipped: false,
      symbol: symbols[count % 8],
    });
  }
  return shuffle(deck);
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      deck: generateDeck(),
      pickedCards: [],
    };
  }



pickCard = (cardIndex) => {
  const cardToFlip = { ...this.state.deck[cardIndex] };
  if (cardToFlip.isFlipped) {
    return;
  }
  cardToFlip.isFlipped = true;
  const newPickedCards = [...this.state.pickedCards, cardIndex];
  const newDeck = this.state.deck.map((card, index) => {
    if (cardIndex === index) {
      return cardToFlip;
    }
    return card;
  });
  if (newPickedCards === 2) {
    const firstCard = newDeck[newPickedCards[0]]
    const secondCard = newDeck[newPickedCards[1]]
    if (firstCard.symbol !== secondCard.symbol) {
      // unflip cards
    }
    newPickedCards = []
  }
  this.setState({ deck: newDeck, pickedCards: newPickedCards });
};
unflipCards = (cardIndex1, cardIndex2) => {
  const card1 = {...this.state.deck[card1Index]}
  const card2 = {...this.state.deck[card2Index]}
  card1.isFlipped = false,
  card2.isFlipped = false
  const newDeck = this.state.deck((card, index) => {
    return card
  })
}

  render() {
    const cardsJSX = this.state.deck.map((card, index) => {
      return (
        <MemoryCard
          clickHandler={() => this.pickCard(index)}
          symbol={card.symbol}
          isFlipped={card.isFlipped}
          key={index}
        />
      );
    });
    return (
      <div className="App">
        <header className="App-header">
          <h1>Memory Game</h1>
          <h3>Match Cards to Win!</h3>
        </header>
        <div>{cardsJSX.slice(0, 4)}</div>
        <div>{cardsJSX.slice(4, 8)}</div>
        <div>{cardsJSX.slice(8, 12)}</div>
        <div>{cardsJSX.slice(12, 16)}</div>
      </div>
    );
  }
}

export default App;
