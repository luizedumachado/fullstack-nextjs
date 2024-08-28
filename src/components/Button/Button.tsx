import { useTheme } from "@src/theme/ThemeProvider";
import ButtonBase, { ButtonBaseProps } from "./ButtonBase";
import { ColorVariant, colorVariantBy, Variant } from "./colorVariantBy";
import { ButtonSize, buttonSize } from "./buttonSize";

interface ButtonProps extends ButtonBaseProps{
  fullWidth?: boolean;
  children:React.ReactNode;
  colorVariant?: ColorVariant;
  variant?: Variant;
  size?: ButtonSize;
}

export default function Button( {
    styleSheet,
    children,
    fullWidth,
    colorVariant,
    variant,
    size
} : ButtonProps) {
  const theme = useTheme();
  return (
    <ButtonBase
      styleSheet={{
        alignSelf:'flex-start',
        ...colorVariantBy(theme, colorVariant, variant),
        ...buttonSize[size],
        ...(fullWidth && {
          alignSelf: 'initial',
        }),
        ...styleSheet,
      }}
    >
      {children}
    </ButtonBase>
  );
}

Button.defaultProps ={
  fullWidth: false,
  size: 'md',
  variant: 'contained',
  colorVariant: 'positive',
}

Button.Base = ButtonBase;
