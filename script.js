let x = 0;

function handleClick() {
  if (x<5){
    document.getElementById(`yes${x}`).id = `yes${x+1}`;
    document.getElementById(`no${x}`).id = `no${x+1}`;
    x ++;
  }
}

document.querySelector(`.no`).addEventListener('click', handleClick);

function handleYesclick() {
  document.documentElement.style.backgroundImage = "url(https://media1.tenor.com/m/jI5PvimqeyQAAAAd/cute-bear.gif)";
  document.querySelector('.paragraph').innerHTML = 
  '<p class="text">I knew you love me!!!</p>';
  document.getElementById('options').remove();
};

document.querySelector('.yes').addEventListener('click', handleYesclick)