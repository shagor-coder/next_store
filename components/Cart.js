const CartSidebar = ({ items }) => {
	return (
		<div className='fixed transition-all duration-300 inset-y-0 right-0 w-96 bg-white shadow-lg p-4'>
			<h2 className='text-xl font-bold mb-4'>Cart</h2>
			{items.length === 0 ? (
				<p className='text-gray-500'>Your cart is empty.</p>
			) : (
				items.map((item) => (
					<div key={item.id} className='flex items-center space-x-4 mb-4'>
						<img
							src={item.image}
							alt={item.title}
							className='w-32 h-32 object-contain'
						/>
						<div>
							<h3 className='text-xl font-semibold'>{item.name}</h3>
							<p className='text-gray-500'>
								{item.description.substr(0, 70)} ...
							</p>
							<p className='text-gray-700'>${item.price}</p>
						</div>
					</div>
				))
			)}
		</div>
	);
};

export default CartSidebar;
