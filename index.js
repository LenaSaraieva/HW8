//1.Вивести на сторінку в один рядок через кому числа від 10 до 20.
let output = " ";
for (let i = 10; i <= 20; i++) {
    output += i + ", ";
}

//Видалити кому після числа 20
output = output.slice(0, -2);
console.log(output); 

//2.Вивести квадрати чисел від 10 до 20.
for (let i = 10; i <= 20; i++) {
    const  square = i * i;
    console.log(square); 
    }
  

//3.Вивести таблицю множення на 7.
 for (let i = 1; i <= 10; i++) {
    const  result = i * 7;
    console.log(result); 
    }


//4.Знайти суму всіх цілих чисел від 1 до 15.
let sum = 0;
for (let i = 1; i <= 15; i++) {
sum += i;}
console.log(sum);


//5.Знайти добуток усіх цілих чисел від 15 до 35.
let product = 1;
for (let i = 15; i <= 35; i++) {
product *= i;}
console.log(product);

//6.Знайти середнє арифметичне всіх цілих чисел від 1 до 500.
let sum6 = 0;
let start = 1;
let end = 500; 
const totalN = end - start + 1;
for (let i = start; i <= end; i++) {
sum6 += i;
}
const average = sum6 / totalN;
console.log(average);

//7.Вивести суму лише парних чисел в діапазоні від 30 до 80.
let sum7 = 0;
let start7 = 30;
let end7 = 80; 
for (let i = start7; i <= end7; i++)  {
    if (i % 2 === 0)  {
    sum7 += i;
    } }
    console.log(sum7);

//8.Вивести всі числа в діапазоні від 100 до 200 кратні 3. 
for (let i = 100; i <= 200; i++) {
    if (i % 3 === 0) {
      console.log(i);
    }
  }


/*9-11.Дано натуральне число. Знайти та вивести на сторінку всі його дільники.Визначити кількість його парних дільників.
Знайти суму його парних дільників.*/

function naturalNumber(number) {
  let divisor = [];
  let even = [];
  let sumEven = 0;

  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      divisor.push(i);
      if (i % 2 === 0) {
        even.push(i);
        sumEven += 1;
      }
    }
  }
    console.log(' ${number} : ${divisor.join (', ') }');
    console.log(' ${even.lenght} ');
    console.log(' ${sumEveneven} ');
}



//12. Надрукувати повну таблицю множення від 1 до 10.
for (let i = 1; i <= 10; i++) {
  let mult1 = '';
for (let j = 1; j <= 10; j++)
{
  mult1 += `${i * j}\t`;
}
console.log(mult1);
}