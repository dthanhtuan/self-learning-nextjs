import * as React from "react";
import shipImage from "@/static/images/ships-1.png";
import { Job } from "@/components/job";

//import { JobProps } from "@/models/job";
// TOOD: pass props: JobProps[] to JobList

export function JobList() {
  const jobs = [
    {
      id: 1,
      status: "waiting",
      apply_start_date: Date.now.toString(),
      position: "crew",
      company_name: "Maersk",
      eyecatch: shipImage,
      ship: {
        name: "Container",
        duties: ["duby 1", "duty2"],
        salary: "from 555 to 777",
      },
      features: ["feature 1", "feature 2", "feature 3"],
    },
  ];
  return (
    <div className="container">
      {jobs.map((job) => {
        return <Job key={job.id} {...job}></Job>;
      })}
    </div>
  );
}
