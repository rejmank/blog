import clsx from "clsx";
import { getSiteMetaData } from "utils/helpers";

export default function Bio({ className }) {
  const { author, social } = getSiteMetaData();

  return (
    <div className={clsx(`flex items-center`, className)}>

      <p className="text-base leading-7">
        <div>
        Written by <b className="font-semibold">{author.name}</b>{" "}
        {author.summary}{" "}
        <a href={`https://twitter.com/${social.twitter}`}>
          Follow me on twitter
        </a>
        </div>
      <div>
        If you dont want to miss any new article, <a href={'https://rejmank.substack.com'}>
          subscribe at my substack
        </a>
        </div>
      </p>
    </div>
  );
}
