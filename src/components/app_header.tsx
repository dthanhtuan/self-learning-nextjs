import * as React from "react";
import headerStyle from "@/scss/app_header.module.scss";
import Avatar from "@/components/avatar";
import avatar from "@/static/images/avatar.png";

export default function AppHeader() {
  return (
    <div className={`columns is-mobile is-gapless ${headerStyle.appHeader}`}>
      <div className="column is-one-third">
        <Avatar
          size="is-96x96"
          alt="avatar"
          figureClass="ml-0 mr-0"
          imageClass="is-rounded"
          src={avatar}
        />
      </div>
      <div className="column">
        <p>Line 1 Text Text Text</p>
        <p>Line 2 Text Text Text Text Text</p>
        <h1>Header Text</h1>
      </div>
    </div>
  );
}
