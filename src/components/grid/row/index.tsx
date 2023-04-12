import { ReactNode } from 'react';

interface IProps {
	children: ReactNode;
	classes?: string;
}

const BoxRow = ({ children, classes = '' }: IProps) => (
	<div className={`row ${classes}`}>{children}</div>
);

export default BoxRow;
