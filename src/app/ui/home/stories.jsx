import React from "react";
import Image from "next/image";

export default function StoriesHome(props) {
  const { userAvatar, userName } = props;

  return (
    // <div className="flex flex-row overflow-x-auto max-w-[620px] w-full space-x-1">
    <button className="flex max-w-20 flex-col p-2 items-center overflow-hidden">
      <div className="relative w-14 h-14  rounded-full overflow-hidden flex items-center justify-center">
        <Image
          className={
            userAvatar ? "absolute md:max-w-24 md:min-w-14 max-w-32" : "w-14"
          }
          src={
            userAvatar
              ? userAvatar.toString()
              : "https://scontent-ams4-1.cdninstagram.com/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=scontent-ams4-1.cdninstagram.com&_nc_cat=1&_nc_ohc=vxSS1aHWde8AX-Z1B_W&edm=AAAAAAABAAAA&ccb=7-5&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2-ccb7-5&oh=00_AfBJGtVq8pu9dnnh06I81IgTKfl7ezHEoflnQkRE-bZnog&oe=65BC500F&_nc_sid=2c5659"
          }
          alt="historia"
          width={300}
          height={300}
        />
      </div>
      <span className="w-full py-3 text-black text-xs overflow-hidden text-ellipsis text-nowrap">
        {userName}
      </span>
    </button>
    // </div>
  );
}
