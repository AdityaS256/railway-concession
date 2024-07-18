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
      <main className="flex min-h-screen flex-col items-center bg-zinc-950 justify-center p-8 text-center">
        <Card className="flex flex-col items-center max-w-[85vw] p-8 bg-gray-800 rounded-lg shadow-lg">
          <CircleCheck
            className="text-green-500 w-16 h-16 mb-4"
            color="lightgreen"
          />
          <h1 className="text-4xl font-black my-4 text-center">
            Form Submitted Successfully!
          </h1>
          <p className="text-lg text-white mb-2">
            Please come between{" "}
            <strong className="text-blue-400 text-xl underline italic">
              {formData?.timeslot}
            </strong>{" "}
            on{" "}
            <strong className="text-yellow-400 text-xl underline italic">
              {formattedDate}
            </strong>{" "}
            to the counter.
          </p>
          <p className="text-lg text-white mb-2">
            A deposit of ₹2 will be required at the time of collection.
          </p>
          <p className="text-lg text-white mb-2">
            The concession form will be valid for 3 days from the date of issue.
          </p>
          <Button
            onClick={() => window.location.reload()}
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white"
          >
            Go Back to Home
          </Button>
        </Card>
      </main>
    </>
  );
}
