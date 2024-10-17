function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let swapped = false;
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // Обмен элементов
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }
        if (!swapped) {
            break;
        }
    }
    return arr;
}

// Пример использования
const arr = [64, 34, 25, 12, 22, 11, 90];
const sortedArr = bubbleSort(arr);
console.log(arr, sortedArr); // Вывод: [11, 12, 22, 25, 34, 64, 90]