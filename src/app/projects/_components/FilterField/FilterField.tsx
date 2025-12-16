'use client'

import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { InputBase, InputLabel, NativeSelect } from '@mui/material';
import { FilterKey } from '../CustomFilter/CustomFilter';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}));

function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight: personName.includes(name)
      ? theme.typography.fontWeightMedium
      : theme.typography.fontWeightRegular,
  };
}
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export const FilterTitle = styled(Typography)(({ theme }) => ({
    fontSize: '16px',
    color: '#181B1A',
    lineHeight: '22px',
    fontWeight: 400,
}));

const StyledFormControl = styled(FormControl)(({ theme }) => ({
    width: '70%!important',
}));

const StyledSelect = styled(Select)(({ theme }) => ({
    padding: '6px 0 6px 0',
    display: 'flex',
    justifyContent: 'space-between',
    borderRadius: '4px',
    color: '#AEB7B4',

}));

interface FilterState {
    specialties: IFilter,
    skills: IFilter,
    subcategories: IFilter,
    industries: IFilter,
}

interface IFilter {
    values: string[];
    filterOperator: string;
}
interface FilterFieldProps {
    filterKey: FilterKey;
    title: string;
    values: string[];
    updateFilterValues: (key: FilterKey, newValues: string[]) => void;
    updateFilterOperators: (key: FilterKey, newOperators: string[]) => void;
    filters: FilterState;
}


export default function FilterField({ filterKey, title, values, updateFilterValues, updateFilterOperators, filters }:FilterFieldProps) {
  const theme = useTheme();
  const handleValueChange = (event: SelectChangeEvent<string[]>) => { // TODO: Fix value change with redux
    console.log("update value");
    const { target: { value } } = event;

    // typeof value === 'string' ? value.split(',') : value

    updateFilterValues(filterKey, typeof value === 'string' ? value.split(',') : value);
  };
  const handleOperatorsChange = (event: SelectChangeEvent<string[]>) => () => {
    console.log("update operator");
    const { target: { value } } = event;

    //typeof value === 'string' ? value.split(',') : value

    updateFilterOperators(filterKey, typeof value === 'string' ? value.split(',') : value);
  }
  const OPERATORS = ['Y', 'O'];
  console.log(values);
  return (
        <Box>
            <FilterTitle id="transition-modal-description" sx={{ mt: 2 }}>
            {title}             
            </FilterTitle>

            <StyledFormControl sx={{ m: 1, width: 300 }} variant="standard">
                <InputLabel id="demo-multiple-chip-label">Chip</InputLabel>
                <StyledSelect
                labelId="demo-multiple-chip-label"
                id="demo-multiple-chip"
                displayEmpty
                multiple
                value={[]}
                onChange={() => {}}
                input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                MenuProps={MenuProps}
                >
                {values.map((value, index) => (
                    <MenuItem
                        key={`${value}-${index}`}
                        value={value}
                        style={getStyles(value, values, theme)}
                        >
                        {value}
                    </MenuItem>
                ))}
                </StyledSelect>
            </StyledFormControl>
            <FormControl sx={{ m: 1 }} variant="standard">
                <InputLabel id="demo-customized-select-label">Age</InputLabel>
                <StyledSelect
                labelId="demo-customized-select-label"
                id="demo-customized-select"
                displayEmpty
                value={OPERATORS}
                onChange={() => {}}
                input={<BootstrapInput />}
                >
                {OPERATORS.map((value, index) => (
                    <MenuItem
                        key={`${value}-${index}`}
                        value={value}
                        style={getStyles(value, values, theme)}
                        >
                        {value}
                    </MenuItem>
                ))}
                </StyledSelect>
            </FormControl>
        </Box>
  );
}