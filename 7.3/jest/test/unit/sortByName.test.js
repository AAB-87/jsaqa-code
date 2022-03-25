// импортируем функцию указав адрес и добавляем её в константу
const sorting = require("../../app");

// описываем структуру теста
describe("Books names test suit", () => { // содержит названия съютов (наборы тестов) + колбэк
  it("Book titles must be sorted alphabetically", () => { // содержит название самого теста + колбэк
    expect(
      sorting.sortByName([
        "Гарри Поттер",
        "Властелин Колец",
        "Волшебник изумрудного города",
      ])
    ).toEqual([
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ]);
  });
  it("3 identical books arrived", () => { // содержит название самого теста + колбэк
    expect(
      sorting.sortByName([
        "Гарри Поттер",
        "Гарри Поттер",
        "Гарри Поттер",
      ])
    ).toEqual([
      "Гарри Поттер",
      "Гарри Поттер",
      "Гарри Поттер",
    ]);
  });
  it("already sorted books arrived", () => { // содержит название самого теста + колбэк
    expect(
      sorting.sortByName([
        "Властелин Колец",
        "Волшебник изумрудного города",
        "Гарри Поттер"
      ])
    ).toEqual([
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер"
    ]);
  });
});
