var express = require('express');
var router = express.Router();
const rp = require('request-promise')

function getCards() {
  return rp('https://api.loom.games/zb/v1/cards')
}


router.get('/', async (req, res) => {
  try {
    let cards = await getCards()
    cards = JSON.parse(cards)
    return res.render('index', {cards: cards.cards})

  } catch (err) {
    console.error(err)
  }

})

module.exports = router;