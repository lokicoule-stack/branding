import { toSvg } from "html-to-image";

export const generateBannerImage = async (element: HTMLElement) => {
  try {
    return await toSvg(element, {
      quality: 1.0,
      pixelRatio: 2,
      backgroundColor: "transparent",
      width: 800,
      height: 250,
      style: {
        transform: "scale(1)",
      },
      cacheBust: true, // Prevents caching issues
    });
  } catch (error) {
    console.error("Error generating banner:", error);
    return null;
  }
};

export const downloadImage = (dataUrl: string, filename: string) => {
  const link = document.createElement("a");
  link.download = filename;
  link.href = dataUrl;
  link.click();
};

export const findDefaultOrFirst = <T extends { default?: boolean }>(
  items: Readonly<T[]>
): T => {
  return items.find((item) => item.default) || items[0];
};
