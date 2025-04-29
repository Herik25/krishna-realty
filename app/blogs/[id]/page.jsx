import Header from "@/components/common/Header";
import { blogs } from "@/data/blogs";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function BlogDetail({ params }) {
  const blog = blogs.find((b) => b.id === Number(params.id));
  if (!blog) return notFound();

  return (
    <div>
      <Header />
      <section className="max-w-3xl mx-auto py-16 px-4">
        <Image
          src={blog.image}
          alt={blog.title}
          height={224}
          width={400}
          className="w-full h-auto object-cover rounded mb-6"
        />
        <p className="text-gray-500 text-sm mb-2">{blog.date}</p>
        <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
        <article className="prose prose-lg prose-blue">
          {blog.content.split("\n").map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </article>
      </section>
    </div>
  );
}
