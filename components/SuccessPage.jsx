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
      <div className="w-full flex justify-center">
        <div className="w-4/5 h-2/3 bg-[#272727] p-10 text-center rounded-xl flex-col items-center justify-center mt-5 md:w-1/2 ">
          <div className="md:w-full md:flex md:justify-center md:mb-3">
            <Image
              src="images/freepik--Train--inject-4train.svg"
              alt=""
              width={300}
              height={300}
            ></Image>
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
            <div className="w-full flex justify-center">
              <a href="/" className="w-full md:flex md:justify-center">
                <button className="w-full h-[3.5rem] p-4 bg-[#00C418] text-white mt-16 rounded-xl font-bold text-[1rem] md:w-1/3">
                  Return to Home
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-full md:flex md:justify-center">
        <div className="md:flex md:my-2">
          <Link
            href="https://ontrack.gdscmpstme.com/"
            target="_blank"
            className="md:w-full md:mx-4"
          >
            <Image
              src="images/Instagram Buttonontrack.svg"
              className="w-4/5 mx-10 my-4 md:w-full md:mx-4"
              alt="OnTrack"
              width={600}
              height={300}
            ></Image>
          </Link>
          <Link
            href="https://instagram.com/gdsc.mpstme"
            target="_blank"
            className="md:w-full md:mx-4"
          >
            <Image
              src="images/instagram.svg"
              className="w-4/5 mx-10 my-4 md:w-full md:mx-4"
              alt="Instagram"
              width={600}
              height={300}
            ></Image>
          </Link>
        </div>
      </div>
    </>
  );
}
