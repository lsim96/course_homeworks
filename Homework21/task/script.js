let numbers = [
  -8509, -8636, 494, -828, -8514, 615, 609, 588, 4836, -854, 527, -783, 476,
  -734, -696, -721, 409, -648, -8382, -7680, 6055, -8125, -773, -736, -8122,
  403, -784, 553, -7930, 460, 506, -733, -797, 6343, 5090, 443, 422, -763, 476,
  -671, -701, -607, 4973, -7740, -636, -8040, 472, 501, -679, -774, 547, -741,
  570, 427, 548, -686, 569, -721, 6070, -8625, -819, 456, 594, -8442, 593, -781,
  -821, -632, -7442, 4837, 492, 432, 5558, -7564, -722, 412, -8000, -677, -8772,
  5002, -694, -7750, -7740, -660, -752, 430, -708, -848, -8060, -646, -788,
  4677, 4770, -8509, 431, -691, -708, -8255, -835, -835,
];

let fnc = numbers.reduce(function (a, b) {
  return a > b ? a : b;
});

console.log(fnc);

function allNegative(nums) {
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      arr.push(nums[i]);
    }
  }
  return arr;
}

console.log(allNegative(numbers));

function fncTaskOne(num) {
  function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  }

  function isPalindrome(n) {
    let str = Math.abs(n).toString();
    return str === str.split("").reverse().join("");
  }

  return {
    length: Math.abs(num).toString().length,
    isPalindrome: isPalindrome(num),
    isPrime: isPrime(num),
    isEven: num % 2 === 0,
    isOdd: num % 2 !== 0,
    isPositive: num > 0,
    isNegative: num < 0,
  };
}

console.log(fncTaskOne(131));

function fncTaskTwo(text) {
  function length(txt) {
    let myString = txt;
    let remText = myString.replace(/ /g, "");
    let length = remText.length;
    return length;
  }

  function smallestAndLargestWord(txt) {
    let words = txt.split(" ");

    if (words.length === 0) {
      return { smallestWord: "", largestWord: "" };
    }

    let smallestWord = words.reduce((a, b) => (a.length <= b.length ? a : b));
    let largestWord = words.reduce((a, b) => (a.length >= b.length ? a : b));

    return { smallestWord, largestWord };
  }

  function vowels(txt) {
    let vow = txt.match(/[aeiou]/gi);
    return vow === null ? 0 : vow.length;
  }

  function characterCount(txt) {
    let result = {};

    for (let i = 97; i <= 122; i++) {
      let char = String.fromCharCode(i);
      let regex = new RegExp(char, "g");
      let matches = txt.toLowerCase().match(regex);
      result[char] = matches ? matches.length : 0;
    }

    return result;
  }

  return {
    length: length(text),
    wordsCount: text.split(" ").length,
    smallestAndLargestWord: smallestAndLargestWord(text),
    vowelsCount: vowels(text),
    characterCount: characterCount(text),
  };
}

console.log(fncTaskTwo("Hey there man, how have you been blablabla"));
