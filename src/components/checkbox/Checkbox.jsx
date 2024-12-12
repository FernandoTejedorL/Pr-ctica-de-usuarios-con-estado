const Checkbox = ({ change, actived }) => {
	return (
		<div>
			<label htmlFor='check'>Sólo activos </label>
			<input
				onChange={change}
				checked={actived}
				type='checkbox'
				name=''
				id='check'
			/>
		</div>
	);
};

export default Checkbox;
