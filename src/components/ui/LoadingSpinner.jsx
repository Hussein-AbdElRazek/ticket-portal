import { Box, CircularProgress } from '@mui/material'
import React from 'react'

const LoadingSpinner = () =>
{
    return (
        <Box sx={{ width: "100%", textAlign: "center", my:2 }}><CircularProgress /></Box>
    )
}

export default LoadingSpinner