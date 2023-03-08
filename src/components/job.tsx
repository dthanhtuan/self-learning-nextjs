import { JobProps } from "@/models/job";
import * as React from "react";
import ImageTag from "./image_tag";

export function Job({
  status,
  apply_start_date,
  position,
  company_name,
  eyecatch,
  ship,
  features,
}: JobProps) {
  return (
    <>
      <div className="columns is-multiline">
        <div className="column">
          <h3 className="title">{status}</h3>
          <h3 className="subtitle">{position}</h3>
          <h3 className="title">{company_name}</h3>
        </div>
      </div>

      <div className="columns">
        <div className="column is-6">
          <ImageTag src={eyecatch} alt={ship.name} figureClass="is-16by9" />
        </div>
        <div className="column is-6">
          <div className="columns is-full">{ship.name}</div>
          <div className="columns is-full">{ship.duties.join(",")}</div>
          <div className="columns is-full">{ship.salary}</div>
        </div>
      </div>
      <div className="columns">
        <div className="column is-12">
          {features.map((feature, index) => {
            return <span key={index}>{feature}</span>;
          })}
        </div>
      </div>
    </>
  );
}
