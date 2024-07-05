import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export default function SubmitModal(props) {
  function cancelHandler() {
    props.onCancel();
  }

  return (
    <div>
      <div className="relative z-10 ">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      </div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex align-center items-center justify-center min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative flex justify-center items-center align-center m-auto overflow-hidden w-[300px] h-[300px] md:h-[500px] md:w-[500px]">
          {props.type == "Success" ? (
          <div className="absolute w-full h-full bg-gradient-to-br from-green-500 to-green-300 rounded-2xl shadow-lg" style={{ boxShadow: '5px 5px 20px rgba(128, 128, 128, 0.1)', perspective: '40px' }}>
              <div className="dot"></div>
              <div className="dot two"></div>
              <div className="face">
                <div className="eye"></div>
                <div className="eye right"></div>
                <div className="mouth happy"></div>
              </div>
              <div className="shadow scale"></div>
              <div className="message">
                <h1 className="alert text-2xl md:text-4xl text-white font-monster">
                  Success!
                </h1>
                <p className="text-gray-800 text-sm md:text-xl font-monster">Your reservation was Successfull.</p>
              </div>
              <Link to={"/"}>
              <button className="button-box ">
                <h1 className=" green font-monster md:text-3xl">
                  OK
                </h1>
              </button>
              </Link>
            </div>
          ):(
          <div className="absolute w-full h-full bg-gradient-to-tr from-orange-400 to-red-500 rounded-2xl shadow-lg" style={{ boxShadow: '5px 5px 20px rgba(128, 128, 128, 0.1)', perspective: '40px' }}>
              <div className="dot"></div>
              <div className="dot two"></div>
              <div className="face2">
                <div className="eye"></div>
                <div className="eye right"></div>
                <div className="mouth sad"></div>
              </div>
              <div className="shadow move"></div>
              <div className="message">
                <h1 className="alert text-2xl md:text-4xl text-white font-monster">
                  Error!
                </h1>
                <p className="text-gray-800 text-sm md:text-xl font-monster">oh no, something went wrong.</p>
              </div>
              <Link to={"/BookingForm"}>
              <button className="button-box ">
                <h1 className="red font-monster md:text-3xl">
                Try again
                </h1>
              </button>
              </Link>
            </div>
            )}
          </div>

          {/* <div className=" relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      <ExclamationCircleIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                    </div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <div as="h3" className="text-base font-semibold leading-6 text-gray-900">
                        Login Status
                      </div>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Wrong username or password, please try again !
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={cancelHandler}
                  >
                    Ok
                  </button>
                </div>
              </div> */}
        </div>
      </div>
    </div>
  );
}
