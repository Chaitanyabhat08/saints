import { Steps, Typography } from 'antd';
import { UserOutlined, SolutionOutlined, CreditCardOutlined } from '@ant-design/icons';
import React, { Fragment } from 'react';
import './CheckoutSteps.css';

const { Step } = Steps;

const CheckoutSteps = ({ activeStep }) => {
  const steps = [
    {
      title: 'Shipping Details',
      icon: <UserOutlined />
    },
    {
      title: 'Confirm Order',
      icon: <SolutionOutlined />
    },
    {
      title: 'Payment',
      icon: <CreditCardOutlined />
    },
  ];

  return (
    <Fragment>
      <Steps current={activeStep} className="checkout-steps">
        {steps.map((item, index) => (
          <Step
            key={index}
            title={item.title}
            icon={item.icon}
            className={activeStep >= index ? 'active' : ''}
            status={activeStep > index ? 'finish' : 'wait'}
          />
        ))}
      </Steps>
    </Fragment>
  );
};

export default CheckoutSteps;
