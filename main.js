const warmupServer = () =>{
  fetch('https://tegaki-memo.onrender.com/memos', { mode: 'no-cors' })
  fetch('https://dentaku-ubn8.onrender.com/', { mode: 'no-cors' })
  console.log("test用のウォームアップ実行停止")
}

window.addEventListener('load', () => {
  warmupServer();
  setTimeout(() => {
    warmupServer();
  }, 600000);
});