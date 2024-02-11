import React, { useState } from 'react';
import styled from 'styled-components';

const GuessingGame = ({ closeModal }) => {
  const [guessedNumber, setGuessedNumber] = useState('');
  const [message, setMessage] = useState('');
  const [investment, setInvestment] = useState(0);
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());

  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1; // Generates a random number between 1 and 100
  }

  const handleNumberChange = (event) => {
    setGuessedNumber(parseInt(event.target.value, 10));
  };

  const handleInvestmentChange = (event) => {
    setInvestment(parseInt(event.target.value, 10));
  };

  const calculatePrize = (difference) => {
    if (difference === 0) {
      return investment * 2; // Guessed the exact number
    } else if (difference <= 2) {
      return investment * 1.5; // Guessed within 1-2 numbers difference
    } else if (difference <= 5) {
      return investment * 1.1; // Guessed within 2-5 numbers difference
    } else if (difference <= 7) {
      return investment * 0.9; // Guessed within 5-7 numbers difference
    } else if (difference <= 10) {
      return investment * 0.75; // Guessed within 7-10 numbers difference
    } else if (difference <= 30) {
      return investment * 0.2; // Guessed within 10-30 numbers difference
    } else {
      return 0; // Guessed more than 30 numbers away
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const difference = Math.abs(guessedNumber - randomNumber);
    const prize = calculatePrize(difference);

    if (prize > 0) {
      setMessage(`Congratulations! You win ${prize}!\nCorrect number was ${randomNumber}`);
    } else {
      setMessage('Sorry, try again.');
    }

    setRandomNumber(generateRandomNumber()); // Regenerate random number for the next round
  };

  return (
    <GameOverlay>
      <GameContainer>
        <div className="game">
          <h1>Guess the Number Game</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="number"
              value={guessedNumber}
              onChange={handleNumberChange}
              placeholder="Guess a number"
            />
            <input
              type="number"
              value={investment}
              onChange={handleInvestmentChange}
              placeholder="Enter your investment"
            />
            <button type="submit">Submit</button>
          </form>
          {message && <p>{message}</p>}
          <button onClick={closeModal}>Close</button>
        </div>
      </GameContainer>
    </GameOverlay>
  );
};


const GameOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GameContainer = styled.div`
  background-color: #333;
  padding: 20px;
  border-radius: 10px;
  max-width: 50%;
  width: 400px;
  margin: auto;
  animation: fadeIn 0.5s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .game {
    text-align: center;
    color: #fff;
  }

  h1 {
    font-size: 1.5em;
    margin-bottom: 20px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    input {
      margin: 10px;
      padding: 10px;
      font-size: 16px;
    }

    button {
      margin-top: 20px;
      padding: 10px;
      font-size: 16px;
      cursor: pointer;
      background-color: #4CAF50;
      color: #fff;
      border: none;
      border-radius: 5px;
      transition: background-color 0.3s ease-in-out;

      &:hover {
        background-color: #45a049;
      }
    }
  }

  p {
    color: #FFD700; /* Metallic Gold */
    font-weight: bold;
    margin-top: 20px;
  }

  button {
    margin-top: 20px;
    padding: 10px;
    font-size: 16px;
    cursor: pointer;
    background-color: #DAA520; /* Metallic Goldenrod */
    color: #fff;
    border: none;
    border-radius: 5px;
    transition: background-color 0.3s ease-in-out;

    &:hover {
      background-color: #B8860B; /* Dark Goldenrod */
    }
  }
`;

export default GuessingGame;
