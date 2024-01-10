import { Navbar, Footer } from "../components";

const ErrorPage = () => {
  return (
    <div className="relative z-0">
      <div className="mb-8">
        <Navbar />
      </div>
      <div className="min-h-screen flex flex-col">
        <h1 className="font-bold align-center text-primary justify-center font-[200px]">
          Error
        </h1>
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default ErrorPage;
