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
export default function EuroIcon() {
    return (
        <StyledSvg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.4668 4.66668C10.9042 4.02357 10.1914 3.58855 9.41771 3.41618C8.64404 3.24381 7.84398 3.34176 7.11783 3.69774C6.39168 4.05373 5.77178 4.6519 5.33586 5.41726C4.89994 6.18262 4.6674 7.08109 4.6674 8.00001C4.6674 8.91894 4.89994 9.81741 5.33586 10.5828C5.77178 11.3481 6.39168 11.9463 7.11783 12.3023C7.84398 12.6583 8.64404 12.7562 9.41771 12.5838C10.1914 12.4115 10.9042 11.9765 11.4668 11.3333M8.66683 6.66668H3.3335M3.3335 9.33335H8.66683" stroke="#181B1A" strokeLinecap="round" strokeLinejoin="round" />
            </svg>


        </StyledSvg>
    )
}
