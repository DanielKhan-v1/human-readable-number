module.exports = function toReadable(number) {
    if (+number === 0) return `zero`;
    if (+number === 14) return `fourteen`;

    let numbers = {
        0: "",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
    };

    let teens = {
        10: "ten",
        11: "eleven",
        12: "twelve",
    };

    let numbers_2 = {
        0: "",
        2: "twen",
        3: "thir",
        4: "for",
        5: "fif",
        6: "six",
        7: "seven",
        8: "eigh",
        9: "nine",
    };

    if (String(number).length == 1) {
        return `${numbers[number]}`;
    } else if (String(number).length == 2) {
        if (+String(number)[0] == 1) {
            if (+String(number)[1] >= 0 && +String(number)[1] <= 2) {
                return `${teens[+number]}`;
            } else if (+String(number)[1] >= 3 && +String(number)[1] <= 9) {
                return `${numbers_2[+String(number)[1]]}teen`;
            }
        } else if (+String(number)[1] === 0) {
            return `${numbers_2[+String(number)[0]]}ty`;
        } else {
            return `${numbers_2[+String(number)[0]]}ty ${
                numbers[+String(number)[1]]
            }`;
        }
    } else if (String(number).length == 3) {
        if (+String(number)[1] == 1) {
            if (+String(number)[2] >= 0 && +String(number)[2] <= 2) {
                return `${numbers[+String(number)[0]]} hundred ${
                    teens[String(number)[1] + String(number)[2]]
                }`;
            } else if (+String(number)[2] === 4) {
                return `${numbers[+String(number)[0]]} hundred fourteen`;
            } else if (+String(number)[2] >= 3 && +String(number)[2] <= 9) {
                return `${numbers[+String(number)[0]]} hundred ${
                    numbers_2[+String(number)[2]]
                }teen`;
            }
        } else if (+String(number)[1] === 0 && +String(number)[2] === 0) {
            return `${numbers[+String(number)[0]]} hundred`;
        } else if (+String(number)[1] === 0) {
            return `${numbers[+String(number)[0]]} hundred ${
                numbers[+String(number)[2]]
            }`;
        } else if (+String(number)[2] === 0) {
            return `${numbers[+String(number)[0]]} hundred ${
                numbers_2[+String(number)[1]]
            }ty`;
        } else {
            return `${numbers[+String(number)[0]]} hundred ${
                numbers_2[+String(number)[1]]
            }ty ${numbers[+String(number)[2]]}`;
        }
    }
};