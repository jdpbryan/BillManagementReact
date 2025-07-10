import QueryPanel from './components/Query/QueryPanel';
import Header from './components/Header';
import BillSummary from './components/BillSummary';
import './App.css';
import { Button, Drawer, Space } from 'antd';
import React, { useState } from 'react';

function App() {
  const [open, setOpen] = useState(false);
  
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const onQuery = (query) => {
    console.log(query);
    onClose();
  }
  return (
    <div className="App">
      <Header></Header>
      <div style={{display:'flex',alignItems: 'left', marginTop: 16, marginLeft: 16}}>
        <Button type="primary" onClick={showDrawer}>
          Open
        </Button>
      </div>
      
      <Drawer
        title="Bill Query"
        placement="left"
        closable={false}
        onClose={onClose}
        open={open}
        key="left"
      >
        <QueryPanel onQuery={onQuery}></QueryPanel>
      </Drawer>
      <div className="Billsummary">
        <BillSummary></BillSummary>
      </div>
    </div>
  );
}

export default App;
