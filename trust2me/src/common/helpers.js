import _ from 'lodash';

/**
 Возвращает обрезанный текст
 * @param {string} Текст для обрезки
 * @param {number} Максимальная длина
 * @returns {string} Обрезанный текст
 */
export const getCutText = (text, length) => {
    const words = text.split(' ');
    let res = '';

    for (const word of words) {
        if (res.length > length) {
            res += '...';
            break;
        }

        res += `${word} `;
    }
    return res;
}

/**
 Возвращает словосочетание в правильном склонении
 * @param {number} Количество чего-либо
 * @param {array} Падежи
 * @returns {string} Словосочетание в нужном падеже
 */
export const num2str = (n, text_forms) => {
    n = Math.abs(n) % 100;
    const n1 = n % 10;
    if (n > 10 && n < 20) { return text_forms[2]; }
    if (n1 > 1 && n1 < 5) { return text_forms[1]; }
    if (n1 === 1) { return text_forms[0]; }
    return text_forms[2];
}


/**
 Возвращает оценку отображенную в массив, например 3,98 вернет [1, 1, 1, 0.98, 0]
 * @param {number} Оценка
 * @returns {array} массив оценок
 */
 export const markToArray = (mark) => {
    let currentMark = mark;
    const res = _.range(1, 6);
    return res.reduce((acc) => {
        if (currentMark >= 1) {
            currentMark -= 1;
            return [...acc, 1];
        } else if (currentMark > 0) {
            const data = currentMark;
            currentMark = 0;
            return [...acc, data];
        } else {
            return [...acc, 0];
        }
    }, []);
}