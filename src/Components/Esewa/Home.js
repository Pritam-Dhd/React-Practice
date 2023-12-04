import React, { useState, useEffect } from "react";
import CryptoJS from "crypto-js";

const Home = () => {
  const [signature, setSignature] = useState("");

  useEffect(() => {
    const generateSignature = () => {
      const dataToSign =
        "total_amount=110,transaction_uuid=11das-y43-32482,product_code=EPAYTEST";
      const secretKey = "8gBm/:&EnhH.1/q";

      const hash = CryptoJS.HmacSHA256(dataToSign, secretKey);
      const hashInBase64 = CryptoJS.enc.Base64.stringify(hash);

      setSignature(hashInBase64);
    };

    generateSignature();
  }, []);

  return (
    <body>
      <form
        action="https://rc-epay.esewa.com.np/api/epay/main/v2/form"
        method="POST"
      >
        <input type="text" id="amount" name="amount" value="100" required />
        <input type="text" id="tax_amount" name="tax_amount" value="10" required />
        <input type="text" id="total_amount" name="total_amount" value="110" required />
        <input type="text" id="transaction_uuid" name="transaction_uuid" value="11das-y43-32482" required />
        <input type="text" id="product_code" name="product_code" value="EPAYTEST" required />
        <input type="text" id="product_service_charge" name="product_service_charge" value="0" required />
        <input type="text" id="product_delivery_charge" name="product_delivery_charge" value="0" required />
        <input type="text" id="success_url" name="success_url" value="http://localhost:3000/success" required />
        <input type="text" id="failure_url" name="failure_url" value="http://localhost:3000/failed" required />
        <input type="text" id="signed_field_names" name="signed_field_names" value="total_amount,transaction_uuid,product_code" required />
        <input type="text" id="signature" name="signature" value={signature} required />
        <input value="Submit" type="submit" />
      </form>
    </body>
  );
};

export default Home;
