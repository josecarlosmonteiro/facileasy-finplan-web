import { crescentSort, decrescentSort, filterByProp, totalList } from "./lists"

const mock: { value: number, type: string }[] = [
  { value: 100, type: 'in' },
  { value: 200, type: 'in' },
  { value: 200, type: 'in' },
  { value: 150, type: 'out' },
  { value: 300, type: 'out' },
];

describe("utils/lists", () => {
  test("totalList", () => {
    expect(totalList(mock, 'value')).toBe(950);
  })

  test("filterByProp", () => {
    expect(filterByProp(mock, 'type', 'in').length).toBe(3);
    expect(filterByProp(mock, 'type', 'out').length).toBe(2);
  })

  test("crescentSort", () => {
    expect(crescentSort(mock, 'value')[0].value).toBe(100);
    expect(crescentSort(mock, 'value')[mock.length - 1].value).toBe(300);
  })

  test("decrescentSort", () => {
    expect(decrescentSort(mock, 'value')[0].value).toBe(300);
    expect(decrescentSort(mock, 'value')[mock.length - 1].value).toBe(100);
  })
})