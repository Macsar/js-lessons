// Какой результат будет у выражений ниже?

"" + 1 + 0 // строка + число = строка, поэтому = '10'
"" - 1 + 0 // при вычитании пустая строка преобразуется в ноль, поэтому = -1
true + false // true = 1, false = 0; Следовательно = 1
6 / "3" // при делении '3' преобразуется в 3, следовательно = 2
"2" * "3" // строки преобразуются в числа = 6
4 + 5 + "px" // числа сложатся + прибавится строка, в итоге получится '9px'
"$" + 4 + 5 // числа привратятся в строки получится '$45'
"4" - 2 // просто 2
"4px" - 2 // НеЧисло :) NaN, ибо строка не сможет преобразоваться в число из-за 'px'
7 / 0 // при делении на Нуль = бесконечность
"  -9  " + 5 // '-9 5' просто складываем строку и преобразуем число в строку
"  -9  " - 5 // -14 строка преобразуется в число при вычитании
null + 1 // вроде бы как null превращается в 0, следовательно = 1
undefined + 1 // НеЧисло
" \t \n" - 2 // строка конвертируется в число, но поскольку в строке нет ничего (кроме окончаний данных), то она преобразуется в 0, следовательно = -2