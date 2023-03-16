import React, { useState } from 'react'
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';

const SelectFilter = ({dataSelect, title}) => {
    const [data, setData] = useState('');
    const handleChange = (event) => {
        setData(event.target.value);
    };
    return (
        <div>
            <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
                <InputLabel id="demo-select-small">{title}</InputLabel>
                <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={data}
                    label={title}
                    onChange={handleChange}
                >
                    {
                        dataSelect.map((select, index) => (
                            <MenuItem value={index}>{select}</MenuItem>
                        )
                        )
                    }
                </Select>
            </FormControl>
        </div>
    )
}
export default SelectFilter;