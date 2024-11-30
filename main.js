// step 1. For + break/continue ga oid masalalar (4 ta):

// 1 dan 100 gacha bo‘lgan sonlarni ekranga chiqaring, lekin 50 ga yetganda tsiklni to‘xtating (break).
alert("1-vazifa")
for (let num1 = 1; num1 <= 100; num1++) {
    if (num1 == 50) {
        break
    }
    console.log(num1)
}

// 1 dan 20 gacha bo‘lgan sonlarni ekranga chiqaring, lekin 3 ga bo‘linadigan sonlarni tashlab o‘ting (continue).
alert("2-vazifa")
for (let num2 = 1; num2 <= 20; num2++) {
    if (num2 % 3 == 0) {
        continue
    }
    console.log(num2)
}

// 1 dan 30 gacha bo‘lgan sonlarni chiqarib, faqat 5 ta son chiqargandan keyin tsiklni to‘xtating (break).
alert("3-vazifa")
for (let num3 = 1; num3 <= 30; num3++) {
    if (num3 == 6) {
        break
    }
    console.log(num3)
}

// 1 dan 50 gacha bo‘lgan sonlar orasida 7 ga bo‘linadigan birinchi 3 ta sonni ekranga chiqaring, so‘ngra tsiklni to‘xtating.
alert("4-vazifa")
let counter = 0
for (let num4 = 1; num4 <= 50; num4++) {
    if (num4 % 7 === 0) {
        console.log(num4)
        counter++
    }

    if (counter === 3) {
        break
    }
}

// step 2. Switch-case ga oid masalalar (4 ta):

// Foydalanuvchi kiritgan haftaning raqamiga (1-7) mos ravishda haftaning kunini (dushanba-yakshanba) chiqarib bering.
alert("5-vazifa")
let num5 = +prompt("hafta kuni")

switch (num5) {
    case 1:
        console.log("Dushanba")
        break;

    case 7:
        console.log("Yakshanba")
        break;

    default:
        break;
}

// Foydalanuvchi kiritgan oy raqamiga (1-12) mos ravishda faslni (qish, bahor, yoz, kuz) aniqlang.
alert("6-vazifa")
let num6 = +prompt("oy kiriting")

switch (num6) {
    case 12:
    case 1:
    case 2:
        console.log("Qish")
        break;

    case 3:
    case 4:
    case 5:
        console.log("Bahor")
        break;

    case 6:
    case 7:
    case 8:
        console.log("Yoz")
        break;

    case 9:
    case 10:
    case 11:
        console.log("Kuz")
        break;
    default:
        console.log("Bunday oy va fasl yo'q")
        break;
}

// Foydalanuvchi kiritgan songa mos ravishda “juft son” yoki “toq son” ekanligini aniqlang.
alert("7-vazifa")
let num7 = +prompt("son kiriting")

switch (num7) {
    case num7:
        if (num7 % 2 === 0) {
            console.log("juft son")
        } else {
            console.log("toq son")
        }

        break;

    default:
        console.log("Son kiriting")
        break;
}

// Foydalanuvchi kiritgan baho (1-5) bo‘yicha izoh chiqarib bering. Masalan: 5 – “A’lo”, 4 – “Yaxshi”, va hokazo.
alert("8-vazifa")
let num8 = +prompt("Baho bering")

switch (num8) {
    case 5:
        console.log("A'lo")
        break;

    case 4:
        console.log("Yaxshi")
        break;

    case 3:
        console.log("Yomon")
        break;

    case 2:
        console.log("Juda yomon")
        break;

    default:
        console.log("Chopildi")
        break;
}

// step 3. While va do...while ga oid masalalar (15 ta):

// 1 dan 10 gacha bo‘lgan sonlarni ekranga chiqaring.
alert("9-vazifa")
let num9 = 1
while (num9 <= 10) {
    console.log(num9)
    num9++
}

// 10 dan 1 gacha bo‘lgan sonlarni ekranga chiqarib bering.
alert("10-vazifa")
let num10 = 10

while (num10 >= 1) {
    console.log(num10)
    num10--
}

