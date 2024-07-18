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

export function months(): { value: number; label: string }[] {
  return [
    { value: 1, label: "(1) January" },
    { value: 2, label: "(2) February" },
    { value: 3, label: "(3) March" },
    { value: 4, label: "(4) April" },
    { value: 5, label: "(5) May" },
    { value: 6, label: "(6) June" },
    { value: 7, label: "(7) July" },
    { value: 8, label: "(8) August" },
    { value: 9, label: "(9) September" },
    { value: 10, label: "(10) October" },
    { value: 11, label: "(11) November" },
    { value: 12, label: "(12) December" },
  ];
}

export function years(): { value: number; label: string }[] {
  const currentYear = new Date().getFullYear();
  return Array.from({ length: 16 }, (_, i) => {
    return { value: currentYear + i, label: `${currentYear + i}` };
  });
}

export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
