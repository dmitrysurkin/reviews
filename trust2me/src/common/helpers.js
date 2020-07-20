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