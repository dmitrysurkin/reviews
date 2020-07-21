import React from 'react';
import { Modal } from 'antd';

const CustomModal = ({ classes, title, children, ...props }) => {
    const modalTitle = <div className={classes.title}>{title}</div>

    return (
        <Modal
          footer={null}
          title={modalTitle}
          {...props}
        >
            {children}
        </Modal>
    );
};

export default CustomModal;