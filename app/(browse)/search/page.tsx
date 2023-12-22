import { Suspense } from "react";
import { redirect } from "next/navigation";
import { Results, ResultsCardSkelton } from "./_components/results";

interface SearchPageProps {
  searchParams: {
    term?: string;
  };
}
const SearchPage = ({ searchParams }: SearchPageProps) => {
  // VALIDATE TERM
  if (!searchParams?.term) {
    // return redirect("/");
  }

  return (
    <div className='h-full p-8 max-w-screen-2xl mx-auto'>
      <Suspense fallback={<ResultsCardSkelton />}>
        <Results term={searchParams?.term} />
      </Suspense>
    </div>
  );
};

export default SearchPage;
