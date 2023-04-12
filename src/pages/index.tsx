import { BoxContent, BoxRow } from '@/components/grid';
import Layout from '@/layouts';
import ContainerTables from './components/container-tables';
import MenuButtons from './components/menu-buttons';

function App() {
	return (
		<Layout>
			<BoxContent>
				<BoxRow>
					<MenuButtons />
					<ContainerTables />
				</BoxRow>
			</BoxContent>
		</Layout>
	);
}

export default App;
