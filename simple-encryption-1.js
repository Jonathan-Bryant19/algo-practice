/*
IMOW: Given a string, concatenate all the odd indexed characters with all the even indexed characters. Repeat that process n times. Also write a function that reverses this. If the string is empty or the value of n is not positive, return the string without changes.
TC:
encrypt("012345", 1)  =>  "135024"
encrypt("012345", 2)  =>  "135024"  ->  "304152"
encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"
encrypt("This is a test!", 1) => "hsi  etTi sats!"
encrypt("Logan", 1) => "oaLgn"
PC:
1. Split the string into an array
2. Create an empty array
3. Loop through odds and push to empty array, then do the same for evens.
4. Join and return string
*/

function encrypt(text, n) {
    if (text === "" || n <= 0) {
        return text
    }
    const arr = text.split('')
    let answer = []
    let counter = 0
    while (counter < n) {
        for (let i = 1; i < arr.length; i += 2) {
            answer.push(text[i])
        }
        for (let i = 0; i < arr.length; i += 2) {
            answer.push(text[i])
        }
        if (counter === n - 1) {
            return answer.join('')
        } else {
            text = answer
            answer = []
        }
        counter++
    }
    return answer.join('')
}

function decrypt(encryptedText, n) {
    // Split it into two: 
    // If the word is even, split in half. If it's odd, split so the second half includes the middle number
    // Add the first character in the second array to the first index of the first array, then skip a spot and add the second character from the second array to i += 2

    if (encryptedText === "" || n <= 0) {
        return encryptedText
    }
   const encryptedTextArray = encryptedText.split('')
   const secondHalf = encryptedTextArray.splice(Math.floor(encryptedTextArray.length/2))
   const firstHalf = [...encryptedTextArray]
   console.log(firstHalf)
   console.log(secondHalf)
//    const index = []
//    for (let i = 0; i < encryptedTextArray.length; i++) {
//        index.push(i)
//    }
//    console.log(index.join(', '))
//    const textOrder = encrypt(index.join(''), n)
//    const answer = []
//    for (let i = 0; i < textOrder.length; i++) {
//         answer.push(encryptedTextArray[textOrder.indexOf(i)])
//    }
//    return answer.join('')
}

// console.log(encrypt("This is a test!", 1))
console.log(decrypt("hsi etTi sats!", 1))

/*
Best Practices Solution from Codewars:
function encrypt(text, n) {
  console.log(text, n);
  if (!text || n <= 0) return text; 
  while (n--) {
    let ans = '';
    for (let i = 1; i < text.length; i += 2) {
      ans += text[i];
    }
    for (let i = 0; i < text.length; i += 2) {
      ans += text[i];
    }
    text = ans;
  }
  return text;
}

function decrypt(encryptedText, n) {
  if (!encryptedText || n <= 0) return encryptedText;
  const ans = new Array(encryptedText.length);
  while (n--) {
    let j = 0;
    for (let i = 1; i < ans.length; i += 2) {
      ans[i] = encryptedText[j++];
    }
    for (let i = 0; i < ans.length; i += 2) {
      ans[i] = encryptedText[j++];
    }
    encryptedText = ans.join('');
  }
  return encryptedText;
}
*/