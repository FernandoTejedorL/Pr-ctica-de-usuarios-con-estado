const Inputs = () => {
	return (
		<div>
			<input type='text' />
			<label htmlFor='check'>Sólo activos</label>
			<input type='checkbox' name='' id='check' />
			<select name='' id=''>
				<option value='default'>Por defecto</option>
				<option value='name'>Por nombre</option>
			</select>
		</div>
	);
};

export default Inputs;
