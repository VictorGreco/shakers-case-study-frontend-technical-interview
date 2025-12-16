import React from 'react';
import { Box } from '@mui/material';
import styled from 'styled-components';
import { IEnhancedPosition } from '../_types/IEnhancedPosition';

export const ReferralBanner = styled(Box)(({ theme }) => ({
  backgroundColor: '#EDF7F6',
  color: '#033028',
  padding: '5px',
  borderRadius: '6px',
  fontSize: '12px',
  fontWeight: 400,
  width: 'fit-content',
  marginBottom: '10px',
}));

interface ReferralBannerComponentProps {
    positions: IEnhancedPosition[];
}

const ReferralBannerComponent = ({ positions }: ReferralBannerComponentProps) => {
    const compareNumbers = (a: number, b: number) => a - b;
    const higherReferralBonus = positions
        .map((item) => item.referralBonus)
        .sort(compareNumbers)[0];
    if (higherReferralBonus) {
        return (<ReferralBanner>€ ¡Gana hasta {higherReferralBonus} € por referir!</ReferralBanner>)
    } else {
        return <></>
    }
};

export default ReferralBannerComponent;
