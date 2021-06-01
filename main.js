// const str =`
// 010-1234-56789
// skw0616@naver.com
// https://www.omdbapi.com/?apikey=3ac0ae57&s=frozen
// The quick brown fox jumps over the lazy dog.
// abbbbbccccccdddddd
// 동해물과 백두산이 마르고 닳도록
// `

// const regexp = new RegExp('the', 'gi')
// const regexp = /the/gi
// const regexp = /fox/gi
// console.log(str.match(regexp))
// console.log(regexp.test(str))
// console.log(str.replace(regexp,'AAA'))
// console.log(str)


// console.log(str.match(/the/gi))

// console.log(
//   str.match(/d$/g)
// )
// console.log(
//   str.match(/\w{2,3}/g)
// )
// console.log(
//   str.match(/\b\w{2,3}\b/g)
// )

// console.log( str.match(/[fox]/g))
// console.log( str.match(/[0-9]{1,}/g))
// console.log( str.match(/[가-힣]{1,}/g))
// console.log( str.match(/\w/g))

// const h =`  the hello world   !   


// `
// console.log( str.match(/\bf\w{1,2}/g))
// console.log( h.replace(/\s/g, ''))

const str = `
010-1234-56789
skw0616@naver.com
https://www.omdbapi.com/?apikey=3ac0ae57&s=frozen
The quick brown fow jumps over the lazy dog.
abbbbbccccccdddddd
`


// console.log(str.match(/.{1,}(?=@)/g)) 앞쪽 일치
console.log(str.match(/(?<=@).{1,}/g))  // 뒤쪽 일치!