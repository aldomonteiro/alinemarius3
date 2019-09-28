import React from 'react';
import { ToastContainer } from 'react-toastify';

const TopToast = () => (
  <ToastContainer
    position="top-right"
    autoClose={false}
    newestOnTop={false}
    closeOnClick
    closeButton={false}
    rtl={false}
    pauseOnVisibilityChange
    draggable
  />);

export default TopToast;