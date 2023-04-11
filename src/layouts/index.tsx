import Footer from '@/shared/footer';
import Header from '@/shared/header';

interface IProps {
	children: JSX.Element;
}

function Layout({ children }: IProps) {
	return (
		<>
			<Header />
			<Main>{children}</Main>
			<Footer />
		</>
	);
}

const Main = ({ children }: IProps) => <div className='m-4'>{children}</div>;

export default Layout;
