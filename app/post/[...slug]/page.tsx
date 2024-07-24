import { MDXRemote, type MDXRemoteSerializeResult } from "next-mdx-remote";
import { notFound } from "next/navigation";
import { serialize } from 'next-mdx-remote/serialize'

interface Props {
  mdxSource: MDXRemoteSerializeResult | null;
}

export default async function PostDetailsPage({ mdxSource }: Props) {
  if (!mdxSource) {
    notFound();
  }

  return <MDXRemote {...mdxSource} />;
}

export async function getStaticProps() {
  // MDX text - can be from a local file, database, CMS, fetch, anywhere...
  const res = await fetch("https:...");
  const mdxText = await res.text();
  const mdxSource = await serialize(mdxText);
  return { props: { mdxSource } };
}
