import { CircleCheck } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

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
      <div classNameName="w-full flex justify-center">
        <div className="w-4/5 h-2/3 bg-[#272727] p-10 text-center rounded-xl flex-col items-center justify-center mt-5 md:w-1/2 ">
          <div className="md:w-full md:flex md:justify-center md:mb-3">
            <img
              src="images/freepik--Train--inject-4train.svg"
              alt=""
              width={300}
              height={300}
            ></img>
            <br />
          </div>
          <p className="text-white text-xl font-bold md:text-4xl">
            Form Submitted!
          </p>
          <div className="flex-col text-left text-s mt-5 md:text-lg">
            <p className="text-white">
              <span className="font-bold">Sap ID:</span> {formData.sapId}
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
            <div className="w-full flex items-center justify-center mt-4 font-medium border-2 border-red-500 bg-red-500 rounded-lg ">
                <p className="text-white text-center p-2 text-xs">Railway Concession form will be given as per selected time slot only.</p>
            </div>
            <div className="w-full h-fit flex justify-center items-center mt-0">
              <a href="/" className="w-full md:flex md:justify-center h-[3.5rem] p-0">
                <button className="w-full h-[3.5rem] p-4 bg-[#00C418] text-white mt-5 rounded-xl font-bold text-[1rem] md:w-full">
                  Return to Home
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-full md:flex md:justify-center">
        <div className="md:flex md:my-2 ">
          <a
            href="https://ontrack.gdscmpstme.com/"
            target="_blank"
            className=" md:ml-0 md:mr-1"
          >
            <img
              src="images/Instagram Buttonontrack.svg"
              className="w-4/5 mx-10 my-4 md:w-full md:mx-4"
              alt="OnTrack"
              width={600}
              height={300}
            ></img>
          </a>
          <a
            href="https://instagram.com/gdsc.mpstme"
            target="_blank"
            className="md:mr-7 md:ml-1"
          >
            <img
              src="images/instagram.svg"
              className="w-4/5 mx-10 my-4 md:w-full md:mx-4"
              alt="Instagram"
              width={600}
              height={300}
            ></img>
          </a>
        </div>
      </div>
    </>
  );
}
