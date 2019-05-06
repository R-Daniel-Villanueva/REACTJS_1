import React from 'react';

export const FormTemplate = props => {
 const { handleSubmit, pristine, reset, submitting, submitHandler, closeDialog, fields } = props;//evetos que puede tener
 return (
   <form onSubmit={handleSubmit(submitHandler) }>
       {fields}
   </form>
 );
};