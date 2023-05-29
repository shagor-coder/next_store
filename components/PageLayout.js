import RootLayout from '@/app/layout';
import Header from './Header';

export default function PageLayout({ children }) {
	return (
		<RootLayout>
			<Header />
			<main className='py-8'>
				<div className='container mx-auto'>{children}</div>
			</main>
		</RootLayout>
	);
}
