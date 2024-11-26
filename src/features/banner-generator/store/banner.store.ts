import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { useShallow } from "zustand/shallow";
import { DEFAULT_CONFIG } from "./banner.constants";
import type { ProjectBannerStore } from "./banner.types";

const useProjectBannerStore = create<ProjectBannerStore>()(
  devtools(
    persist(
      (set) => ({
        config: DEFAULT_CONFIG,
        imageUrl: "",
        updateConfig: (updates) =>
          set(
            (state) => ({
              config: { ...state.config, ...updates },
            }),
            false,
            "updateConfig"
          ),
        setImageUrl: (url) => set({ imageUrl: url }, false, "setImageUrl"),
        resetConfig: () =>
          set({ config: DEFAULT_CONFIG }, false, "resetConfig"),
      }),
      {
        name: "project-banner-store",
      }
    )
  )
);

export const useSetBannerImageUrl = () =>
  useProjectBannerStore((state) => state.setImageUrl);

export const useUpdateBannerConfig = () =>
  useProjectBannerStore((state) => state.updateConfig);

export const useResetBannerConfig = () =>
  useProjectBannerStore((state) => state.resetConfig);

export const useBannerData = () => {
  const { config, imageUrl } = useProjectBannerStore(
    useShallow((state) => ({
      config: state.config,
      imageUrl: state.imageUrl,
    }))
  );

  return { config, imageUrl };
};
