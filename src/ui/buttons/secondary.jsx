import { BaseButton } from ".";

export const SecondaryButton = ({
  children,
  border,
  color,
  type,
  height,
  disabled = false,
  ...rest
}) => {
  const disabledFeatures = {
    cursor: disabled ? "not-allowed" : "pointer",
    backgroundColor: disabled ? "#D1D1D1" : "transparent",
  };
  return (
    <BaseButton
      style={disabledFeatures}
      disabled={disabled}
      type={type}
      color={color}
      height={height}
      border={border}
      {...rest}
    >
      {children}
    </BaseButton>
  );
};
