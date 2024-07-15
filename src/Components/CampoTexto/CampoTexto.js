import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { FormControl } from "@mui/material";
import "./CampoTexto.css"

export const CampoTexto = (props) => {

    const { type = "text" } = props

    const manejarCambio = (e) => {
        //console.log("cambio", e.target.value)
        props.actualizarValor(e.target.value)
    }

    return(
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>            
                <TextField
                    className="outlined-basic"
                    label={props.placeholder}
                    variant="outlined"
                    //placeholder={props.placeholder}
                    required={props.required}
                    value={props.valor}
                    type={type}
                    onChange={ manejarCambio }
                    sx={{
                            "& input": {
                                color: 'white',
                            }
                        }}            
                    helperText={props.error ? "Ingresa al menos 5 caracteres" : ""}
                    error={props.error}
                    
                />
            </FormControl>    
        </Box>

    );
}