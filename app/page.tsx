import { allBlogs } from "contentlayer/generated";
import Link from "next/link";

export default function Home() {
  return (
    <section>
      {allBlogs
        .sort((a, b) => {
          if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
            return -1;
          }
          return 1;
        })
        .map((item) => (
          <Link key={item.slug} href={`/blog/${item.sulg}`} className="mb-5">
            {item.title}
          </Link>
        ))}
    </section>
  );
}
