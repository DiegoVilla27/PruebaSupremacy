import { ReactNode } from 'react';

interface IProps {
	children: ReactNode;
	cols?: string;
	classes?: string;
}

const BoxCol = ({ children, cols = '12', classes = '' }: IProps) => (
	<div className={`col-${cols} ${classes}`}>{children}</div>
);

export default BoxCol;
