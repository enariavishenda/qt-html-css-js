import React from "react";

import ListItem from "./list-item";

const DataListMap = ({data, setClick, setHover, setHoverLeave, setDisable}) => {

    const elementsData = data.map((item) => {
        const {id, ...itemProps} = item

        return (
            <div key={id}>
                <ListItem
                    {...itemProps}
                    setMapClick={() => setClick(id)}
                    setMapHover={() => setHover(id)}
                    setMapHoverLeave={() => setHoverLeave(id)}
                    setMapDisable={() => setDisable(id)}
                />
            </div>
        )
    })

    return elementsData
}

export default DataListMap