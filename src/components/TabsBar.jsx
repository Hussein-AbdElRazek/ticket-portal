import { useState } from "react";
import { Tabs, Tab } from "@mui/material";
import { NavLink } from "react-router-dom";

function TabsBar(props)
{

    const { tabs, tabsMap } = props
    let url = window.location.pathname;
    const [value, setValue] = useState(tabsMap[url] || 0);
    const handleChange = (event, newValue) =>
    {
        setValue(newValue);
    };
    console.log("url",url)
    return (
            <Tabs
                value={value}
                onChange={handleChange}
                textColor="primary"
                // TabIndicatorProps={{ style: { background: "#374E9A" } }}
                // sx={{
                //     "& a": {
                //         fontFamily: "Bell MT",
                //         textTransform: "none",
                //         fontSize: "17px",
                //         fontWeight: "bold",
                //         padding: "0 5px",
                //         margin: "0px 10px 0 0",
                //         background: "none !important",
                //         minWidth: "0px"
                //     },
                // }}
            >
                {tabs.map((tab) =>
                {
                    return (
                        <Tab
                            value={tab.value}
                            label={tab.label}
                            key={tab.value}
                            component={NavLink}
                            to={tab.to}
                        />
                    );
                })}
            </Tabs>
    );
}

export default TabsBar;
