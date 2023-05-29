'use client';
import Link from 'next/link';

export default function ProductCard({ product }) {
	const { id: productId, unit_amount: price, product: productInfo } = product;
	const {
		name: productName,
		description: productDescription,
		images: productImages,
	} = productInfo;

	return (
		<>
			<div
				id={productId}
				className='shadow-md  flex flex-col rounded-md h-auto hover:shadow-lg transition-shadow duration-300 w-[31.33%]'
			>
				<div className=' w-full h-56'>
					<img
						src={productImages[0]}
						alt={productName}
						className='w-full h-full object-contain'
					/>
				</div>
				<div className=' p-4 border-b border-fuchsia-50'>
					<h3 className=' font-bold text-xl text-gray-950'>
						{productName.substr(0, 20)}
					</h3>
				</div>
				<div className=' p-4'>
					<p className=' font-light text-xl text-green-950'>
						{productDescription.substr(0, 150)}...
					</p>
					<h4 className=' mt-4 font-bold text-lg text-gray-950'>${price}</h4>
				</div>
				<div className=' p-4 border-t border-fuchsia-50 mt-auto'>
					<Link href={`/home/${productId.trim()}`}>See More</Link>
				</div>
			</div>
		</>
	);
}
