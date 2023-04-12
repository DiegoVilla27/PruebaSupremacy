interface IProps {
	setData: any;
	handleClickRemove: any;
}

function ModalRemoveType({ setData, handleClickRemove }: IProps) {
	return (
		<div
			className='modal fade'
			id='removeType'
			tabIndex={-1}
			aria-labelledby='removeTypeLabel'
			aria-hidden='true'
		>
			<div className='modal-dialog'>
				<div className='modal-content'>
					<div className='modal-header'>
						<h1
							className='modal-title fs-5'
							id='removeTypeLabel'
						>
							REMOVE TYPE VEHICLE
						</h1>
						<button
							type='button'
							className='btn-close'
							data-bs-dismiss='modal'
							aria-label='Close'
						></button>
					</div>
					<div className='modal-body'>...</div>
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
							onClick={handleClickRemove}
						>
							SAVE REMOVE TYPE
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ModalRemoveType;
