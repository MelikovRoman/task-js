//#1 Фильтрация строки

const string = "Привет! Как дела?";
const vowel = ["а","и", "е",]

function getVoweles() {
    let extracterVowel = "";
    for (i = 0; i < string.length; i++) {
        const currentLetter = string[i];

        if (vowel.includes(currentLetter)) {
            extracterVowel = extracterVowel + currentLetter;
        }
    }
    return extracterVowel;
  }
  
console.log(getVoweles(string));

//#2 Выборка объекта

const workers = [
    {"name":"John","salary":500},
    {"name":"Mike","salary":1300},
    {"name":"Linda","salary":1500}];

function getWorthyWorkers() {
    const worthyWorkers = [];
    for (i = 0; i < workers.length; i++) {
        const currentWorkers = workers[i];

        if (currentWorkers.salary > 1000) {
            worthyWorkers.push(currentWorkers.name)
        }
    }
    return worthyWorkers;
}

console.log(getWorthyWorkers(workers))


//#3 Анализ строки

const path = "/users/download/index.html"

function isHtml() {
    const requiredExt = ".html";
    const pathExt = path.slice(-5);

    if (pathExt == requiredExt) {
        return true
    }  else {
        return false
    }

}

console.log(isHtml(path))


//#1 Фильтрация массива

const mixedArray = [3,13,74,14,66,15,22,4];

const isEven = num => {
    return num % 2 == 0;
}

const filterArray = ( ArrayToFilter, filterFn) => {
    const filterArray =[]

    ArrayToFilter.forEach ( num => {
        if (filterFn(num)) {
            filterArray.push(num)
        }
    })

    return filterArray;

}

console.log(filterArray(mixedArray, isEven))