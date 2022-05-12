import { Person } from "../../types/person";
import { FC } from "react";
import { Card } from "../Card/Card";

interface Props {
  data: Person[];
}

const CardList: FC<Props> = ({ data }) => {
  if (!data.length) {
    return (
      <p className='text-yellow-400 text-xl font-PtSans py-3'>No results</p>
    );
  }
  return (
    <div className='flex flex-col w-full'>
      {data.map((person) => (
        <Card data={person} key={person.id} />
      ))}
    </div>
  );
};

export { CardList };
