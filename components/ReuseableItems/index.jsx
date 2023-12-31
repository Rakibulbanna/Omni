
import { Autocomplete, Grid, TextField } from "@mui/material"
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const AutoCompleteWrapper = ({ minWidth = null, required = false, options, value, handleChange, label, placeholder, ...params }) => {

  return (
    <Grid item pb={1} sx={
      minWidth && {
        minWidth
      }
    }
    >
      <Autocomplete
        fullWidth
        {...params}
        size='small'
        id="tags-outlined"
        options={options}
        value={value}
        filterSelectedOptions
        renderInput={(rnParams) => (
          <TextField
            size="small"
            fullWidth
            required={required}
            {...rnParams}
            label={label}
            placeholder={placeholder}
          />
        )}
        onChange={handleChange}
      />
    </Grid>
  )
}
export const CustomizedSnackbars = ({open,handleClose}) => {
  return (

    <Stack spacing={2} sx={{ width: '100%' }}>

      <Snackbar open={open ? true : false} autoHideDuration={2000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
        {
          open?.massage &&  open?.varient && <Alert onClose={handleClose} severity={`${open?.varient}`} sx={{ width: '100%' }}>
          {open?.massage}
        </Alert>
        }
       
      </Snackbar>

    </Stack>

  );
}
