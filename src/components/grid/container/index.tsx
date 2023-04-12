import { ReactNode } from 'react';

interface IProps {
	children: ReactNode;
	classes?: string;
}

const BoxContent = ({ children, classes = '' }: IProps) => (
	<div className={`container-fluid ${classes}`}>{children}</div>
);

export default BoxContent;
