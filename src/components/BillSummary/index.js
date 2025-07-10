import { AgGridReact } from 'ag-grid-react';
import { useState,useMemo } from 'react';

const BillSummary = ({ totalAmount, totalPaid, totalPending }) => {
    // Row Data: The data to be displayed.
    const [rowData, setRowData] = useState([
        {
            "TopAccount": "topaccount1",
            "SubAccount": "subaccount1",
            "TotalAmount": 100000000000,
            "TotalInUsd": 100000000000,
            "TotalAdjustment": 0,
            "Currency": "USD",
            "Date": "2021-01-01"
        },
        {
            "TopAccount": "topaccount1",
            "SubAccount": "subaccount2",
            "TotalAmount": 200000000000,
            "TotalInUsd": 200000000000,
            "TotalAdjustment": 0,
            "Currency": "EUR",
            "Date": "2021-01-01"
        },
        {
            "TopAccount": "topaccount1",
            "SubAccount": "subaccount3",
            "TotalAmount": -200000000000,
            "TotalInUsd": -200000000000,
            "TotalAdjustment": -100,
            "Currency": "EUR",
            "Date": "2021-01-01"
        },
        {
            "TopAccount": "topaccount2",
            "SubAccount": "subaccount1",
            "TotalAmount": 300000000000,
            "TotalInUsd": 300000000000,
            "TotalAdjustment": 0,
            "Currency": "USD",
            "Date": "2021-01-01"
        },
        {
            "TopAccount": "topaccount2",
            "SubAccount": "subaccount2",
            "TotalAmount": 400000000000,
            "TotalInUsd": 400000000000,
            "TotalAdjustment": 0,
            "Currency": "USD",
            "Date": "2021-01-01"
        },

    ]);

    // Column Definitions: Defines the columns to be displayed.
    const [colDefs, setColDefs] = useState([
        //{ field: "TopAccount", rowGroup: true, hide: true },
        { field: "TopAccount", rowGroup: true, hide: true },
        { field: "SubAccount", headerName: "Sub Account" },
        { field: "TotalAmount", headerName: "Total Amount" },
        { field: "TotalInUsd", headerName: "Total In Usd" },
        { field: "TotalAdjustment", headerName: "Total Adjustment" },
        { field: "Currency", headerName: "Currency" },
        { field: "Date", headerName: "Date" },
    ]);
    const autoGroupColumnDef = useMemo(() => ({
  minWidth: 200,
  cellRenderer: 'agGroupCellRenderer',
  cellRendererParams: {
    suppressCount: true
  },
  valueGetter: params => {
    return params.data ? params.data.TopAccount : null;
  }
}), []);
const defaultColDef = useMemo(() => {
    return {
      flex: 1,
      minWidth: 100,
    };
  }, []);
  return (
    <div style={{ height: 500 }}>
        <AgGridReact
            rowData={rowData}
            columnDefs={colDefs}
            groupDisplayType='singleColumn'
            autoGroupColumnDef={autoGroupColumnDef}
            defaultColDef={defaultColDef}
            rowGroupPanelShow={"always"}
            groupDefaultExpanded={1}
        />
    </div>
  );
};

export default BillSummary;