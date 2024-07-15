export const siteImagePrefix = `${import.meta.env.BASE_URL}/assets/images/site`;

export function getSiteImageUrl(name: string): string {
  const filename = `${name}`;
  try {
    return `${siteImagePrefix}/${filename}`;
  } catch (_) {
    console.log("Failed to find site image " + filename);
    return `${siteImagePrefix}/book-image-not-found-125-190.png`;
  }
}

export const productImagePrefix = `${
  import.meta.env.BASE_URL
}/assets/images/products`;

export function getProductImageUrl(name: string): string {
  const filename = `${name}`;
  try {
    return `${productImagePrefix}/${filename}`;
  } catch (_) {
    console.log("Failed to find product image " + filename);
    return `${siteImagePrefix}/book-image-not-found-125-190.png`;
  }
}

// From https://flaviocopes.com/how-to-format-number-as-currency-javascript/
const PriceFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
});

export const asDollarsAndCents = function (cents: number) {
  return PriceFormatter.format(cents / 100.0);
};
