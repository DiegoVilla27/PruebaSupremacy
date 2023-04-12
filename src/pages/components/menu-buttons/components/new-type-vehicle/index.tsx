import { BoxCol, BoxRow } from '@/components/grid';
import ModalNewType from './components/modal-new';
import ModalRemoveType from './components/modal-remove';
import useNewTypeVehicles from './hooks';

function NewTypeVehicles() {
	const { handleClickAdd, handleClickRemove, data, setData } =
		useNewTypeVehicles();

	return (
		<>
			<p className='mb-2'>New Type Vehicle</p>
			<BoxRow>
				<BoxCol cols={6}>
					<button
						type='button'
						className='btn btn-success w-100'
						data-bs-toggle='modal'
						data-bs-target='#newType'
					>
						ADD
					</button>
				</BoxCol>
				<BoxCol cols={6}>
					<button
						type='button'
						className='btn btn-danger w-100'
						data-bs-toggle='modal'
						data-bs-target='#removeType'
					>
						REMOVE
					</button>
				</BoxCol>
			</BoxRow>
			<ModalNewType data={data} setData={setData} handleClickAdd={handleClickAdd} />
			<ModalRemoveType setData={setData} handleClickRemove={handleClickRemove} />
		</>
	);
}

export default NewTypeVehicles;
