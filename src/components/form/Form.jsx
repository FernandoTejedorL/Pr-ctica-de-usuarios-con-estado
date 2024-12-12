//import { defaultOrder, nameOrder } from '../../App';
import { StyledForm } from './form.styles';

const Inputs = action => {
	return (
		<StyledForm>
			<input type='text' />
			<div>
				<label htmlFor='check'>Sólo activos </label>
				<input onChange={action} type='checkbox' name='' id='check' />
			</div>
			<select
				//onChange={value => (value === 'name' ? nameOrder() : defaultOrder())}
				name=''
				id=''
			>
				<option value='default'>Por defecto</option>
				<option value='name'>Por nombre</option>
			</select>
		</StyledForm>
	);
};

export default Inputs;
