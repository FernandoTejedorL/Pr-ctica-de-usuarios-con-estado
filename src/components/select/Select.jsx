const Select = ({ selected, order }) => {
	return (
		<select onChange={selected} value={order} name='order' id=''>
			<option value='default'>Por Defecto</option>
			<option value='name'>Por Nombre</option>
		</select>
	);
};
export default Select;
