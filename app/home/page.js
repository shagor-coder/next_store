'use client';

import { useEffect } from 'react';
import ProductCard from '@/components/ProductCard';
import Stripe from 'stripe';
import useCart from '../(store)/store';

async function getProducts() {
	const req = new Stripe(process.env.STRIPE_SECRET, {
		apiVersion: '2022-11-15',
	});

	const price = await req.prices.list({
		expand: ['data.product'],
	});

	return price;
}

export default function Home() {
	const setProducts = useCart((state) => state.setProducts);

	useEffect(() => {
		async function fetchData() {
			const products = await getProducts();
			setProducts(products.data);
		}

		fetchData();
	}, []);

	const products = useCart((state) => state.products);

	return (
		<>
			<div className='mb-7 border-b border-green-100 pb-7'>
				<h1 className='text-left font-bold text-4xl text-blue-950'>
					New Collection
				</h1>
			</div>
			<div className='flex flex-row items-stretch justify-center flex-wrap gap-8'>
				{products.map((product) => {
					return <ProductCard key={product.id} product={product} />;
				})}
			</div>
		</>
	);
}
