import styled from "styled-components";
import { useState } from "react";
export const TextField = ({
  type = "text",
  width,
  placeholder,
  value,
  onChange = () => {},
  p,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const activeColor = "#000000";
  return (
    <div>
      <Input
        style={{ color: `${isFocused ? activeColor : "#D1D1D1"}` }}
        width={width}
        type={type}
        placeholder={placeholder}
        value={value}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={(e) => onChange(e.target.value, e)}
      />
    </div>
  );
};

const Input = styled.input`
  width: ${({ width }) => `${width}px`};
  height: 56px;
  padding: 10px 15px;
  border: 1px solid grey;
  border-radius: 4px;
`;
