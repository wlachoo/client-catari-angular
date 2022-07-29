import React, { useState, useEffect } from "react";

import { ServiceStudents } from '../service/ServiceStudents';

export const ServiceDataManagement = () => {

    const [data, setData] = useState(null); // data de la api rest
    const [average, setAverage] = useState(null); 
    const [grades, setGrades] = useState(null); 

    const data2 = [ { ID: "1", active: true, grades: 3.1, Name: "Senpai", Gender: "1" } ] 


    useEffect(() => {
        const serviceApi = new ServiceStudents();
        /*** se carga la data de la api */
        serviceApi.getService().then(data =>{
          setAverage(data.promedio)
          setData(data) 
        });
    
    }, []);

    /* Con esta funcion agrupamos la data en una funcion */
    const getDataPerPage = () => {
        let dataAux = data ? data.students : data2;
        return dataAux;
    };


    return {
        data,
        setData,
        getDataPerPage,
        average,
        setGrades,
        grades
    }
}