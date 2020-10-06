/* 

Teeters,Cynthia
    

  _O/                   ,
     \                  /           \O_
     /\_             `\_\        ,/\/
     \  `       ,        \         /
     `       O/ /       /O\        \
             /\|/\.                `

Dancing in the rain by Joan Stark
https://www.asciiart.eu/sports-and-outdoors/dancing

*/

const asciiArt = [
  ' __O/                   ,',
  '    \\                   /           \\O__',
  '    /\\_             `\\_\\        ,/\\/',
  '    \\  `       ,         \\        /',
  '    `       O/ /       /O\\         \\',
  '            /\\|/\\.                `',
];

const ascii = document.querySelector('.ascii');
console.log(ascii);
const asciip = document.querySelector('.ascii-p');
console.log(asciip);

for (let i = 0; i < asciiArt.length; i++) {
  let pre = document.createElement('pre');
  pre.innerText = asciiArt[i];
  ascii.appendChild(pre);
}

for (let i = 0; i < asciiArt.length; i++) {
  let p = document.createElement('p');
  let str = asciiArt[i].replace(/ /g, '\xa0');
  p.innerText = str;
  asciip.appendChild(p);
}
