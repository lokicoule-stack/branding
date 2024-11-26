import { useRef } from "react";
import { Card, CardContent } from "../../../shared/components/Card";
import { useBannerExport } from "../hooks/useBannerExport";
import { useBannerData, useResetBannerConfig } from "../store/banner.store";
import { BannerConfigForm } from "./BannerConfigForm";
import { BannerPreview } from "./BannerPreview";

export const BannerGenerator = () => {
  const componentRef = useRef<HTMLDivElement>(null);
  const { imageUrl } = useBannerData();
  const resetConfig = useResetBannerConfig();
  const { exportToSvg } = useBannerExport(componentRef);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 ">
      <Card className="w-full max-w-4xl">
        <CardContent className="p-8">
          <div className="space-y-8">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h2 className="text-xl font-semibold mb-4 text-gray-800 text-center">
                Preview
              </h2>
              <div className="hidden">
                <div ref={componentRef} className="w-full shadow-lg">
                  <BannerPreview isPreview={false} />
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-full shadow-lg">
                  <BannerPreview isPreview={true} />
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">
                Banner Configuration
              </h2>
              <BannerConfigForm />
            </div>

            <div className="flex justify-center gap-4">
              <button
                onClick={() => exportToSvg()}
                className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 
                          transition-colors duration-200 font-medium shadow-sm
                          flex items-center justify-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                Export
              </button>
              <button
                onClick={resetConfig}
                className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 
                          transition-colors duration-200 font-medium shadow-sm
                          flex items-center justify-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                    clipRule="evenodd"
                  />
                </svg>
                Reset
              </button>
            </div>

            {imageUrl && (
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold mb-4 text-center text-gray-800">
                  Generated Banner
                </h3>
                <img
                  src={imageUrl}
                  alt="Project banner preview"
                  className="w-full"
                />
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
