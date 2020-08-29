import React from 'react'
import MUIDataTable from "mui-datatables";

const GridTable = ({ gridTableData }) => {

    const columns = [
        {
            name: "Country",
            label: "Country",
            options: {
                filter: false,
                sort: true,
            }
        },
        {
            name: "TotalConfirmed",
            label: "Total Infections",
            options: {
                filter: false,
                sort: true,
            }
        },
        {
            name: "TotalRecovered",
            label: "Total Recovered",
            options: {
                filter: false,
                sort: true,
            }
        },
        {
            name: "TotalDeaths",
            label: "Total Deaths",
            options: {
                filter: false,
                sort: true,
            }
        },
    ];

    const options = {
        filterType: 'checkbox',
        selectableRows: 'none',
        filter: false,
        rowsPerPage: 10,
        tableBodyHeight: '96vh'
    };


    return (
        <MUIDataTable
            title={"Countries Summary"}
            data={gridTableData}
            columns={columns}
            options={options}
        />
    )
}

export default GridTable
