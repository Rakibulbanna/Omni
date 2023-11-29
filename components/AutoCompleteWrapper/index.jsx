
import { Autocomplete, Grid, TextField } from "@mui/material"

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
export const TextFieldWrapper = ({ label, name, value, type = "string", touched, errors, handleChange, handleBlur, required = false, disabled = false, ...params }) => {
  return (
    <Grid item container pb={1}>
      <TextField
        size='small'
        sx={{
          [`& fieldset`]: {
            borderRadius: 0.6,
          }
        }}
        id="outlined-basic"
        label={label}
        variant="outlined"
        type={type}
        error={Boolean(touched && errors)}
        fullWidth
        helperText={touched && errors}
        name={name}
        placeholder={`${name} here...`}
        onBlur={handleBlur}
        onChange={handleChange}
        value={value}
        required={required}
        disabled={disabled}
        {...params}
      />
    </Grid>
  );
};