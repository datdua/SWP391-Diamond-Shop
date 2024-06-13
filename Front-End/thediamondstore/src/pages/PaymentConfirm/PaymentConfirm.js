import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function PaymentConfirm() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    // Get the values of the query parameters
    const vnp_BankCode = queryParams.get('vnp_BankCode');
    const vnp_BankTranNo = queryParams.get('vnp_BankTranNo');
    const vnp_OrderInfo = queryParams.get('vnp_OrderInfo');
    const vnp_ResponseCode = queryParams.get('vnp_ResponseCode');

    // Your base API URL
    let apiUrl = "http://localhost:8080/api/payment/vnpay_return";

    // Append the query parameters to the API URL
    apiUrl += `?vnp_BankCode=${vnp_BankCode}&vnp_BankTranNo=${vnp_BankTranNo}&vnp_OrderInfo=${vnp_OrderInfo}&vnp_ResponseCode=${vnp_ResponseCode}`;

    const [data, setData] = useState(null);
    const [showNotification, setShowNotification] = useState(false);

    useEffect(() => {
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                // Handle the response data here
                setData(data);
                setShowNotification(true);
            })
            .catch(error => {
                // Handle the error here
                console.error('Error:', error);
            });
    }, []);

    const handleConfirm = () => {
        // Run the API or perform other actions here
        setShowNotification(false);
    };

    return (
        <div>
            {showNotification && (
                <div>
                    <p>Payment received. Please confirm.</p>
                    <button onClick={handleConfirm}>Confirm Payment</button>
                </div>
            )}
        </div>
    );
}

export default PaymentConfirm;