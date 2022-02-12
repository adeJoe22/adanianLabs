import styled from "styled-components";

const disableOnClick = (event) => (event.currentTarget.disabled = true);

export const BaseButton = ({
  children,
  disabled,
  type = "button",
  color,
  border,
  height,
  onClick = () => {},
  ...rest
}) => {
  return (
    <Button
      disabled={disabled}
      type={type}
      color={color}
      border={border}
      height={height}
      onClick={(e) => !disabled && onClick(e)}
      {...rest}
    >
      {children}
    </Button>
  );
};

const Button = styled.button`
  width: 100%;
  height: ${({ height }) => `${height}px`};
  border-radius: 8px;
  border: ${({ border }) => border};
  color: ${({ color }) => color};
  font-size: 24px;
`;
