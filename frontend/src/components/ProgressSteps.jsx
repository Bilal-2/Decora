const ProgressSteps = ({ step1, step2, step3 }) => {
  return (
    <div className="flex justify-between lg:justify-center items-center lg:space-x-4 mx-[1rem] lg:mx-0">
      <div className={`${step1 ? "text-green-500" : "text-gray-300"}`}>
        <span className="ml-2">Login</span>
        <div className="mt-2 text-lg text-center">✅</div>
      </div>

      {step2 && (
        <>
          {step1 ? (<div className="h-0.5 w-[4rem] lg:w-[10rem] bg-green-500"></div>) :
          (<div className="h-0.5 w-[4rem] lg:w-[10rem] bg-gray-300"></div>)
          }
          <div className={`${step1 ? "text-green-500" : "text-gray-300"}`}>
            <span>Shipping</span>
            <div className="mt-2 text-lg text-center">✅</div>
          </div>
        </>
      )}

      <>
        {step1 && step2 && step3 ? (
          <div className="h-0.5 w-[4rem] lg:w-[10rem] bg-green-500"></div>
        ) : (
          <div className="h-0.5 w-[4rem] lg:w-[10rem] bg-gray-300"></div>
        )}

        <div className={`${step3 ? "text-green-500" : "text-gray-300"}`}>
          <span className={`${!step3 ? "" : ""}`}>Summary</span>
          {step1 && step2 && step3 ? (
            <div className="mt-2 text-lg text-center">✅</div>
          ) : (
            ""
          )}
        </div>
      </>
    </div>
  );
};

export default ProgressSteps;
