import {
  crescentSort,
  decrescentSort,
  filterByProp,
  mapTotalByProp,
  totalList,
  unique,
} from ".";

const mock: { value: number; type: string }[] = [
  { value: 100, type: "in" },
  { value: 200, type: "in" },
  { value: 200, type: "in" },
  { value: 150, type: "out" },
  { value: 300, type: "out" },
];

describe("utils/lists", () => {
  test("totalList", () => {
    expect(totalList(mock, "value")).toBe(950);
  });

  test("filterByProp", () => {
    expect(filterByProp(mock, "type", "in").length).toBe(3);
    expect(filterByProp(mock, "type", "out").length).toBe(2);
  });

  test("crescentSort", () => {
    expect(crescentSort(mock, "value")[0].value).toBe(100);
    expect(crescentSort(mock, "value")[mock.length - 1].value).toBe(300);
  });

  test("decrescentSort", () => {
    expect(decrescentSort(mock, "value")[0].value).toBe(300);
    expect(decrescentSort(mock, "value")[mock.length - 1].value).toBe(100);
  });

  test("unique", () => {
    const result = unique(mock, "type");

    expect(result.length).toBe(2);
    expect(result.includes("in")).toBeTruthy();
    expect(result.includes("out")).toBeTruthy();
  });

  test("mapTotalByProp", () => {
    const mock: { cat: string; value: number; type: string }[] = [
      { cat: "salário", type: "in", value: 100 },
      { cat: "transporte", type: "out", value: 200 },
      { cat: "moradia", type: "out", value: 300 },
      { cat: "moradia", type: "out", value: 400 },
    ];

    const catList = unique(mock, "cat");

    const result = mapTotalByProp(mock, catList, "cat", "value");

    expect(Object.keys(result).length).toBe(3);

    expect(result["salário"]).toBe(100);
    expect(result["transporte"]).toBe(200);
    expect(result["moradia"]).toBe(700);
  });
});
