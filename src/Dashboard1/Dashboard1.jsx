import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import './Dashboard1.css';
import Navbar from '../NavBarAndFooter/navbar.jsx';
import ReasonForRejecting from '../ReasonForRejecting/ReasonForRejecting.jsx'; // Import the component

const Dashboard1 = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const [isRejectPopupOpen, setIsRejectPopupOpen] = useState(false); // Popup state

  const onSubmit = (data) => {
    console.log(data);
  };

  // Handle "Approve" button click
  const handleApprove = () => {
    navigate("/dashboard2"); // Redirect to Dashboard2
  };

  const handleReject = () => {
    setIsRejectPopupOpen(true); // Open the reject popup
  };

  const closeRejectPopup = () => {
    setIsRejectPopupOpen(false); // Close the reject popup
  };

  return (
    <div>
      <Navbar />
      <h1 style={{ textAlign: 'left', marginLeft: '40px' }}>Cash Advance Amount Records</h1>
      
      {/* Left Side */}
      <div className="dashboard-container">
        <div className="dashboard-left">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="dashboard-group">
              <label htmlFor="liquidationId">Cash Advance ID:</label>
              <input disabled={true} className="dashBoardInput" id="liquidationId" type="text" {...register("liquidationId")} placeholder="1000" readOnly />
            </div>

            <div className="dashboard-group">
              <label htmlFor="accountName">Account Name:</label>
              <input disabled={true} className="dashBoardInput" id="accountName" type="text" {...register("accountName")} defaultValue="John Doe" readOnly />
            </div>
          </form>
        </div>

        {/* Right Side */}
        <div className="dashboard-right">
          <div className="dashboard-group">
            <label htmlFor="cashAdvAmount">Cash Advance Amount:</label>
            <input className="dashBoardInput" id="cashAdvAmount" type="number" {...register("cashAdvAmount")} placeholder="Enter cash advance amount here" />
          </div>
        </div>
      </div>

      <div className="content">
        <div className="tables">
          <Section
            columns={[
              "Liquidation ID",
              "Cash Advance ID",
              "Account Name",
              "Cash Advance Amount",
            ]}
          />
        </div>
      </div>
      <div className="dashboard-buttons">
        <button type="button" className="btn">Set Amount</button>
        <button type="button" className="btn">Edit Amount</button>
        <button type="button" className="btn reject" onClick={handleReject}>Reject</button>
        <button type="button" className="btn approve" onClick={handleApprove}>Approve</button>
      </div>

      {/* Conditionally render the Reject Popup */}
      {isRejectPopupOpen && (
        <div className="popup-overlay">
          <div className="popup-content">
            <ReasonForRejecting onCancel={closeRejectPopup} /> {/* Pass the closeRejectPopup function here */}
          </div>
        </div>
      )}
    </div>
  );
};

// Section component for displaying table
const Section = ({ title, columns }) => (
  <div className="section">
    <div className="section-header">
      <h3>{title}</h3>
      <Legend />
    </div>
    <table>
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={index}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          {columns.map((_, index) => (
            <td key={index}></td>
          ))}
        </tr>
      </tbody>
    </table>
  </div>
);

// Legend for status indicators
const Legend = () => (
  <div className="legend">
    <span className="legend-item open">Open</span>
    <span className="legend-item closed-approved">Closed (Approved)</span>
    <span className="legend-item closed-declined">Closed (Declined)</span>
  </div>
);

export default Dashboard1;
