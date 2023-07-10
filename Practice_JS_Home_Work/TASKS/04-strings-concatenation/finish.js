/** ЗАДАЧА 4 - Объединение строк
 *
 * 1. Объявите три переменные с значениями:
 *  - ваше имя
 *  - ваша фамилия
 *  - ваша профессия
 *
 * 2. Создайте еще одну переменную. Ее значение должно быть, например
 * "Меня зовут <Имя> <Фамилия> и я <Профессия>"
 *
 * 3. Выведите значение последней переменной в консоль
 */

const name1 = "Artur"

const surname = "Islakaev"

const profession = "IT-developer"
const str1 = "Меня зовут " + name1 + " " + surname + " и я "+ profession

console.log(str1)

const str2 = `Меня зовут ${name1} ${surname} и я ${profession}`

console.log(str2)
