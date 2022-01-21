
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