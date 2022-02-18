let h1 = document.querySelector('h1');

document.querySelector('#text').addEventListener('input', function(){
  h1.textContent = this.value;
});

// let input = document.querySelector('#color')

document.querySelector('#color').addEventListener('input', function(){
  h1.style.color = this.value;
});
document.querySelector('#background').addEventListener('input', function(){
  h1.style.backgroundColor = this.value;
});


// document.querySelector('#font')
// .addEventListener('select', function() {
// h1.style.fontFamily = this.value ;

// switch (this.value) {
//   case "Arial" :
//     h1.style.fontFamily = "Arial";
//     break;
//     case "Times" :
//     h1.style.fontFamily = "Times";
//     break;
//     case "Impact" :
//     h1.style.fontFamily = "impact";
//     break;
//     case "Verdana" :
//     h1.style.fontFamily = "Verdana";
//     break;
//   default;
//     break;
// }

// });

// document.querySelector('#font-size').addEventListener('input', function(){
//   h1.style.fontSize = this.value + "px";
//   this.nextSibling.textContent = h1.style.fontSize;
// });

// document.querySelector('#bold').addEventListener('input', function(){
//   h1.style.fontWeight = this.value;
//   document.querySelector('#italic').addEventListener('input', function(){
//     h1.style.fontStyle = this.value;
//     document.querySelector('#underline').addEventListener('input', function(){
//       h1.style.textDecoration = this.value;
// });


document.querySelector('#solid').addEventListener('input', function(){
  h1.style.border = this.checked ? 'solid' : 'none';
});
document.querySelector('#dotted').addEventListener('input', function(){
  h1.style.border = this.checked ? 'dotted' : 'none';
});
document.querySelector('#dashed').addEventListener('input', function(){
  h1.style.border = this.checked ? 'dashed' : 'none';
});



