import React from 'react';
import {StyledCell} from './styles/StyledCell';
import {TETROMINOS} from '../features/tetrominos';

const Cell = ({type}) => (
    <StyledCell type={type} color={TETROMINOS[type].color}>
        
    </StyledCell>
);

export default React.memo(Cell);