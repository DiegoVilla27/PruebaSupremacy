import { BoxCol, BoxRow } from '@/components/grid';
import useRegisterVehicles from './hooks';

function RegisterVehicles() {
	const { handleClickCheckIn, handleClickCheckOut } = useRegisterVehicles();

	return (
		<>
			<p className='mb-2'>Register Vehicle</p>
			<BoxRow>
				<BoxCol cols={6}>
					<button
						type='button'
						className='btn btn-success w-100'
						onClick={handleClickCheckIn}
					>
						CHECK-IN
					</button>
				</BoxCol>
				<BoxCol cols={6}>
					<button
						type='button'
						className='btn btn-danger w-100'
						onClick={handleClickCheckOut}
					>
						CHECK-OUT
					</button>
				</BoxCol>
			</BoxRow>
		</>
	);
}

export default RegisterVehicles;
