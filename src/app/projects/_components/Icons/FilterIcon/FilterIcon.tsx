import styled from "styled-components";

const StyledSvg = styled.svg`
    height: 18px;
    width: 18px;
    viewBox: 0 0 18 18;

    @media only screen and (max-width: 728px) {
        height: 14px;
        width: 14px;
        viewBox: 0 0 16 16;
  }
`
export default function FilterIcon() {
    return (
        <StyledSvg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1163_164)">
                    <path d="M2.66669 2.66667H13.3334V4.11467C13.3333 4.46826 13.1928 4.80735 12.9427 5.05734L10 8V12.6667L6.00002 14V8.33334L3.01335 5.048C2.79032 4.80262 2.66672 4.48294 2.66669 4.15134V2.66667Z" fill="#033028" />
                </g>
                <defs>
                    <clipPath id="clip0_1163_164">
                        <rect width="16" height="16" fill="white" />
                    </clipPath>
                </defs>
            </svg>

        </StyledSvg>
    )
}
