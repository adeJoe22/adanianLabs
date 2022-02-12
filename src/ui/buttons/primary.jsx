import { BaseButton } from ".";

export const PrimaryButton = ({
  children,
  border,
  color,
  type,
  height,
  disabled,
  ...rest
}) => {
  const disabledFeatures = {
    cursor: disabled ? "not-allowed" : "pointer",
    backgroundColor: disabled ? "#D1D1D1" : "#f39712",
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
