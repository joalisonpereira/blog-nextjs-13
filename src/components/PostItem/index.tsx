import Image from "next/image";
import { memo } from "react";

interface PostItemProps {
  title: string;
  description: string;
  imageUrl: string;
}

function PostItem({ title, description, imageUrl }: PostItemProps) {
  return (
    <li className="flex-col items-center text-center mb-5 px-20">
      <a
        href="#"
        className="hover:bg-neutral-600 py-2 block transition-all rounded-md"
      >
        <Image
          src={imageUrl}
          alt={title}
          width={300}
          height={150}
          className="mx-auto rounded-md"
        />
        <h3 className="m-0 mt-4 font-semibold text-xl">{title}</h3>
        <p className="mt-5 text-gray-300">{description}</p>
      </a>
    </li>
  );
}

export default memo(PostItem);
