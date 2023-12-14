export function totalList<T>(list: T[], key: keyof T) {
  return list.reduce((prev, current) => prev + Number(current[key]), 0);
}

export function filterByProp<T>(list: T[], key: keyof T, match: any) {
  return list.filter(el => el[key] === match);
}

export function crescentSort<T>(list: T[], key: keyof T) {
  return list.sort((a, b) => {
    if (a[key] > b[key]) return 1;
    if (a[key] < b[key]) return -1;
    return 0;
  })
}

export function decrescentSort<T>(list: T[], key: keyof T) {
  return list.sort((a, b) => {
    if (a[key] > b[key]) return -1;
    if (a[key] < b[key]) return 1;
    return 0;
  })
}