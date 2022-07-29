import React, { useState, useEffect } from "react";

/* MODALES */
import { DetailStudent } from "../components/Modales/DetailStudent";


/* FACADE PATTERN */
import { ServiceDataManagement } from '../facade/ServiceDataManagement';
import { UseModalManagement } from '../facade/UseModalManagement';


export const Students = () => {

  const {
    data,
    setData,
    getDataPerPage,
    average,
    grades,
    setGrades

  } = ServiceDataManagement();

  const {
    openModal,
    closeModal,
    modal

  } = UseModalManagement();

  const open = (grades) => {
    openModal()
    setGrades(grades)
  };

  return (
    
    <>
        <div className="min-h-screen bg-gray-800 py-5">
            <div className='overflow-x-auto w-full'>
                <table className='mx-auto max-w-4xl w-full whitespace-nowrap rounded-lg bg-white divide-y divide-gray-300 overflow-hidden'>
                    <thead className="bg-gray-900">
                        <tr className="text-white text-left">
                            <th className="font-semibold text-sm uppercase px-6 py-4"> ID </th>
                            <th className="font-semibold text-sm uppercase px-6 py-4"> Accessory </th>
                            <th className="font-semibold text-sm uppercase px-6 py-4 text-center"> BreastSize </th>
                            <th className="font-semibold text-sm uppercase px-6 py-4 text-center"> className </th>
                            <th className="font-semibold text-sm uppercase px-6 py-4"> Club </th>
                            <th className="font-semibold text-sm uppercase px-6 py-4"> Crush </th>
                            <th className="font-semibold text-sm uppercase px-6 py-4"> Gender </th>
                            <th className="font-semibold text-sm uppercase px-6 py-4"> Hairstyle </th>
                            <th className="font-semibold text-sm uppercase px-6 py-4"> Name </th>
                            <th className="font-semibold text-sm uppercase px-6 py-4"> Average </th>
                            <th className="font-semibold text-sm uppercase px-6 py-4"> DETAIL</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                    {getDataPerPage().map((row,key) => (
                        <tr key={key}>
                            <td className="px-6 py-4">
                                <p style={{color:`${row.Color}`}}> {row.ID} </p>
                            </td>
                            <td className="px-6 py-4">
                                <p style={{color:`${row.Color}`}}> {row.Accessory} </p>
                            </td>
                            <td className="px-6 py-4 text-center">
                                <p style={{color:`${row.Color}`}}> {row.BreastSize} </p>
                            </td>
                            <td className="px-6 py-4 text-center">
                                    <p style={{color:`${row.Color}`}}> {row.className} </p>
                            </td>
                            <td className="px-6 py-4 text-center">
                                <p style={{color:`${row.Color}`}}> {row.Club} </p>
                            </td>
                            <td className="px-6 py-4 text-center">
                                <p style={{color:`${row.Color}`}}> {row.Crush} </p>
                            </td>
                            <td className="px-6 py-4 text-center">
                                <p style={{color:`${row.Color}`}}> {row.Gender} </p>
                            </td>
                            <td className="px-6 py-4 text-center">
                                <p style={{color:`${row.Color}`}}> {row.Hairstyle} </p>
                            </td>
                            <td className="px-6 py-4 text-center">
                                <p style={{color:`${row.Color}`}}> {row.Name} </p>
                            </td>
                            <td className="px-6 py-4 text-center">
                                <p style={{color:`${row.Color}`}}> {average} </p>
                            </td>
                            <td >
                                <span onClick={() => open(row.grades)} className="cursor-pointer text-white text-sm w-1/3 pb-1 bg-green-600 font-semibold px-2 rounded-full"> detail </span>
                            </td>
                        </tr>
                 
                    ))}
                    </tbody>
                </table>
            </div>
        </div>

      {/*Area de Modales*/}
      <DetailStudent grades={grades} modalIsOpen={modal} closeModal={closeModal} />
    </>
  );
};


