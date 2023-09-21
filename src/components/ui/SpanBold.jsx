import React from 'react'

const SpanBold = (props) =>
{
    const { children } = props;
    return (
        <span
            style={{
                fontWeight: "bold",
                color:"rgb(202,116,65)"
            }}>
            {children}
        </span>
    )
}

export default SpanBold