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
export default function LeftArrowIcon() {
    return (
        <StyledSvg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1163_340)">
                    <path d="M10 4L6 8L10 12" stroke="#181B1A" strokeLinecap="round" strokeLinejoin="round" />
                </g>
                <defs>
                    <clipPath id="clip0_1163_340">
                        <rect width="16" height="16" fill="white" />
                    </clipPath>
                </defs>
            </svg>

        </StyledSvg>
    )
}
