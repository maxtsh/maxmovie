export function formatLargeNumber(value: number) {
  const formatedValue = Intl.NumberFormat("en-US", {
    notation: "compact",
    maximumFractionDigits: 2,
  }).format(value);

  return formatedValue;
}
