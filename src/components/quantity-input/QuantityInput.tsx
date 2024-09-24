import React from 'react';
import { StyledQuantityInput, ControlIcon, NumberInput } from './QuantityInput.styled';

export interface IQuantityInputProps {
  value: number;
  onChange: (value: number) => void;
}

export default function QuantityInput(props: IQuantityInputProps) {
  const { value, onChange } = props;

  const handleIconClick = (op: number) =>
    onChange(value + op);

  const handleOnChange = (value: string) => {
    onChange(parseInt(value, 10));
  };

  return (
    <StyledQuantityInput>
      <ControlIcon onClick={() => handleIconClick(-1)} src={'/assets/images/minus-icon.svg'} />
      <NumberInput onChange={e => handleOnChange(e.target.value)} type={'number'} value={value} />
      <ControlIcon onClick={() => handleIconClick(1)} src={'/assets/images/plus-icon.svg'} />
    </StyledQuantityInput>
  )
}
