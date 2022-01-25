import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";



export const RowRadioButtonsGroup = () => {
    return (
        <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">Purchasing technology</FormLabel>
            <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                defaultValue="A"
                name="row-radio-buttons-group"
            >

                <input type="radio" style={{border: "1px solid #E6E8EA",
                    boxSizing: "border-box", width: 28, height: 28, color:"#EE950F"}} />
                <FormControlLabel value="A"  control={<Radio/>} label="A"/>
                <FormControlLabel value="S" control={<Radio/>} label="S"/>
                <FormControlLabel value="D" control={<Radio/>} label="D"/>
                <FormControlLabel value="F" control={<Radio/>} label="F"
                />
            </RadioGroup>
        </FormControl>
    );
}
