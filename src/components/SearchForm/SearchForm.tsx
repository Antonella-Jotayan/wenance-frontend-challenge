import { updateSearch, searchSelector } from "../../store/slices/people";
import { FC, FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../ui/Button";

const SearchForm: FC = () => {
  const [input, setInput] = useState<string>("");
  const dispatch = useDispatch();
  const searchValue = useSelector(searchSelector);

  const handleSearch = () => {
    if (!searchValue.length) return dispatch(updateSearch(input));
    setInput("");
    dispatch(updateSearch(""));
  };

  const handleChange = (event: FormEvent<HTMLInputElement>) => {
    setInput(event.currentTarget.value);
  };

  return (
    <div className='flex flex-row justify-start my-6 md:w-1/2 '>
      <input
        className='w-full rounded-l-xl px-4 text-white font-PtSans text-lg bg-[rgba(0,0,0,1)] border-4 border-yellow-300'
        value={input}
        placeholder='Enter a name'
        onChange={handleChange}
      />

      <Button
        text={!searchValue.length ? "Search" : "Clear"}
        onClick={handleSearch}
        theme='secondary'
      />
    </div>
  );
};

export { SearchForm };
