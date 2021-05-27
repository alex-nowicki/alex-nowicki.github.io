const cards = [
  {
    "id": 1,
    "suit": "club",
    "rank": 1,
    "value": 1
  },
  {
    "id": 2,
    "suit": "club",
    "rank": 2,
    "value": 2
  },
  {
    "id": 3,
    "suit": "club",
    "rank": 3,
    "value": 3
  },
  {
    "id": 4,
    "suit": "club",
    "rank": 4,
    "value": 4
  },
  {
    "id": 5,
    "suit": "club",
    "rank": 5,
    "value": 5
  },
  {
    "id": 6,
    "suit": "club",
    "rank": 6,
    "value": 6
  },
  {
    "id": 7,
    "suit": "club",
    "rank": 7,
    "value": 7
  },
  {
    "id": 8,
    "suit": "club",
    "rank": 8,
    "value": 8
  },
  {
    "id": 9,
    "suit": "club",
    "rank": 9,
    "value": 9
  },
  {
    "id": 10,
    "suit": "club",
    "rank": 10,
    "value": 10
  },
  {
    "id": 11,
    "suit": "club",
    "rank": 11,
    "value": 10
  },
  {
    "id": 12,
    "suit": "club",
    "rank": 12,
    "value": 10
  },
  {
    "id": 13,
    "suit": "club",
    "rank": 13,
    "value": 10
  },
  {
    "id": 14,
    "suit": "diamond",
    "rank": 1,
    "value": 1
  },
  {
    "id": 15,
    "suit": "diamond",
    "rank": 2,
    "value": 2
  },
  {
    "id": 16,
    "suit": "diamond",
    "rank": 3,
    "value": 3
  },
  {
    "id": 17,
    "suit": "diamond",
    "rank": 4,
    "value": 4
  },
  {
    "id": 18,
    "suit": "diamond",
    "rank": 5,
    "value": 5
  },
  {
    "id": 19,
    "suit": "diamond",
    "rank": 6,
    "value": 6
  },
  {
    "id": 20,
    "suit": "diamond",
    "rank": 7,
    "value": 7
  },
  {
    "id": 21,
    "suit": "diamond",
    "rank": 8,
    "value": 8
  },
  {
    "id": 22,
    "suit": "diamond",
    "rank": 9,
    "value": 9
  },
  {
    "id": 23,
    "suit": "diamond",
    "rank": 10,
    "value": 10
  },
  {
    "id": 24,
    "suit": "diamond",
    "rank": 11,
    "value": 10
  },
  {
    "id": 25,
    "suit": "diamond",
    "rank": 12,
    "value": 10
  },
  {
    "id": 26,
    "suit": "diamond",
    "rank": 13,
    "value": 10
  },
  {
    "id": 27,
    "suit": "heart",
    "rank": 1,
    "value": 1
  },
  {
    "id": 28,
    "suit": "heart",
    "rank": 2,
    "value": 2
  },
  {
    "id": 29,
    "suit": "heart",
    "rank": 3,
    "value": 3
  },
  {
    "id": 30,
    "suit": "heart",
    "rank": 4,
    "value": 4
  },
  {
    "id": 31,
    "suit": "heart",
    "rank": 5,
    "value": 5
  },
  {
    "id": 32,
    "suit": "heart",
    "rank": 6,
    "value": 6
  },
  {
    "id": 33,
    "suit": "heart",
    "rank": 7,
    "value": 7
  },
  {
    "id": 34,
    "suit": "heart",
    "rank": 8,
    "value": 8
  },
  {
    "id": 35,
    "suit": "heart",
    "rank": 9,
    "value": 9
  },
  {
    "id": 36,
    "suit": "heart",
    "rank": 10,
    "value": 10
  },
  {
    "id": 37,
    "suit": "heart",
    "rank": 11,
    "value": 10
  },
  {
    "id": 38,
    "suit": "heart",
    "rank": 12,
    "value": 10
  },
  {
    "id": 39,
    "suit": "heart",
    "rank": 13,
    "value": 10
  },
  {
    "id": 40,
    "suit": "spade",
    "rank": 1,
    "value": 1
  },
  {
    "id": 41,
    "suit": "spade",
    "rank": 2,
    "value": 2
  },
  {
    "id": 42,
    "suit": "spade",
    "rank": 3,
    "value": 3
  },
  {
    "id": 43,
    "suit": "spade",
    "rank": 4,
    "value": 4
  },
  {
    "id": 44,
    "suit": "spade",
    "rank": 5,
    "value": 5
  },
  {
    "id": 45,
    "suit": "spade",
    "rank": 6,
    "value": 6
  },
  {
    "id": 46,
    "suit": "spade",
    "rank": 7,
    "value": 7
  },
  {
    "id": 47,
    "suit": "spade",
    "rank": 8,
    "value": 8
  },
  {
    "id": 48,
    "suit": "spade",
    "rank": 9,
    "value": 9
  },
  {
    "id": 49,
    "suit": "spade",
    "rank": 10,
    "value": 10
  },
  {
    "id": 50,
    "suit": "spade",
    "rank": 11,
    "value": 10
  },
  {
    "id": 51,
    "suit": "spade",
    "rank": 12,
    "value": 10
  },
  {
    "id": 52,
    "suit": "spade",
    "rank": 13,
    "value": 10
  },
]

