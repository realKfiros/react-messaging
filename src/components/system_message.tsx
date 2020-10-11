import React, { FC } from 'react';
import {
    Typography
} from '@material-ui/core';
import styled from 'styled-components';

interface SystemMessageProps {
    text: string;
}

export const SystemMessage: FC<SystemMessageProps> = ({ text }) => {
    return (
        <Wrapper>
            <Typography variant="subtitle2">{text}</Typography>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    margin-left: auto;
    margin-right: auto;
`;