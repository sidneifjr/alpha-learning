export function convertToCurrency(value: number) {
  const currency = new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)

  return currency
}
