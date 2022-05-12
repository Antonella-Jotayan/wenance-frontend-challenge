import { CardList } from "../../components/CardList";
import { SearchForm } from "../../components/SearchForm";
import { useSelector } from "react-redux";
import { useGetPeopleQuery } from "../../store/api/peopleApi";
import { filteredPeopleSelector } from "../../store/slices/people";

const statusMessageClassName = "text-yellow-400 text-xl font-PtSans";
const containerCenteredClassName =
  "flex flex-col justify-center items-center min-h-screen bg-stars bg-center bg-fixed bg-contain py-8";

const HomeScreen = () => {
  const { isLoading, isError } = useGetPeopleQuery();
  const people = useSelector(filteredPeopleSelector);
  const showResults = people && !isLoading && !isError;

  if (isLoading) {
    return (
      <div className={containerCenteredClassName}>
        <p className={statusMessageClassName}>Is Loading</p>;
      </div>
    );
  }

  if (isError) {
    return (
      <div className={containerCenteredClassName}>
        <p className={statusMessageClassName}>Something went wrong</p>;
      </div>
    );
  }
  return (
    <div className='flex flex-col justify-start items-center min-h-screen bg-stars bg-center bg-fixed bg-contain py-8'>
      {showResults && (
        <div className='flex flex-col items-center w-5/6 py-6 rounded-xl md:px-16 xl:w-4/6'>
          <SearchForm />
          <CardList data={people} />
        </div>
      )}
    </div>
  );
};

export { HomeScreen };
