'use client'

import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import FilterIcon from '../Icons/FilterIcon/FilterIcon';
import styled from 'styled-components';
import FilterField from '../FilterField/FilterField';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const FilterButton = styled(Box)(({ theme }) => ({
  color: '#033028',
  padding: '5px',
  borderRadius: '6px',
  fontSize: '12px',
  fontWeight: 400,
  width: 'fit-content',
  marginBottom: '10px',
  display: 'flex',
  alignItems: 'center',
}));

export const ModalTitle = styled(Typography)(({ theme }) => ({
    fontSize: '24px',
}));
export const FilterTitle = styled(Typography)(({ theme }) => ({
    fontSize: '24px',
}));

interface filterData {
    allSubCategories: string[];
    allSkills: string[];
    allCategories: string[];
    allIndustries: string[];
}

interface CustomFilterProps {
    filterData: filterData;
}

type FilterItem = {
  values: string[];
  filterOperator: string;
};

export type FilterKey = "specialties" | "skills" | "subcategories" | "industries";

type FilterState = Record<FilterKey, FilterItem>;

const initialState: FilterState = {
    "specialties": {
        values: [],
        filterOperator: ''
    },
    "skills": {
        values: [],
        filterOperator: '',
    },
    "subcategories": {
        values: [],
        filterOperator: ''
    },
    "industries": {
        values: [],
        filterOperator: ''
    }
  };


export default function CustomFilter ({ filterData }: CustomFilterProps) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [filters, setFilters] = React.useState<FilterState>(initialState);

  const updateFilterValues = (key: FilterKey, newValues: string[]) => {
    // TypeScript now knows 'key' is one of the valid keys, making this access safe
        setFilters(prevFilters => ({
            ...prevFilters,
            [key]: {
            ...prevFilters[key],
            values: newValues,
            }
        }));
    };

      const updateFilterOperators = (key: FilterKey, newOperators: string[]) => {
    // TypeScript now knows 'key' is one of the valid keys, making this access safe
        setFilters(prevFilters => ({
            ...prevFilters,
            [key]: {
            ...prevFilters[key],
            filterOperator: newOperators,
            }
        }));
    };


  const MAP_TITLE_TO_FILTER: { title: string; value: string[], filterKey: FilterKey}[] = [
        {
            "title": "Especialdiades",
            "value": filterData.allSubCategories,
            "filterKey": 'specialties'
        },       
        {
            "title": "Habilidades",
            "value": filterData.allSkills,
            "filterKey": "skills"

        },       
        {
            "title": "Tipo de proyecto",
            "value": filterData.allCategories,
            "filterKey": "subcategories"
        },
        {
            "title": "Industria",
            "value": filterData.allIndustries,
            "filterKey": "industries"
        },
    ]

  return (
    <div>
      <FilterButton onClick={handleOpen}>
        <FilterIcon /> Filtrar
      </FilterButton>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            sx: {
                backdropFilter: "blur(3px)",
                backgroundColor:'rgba(0,0,30,0.4)'
            },
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <ModalTitle id="transition-modal-title" variant="h6">
              Filtrat Proyectos
            </ModalTitle>
            {
                MAP_TITLE_TO_FILTER.map((filter, index) => {
                    return (
                        <FilterField 
                            key={index} 
                            filterKey={filter.filterKey} 
                            title={filter.title} 
                            values={filter.value} 
                            updateFilterValues={updateFilterValues} 
                            updateFilterOperators={updateFilterOperators} 
                            filters={filters}/>
                    )
                })
            }
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}