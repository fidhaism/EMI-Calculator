import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Grid, Paper, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function EmiCalculator() {
  const [principal, setPrincipal] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [tenure, setTenure] = useState('');
  const [emi, setEmi] = useState(0);

  const calculateEmi = () => {
    const p = parseFloat(principal);
    const r = parseFloat(interestRate) / 12 / 100;
    const n = parseFloat(tenure) * 12;
    const emiValue = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    setEmi(emiValue.toFixed(2));
  };

  const resetFields = () => {
    setPrincipal('');
    setInterestRate('');
    setTenure('');
    setEmi(0);
  };

  return (
    <div style={{ backgroundColor: '#f0f0f0', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Container>
        <Paper elevation={3} style={{ padding: '20px', borderRadius: '10px', backgroundColor: '#f5f5f5' }}>
          <Typography variant="h4" align="center" gutterBottom>
            EMI Calculator
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={3}>
              <TextField
                label="Loan Amount (INR)"
                variant="outlined"
                fullWidth
                value={principal}
                onChange={(e) => setPrincipal(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                label="Interest Rate (%)"
                variant="outlined"
                fullWidth
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                label="Loan Tenure (years)"
                variant="outlined"
                fullWidth
                value={tenure}
                onChange={(e) => setTenure(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <Button
                variant="contained"
                fullWidth
                style={{ height: '100%', backgroundColor: '#1976D2', color: '#fff', fontWeight: 'bold' }}
                onClick={calculateEmi}
              >
                Calculate EMI
              </Button>
            </Grid>
            {emi > 0 && (
              <Grid item xs={12}>
                <TextField
                  label="Your EMI"
                  variant="outlined"
                  fullWidth
                  value={`₹${emi} / month`}
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Grid>
            )}
            {emi > 0 && (
              <Grid item xs={12}>
                <Box mt={2}>
                  <Button
                    variant="contained"
                    fullWidth
                    style={{ backgroundColor: '#DC143C', color: '#fff', fontWeight: 'bold' }}
                    onClick={resetFields}
                  >
                    Reset
                  </Button>
                </Box>
              </Grid>
            )}
          </Grid>
        </Paper>
      </Container>
    </div>
  );
}

export default EmiCalculator;
