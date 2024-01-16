function solution(str){
    let arr = str.split("")
   arr.length % 2 === 0 ? arr : arr.push("_")
   let result = []
   while (arr.length > 0) {
     let one = arr.shift()
     let two = arr.shift()
     result.push(one + two)
   }
   return result
 }

 console.log(solution("abcdef"))
 console.log(solution("abcdefg"))
 console.log(solution(""))