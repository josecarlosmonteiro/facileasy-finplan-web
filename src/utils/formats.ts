export function currency(value: string | number) {
  return Number(value).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
}