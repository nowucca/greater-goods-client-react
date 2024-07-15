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
