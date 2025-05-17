
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { FaUpload } from 'react-icons/fa';
import 'react-toastify/dist/ReactToastify.css';
import './PaymentPage.css'; // Create this for custom styles

const plans = [
  { id: 1, title: 'Plan 1 - 6 days', price: '₹200', label: '/ class', description: 'Learn basics in a short 6-day trial.', bg: '#fff' },
  { id: 2, title: 'Plan 2 - 2 weeks', price: '₹3,000', label: '/ 6 classes', description: 'Learn basics in a long 2-week trial.', bg: '#ffefcc' },
  { id: 3, title: 'Plan 3 - 6 week', price: '₹200', label: '/ class', description: 'Learn basics in a 6-week plan.', bg: '#fff' },
  { id: 4, title: 'Plan 1st week', price: 'Free', label: '/ class', description: 'Learn basics in a free 1st week.', bg: '#fff' },
];

const PaymentPage = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [transactionId, setTransactionId] = useState('');
  const [screenshot, setScreenshot] = useState(null);

  const handleFileUpload = (e) => {
    setScreenshot(e.target.files[0]);
    toast.success('Screenshot uploaded');
  };

  const handleSubmit = () => {
    if (!selectedPlan || !transactionId || !screenshot) {
      toast.error('Please complete all fields');
      return;
    }
    toast.success('Payment submitted successfully');
  };

  return (
    <div className="container">
      <h2>Registration payment</h2>

      <div className="banner"> Congratulations! You have unlocked the <span className="highlight">Early bird Offer!</span></div>

      <h4>Select a suitable plan:</h4>
      <div className="plan-wrapper">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`plan-card ${selectedPlan === plan.id ? 'selected' : ''}`}
            style={{ backgroundColor: plan.bg }}
            onClick={() => setSelectedPlan(plan.id)}
          >
            <h3>{plan.price}<span>{plan.label}</span></h3>
            <strong>{plan.title}</strong>
            <p>{plan.description}</p>
          </div>
        ))}
      </div>

      <div className="payment-info">
        <div className="instructions">
          <h4>How to pay:</h4>
          <ol>
            <li>Scan QR code or pay using UPI ID: <strong>3782941805@sbi</strong></li>
            <li>Amount to pay: <strong>₹600</strong></li>
            <li>Take a screenshot of your payment confirmation</li>
            <li>Upload the screenshot below</li>
          </ol>
        </div>
        <div className="qr">
          <img src="https://api.qrserver.com/v1/create-qr-code/?data=upi://pay?pa=3782941805@sbi&pn=Receiver&am=600" alt="QR Code" />
        </div>
      </div>

      <label>Enter transaction ID</label>
      <input
        className="input"
        type="text"
        placeholder="Enter transaction ID"
        value={transactionId}
        onChange={(e) => setTransactionId(e.target.value)}
      />

      <label>Payment confirmation</label>
      <p>Complete your registration by making the payment</p>
      <div className="upload-box" onClick={() => document.getElementById('fileInput').click()}>
        <FaUpload size={30} />
        <p>Upload payment screenshot</p>
        <input
          type="file"
          id="fileInput"
          style={{ display: 'none' }}
          onChange={handleFileUpload}
        />
      </div>

      <button className="submit-btn" onClick={handleSubmit}>Finish payment</button>
      <ToastContainer />
    </div>
  );
};

export default PaymentPage;
