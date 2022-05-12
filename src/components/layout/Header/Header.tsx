import { StarWarsIcon } from "../../icons";

interface Props {}

const Header = ({}: Props) => {
  return (
    <div className='flex justify-center items-center bg-black py-1 md:py-6'>
      <StarWarsIcon width={100} height={100} />
    </div>
  );
};

export { Header };
