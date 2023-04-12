import { BoxCol } from '@/components/grid';
import { ReactNode } from 'react';
import GeneralList from './components/list-general';
import OficialList from './components/list-oficial';
import ResidentList from './components/list-resident';
import useContainerTables from './hooks';

function ContainerTables() {

	const {
		generals,
		oficials,
		residents
	} = useContainerTables();

	return (
		<BoxCol cols={8}>
			<nav>
				<div
					className='nav nav-tabs'
					id='nav-tab'
					role='tablist'
				>
					<ButtonNav type='general' />
					<ButtonNav type='oficial' />
					<ButtonNav type='resident' />
				</div>
			</nav>
			<div
				className='tab-content mt-2'
				id='nav-tabContent'
			>
				<ContentNav type='general'>
					<GeneralList list={generals}/>
				</ContentNav>
				<ContentNav type='oficial'>
					<OficialList list={oficials}/>
				</ContentNav>
				<ContentNav type='resident'>
					<ResidentList list={residents}/>
				</ContentNav>
			</div>
		</BoxCol>
	);
}

interface IPropsNav {
	type: 'general' | 'resident' | 'oficial';
	children?: ReactNode;
}

const ButtonNav = ({ type }: IPropsNav) => {
	return (
		<button
			className={`text-capitalize nav-link ${
				type === 'general' ? 'active' : null
			}`}
			id={`nav-${type}-tab`}
			data-bs-toggle='tab'
			data-bs-target={`#nav-${type}`}
			type='button'
			role='tab'
			aria-controls={`nav-${type}`}
			aria-selected='true'
		>
			{type} List
		</button>
	);
};

const ContentNav = ({ type, children }: IPropsNav) => {
	return (
		<div
			className={`tab-pane fade ${type === 'general' ? 'show active' : null}`}
			id={`nav-${type}`}
			role='tabpanel'
			aria-labelledby={`nav-${type}-tab`}
			tabIndex={0}
		>
			{children}
		</div>
	);
};

export default ContainerTables;
