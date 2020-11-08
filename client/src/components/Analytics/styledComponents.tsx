import styled from "styled-components";

export interface BorderProps{
    borderColor: string;
}

export const Border = styled.div<BorderProps>`
border: 2px dashed;
border-color: ${props => props.borderColor};
`
