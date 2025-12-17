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
                <path d="M3.3335 7.99996L6.66683 11.3333L13.3335 4.66663" stroke="#181B1A" strokeLinecap="round" strokeLinejoin="round" />
            </svg>



        </StyledSvg>
    )
}
