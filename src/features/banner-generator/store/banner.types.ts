export type Gradient = {
  name: string;
  class: string;
  default?: boolean;
};

export type GradientDirection = {
  name: string;
  value: string;
  default?: boolean;
};

export type BannerConfig = {
  title: string;
  version: string;
  subtitle: string;
  gradient: Gradient;
  direction: GradientDirection;
};

export type ProjectBannerStore = {
  config: BannerConfig;
  imageUrl: string;
  updateConfig: (updates: Partial<BannerConfig>) => void;
  setImageUrl: (url: string) => void;
  resetConfig: () => void;
};
