function addRestaurant(name) {

}




function addQuote(quote) {
  return {
    type: 'ADD_QUOTE',
    // quote: {id: quote.id, content: quote.content, author: quote.author, votes: 0}
    quote: Object.assign({}, quote, {votes: 0})
  }
}