// Foydalanuvchi 0 kiritmaguncha tsiklni davom ettiring va kiritilgan sonlarning yig‘indisini hisoblang.
alert("11-vazifa")
let num11

while (true) {
    num11 = +prompt("son kiriting")
    if (num11 === 0) {
        num11 += num11
        break
    }
}

console.log(num11)

// Foydalanuvchi musbat son kiritmaguncha tsiklni davom ettiring va oxirgi kiritilgan sonni chiqarib bering.
alert("12-vazifa")
let num12

while (true) {
    num12 = +prompt("son kiriting")
    if (num12 > 0) {
        break
    }
}

console.log(num12)

// Foydalanuvchidan raqam kiritishni so‘rang va raqamning raqamlar yig‘indisini hisoblang.
alert("13-vazifa")
let num13 = +prompt("son kiriting")
let yigindi_1 = 0

while (num13 >= 1) {
    let step_1 = num13 % 10
    yigindi_1 += step_1
    num13 = Math.trunc(num13 / 10)
}

console.log(yigindi_1)

// Foydalanuvchi manfiy son kiritguncha tsiklni davom ettiring va kiritilgan juft sonlar sonini hisoblang.
alert("14-vazifa")
let input
let yigindi_2 = 0

while (true) {
    input = +prompt("manfiy son kiriting")
    if (input < 0) {
        break;
    }

    if (input % 2 === 0) {
        yigindi_2++
    }
}

console.log("juft son: ", yigindi_2)

// 1 dan 20 gacha bo‘lgan sonlarni ekranga chiqaring, lekin faqat toq sonlarni.
alert("15-vazifa")
let num14 = 1

while (num14 <= 20) {
    if (num14 % 2 === 1) {
        console.log(num14)
    }
    num14++
}

// 1 dan 50 gacha bo‘lgan sonlardan 5 ga karrali sonlarni chiqaring.
alert("16-vazifa")
let num15 = 1

while (num15 <= 50) {
    if (num15 % 5 === 0) {
        console.log(num15)
    }
    num15++
}

// Foydalanuvchidan butun son kiritishni so‘rang va bu sonni teskari ko‘rinishda chiqarib bering.
alert("17-vazifa")
// bu misol internetdan korib chiqdim va toliq organib chiqdim buni pastda tushuntirib beraman
let num16 = +prompt("son kiriting")

// teskari sonni shuyerda saqlayman
let reverse = 0

while (num16 >= 1) {
    // bu eng oxiridagi sonni oladi
    let number = num16 % 10
    // reserve = reserve * 10 bolganini sababi reserve = 0 * 10 = 0 + oxirgi raqam bu sonlarni birbiridan ajratish uchun (qoshilib ketmasligi uchun)
    reverse = reverse * 10 + number
    // bunda math trunc qoldiqlarni chopish uchun masalan 1.123456 ni num16 / 10 esa oxirgi raqamdan oldingi sonlarni topish uchun
    num16 = Math.trunc(num16 / 10)
}

console.log(reverse)

// 100 dan 1 gacha bo‘lgan sonlarni, faqat 10 ga bo‘linadiganlarini chiqaring.
alert("18-vazifa")
let num17 = 100

while (num17 >= 1) {
    if (num17 % 10 === 0) {
        console.log(num17)
    }
    num17--
}

// 1 dan 100 gacha bo‘lgan barcha sonlarning kvadratini chiqarib bering.
alert("19-vazifa")
let num18 = 1

while (num18 <= 100) {
    let kvadrat = num18 * num18
    console.log(kvadrat)
    num18++
}

// Foydalanuvchidan raqam kiritishni so‘rang. Agar kiritilgan son 5 ga bo‘linmasa, yana son kiritishni so‘rang.
alert("20-vazifa")
let to_ask

while (true) {
    to_ask = +prompt("son kiriting")

    if (to_ask % 5 !== 0) {
        console.log("bu son 5 ga bo'linmaydi")
    } else {
        console.log("you answered correctly")
        break
    }
}

// Foydalanuvchi 10 dan katta son kiritmaguncha davom eting. Oxirida kiritilgan sonni chiqaring.
alert("21-vazifa")
let num19

