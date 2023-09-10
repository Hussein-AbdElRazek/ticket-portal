import { Box } from '@mui/material'
import React from 'react'

const SignInUpCard = ({children}) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center"
      }}
    >
      {children}
    </Box>
  )
}

export default SignInUpCard