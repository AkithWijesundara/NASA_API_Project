import React from 'react'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function Filter({value, onChange}) {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker label="Filter By Date" value={value} onChange={onChange} sx={{
    '& .MuiInputBase-root': {
      color: 'white',
      borderColor: 'white',
      border: '1px solid',
    },
    '& .MuiIconButton-root': {
      color: 'white',
      
    },
  }}/>
      </DemoContainer>
    </LocalizationProvider>
    </>
  )
}
