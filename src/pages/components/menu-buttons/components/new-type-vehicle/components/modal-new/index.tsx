interface IProps {
	data: any;
	setData: any;
	handleClickAdd: any;
}

function ModalNewType({ data, setData, handleClickAdd }: IProps) {
	return (
		<div
			className='modal fade'
			id='newType'
			tabIndex={-1}
			aria-labelledby='newTypeLabel'
			aria-hidden='true'
		>
			<div className='modal-dialog'>
				<div className='modal-content'>
					<div className='modal-header'>
						<h1
							className='modal-title fs-5'
							id='newTypeLabel'
						>
							NEW TYPE VEHICLE
						</h1>
						<button
							type='button'
							className='btn-close'
							data-bs-dismiss='modal'
							aria-label='Close'
						></button>
					</div>
					<div className='modal-body'>
						<input
							className='form-control form-control-sm mb-2'
							type='text'
							placeholder='ID Vehicle: XXX-00000'
							onChange={(e: any) => setData({ ...data, id: e.target.value })}
						/>
						<select
							className='form-select form-select-sm'
							onChange={(e: any) => setData({ ...data, type: e.target.value })}
						>
							<option>Type</option>
							<option value='Oficial'>Oficial</option>
							<option value='Resident'>Resident</option>
						</select>
					</div>
					<div className='modal-footer'>
						<button
							type='button'
							className='btn btn-secondary'
							data-bs-dismiss='modal'
						>
							CLOSE
						</button>
						<button
							type='button'
							className='btn btn-primary'
							onClick={handleClickAdd}
						>
							SAVE NEW TYPE
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ModalNewType;
