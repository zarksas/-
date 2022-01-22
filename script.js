
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


  //-----------------------------------------------------------



  const containingQuotes = (sentences) => {
    const sentencesWithQuotes = sentences.filter((item) => containsQuote(item))
    console.log(sentencesWithQuotes)
  }
  
  const balance = (expenses, startingBalance) => {
    let remainingBalance = expenses.reduce((prew, item) => prew - item, startingBalance)
    console.log(remainingBalance)
  }
  
  const evenLengthWord = (words) => {
    let word = words.find((item) => item.length % 2 === 0 && item.length !== 0)
    console.log(word)
  }
  
  const snippets = (sentences, desiredWordCount = 3) => {
    const snippedSentences = sentences.map((item) => snippet(item, desiredWordCount)) 
    console.log(snippedSentences)
  }
  
  const initials = (names) => {
    const namesAsInitials = names.map((item) => convertToInitials(item))
    console.log(namesAsInitials)
  }

  const pairAbbreviations = (pairData) => {
    const pairs = {};
    pairData.forEach((item) =>  { pairs [item[1]] = item[0]})
    console.log(pairs)
  }
  
  /* вспомогательные функции, их трогать не нужно */
  const convertToInitials = (name) => {
    return name.match(/\b[a-z]/ig).join('').toUpperCase();
  }
  
  const containsQuote = (sentence) => {
    return /(".+")/.test(sentence);
  }
  
  const snippet = (sentence, desiredWordCount = 3) => {
    const pattern = new RegExp(`((\\w+ ){${desiredWordCount}})(.*)`);
  
    return sentence.replace(pattern, '$1...')
  }

