import { RefObject } from "react";
import { useSetBannerImageUrl } from "../store/banner.store";
import { downloadImage, generateBannerImage } from "../utils/banner.utils";

export const useBannerExport = (ref: RefObject<HTMLElement>) => {
  const setImageUrl = useSetBannerImageUrl();

  const exportToSvg = async () => {
    if (!ref.current) return;

    const dataUrl = await generateBannerImage(ref.current);
    if (dataUrl) {
      setImageUrl(dataUrl);
      downloadImage(dataUrl, "project-banner.png");
    }
  };

  return { exportToSvg };
};
