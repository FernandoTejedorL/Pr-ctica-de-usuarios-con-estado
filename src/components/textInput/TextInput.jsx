const TextInput = ({ searching, text }) => {
	return <input type='text' onInput={searching} value={text} />;
};

export default TextInput;
