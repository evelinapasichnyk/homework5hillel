//1. Знайти суму та кількість позитивних елементів.

const arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

const positiveElements = arr.filter(elem => (elem > 0));
console.log(positiveElements);

const arrPositiveElements = positiveElements;
const sumPositivElements = arrPositiveElements.reduce(function(acc, current){
        return acc + current
}, 0);
console.log(`Сума позитивних елементів масиву складає = ${sumPositivElements}`);


//2. Знайти мінімальний елемент масиву та його порядковий номер.

const minElement = arr.reduce(function(x, y){
    return Math.min(x, y);
})
const minElementIndex = arr.indexOf(minElement);
console.log(`Мінімальний елемент масиву = ${minElement} та його порядковий номер = ${minElementIndex}`);


//3. Знайти максимальний елемент масиву та його порядковий номер.

const maxElement = arr.reduce(function(x, y){
    return Math.max(x, y);
})

const maxElementIndex = arr.indexOf(maxElement);
console.log(`Максимальний елемент масиву = ${maxElement} та його порядковий номер = ${maxElementIndex}`);


//4. Визначити кількість негативних елементів.

const negativeElements = arr.filter(elem => (elem < 0));
console.log(negativeElements);


//5. Знайти кількість непарних позитивних елементів.

const oddPositiveElements = arrPositiveElements.filter(elem => (elem % 2 !== 0));
console.log(oddPositiveElements);


//6. Знайти кількість парних позитивних елементів.

const evenPositiveElements = arrPositiveElements.filter(elem => (elem % 2 === 0));
console.log(evenPositiveElements);


//7. Знайти суму парних позитивних елементів.

const sumEvenPositiveElements = evenPositiveElements.reduce(function(acc, current){
    return acc + current
}, 0);

console.log(`Сума парних позитивних елементів масиву складає ${sumEvenPositiveElements}`);


//8. Знайти суму непарних позитивних елементів.

const sumOddPositiveElements = oddPositiveElements.reduce(function(acc, current){
    return acc + current
}, 0);

console.log(`Сума парних позитивних елементів масиву складає ${sumOddPositiveElements}`);

//9. Знайти добуток позитивних елементів.

const multipPositiveElements = positiveElements.reduce(function(acc, current){
    return acc * current
}, 1);

console.log(`Добуток позитивних елементів масиву складає ${multipPositiveElements}`);

//10. Знайти найбільший серед елементів масиву, остальні обнулити.
//Я вже знаходила у першому завданні найбільший елемент з масиву,
//тому в коді використовую вже знайдене значення maxElement

let newElement = arr[0];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === maxElement) {
        newElement = arr[i];
    }

    if (arr[i] !== maxElement) {
        arr[i] = 0;
    }
}

console.log(arr);