while (true) {
    num19 = +prompt("10 dan katta son kiriting")

    if (num19 > 10) {
        console.log(num19)
        break
    }
}

// Foydalanuvchi “stop” so‘zini yozmaguncha davom eting. Oxirida nechta son kiritganini hisoblang.
alert("22-vazifa")
// let num20
// let yigindi_3 = 0

// while(true) {
//     num20 = +prompt("Please enter the password")

//     if (num20 === "stop") {
//         break
//     }

//     yigindi_3++
// }

// console.log("you have just entered the password correctly", yigindi_3, "ta son kiritdingiz")

// ustoz tepadagi negadir ishlamadi lekin struktura to'g'ri bosa kerak

// Foydalanuvchi kiritgan sonlarning o‘rtacha qiymatini hisoblang (nol kiritilganda tsikl to‘xtaydi).
alert("23-vazifa")
let num21

while (true) {
    num21 = +prompt("son kiriting")

    if (num21 === 0) {
        break
    }
}

// step 4. Ternary operator ga oid masalalar (5 ta):

// Foydalanuvchi kiritgan son musbat yoki manfiy ekanligini aniqlang.
alert("24-vazifa")
let num22 = +prompt("son")

num22 > 0 ? console.log("musbat son") : console.log("musbat son emas")

// Foydalanuvchi kiritgan son juft yoki toq ekanligini aniqlang.
alert("25-vazifa")
let num23 = +prompt("son")

num23 % 2 === 0 ? console.log("juft son") : console.log("toq son")

// Foydalanuvchi kiritgan son 100 dan katta yoki kichik ekanligini aniqlang.
alert("25-vazifa")
let num24 = +prompt("son")

num24 > 100 ? console.log("son 100 dan katta") : console.log("son 100 dan kichik")

// Foydalanuvchidan ikkita son so‘rang va ularning kattasini aniqlang.
alert("26-vazifa")
let num25 = +prompt("1-son")
let num26 = +prompt("2-son")

num25 > num26 ? console.log("num25 katta") : console.log("num26 katta")

// Foydalanuvchi kiritgan son 3 ga va 5 ga bo‘linadigan yoki bo‘linmaydiganligini tekshiring.
alert("27-vazifa")
let num27 = +prompt("son")

num27 % 3 === 0 ? console.log("3 ga bo'linadi") : console.log("3 ga bo'linmaydi") && num27 % 5 === 0 ? console.log("5 ga bo'linadi") : console.log("5 ga bo'linmaydi")

// step 5. Math methods ga oid masalalar (4 ta):

// 0 dan 100 gacha tasodifiy son hosil qiling (Math.random) va uni ekranga chiqarib bering.
alert("28-vazifa")
let tasodif = Math.trunc(Math.random() * 100)
console.log(tasodif)

// Foydalanuvchidan haqiqiy son kiritishni so‘rang va uning faqat butun qismini chiqarib bering (Math.trunc).
alert("29-vazifa")
let haqiqiy_Son = +prompt("son kiriting")
console.log(Math.trunc(haqiqiy_Son))

// Foydalanuvchidan haqiqiy son kiritishni so‘rang va uni yuqoriga qarab yaxlitlang (Math.ceil).
alert("30-vazifa")
let haqiqiy_Son2 = +prompt("son kiriting")
console.log(Math.ceil(haqiqiy_Son2))

// Foydalanuvchidan son kiritishni so‘rang va uning modulini toping (Math.abs).
alert("31-vazifa")
let haqiqiy_Son3 = +prompt("son kiriting")
console.log(Math.abs(haqiqiy_Son3))

// step 6. For ga oid masalalar (15 ta):

// 1 dan 50 gacha bo‘lgan sonlarni ekranga chiqaring.
alert("32-vazifa")
for (let num28 = 1; num28 <= 50; num28++) {
    console.log(num28)
}

// 10 dan 1 gacha bo‘lgan sonlarni ekranga chiqaring.
alert("33-vazifa")
for (let num29 = 10; num29 >= 1; num29--) {
    console.log(num29)
}

