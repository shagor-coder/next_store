'use client';

export default function IconButton({ icon, onclick }) {
	return (
		<div className='inline-flex items-center justify-center mt-4'>
			<button
				onClick={onclick}
				type='button'
				className='flex items-center justify-center text-center rounded-md transition font-bold text-base bg-transparent outline-none border-none'
			>
				{icon}
			</button>
		</div>
	);
}
