import { Link } from "react-router-dom";

/* eslint-disable react/no-unescaped-entities */
const ErrorPage = () => {
  return (
    <div className=" flex flex-col items-center justify-center h-[100vh] w-full">
      <section className="flex items-center h-full w-full p-16 dark:bg-gray-50 dark:text-gray-800">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className=" text-center">
            <h2 className="mb-8 font-extrabold text-9xl dark:text-red-400">
              <span className="sr-only">Error</span>404
            </h2>
            <p className="text-2xl font-semibold md:text-3xl">
              Sorry, we couldn't find this page.
            </p>
            <p className="mt-4 mb-8 dark:text-gray-600">
              But dont worry, you can find plenty of other things on our
              homepage.
            </p>
            <Link
              to='/'
              className="px-8 py-3 font-semibold rounded dark:bg-green-600 dark:text-gray-50"
            >
              Back to homepage
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ErrorPage;
