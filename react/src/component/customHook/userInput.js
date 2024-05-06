import { useState } from "react";

function useInput(initialState) {
  const [value, setValue] = useState(initialState);

  const setInput = (value) => {
    setValue(value);
  };

  const onChangeInput = {
    value,
    onChange: (e) => {
      setValue(e.target.value);
    },
  };



  return [value, setInput, onChangeInput];
}

export default useInput;
