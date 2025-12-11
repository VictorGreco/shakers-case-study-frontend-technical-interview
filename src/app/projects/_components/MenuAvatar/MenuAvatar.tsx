import styled from "styled-components";
import Avatar from '@mui/material/Avatar';

const StyledAvatar = styled(Avatar)`
    height: 24px!important;
    width: 24px!important;
    border-radius: 4px!important;

    @media only screen and (max-width: 728px) {
        height: 16px!important;
        width: 16px!important;
  }
`

interface IMenuAvatar {
    src: string;
}
export default function MenuAvatar({ src }: IMenuAvatar) {
    return (
        <StyledAvatar alt="User Avatar" src={src} />
    )
}