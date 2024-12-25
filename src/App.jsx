import { useEffect, useState } from "react";
import Tours from "./components/Tours";

const url = "https://www.course-api.com/react-tours-project";
function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function myFetch() {
      try {
        const response = await fetch(url);
        const datas = await response.json();
        setData(datas);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    }
    myFetch();
  }, []);
  return (
    <>
      {isLoading && (
        <div className="text-center mt-36">
          <span className="font-semibold text-4xl text-[rgba(0,0,0,0.8)]">
            Loading...
          </span>
        </div>
      )}
      {!isLoading && (
        <div>
          <div className="text-center mt-5 relative mb-10">
            <h2 className="font-semibold text-2xl text-[rgba(0,0,0,0.8)]">
              Our Tours
            </h2>
            <div className="absolute w-[5%] left-1/2 -translate-x-1/2 mt-1 border-2 border-green-300"></div>
          </div>
          <Tours data={data} />
        </div>
      )}
    </>
  );
}

export default App;
