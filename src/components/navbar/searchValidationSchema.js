import *  as Yup from 'yup';

export const searchValidationSchema = Yup.object({
    ticketId: Yup.string()
        .required("Required"),
});