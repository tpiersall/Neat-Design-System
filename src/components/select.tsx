import React, { FC, useState, useCallback, useEffect } from 'react'
import { Select } from 'react-functional-select';
import { Text } from './text'
import { space, typography, color, variant } from 'styled-system'
import { theme } from '../theme'
import styled from 'styled-components'
import css from '@styled-system/css';


export interface SelectInputProps {
  options: any
  isInvalid?: boolean
  isDisabled?: boolean
  isClearable?: boolean
  onOptionChange?: any
  getOptionValue: any
  getOptionLabel: any
  themeConfig?: any
  placeholder?: string
  label?: string
}


export const SelectInput: React.FC<SelectInputProps> = (props) => {
  const [isInvalid, setIsInvalid] = useState<boolean>(props.isInvalid);
  const [isDisabled, setIsDisabled] = useState<boolean>(props.isDisabled);
  const [isClearable, setIsClearable] = useState<boolean>(props.isClearable);


  const getOptionValue = useCallback((option): number => (option.id), []);
  const getOptionLabel = useCallback((option): string => (option.label), []);


  return (
    <>
      <label><Text mt={2} mb={2} size={1} fontWeight={600} color="#000">{props.label}</Text></label>
      <BaseSelect
        {...props}
        label={props.label}
        themeConfig={theme.input}
        options={props.options}
        isInvalid={props.isInvalid}
        isDisabled={props.isDisabled}
        isClearable={props.isClearable}
        onOptionChange={props.onOptionChange}
        getOptionValue={getOptionValue}
        getOptionLabel={getOptionLabel}
        placeholder={props.placeholder}
      >
      </BaseSelect >
    </>
  );
};

const BaseSelect = styled(Select)<SelectInputProps>(
  {}
)





