//Вивести на сторінку в один рядок через кому числа від 10 до 20.
let output = " ";
for (let i= 10; i <= 20; i++) {
    output += i + ",";
}

//Видалити кому після числа 20
output = output.slice(0, -1);
console.log(output); 