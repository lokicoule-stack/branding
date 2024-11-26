import { cn } from "../../../shared/utils/cn";
import { useBannerData } from "../store/banner.store";

type BannerPreviewProps = {
  isPreview?: boolean;
};

export const BannerPreview = ({ isPreview = false }: BannerPreviewProps) => {
  const { config } = useBannerData();

  return (
    <div
      className={cn(
        "h-[250px]",
        isPreview ? "w-full aspect-[800/250]" : "w-[800px]"
      )}
    >
      <div
        className={cn(
          "w-full h-full",
          config.direction.value,
          config.gradient.class,
          "p-1"
        )}
      >
        <div className="w-full h-full bg-[#111827] flex items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-4 px-8">
            <div className="relative">
              {/* Remove the transparent style wrapper */}
              <span
                className={cn(
                  "font-bold block text-center relative",
                  isPreview ? "text-4xl md:text-5xl" : "text-5xl"
                )}
              >
                {/* Force hardware acceleration for the gradient text */}
                <span
                  className={cn(
                    "absolute inset-0",
                    config.direction.value,
                    config.gradient.class
                  )}
                  style={{
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    perspective: "1000",
                    transform: "translateZ(0)", // Force hardware acceleration
                  }}
                >
                  {config.title}
                </span>
                <span style={{ visibility: "hidden" }}>{config.title}</span>
              </span>
              <span
                className={cn(
                  "absolute text-md font-extrabold text-white",
                  isPreview
                    ? "-top-1 -right-8 md:-right-12"
                    : "-top-1 -right-12"
                )}
              >
                {config.version}
              </span>
            </div>
            <span
              className={cn(
                "font-light text-white text-center",
                isPreview ? "text-lg md:text-xl" : "text-xl"
              )}
            >
              {config.subtitle}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
