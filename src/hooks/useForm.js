import { useState } from "react";
import service from '../service/employee.service';
import { toast } from 'react-toastify';


export const useForm = (initialForm, validateForm, handleClose)=>{
    const [form,setForm] = useState(initialForm);
    const [errors,setErrors] = useState({});
    const [loading,setLoading] = useState(false);
    const [response, setResponse] = useState(null);
    
    
    const cleanForm = () =>{
        setForm(initialForm);
    }
    const handleChange=(e)=>{
        const {name,value}= e.target;
        setForm({
            ...form,
            [name]:value
        });
    };
    
    const handleBlur=(e)=>{
        handleChange(e);
        setErrors(validateForm(form));
    };
    const handleSubmit=(e)=>{
        e.preventDefault();
        setErrors(validateForm(form));
        if(Object.keys(errors).length === 0){
            service.saveEmployee(form).then((res)=>{
                toast.success("Registro exitoso");
                setLoading(false);
                setResponse(true);
                cleanForm();
                handleClose();

            }); 
        }else{
            toast.error("Registe el formulario correctamente");
            setResponse(false);
        }
    };

    return{
        form,
        errors,
        loading,
        response,
        handleChange,
        handleBlur,
        handleSubmit,
        cleanForm,
    }


}