const blankGameState = [
  {
    "role": "player",
    "player": 1,
    "score": 0,
    "hand": [],
    "crib": [],
    "play": [],
    "dealer": false
  },
  {
    "role": "player",
    "player": 2,
    "score": 0,
    "hand": [],
    "crib": [],
    "play": [],
    "dealer": false
  },
  {
    "role": "draw",
    "starter": 0,
    "deck": []
  },
  {
    "role": "play",
    "total": 0
  }
]


// Step 1: Determine the dealer

// Retrieve the game state



fetch('https://alex-nowicki.github.io/data/crib.json')
  .then(response => response.json())
  .then(data => {
    renderGameState(data);
    console.log(data)
  })
  .catch(error => console.error(error))



let currentGameState;

let renderGameState = function(data) {
  // Check to see if there are any changes to the game state
  currentGameState = data;
  console.log(currentGameState);
}

console.log(currentGameState);

// Step 2: Deal 6 cards to each player

let dealButton = document.querySelector('#deal');

// Select a random array of buttons from the bank
let dealCards = function() {

  // Create a copy of the cards array
  let drawDeck = cards.slice();
  let numCards = drawDeck.length;
  let player1Hand = [];
  for (let i = 0; i < 100; i++){
    let randomNum = Math.floor(Math.random() * 53);
    if (drawDeck[randomNum]){
      player1Hand.push(drawDeck[randomNum]);
      drawDeck.splice(randomNum, 1);
      if (player1Hand.length === 12){
        break;
      }
    } else {
      continue;
    }
  }
  let player2Hand = player1Hand.splice(0,6);
  console.log(drawDeck);
  console.log("player 1 hand", player1Hand);
  console.log("player 2 hand", player2Hand);

  // Update game state
  currentGameState.forEach((item, i) => {
    if (item.role == "player") {
      if (item.player == 1){
        item.hand = player1Hand;
      } else {
        item.hand = player2Hand;
      }
      console.log(item);
    }
  });

  // Update API
  fetch('https://alex-nowicki.github.io/data/crib.json', {
    method: 'PUT',
    mode: 'same-origin',
    body: JSON.stringify(currentGameState),
    headers: {
        'Content-type': 'application/json;'
    }
  }).then(function (response) {
      if (response.ok) {
          return response.json();
      }
      return Promise.reject(response);
  }).then(function (data) {
      console.log(data);
  }).catch(function (error) {
      console.warn('Something went wrong.', error);
  });

}

dealButton.addEventListener('click', dealCards);

// Push hands to the JSON

// Step 3: Each player discards two cards to the crib


// Step 4: Cut and reveal starter

// Step 5: play

// Step 6: Counting the hands

// Step 7: Reset

// Empty JSON arrays

// fetch('https://alex-nowicki.github.io/data/crib.json', {
//     method: 'PUT',
//     body: JSON.stringify({
//         title: 'New Pirate Captain',
//         body: 'Arrrrrr-ent you excited?',
//         userId: 3
//     }),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8'
//     }
// }).then(function (response) {
//     if (response.ok) {
//         return response.json();
//     }
//     return Promise.reject(response);
// }).then(function (data) {
//     console.log(data);
// }).catch(function (error) {
//     console.warn('Something went wrong.', error);
// });
