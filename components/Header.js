'use client';

import { ShoppingCart } from 'lucide-react';
import IconButton from './ui/IconButton';
import useCart from '@/app/(store)/store';
import { useState } from 'react';
import CartSidebar from './Cart';

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);
	const cartItems = useCart((state) => state.cart);

	function handleCartClick() {
		setIsOpen((prev) => {
			return !prev;
		});
	}

	return (
		<header className='py-3 bg-gradient-to-t from-neutral-200 to-transparent'>
			<nav className='container mx-auto flex items-center justify-between'>
				<h2 className='flex items-center text-xl text-blue-700 font-bold'>
					Next
				</h2>
				<div
					className={`relative z-10 transition-all duration-300  ${
						isOpen && ' right-52'
					}`}
				>
					<div>
						<IconButton icon={<ShoppingCart />} onclick={handleCartClick} />
					</div>
					{cartItems && (
						<div className='absolute transition-all duration-300 top-0 right-0 -mt-1 -mr-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs'>
							{cartItems.length}
						</div>
					)}
				</div>
				{isOpen && <CartSidebar items={cartItems} />}
			</nav>
		</header>
	);
}
