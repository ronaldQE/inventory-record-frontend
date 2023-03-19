import React, {useState, useEffect} from 'react'
import TableAdmin from '../../components/table/TableAdmin'
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import SelectFilter from '../../components/select/SelectFilter';
import ModalRegisterForm from '../../components/modals/ModalRegisterForm';
import DateInput from '../../components/date-input/DateInput';
import service from '../../service/employee.service';



const AdministratorHome = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [employeeList,setEmployeeList] = useState([]);

  const selectVaccineState = ['Vacunado', 'No Vacunado'];
  const selectVaccineType = ['Sputnik', 'AstraZeneca', 'Pfizer', 'Jhonson&Jhonson'];
  useEffect(()=>{
    getList();
  },[])

  const getList = async ()=>{
    const list = await service.getList();
    setEmployeeList(list)

  }

  return (
    <div style={{ paddingInline: "40px" }}>
      <h1>Registro de Empleados</h1>
      <br></br>
      <br></br>
      <Grid container spacing={5}>
        <Grid sx={{ display: 'flex', alignItems: 'center', paddingLeft: 4 }} align='left' xs={5}>
          <SelectFilter dataSelect={selectVaccineState} title={'Estado de Vacuna'} />
          <SelectFilter dataSelect={selectVaccineType} title={'Tipo de Vacuna'} />
        </Grid>
        <Grid sx={{ display: 'flex', alignItems: 'center', paddingLeft: 4 }} align='left' xs={5}>
          <DateInput title={'Fecha Inicio'} />
          <DateInput title={'Fecha Fin'}/>
        </Grid>


        <Grid sx={{ paddingTop: 1.2 }} align='right' xs={2}>
          <Button variant="contained" onClick={handleOpen}>Nuevo</Button>
        </Grid>
      </Grid>
      <TableAdmin rows ={employeeList} getList={getList}/>
      <ModalRegisterForm handleClose={handleClose} open={open} isNew={true} />

    </div>
  )
}

export default AdministratorHome