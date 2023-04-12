import { IVehicle } from '@/interfaces/vehicles.interface';
import { badgeByType } from '@/utils/badge-by-type.utils';

interface IProps {
	list: IVehicle[];
}

function GeneralList({ list }: IProps) {
	return (
		<div className='table-responsive'>
			<table className='table table-sm table-bordered'>
				<thead>
					<tr>
						<th scope='col'>ID</th>
						<th scope='col'>Type</th>
						<th scope='col'>Date In</th>
						<th scope='col'>Date Out</th>
						<th scope='col'>Cost</th>
					</tr>
				</thead>
				<tbody>
					{list &&
						list.map((vehicle: IVehicle, index: number) => (
							<tr key={vehicle.id + index}>
								<th scope='row'>{vehicle.id}</th>
								<td>
									<span className={`badge ${badgeByType(vehicle.type)}`}>
										{vehicle.type}
									</span>
								</td>
								<td>{vehicle.date_init}</td>
								<td>{vehicle.date_end}</td>
								<td>{vehicle.cost}</td>
							</tr>
						))}
				</tbody>
			</table>
		</div>
	);
}

export default GeneralList;
