import React from "react";

import ColorPicker from "../components/ColorPicker";
import withColorModel from "../hocs/withColorModel";
import { ColorModel, ColorPickerBaseProps, HSL } from "../types";
import { equalColorObjects } from "../utils/compare";
import { hslToHsv, hsvToHsl } from "../utils/convert";

const colorModel: ColorModel<HSL> = {
  defaultColor: { h: 0, s: 0, l: 0 },
  toHsv: hslToHsv,
  fromHsv: hsvToHsl,
  equal: equalColorObjects,
};

const HslColorPicker: React.FC<Partial<ColorPickerBaseProps<HSL>>> = withColorModel(
  ColorPicker,
  colorModel
);

export default HslColorPicker;
