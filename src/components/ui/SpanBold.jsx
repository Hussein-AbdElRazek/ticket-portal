import React from 'react'

const SpanBold = (props) =>
{
    const { children } = props;
    return (
        <span
            style={{
                fontWeight: "bold"
            }}>
            {children}
        </span>
    )
}

export default SpanBold