export default function Button({ name, type, onclick }) {
	function getButtonStyle() {
		switch (type) {
			case 'primary':
				return 'bg-blue-700 hover:bg-slate-900';
			case 'secondary':
				return 'bg-gray-700 hover:bg-slate-900';
			case 'danger':
				return 'bg-red-700 hover:bg-red-900';
			default:
				return 'bg-blue-700 hover:bg-slate-900';
		}
	}

	return (
		<div className='inline-flex items-center justify-center'>
			<button
				onClick={onclick}
				type='button'
				className={`flex px-8 py-2 text-white items-center justify-center text-center rounded-md transition duration-300 font-bold text-base ${getButtonStyle()}`}
			>
				{name}
			</button>
		</div>
	);
}
