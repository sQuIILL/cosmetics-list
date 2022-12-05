export default function price(price, currency) {
  const noneValues = [null, '', ' ', 0, 0.0, "0.0", "0"]
  if (noneValues.includes(price)) {
    return "unknown"
  } else return `${price.toLocaleString("pl-PL")} ${noneValues.includes(currency) ? "USD" : currency}`
}
