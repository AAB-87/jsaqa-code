function sortByName(inputArray) {
  inputArray.sort(function (a, b) {
    let nameA = a.toLowerCase();
    let nameB = b.toLowerCase();
    if (nameA < nameB)
      //сортируем названия по возрастанию
      return -1;
    if (nameA > nameB) {
      return 1;
    }
    return 0; // нет сортировки
  });
  return inputArray;
}
// экспорт функции для того чтобы она была видна тетстам
exports.sortByName = sortByName;
