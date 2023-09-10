import { Grid } from '@mui/material'
import Input from '../components/formik/Input';

export const LoopOnInputs = (props) =>
{
    const { inputs, disabled } = props;
    return (
        <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3, xl: 3 }}
            mb={2}
        >
            {inputs.map(({ name, gridColumn, ...input }) => (
                <Grid
                    item
                    xs={gridColumn ? gridColumn : 12}
                    key={name}
                >
                    <Input
                        name={name}
                        disabled={disabled}
                        {...input}
                    />
                </Grid>
            ))}
        </Grid>
    )
}
