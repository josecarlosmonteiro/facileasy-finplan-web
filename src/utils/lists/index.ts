export function totalList<T>(list: T[], key: keyof T) {
  return list.reduce((prev, current) => prev + Number(current[key]), 0);
}

export function filterByProp<T>(list: T[], key: keyof T, match: any) {
  return list.filter((el) => el[key] === match);
}

export function crescentSort<T>(list: T[], key: keyof T) {
  return list.sort((a, b) => {
    if (a[key] > b[key]) return 1;
    if (a[key] < b[key]) return -1;
    return 0;
  });
}

export function decrescentSort<T>(list: T[], key: keyof T) {
  return list.sort((a, b) => {
    if (a[key] > b[key]) return -1;
    if (a[key] < b[key]) return 1;
    return 0;
  });
}

export function unique<T>(list: T[], key: keyof T): string[] {
  const result: string[] = [];

  list.forEach((el) => {
    !result.includes(el[key] as string) && result.push(el[key] as string);
  });

  return result;
}

export function mapTotalByProp<T>(
  list: T[],
  propList: string[],
  propMatch: keyof T,
  propValueName: keyof T
) {
  let propMap: Record<string, number> = {};

  propList.forEach((prop) => {
    if (!Object.keys(propMap).includes(prop))
      propMap[prop] = totalList(
        filterByProp(list, propMatch, prop),
        propValueName
      );
  });

  return propMap;
}
