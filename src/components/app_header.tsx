import * as React from "react";
import headerStyle from "@/scss/app_header.module.scss";
import ImageTag from "@/components/image_tag";
import avatar from "@/static/images/avatar.png";

export default function AppHeader() {
  return (
    <div className="container">
      <div className={`columns is-gapless is-mobile ${headerStyle.main}`}>
        <div className={`column is-one-third ${headerStyle.avatarSection}`}>
          <ImageTag
            alt="avatar"
            figureClass="ml-2 mr-0 is-96x96"
            imageClass="is-rounded"
            src={avatar}
          />
        </div>
        <div className="column">
          <h4 className={`has-text-white mt-4 mb-0 ${headerStyle.subtitle}`}>
            ワクワクする
          </h4>
          <h4 className={`has-text-white mt-0 mb-5 ${headerStyle.subtitle}`}>
            船員の求人 - 採用は
          </h4>
          <h1 className={`title has-text-white mt-3 mb-4 ${headerStyle.title}`}>
            船員ナビ
          </h1>
        </div>
      </div>
    </div>
  );
}
