import styled from "styled-components";

const StyledSvg = styled.svg`
    height: 18px;
    width: 18px;
    viewBox: 0 0 18 18;

    @media only screen and (max-width: 728px) {
        height: 14px;
        width: 14px;
        viewBox: 0 0 14 14;
  }
`
export default function CalendarIcon() {
    return (
            <StyledSvg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.6667 2V4.66667M5.33341 2V4.66667M2.66675 7.33333H13.3334M2.66675 4.66667C2.66675 4.31304 2.80722 3.97391 3.05727 3.72386C3.30732 3.47381 3.64646 3.33333 4.00008 3.33333H12.0001C12.3537 3.33333 12.6928 3.47381 12.9429 3.72386C13.1929 3.97391 13.3334 4.31304 13.3334 4.66667V12.6667C13.3334 13.0203 13.1929 13.3594 12.9429 13.6095C12.6928 13.8595 12.3537 14 12.0001 14H4.00008C3.64646 14 3.30732 13.8595 3.05727 13.6095C2.80722 13.3594 2.66675 13.0203 2.66675 12.6667V4.66667ZM5.33341 10H6.66675V11.3333H5.33341V10Z" stroke="#181B1A" strokeLinecap="round" strokeLinejoin="round"/>
</svg>


            </StyledSvg>
    )
}