// 1 dan 100 gacha bo‘lgan faqat toq sonlarni chiqarib bering.
alert("34-vazifa")
for (let num30 = 1; num30 <= 100; num30++) {
    if (num30 % 2 === 1) {
        console.log(num30)
    }
}

// 1 dan 50 gacha bo‘lgan faqat juft sonlarni chiqarib bering.
alert("35-vazifa")
for (let num31 = 1; num31 <= 50; num31++) {
    if (num31 % 2 === 0) {
        console.log(num31)
    }
}

// 1 dan 100 gacha bo‘lgan barcha sonlarning yig‘indisini hisoblang.
alert("36-vazifa")
let yigindi_4 = 0

for (let num32 = 1; num32 <= 100; num32++) {
    yigindi_4 += num32
}

console.log(yigindi_4)

// Foydalanuvchidan son kiritishni so‘rang va 1 dan shu songacha bo‘lgan barcha sonlarning ko‘paytmasini hisoblang.
alert("37-vazifa")
let num34 = +prompt("son kiriting")

for (let num33 = 1; num33 <= num34; num33++) {
    let kopaytma = num33 * num33
    console.log(kopaytma)
}

// 1 dan 20 gacha bo‘lgan sonlarning kvadratini chiqarib bering.
alert("38-vazifa")
for (let num35 = 1; num35 <= 20; num35++) {
    let kopaytma_2 = num35 * num35
    console.log(kopaytma_2)
}

// Foydalanuvchi kiritgan sonning faktorialini hisoblang.
alert("39-vazifa")
let faktorial = +prompt("son kiriting")

for (faktorial = faktorial; faktorial >= 1; faktorial--) {
    let num36 = faktorial * faktorial
    console.log(num36)
}

// Foydalanuvchi kiritgan sonning faktorialini hisoblang.
alert("40-vazifa")
for (let num37 = 1; num37 <= 100; num37++) {
    if (num37 % 5 === 0) {
        console.log(num37)
    }
}

// Foydalanuvchidan musbat son kiritishni so‘rang va 1 dan shu songacha bo‘lgan sonlarning kubini chiqarib bering.
alert("41-vazifa")
let num39 = +prompt("son kiriting")

for (let num38 = 1; num38 <= num39; num38++) {
    let kopaytma_3 = num38 * 3
    console.log(kopaytma_3)
}

// 1 dan 100 gacha bo‘lgan barcha juft sonlarning yig‘indisini hisoblang.
alert("42-vazifa")
let yigindi_5 = 0

for (let num40 = 1; num40 <= 100; num40++) {
    if (num40 % 2 === 0) {
        yigindi_5 += num40
    }
}

console.log(yigindi_5)

// 1 dan 50 gacha bo‘lgan sonlar orasida 3 ga bo‘linadigan birinchi 10 ta sonni ekranga chiqaring.
alert("43-vazifa")
let total = 0

for (let num41 = 1; num41 <= 50; num41++) {
    if (num41 % 3 === 0) {
        console.log(num41)
        total++
    }

    if (total === 10) {
        break
    }
}

// Foydalanuvchidan musbat butun son kiritishni so‘rang va shu songacha bo‘lgan sonlar yig‘indisini toping.
alert("44-vazifa")
let num43 = +prompt("son kiriting")
let yigindi_6 = 0

for (let num42 = 1; num42 <= num43; num42++) {
    num42 += yigindi_6
}

console.log(yigindi_6)

// 1 dan 10 gacha bo‘lgan barcha sonlarning kvadratlar yig‘indisini toping.
alert("45-vazifa")
let yigindi_7 = 0

for (let num44 = 1; num44 <= 10; num44++) {
    let kopaytma_4 = num44 * num44
    kopaytma_4 += yigindi_7
}

console.log(yigindi_7)

// Foydalanuvchi kiritgan musbat butun sonning barcha bo‘luvchilarini chiqarib bering.
alert("46-vazifa")
let num46 = +prompt("son kiriting")

for (let num45 = 1; num45 <= num46; num45++) {
    if (num46 % num45 === 0) {
        console.log(num45)
    }
}

