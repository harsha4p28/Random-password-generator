const upper = document.querySelector('#upper input');
const lower = document.querySelector('#lower input');
const numbers = document.querySelector('#numbers input');
const symbol = document.querySelector('#symbol input');
const passBox = document.getElementById('passBox');
const slider = document.getElementById('mySlider');
const sliderValue = document.getElementById('sliderValue');
const up = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lo = 'abcdefghijklmnopqrstuvwxyz';
const num = '0123456789';
const sym = '!@#$%^&*()_+[]{}|;:,.<>?';

function Generate() {
  let v = '';
  let res = '';
  if (upper.checked) {
    v += up;
  }
  if (lower.checked) {
    v += lo;
  }
  if (numbers.checked) {
    v += num;
  }
  if (symbol.checked) {
    v += sym;
  }

  for (let i = 0; i < slider.value; i++) {
    res += v.charAt(Math.floor(Math.random() * v.length));
  }

  passBox.value = res; 
  localStorage.setItem("data",res);
}

slider.addEventListener('input', function() {
  sliderValue.textContent = slider.value;
  console.log('Slider value is:', slider.value);
});
document.getElementById('copy').addEventListener("click",function () {
  navigator.clipboard.writeText(passBox.value);
  alert('copied')
});

function show(){
  passBox.value=localStorage.getItem("data");
}
show(); 
