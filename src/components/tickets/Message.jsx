import { Box } from '@mui/material'
import moment from "moment/moment";
import SpanBold from '../ui/SpanBold';

const Message = (props) =>
{
    const { type, message, createdAt, ticketId } = props;
    const createdAtAfterFormat = moment(new Date(createdAt)).format("hh:mm A DD/MM/YYYY");

    return (
        <Box
            sx={{
                backgroundColor: type === "send" ? "#006cf9" : "#f2f2f2",
                color: type === "send" ? "white" : "black",
                borderRadius: "10px",
                borderTopRightRadius: type === "send" ? 0 : "10px",
                borderTopLeftRadius: type === "send" ? "10px" : 0,
                padding: "10px",
                paddingBottom: "30px",
                margin: "20px",
                marginBottom: "0px",
                float: type === "send" ? "right" : "left",
                clear: "both",
                maxWidth: "50%",
                minWidth: "200px",
                position: "relative",
                fontSize: "16px"
            }}
        >
            {type === "send" ? (
                <>
                    <span
                        style={{
                            width: 0,
                            height: 0,
                            position: "absolute",
                            border: " 10px solid transparent",
                            borderBottom: 0,
                            borderLeft: 0,
                            borderTop: "10px solid #006cf9",
                            top: 0,
                            right: "-10px",
                        }}
                    />
                    <span>
                        <SpanBold>Ticket ID: </SpanBold>#{ticketId}
                    </span>
                    <div><SpanBold>Ticket content: </SpanBold></div>
                </>
            )
                : (
                    <>
                        <span
                            style={{
                                width: 0,
                                height: 0,
                                position: "absolute",
                                border: " 10px solid transparent",
                                borderBottom: 0,
                                borderRight: 0,
                                borderTop: "10px solid #f2f2f2",
                                top: 0,
                                left: "-10px"
                            }}
                        />
                        <div><SpanBold> Reply on ticket:</SpanBold> </div>
                    </>
                )}
            {message}
            <span
                style={{
                    position: "absolute",
                    bottom: "5px",
                    right: "8px",
                    fontSize: "12px",

                }}
            >
                {createdAtAfterFormat}
            </span>
        </Box>
    )
}

export default Message