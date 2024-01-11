import { TRelease } from "@/types/releases";

export const RELEASE_MOCK: TRelease[] = [
  { id: 1, title: 'Adiantamento de salário', value: 2200, type: 'in', category: 'salário', transferType: 'bancário' },
  { id: 2, title: 'Crédito de salário', value: 2200, type: 'in', category: 'salário', transferType: 'bancário' },
  { id: 3, title: 'Aluguel', value: 1000, type: 'out', category: 'moradia', transferType: 'PIX' },
  { id: 4, title: 'Água', value: 98, type: 'out', category: 'moradia', transferType: 'PIX' },
  { id: 5, title: 'Energia', value: 180, type: 'out', category: 'moradia', transferType: 'PIX' },
  { id: 6, title: 'Netflix', value: 54.90, type: 'out', category: 'assinatura', transferType: 'crédito' },
  { id: 7, title: 'Amz Prime', value: 14.90, type: 'out', category: 'assinatura', transferType: 'crédito' },
];