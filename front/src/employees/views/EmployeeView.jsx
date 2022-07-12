import React from 'react'
import { Button, Grid, TextField, Typography } from '@mui/material'
import { SaveOutlined } from '@mui/icons-material'

export const EmployeeView = () => {
  return (
   <Grid container direction='row' justifyContent='space-between' alignItems='center' sx={{ mb: 1 }}>
    <Grid item>
      <Typography fontSize={ 39 } fontWeight='light'>11-07-2022</Typography>
    </Grid>
    <Grid item>
      <Button color='primary' sx={{ padding: 2 }}>
        <SaveOutlined sx={{ fontSize: 30, mr:1 }} />
        Guardar
      </Button>
    </Grid>

    <Grid container>
      <TextField 
        type='text'
        variant='filled'
        fullWidth
        placeholder='Ingrese nombre'
        label='Titulo'
        sx={{ border: 'none', mb: 1 }}
      />
      <TextField 
        type='text'
        variant='filled'
        fullWidth
        placeholder='Ingrese nombre'
        label='Titulo'
        sx={{ border: 'none', mb: 1 }}
      />
      <TextField 
        type='text'
        variant='filled'
        fullWidth
        placeholder='Ingrese nombre'
        label='Titulo'
        sx={{ border: 'none', mb: 1 }}
      />
      <TextField 
        type='text'
        variant='filled'
        fullWidth
        placeholder='Ingrese nombre'
        label='Titulo'
        sx={{ border: 'none', mb: 1 }}
      />
      <TextField 
        type='text'
        variant='filled'
        fullWidth
        placeholder='Ingrese nombre'
        label='Titulo'
        sx={{ border: 'none', mb: 1 }}
      />
      <TextField 
        type='text'
        variant='filled'
        fullWidth
        placeholder='Ingrese nombre'
        label='Titulo'
        sx={{ border: 'none', mb: 1 }}
      />
      <TextField 
        type='text'
        variant='filled'
        fullWidth
        placeholder='Ingrese nombre'
        label='Titulo'
        sx={{ border: 'none', mb: 1 }}
      />
      <TextField 
        type='text'
        variant='filled'
        fullWidth
        placeholder='Ingrese nombre'
        label='Titulo'
        sx={{ border: 'none', mb: 1 }}
      />
      <TextField 
        type='text'
        variant='filled'
        fullWidth
        multiline
        placeholder='que sucedio hoy?'
        minRows={ 5 }
      />
    </Grid>
   </Grid>
  )
}
