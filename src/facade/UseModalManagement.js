import React, { useState, useEffect } from "react";

export const UseModalManagement = () => {
    const [modal, setIsOpen] = React.useState(false); // abrir y cerrar modal detalle grades student

    const openModal = async () => {
        setIsOpen(true)
    }

    const closeModal = async () => {
        setIsOpen(false)
    }


    return {
        openModal,
        closeModal,
        modal
    }
}