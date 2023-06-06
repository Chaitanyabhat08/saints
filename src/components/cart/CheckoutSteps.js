import { Typography } from 'antd'
import React, { Fragment } from 'react'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import RedeemTwoToneIcon from '@mui/icons-material/RedeemTwoTone';
import AccountBalanceTwoToneIcon from '@mui/icons-material/AccountBalanceTwoTone';
import { Stepper, Step, StepLabel, Box} from '@mui/material';
import './CheckoutSteps.css';

const CheckoutSteps = ({ activestep }) => {
  const steps = [
    {
      label: <Typography>Shipping Details</Typography>,
      icon: <LocalShippingIcon />
    },
    {
      label: <Typography>Confirm Order</Typography>,
      icon: <RedeemTwoToneIcon />
    },
    {
      label: <Typography>Payment</Typography>,
      icon: <AccountBalanceTwoToneIcon />
    },
  ];
  const stepStyles = {
    "display": "flex",
    "backgroundColor": "whitesmoke",
    "marginBottom": "20px",
    "connector": {
      "background-color": "tomato", // Change this to the desired color for active and completed steps
    },
  }
  return (
    <Fragment>
      <Box sx={{ width: '100%' }}>
        <Stepper alternativeLabel activeStep={activestep} style={stepStyles} sx={stepStyles}>
        {steps.map((item, index) => (
          <Step
            key={index}
            active={activestep === index ? true : false}
            completed={activestep >= index ? true : false}
          >
            <StepLabel
              style={{
                color: activestep >= index ? "black" : "rgba(0, 0, 0, 0.649)",
              }}
              icon={item.icon}
            >{item.label}</StepLabel>
          </Step>
        ))}
        </Stepper>
      </Box>
    </Fragment>
  )
}

export default CheckoutSteps