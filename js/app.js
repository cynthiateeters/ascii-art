/*   

asciiArt

Take lines of ascii art and output it to a webpage

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

/* 
  Get the elements from the webpage
  using query of their classes
*/
const ascii = document.querySelector('.ascii');
const asciip = document.querySelector('.ascii-p');

/* 
  Loop through the array of lines
  and add a new pre elemet for each line
*/

for (let i = 0; i < asciiArt.length; i++) {
  let pre = document.createElement('pre');
  pre.innerText = asciiArt[i];
  ascii.appendChild(pre);
}

function replaceAll(string, search, replace) {
  /* 
   Chain together 2 methods

   Split: a string method to split a string into an array of substrings

   Join: an array method to create and return a new string by concatenating 
   all of the elements in an array 
  
  */
  return string.split(search).join(replace);
}

/* 
  Loop through the array of lines
  and add a new p elemet for each line
*/
for (let i = 0; i < asciiArt.length; i++) {
  let p = document.createElement('p');

  // must replace regular spaces with non-breaking spaces
  let str = replaceAll(asciiArt[i], ' ', '\xa0');

  p.innerText = str;
  asciip.appendChild(p);
}
