
// ищем число в массиве numbers, которое меньше чем limit
const firstUnder = (numbers, limit) => {
    const resNum = numbers.find((item) => item < limit)
      console.log(resNum)
  }
  
  // ищет строку в массиве strings, которая начинается с указанной буквы
  const startsWith = (strings, letter) => {
    const resStr = strings.find((item, index) => item[0] === letter)
        console.log(resStr)
  }

  const oddIntegers = (numbers) => {
    const odds = numbers.filter((number) => number % 2 ===1)
        console.log(odds)
  }
  
  const longStrings = (strings, minimumLength) => {
    const longs = strings.filter((item, index) => strings[index].length >= minimumLength)
         console.log(longs)
  }
  
  const getNotEmptyPhoneNumbers = (phoneNumbers) => {
    const notEmpty = phoneNumbers.filter((item) => phoneNumbers !== undefined)
    console.log(notEmpty)
   }
  
   

const sum = (numbers) => {
    const sumNum = numbers.reduce((prew, item) => prew + item)
        console.log(sumNum)
  }
  
  /* ставит тире между словами */
  const hyphenate = (words) => {
    const res = words.reduce((prew, item) => `${prew}-${item}`)
        console.log(res)
  }




  /* добавляет восклицательный знак в конец каждого элемента массива */
const exclamations = (strings) => {
    const loudStrings = strings.map((item, index) => item + '!')
        console.log(loudStrings)
  }
  
  /* преобразует все числа из массива в квадрат */
  const squareAll = (numbers) => {
    const squares = numbers.map((item) => item **2)
        console.log(squares)
  }
  
  /* заменяет все слова в массиве на их первые буквы */
  const firstLetters = (words) => {
    const letters = words.map((item, index) => item[0])
        console.log(letters)
  }

