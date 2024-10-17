import { bubbleSort } from "../script.js"; // Убедитесь, что путь к файлу правильный
import { expect } from "chai"; // Импортируем expect из chai

describe('bubbleSort tests', function () {
    it('дефолт', function () {
        const arr = [234, 43, 55, 63, 5, 6, 235, 547];
        const res = [5, 6, 43, 55, 63, 234, 235, 547];
        const sortedArr = bubbleSort(arr);
        expect(sortedArr).to.deep.equal(res); 
    });

    it('правильный вариант', function () {
        const arr = [1, 2, 3, 4, 5];
        const res = [1, 2, 3, 4, 5];
        const sortedArr = bubbleSort(arr);
        expect(sortedArr).to.deep.equal(res);
    });

    it('пустой массив', function () {
        const arr = [];
        const res = [];
        const sortedArr = bubbleSort(arr);
        expect(sortedArr).to.deep.equal(res);
    });

    it('один элемент', function () {
        const arr = [42];
        const res = [42];
        const sortedArr = bubbleSort(arr);
        expect(sortedArr).to.deep.equal(res);
    });

    it('повторяющиеся элементы', function () {
        const arr = [4, 2, 2, 1];
        const res = [1, 2, 2, 4];
        const sortedArr = bubbleSort(arr);
        expect(sortedArr).to.deep.equal(res);
    });

    it('проваленный тест', function () {
        const arr = [4, 3, 2, 1];
        const res = [1, 3, 2, 4];
        const sortedArr = bubbleSort(arr);
        expect(sortedArr).to.deep.equal(res);
    });
});
