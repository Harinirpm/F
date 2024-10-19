import React from "react";
import { Box, Typography, Button, IconButton, Divider } from "@mui/material";
import Payment from "./PaymentDetails/Payment";
const PaymentSummary = () => {
  return (
    <Box sx={{ padding: "20px", borderRadius: "8px", margin: "0 auto" }}>
      <Payment />
      
    </Box>
  );
};

export default PaymentSummary;
