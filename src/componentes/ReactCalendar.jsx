import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const MAX_DATE = new Date("12-31-2023");
const MIN_DATE = new Date("01-01-2023");

export default function ReactCalendar({ eventos, setEventosDelDia  }) {
  //console.log(eventos);


  const handleSelect = (fechaISO) => {
    // Crear un objeto Date a partir de la cadena
    const fecha = new Date(fechaISO);
    // Obtener el mes (los meses en JavaScript van de 0 a 11, por lo que se suma 1 para obtener el mes real)
    const mes = fecha.getMonth() + 1;

    // Obtener el día
    const dia = fecha.getDate();
    console.log("Mes:", mes);
    console.log("Día:", dia);
    filtrarEventoPordia(dia, mes);

  };

  const filtrarEventoPordia = (dia, mes ) => {
    // Filtrar los eventos que coincidan con la fecha seleccionada
    const tmpEventosDelDia = eventos.filter((evento) => {
      const fechaEvento = new Date(evento.fecha);
      return (
        fechaEvento.getDate() === dia && fechaEvento.getMonth() + 1 === mes
      );
    });

   setEventosDelDia(tmpEventosDelDia);
  };

  return (
    <Calendar
      locale="es"
      maxDate={MAX_DATE}
      minDate={MIN_DATE}
      maxDetail="month"
      minDetail="year"
      prevAriaLabel="Previo"
      nextAriaLabel="Siguiente"
      prev2Label=""
      next2Label=""
      //onChange={handleSelect}
      onClickDay={handleSelect}
      calendarType="gregory"
    />
  );
}
