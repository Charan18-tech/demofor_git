import React, { useState } from 'react'
import { Modal, Button } from 'antd'
const Component4 = () => {
    const [isModalOpen, setisModalOpen]= useState(false);
    const showModal = ()=>{
        setisModalOpen(true);
    }
    const handleCancel = () => {
        setisModalOpen(false);
      }
  return (
    <>
    <div style={{textAlign:"center"}}>
    <h3>Do you want to Add Photo</h3>
    <div style={{display:"flex", gap:"20px", justifyContent:"center", alignItems:"center"}}>
    <Button type='primary' onClick={showModal}>YES</Button>
    <Button type='primary'>NO</Button>
    </div>
    </div>
    <Modal title="Basic Modal" style={{textAlign:"center"}} open={isModalOpen} footer={null} onCancel={handleCancel}>

    </Modal>
    </>
  )
}

export default Component4