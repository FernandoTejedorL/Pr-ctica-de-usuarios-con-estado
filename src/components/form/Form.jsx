import { StyledForm } from './form.styles';

const Inputs = () => {
	return (
		<StyledForm>
			<input type='text' />
			<div>
				<label htmlFor='check'>Sólo activos </label>
				<input type='checkbox' name='' id='check' />
			</div>
			<select name='' id=''>
				<option value='default'>Por defecto</option>
				<option value='name'>Por nombre</option>
			</select>
		</StyledForm>
	);
};

export default Inputs;
