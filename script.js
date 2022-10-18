const wordInput = document.querySelector('.wordInput');
const blok1 = document.querySelector('.blok1');
const blok2 = document.querySelector('.blok2');

const button = document.querySelector('.button');

button.addEventListener('click', function() {
let translWord = '';
const letterRu = {
  'а' : 'a', 'А' : 'A', 'б' : 'b', 'Б' : 'B', 'в' : 'v', 'В' : 'V', 'г' : 'g', 'Г' : 'G',
  'д' : 'd', 'Д' : 'D', 'е' : 'e', 'Е' : 'E', 'ё' : 'yo', 'Ё' : 'Yo', 'ж' : 'zh', 'Ж' : 'ZH',
  'з' : 'z', 'З' : 'Z', 'и' : 'i', 'И' : 'I', 'ӣ' : 'y', 'Ӣ' : 'Y', 'к' : 'k', 'К' : 'K',
  'л' : 'l', 'Л' : 'L', 'м' : 'm', 'М' : 'M', 'н' : 'n', 'Н' : 'N', 'о' : 'o', 'О' : 'O',
  'п' : 'p', 'П' : 'P', 'р' : 'r', 'Р' : 'R', 'с' : 's', 'С' : 'S', 'т' : 't', 'Т' : 'T',
  'у' : 'u', 'У' : 'U', 'ф' : 'f', 'Ф' : 'F', 'х' : 'kh', 'Х' : 'KH', 'ц' : 'ts', 'Ц' : 'TS',
  'ч' : 'ch', 'Ч' : 'CH', 'ш' : 'sh', 'Ш' : 'SH', 'щ' : 'shch', 'Щ' : 'SHCH', 'ъ' : '\'\'', 'Ъ' : '\'\'',
  'ы' : 'y', 'Ы' : 'Y', 'ь' : '\'', 'Ь' : '\'', 'э' : 'e', 'Э' : 'E', 'ю' : 'yu', 'Ю' : 'YU',
  'я' : 'ya', 'Я' : 'YA', '.' : '.', ',' : ',', ' ' : ' ',
  }
  let newDiv = document.createElement("div")
    blok1.appendChild(newDiv)
      newDiv.className = "newDiv"
      newDiv.innerText = wordInput.value.trim()  
      
  let newWord = newDiv.innerText
    newDiv.title = newDiv.innerText
  if (newDiv.innerText.length > 10) {
    newDiv.innerText = newDiv.innerText.slice(0, 10)+'...';
  }
let newDiv2 = document.createElement("div")
      newDiv2.className = "newDiv2"
    blok2.appendChild(newDiv2)
  for (let i = 0; i <= newWord.length; i++) {
    for (let key in letterRu) {
      if (newWord[i] === key) {
       translWord += letterRu[key]
      }
    }
  }
  newDiv2.innerText = translWord;
  newDiv2.title=newDiv2.innerText;
  if (newDiv2.innerText.length >= 10) {
    newDiv2.innerText = newDiv2.innerText.slice(0, 10)+'...';
  }
  wordInput.value = '';

})

function removeElement() {
  const a = document.querySelector('.newDiv:last-child');
  a.remove();
  const b = document.querySelector('.newDiv2:last-child');
  b.remove();
}

const btnClear = document.querySelector('.btnClear');
btnClear.addEventListener('click', function() {
for (let i = 0; i <= 10000000000; i++) {
removeElement();
  }
    })
let btnDel = document.querySelector('.btnDel');
btnDel.addEventListener('click', function(){
  removeElement()

  })
