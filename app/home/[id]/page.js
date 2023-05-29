'use client';

import useCart from '@/app/(store)/store';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import { useState } from 'react';

export default function ProductPage({ params }) {
	const [isAdded, setIsAdded] = useState(false);
	const products = useCart((state) => state.products);
	const product = products.find((p) => p.id === params.id);

	const { id: productId, unit_amount: price, product: productInfo } = product;

	const {
		name: productName,
		description: productDescription,
		images: productImages,
	} = productInfo;

	const addToCart = useCart((state) => state.addToCart);
	const removeFromCart = useCart((state) => state.removeFromCart);

	function handleAddToCart(e) {
		e.preventDefault();
		const product = {
			id: productId,
			image: productImages,
			name: productName,
			description: productDescription,
			price: price,
		};
		addToCart({ ...product });
		setIsAdded(true);
	}

	function handleRemoveFromCart(e) {
		e.preventDefault();
		removeFromCart(productId);
		setIsAdded(false);
	}

	return (
		<div>
			<div className=' flex items-center justify-between  mb-6'>
				<h1 className='font-bold text-4xl text-gray-950'>Product Details</h1>
				<div className='mt-4'>
					<Link href='/home'>Back to Products</Link>
				</div>
			</div>
			<div className='flex items-stretch justify-between gap-7'>
				<div className='shadow-md rounded-md h-auto'>
					<div className=' h-96  w-96'>
						<img
							src={productImages[0]}
							alt={productName}
							className='w-full object-contain h-full'
						/>
					</div>
				</div>
				<div className='shadow-md rounded-md  h-auto'>
					<div className='p-4 border-b border-fuchsia-50'>
						<h3 className='font-bold text-3xl text-gray-950'>{productName}</h3>
					</div>
					<div className='p-4 '>
						<p className='font-light text-xl text-green-950 mt-5'>
							{productDescription}
						</p>
						<h4 className='mt-4 font-bold text-2xl text-gray-950'>${price}</h4>
					</div>

					<div className='p-4 border-t border-fuchsia-50'>
						{!isAdded ? (
							<Button
								name='Add To Cart'
								type='primary'
								onclick={handleAddToCart}
							></Button>
						) : (
							<Button
								name='Remove From Cart'
								type='danger'
								onclick={handleRemoveFromCart}
							></Button>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
