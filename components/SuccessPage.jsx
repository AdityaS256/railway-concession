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
      <div class="w-full flex justify-center">
        <div class="w-4/5 h-2/3 bg-[#272727] p-10 text-center rounded-xl flex-col items-center justify-center mt-5 md:w-1/2 ">
          <div class="md:w-full md:flex md:justify-center md:mb-3">
            <img
              src="images/freepik--Train--inject-4train.svg"
              alt=""
              width={300}
              height={300}
            ></img>
            <br />
          </div>
          <p class="text-white text-xl font-bold md:text-4xl">
            Form Submitted!
          </p>
          <div class="flex-col text-left text-s mt-5 md:text-lg">
            <p class="text-white">
              <span class="font-bold">Sap ID:</span> {formData.sapId}
            </p>
            <p class="text-white font-bold mt-3">Form Collection:</p>
            <ul class="text-white text-s list-disc pl-5">
              <li>
                <span class="font-medium">Date: </span>
                {formattedDate}
              </li>
              <li>
                <span class="font-medium">Time: </span>
                {formData.timeslot}
              </li>
              <li>
                <span class="font-medium">Deposit Fee: </span>₹2
              </li>
              <li>
                <span class="font-medium">Validity of Form: </span>3 days
                post collection
              </li>
            </ul>
            <div class="w-full flex items-center justify-center mt-4 font-medium border-2 border-red-500 bg-red-500 rounded-lg ">
                <p class="text-white text-center p-2 text-xs">Railway Concession form will be given as per selected time slot only.</p>
            </div>
            <div class="w-full h-fit flex justify-center items-center mt-0">
              <Link href="/" class="w-full md:flex md:justify-center h-[3.5rem] p-0">
                <button class="w-full h-[3.5rem] p-4 bg-[#00C418] text-white mt-5 rounded-xl font-bold text-[1rem] md:w-full">
                  Return to Home
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div class="md:w-full md:flex md:justify-center">
        <div class="md:flex md:my-2 ">
          <Link
            href="https://ontrack.gdscmpstme.com/"
            target="_blank"
            class=" md:ml-0 md:mr-1"
          >
            <Image
              src="images/Instagram Buttonontrack.svg"
              class="w-4/5 mx-10 my-4 md:w-full md:mx-4"
              alt="OnTrack"
              width={600}
              height={300}
            ></Image>
          </Link>
          <Link
            href="https://instagram.com/gdsc.mpstme"
            target="_blank"
            class="md:mr-7 md:ml-1"
          >
            <img
              src="images/instagram.svg"
              class="w-4/5 mx-10 my-4 md:w-full md:mx-4"
              alt="Instagram"
              width={600}
              height={300}
            ></img>
          </Link>
        </div>
      </div>
    </>
  );
}
