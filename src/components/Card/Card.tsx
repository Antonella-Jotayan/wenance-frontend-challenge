import { FC } from "react";
import { Person } from "../../types/person";
import { useDispatch } from "react-redux";
import { removePerson } from "../../store/slices/people";
import { Button } from "../ui/Button";

interface Props {
  data: Person;
}
const Card: FC<Props> = ({ data }) => {
  const { name, gender, birth_year, id } = data;
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removePerson(id));
  };

  return (
    <div className='flex flex-row justify-between items-center bg-[rgba(0,0,0,1)] my-3 py-3 px-4 w-full border-2 border-yellow-300 rounded-2xl md:py-6 md:px-10'>
      <div>
        <p className='text-white pb-5 font-OpenSans tracking-wider font-bold text-2xl'>
          {name}
        </p>
        <p className='text-white pb-3 font-PtSans text-lg'>{`Gender: ${gender}`}</p>
        <p className='text-white pb-3 font-PtSans text-lg'>{`Birthday: ${birth_year}`}</p>
      </div>
      <Button text='Delete' onClick={handleRemove} />
    </div>
  );
};

export { Card };
