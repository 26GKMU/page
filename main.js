window.addEventListener('load', () => {
  fetch('https://tegaki-memo.onrender.com/memos', { mode: 'no-cors' })
  .then(res => console.log(res));
  fetch('https://dentaku-ubn8.onrender.com/', { mode: 'no-cors' })
  .then(res => console.log(res));
});
