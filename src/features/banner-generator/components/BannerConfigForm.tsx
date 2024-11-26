import { Input } from "../../../shared/components/Input";
import { GRADIENTS, GRADIENT_DIRECTIONS } from "../store/banner.constants";
import { useBannerData, useUpdateBannerConfig } from "../store/banner.store";

export const BannerConfigForm = () => {
  const { config } = useBannerData();
  const updateConfig = useUpdateBannerConfig();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Input
        value={config.title}
        onChange={(e) => updateConfig({ title: e.target.value })}
        placeholder="Project Title"
      />
      <Input
        value={config.version}
        onChange={(e) => updateConfig({ version: e.target.value })}
        placeholder="Project Version"
      />
      <Input
        value={config.subtitle}
        onChange={(e) => updateConfig({ subtitle: e.target.value })}
        placeholder="Project Description"
        className="md:col-span-2"
      />
      <select
        value={config.gradient.name}
        onChange={(e) =>
          updateConfig({
            gradient:
              GRADIENTS.find((g) => g.name === e.target.value) || GRADIENTS[0],
          })
        }
        className="p-2 border rounded-lg"
      >
        {GRADIENTS.map((gradient) => (
          <option key={`gradient-${gradient.name}`} value={gradient.name}>
            {gradient.name}
          </option>
        ))}
      </select>
      <select
        value={config.direction.name}
        onChange={(e) =>
          updateConfig({
            direction:
              GRADIENT_DIRECTIONS.find((d) => d.name === e.target.value) ||
              GRADIENT_DIRECTIONS[0],
          })
        }
        className="p-2 border rounded-lg"
      >
        {GRADIENT_DIRECTIONS.map((direction) => (
          <option key={`direction-${direction.name}`} value={direction.name}>
            {direction.name}
          </option>
        ))}
      </select>
    </div>
  );
};
