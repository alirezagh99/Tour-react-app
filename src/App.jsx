import { useEffect, useState } from "react";
import Tours from "./components/Tours";

const url = "https://www.course-api.com/react-tours-project";
function App() {
  const [data, setData] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const handleDelete = (id) => {
    const newData = data.filter((item) => {
      return item.id !== id;
    });
    setData(newData);
  };

  useEffect(() => {
    async function myFetch() {
      try {
        const response = await fetch(url);
        const datas = await response.json();
        setData(datas);
        console.log(data);
        if (!response.ok) {
          setIsError(true);
        }
      } catch (error) {
        console.log(error);
        setIsError(true);
      }
      setIsLoading(false);
    }
    myFetch();
  }, []);
  const title = data.length > 0 ? "Our Tours" : "No Tours Left";
  if (isError) {
    return (
      <h2 className="text-4xl font-semibold text-red-500 mt-10 ml-[50%] -translate-x-1/3">
        There has been some error...
      </h2>
    );
  }
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
              {title}
            </h2>
            {/* {data.length == 0 && (
              <button className="bg-green-500 text-white text-sm">
                Refresh
              </button>
            )} */}
            <div className="absolute w-[5%] left-1/2 -translate-x-1/2 mt-1 border-2 border-green-300"></div>
          </div>
          <Tours data={data} handleDelete={handleDelete} />
        </div>
      )}
    </>
  );
}

export default App;
