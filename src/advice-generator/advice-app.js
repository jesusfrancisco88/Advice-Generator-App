/**
 * @returns {Object} quote information 
 */
const fetchQuote = async () => {
  const res = await fetch('https://api.adviceslip.com/advice');
  const data = await res.json();

  // console.log(data);
  // console.log(data.slip);
  return data.slip;
}


export const adviceGen =  async ( element ) => {
  element.innerHTML = '<span class="loading-message">Loading...</span>';
  

  //* HTML/CSS Elements
  const advice = document.createElement('blockquote');
  advice.classList.add('advice')

  const adviceNumber = document.createElement('h3');
  adviceNumber.classList.add('adviceNumber')

  const nextAdvice = document.createElement('button');
  nextAdvice.innerText = 'Next Advice';
  nextAdvice.classList.add('nextAdvice');


  //* Rendering...
  const renderAdvice = (data) => {
    adviceNumber.innerHTML = `Advice #${data.id}`;
    advice.innerHTML = `"${data.advice}"`;
    element.replaceChildren(adviceNumber, advice, nextAdvice);
  }

  //* Button Functionality
  nextAdvice.addEventListener('click', function( ) {
    element.innerHTML = 'Loading...';
    fetchQuote().then(data => renderAdvice(data) );

  })

  fetchQuote().then(data => renderAdvice(data));
}