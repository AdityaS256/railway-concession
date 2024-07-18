import { CircleCheck } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function getFormattedDate(dateString) {
  const date = new Date(dateString);
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Intl.DateTimeFormat("en-US", options).format(date);
}

export default function SuccessPage({ formData }) {
  const formattedDate = formData?.collectiondate
    ? getFormattedDate(formData.collectiondate)
    : "";

  return (
    <>
      <div className="w-full flex justify-center">
        <div className="w-4/5 h-2/3 bg-[#272727] p-10 text-center rounded-xl flex-col items-center justify-center mt-5 md:w-1/2">
          <div className="md:w-full md:flex md:justify-center md:mb-3">
            <img src="images/freepik--Train--inject-4train.svg" alt=""></img>
            <br />
          </div>
          <p className="text-white text-xl font-bold md:text-4xl">
            Form Submitted!
          </p>
          <div className="flex-col text-left text-xs mt-5 md:text-lg">
            <p className="text-white">
              <span className="font-bold">Sap ID:{formData.sapId}</span>
            </p>
            <p className="text-white font-bold mt-3">Form Collection:</p>
            <ul className="text-white text-s list-disc pl-5">
              <li>
                <span className="font-medium">Date: </span>
                {formattedDate}
              </li>
              <li>
                <span className="font-medium">Time: </span>
                {formData.timeslot}
              </li>
              <li>
                <span className="font-medium">Deposit Fee: </span>₹2
              </li>
              <li>
                <span className="font-medium">Validity of Form: </span>3 days
                post collection
              </li>
            </ul>
            <div className="w-full flex justify-center">
              <button className="p-4 bg-lime-500 text-white mt-16 rounded-xl">
                Go Back to Home
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-full md:flex md:justify-center">
        <div className="md:flex md:my-2">
          <img
            src="images/Instagram Buttonontrack.svg"
            className="w-4/5 mx-10 my-2 md:w-1/2 md:mx-8"
            alt=""
          ></img>
          <img
            src="images/instagram.svg"
            className="w-4/5 mx-10 my-2 md:w-1/2 md:mx-8"
            alt=""
          ></img>
        </div>
      </div>
    </>
  );
}
