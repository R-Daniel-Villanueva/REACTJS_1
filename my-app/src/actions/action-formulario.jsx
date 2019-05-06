import React, { Component } from 'react';

export const actionSendData = data => (//seimpre se usan dos variables
   dispatch => {//aqui dentro de consume el servicio
       console.log("action Formulario");
       console.log('DATA',data);
       dispatch(actionSendDataFulfilled(data));
   });

export const actionSendDataFulfilled = data => (
   { type: 'SEND_DATA_FORM', payload: data }
);