// step 7. Barcha mavzularni qamrab oluvchi masalalar (10 ta):

// Foydalanuvchidan son kiritishni so‘rang va bu son 3 ga bo‘linadiganmi yoki yo‘qligini ternary operator yordamida aniqlang. Keyin 1 dan shu songacha bo‘lgan barcha sonlarni chiqarib bering.w
alert("47-vazifa")
let num47 = +prompt("son kiriting")

for (let num48 = 1; num48 <= num47; num48++) {
    num47 % 3 === 0 ? console.log(num47) : console.log("bo'linmaydi")
    console.log(num48)
}

// Foydalanuvchi kiritgan oy raqamiga mos faslni (switch-case) aniqlang va 1 dan shu oy raqamigacha bo‘lgan sonlarni (for) ekranga chiqaring.
alert("48-vazifa")
let num49 = +prompt("son kiriting")

switch (num49) {
    case 12:
    case 1:
    case 2:
        console.log("Qish")
        break;

    case 3:
    case 4:
    case 5:
        console.log("Bahor")
        break;

    case 6:
    case 7:
    case 8:
        console.log("Yoz")
        break;

    case 9:
    case 10:
    case 11:
        console.log("Kuz")
        break;

    default:
        console.log("bunday oy yo'q")
        break;
}

for (let num50 = 1; num50 <= num49; num50++) {
    console.log(num50)
}

// Tasodifiy son hosil qiling va bu son juft yoki toq ekanligini aniqlang. Agar son juft bo‘lsa, 1 dan 20 gacha bo‘lgan juft sonlarni chiqarib bering (for).
alert("49-vazifa")
let num51 = Math.random() * 20

for (let num52 = 1; num52 <= 20; num52++) {
    if (num51 % 2 === 0) {
        console.log(num52)
    }
}

// Foydalanuvchidan musbat son kiritishni so‘rang va uning faktorialini hisoblang (while). Keyin sonning modul qiymatini toping (Math.abs).
alert("50-vazifa")
let num53 = +prompt("son kiriting")

while (num53 >= 1) {
    let faktorial_2 = num53 * num53
    num53--
    console.log(Math.abs(faktorial_2))
}

// Foydalanuvchidan hafta kuni raqamini kiritishni so‘rang (switch-case) va unga mos kun nomini chiqaring. Agar kun raqami juft bo‘lsa, qo‘shimcha ravishda 1 dan 10 gacha bo‘lgan sonlarni chiqarib bering (for).
alert("51-vazifa")
let num54 = +prompt("hafta kunini kiriting")

switch (num54) {
    case 1:
        console.log("Dushanba")
        break;
    case 2:
        console.log("Seshanba")
        break;
    case 3:
        console.log("Chorshanba")
        break;
    case 4:
        console.log("Payshanba")
        break;
    case 5:
        console.log("Juma")
        break;
    case 6:
        console.log("Shanba")
        break;
    case 7:
        console.log("Yakshanba")
        break;
    default:
        console.log("bunday hafta kuni yo'q")
        break;
}

for(let num55 = 1; num55 <= 10; num55++) {
    if(num54 % 2 === 0) {
        console.log(num55)
    }
}

// Tasodifiy son hosil qilib, uni butun qismiga keltiring (Math.trunc) va bu songacha bo‘lgan barcha sonlarning yig‘indisini hisoblang (while).
alert("52-vazifa")
let tasodif_2 = Math.trunc(Math.random() * 10)
let num56 = 1
let yigindi_8 = 0

while(num56 <= tasodif_2) {
    num56 += num56
    yigindi_8 += num56
    num56++
}

console.log(yigindi_8)

// Foydalanuvchi manfiy son kiritmaguncha sonlarni kiritishni davom ettiring (do...while). Yakunida barcha kiritilgan sonlarning o‘rtacha qiymatini hisoblang.
alert("53-vazifa")
let yigindi_9 = 0

do {
    let num57 = +prompt("iltmos manfiy son kiriting")
    if (num57 < 0) {
        console.log("nechta urinish bo'lgani", yigindi_9)
        break
    } else {
        yigindi_9++
    }
} while (true)