import { Box, CircularProgress, IconButton, InputBase,  } from '@mui/material'
import React from 'react'
import { Field, Form, Formik } from 'formik'
import { SearchOutlined } from '@mui/icons-material'
import { searchValidationSchema } from './searchValidationSchema'

const SearchBar = (props) =>
{
    const { handleSearch, isLoadingSearch } = props;
    return (
        <Box

            sx={{
                border: "1px solid black",
                borderRadius: 1,
                position: "relative",
                display: "flex",
                alignItems: "center",
                "@media (max-width:540px)": {
                    display: "none"
                },
                paddingLeft:1
            }}>
            <Formik
                initialValues={{ ticketId: "" }}
                validationSchema={searchValidationSchema}
                onSubmit={handleSearch}
            >
                {(formik) =>
                    <Form >
                        <Field name="ticketId">
                            {({ field }) => (
                                <InputBase
                                    name="ticketId"
                                    placeholder="Search with ticket id..."
                                    sx={{
                                        width: 180,
                                    }}
                                    {...field}
                                />
                            )}
                        </Field>

                        <IconButton disabled={isLoadingSearch} type="submit" color="primary" >
                            {isLoadingSearch ?
                                (<CircularProgress size={24} />)
                                :
                                (<SearchOutlined />)
                            }
                        </IconButton>
                    </Form>
                }
            </Formik>
        </Box>
    )
}

export default SearchBar