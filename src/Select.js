import React from 'react'

function Select(props) {
    let {choice1, choice2, list, selectFn} = props
    let listMap = list.map(l => {
        if(l !== choice1 && l !== choice2) {
            return(
                <option value={l}>{l}</option>
            )
        }
    })
    return (
        <select onChange={selectFn}>
            <option value=''>Select One</option>
            {listMap}
        </select>
    )
}

export default Select