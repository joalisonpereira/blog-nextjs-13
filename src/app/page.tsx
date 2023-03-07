import Image from "next/image";
import { type Post } from "src/common/types";
import PostItem from "src/components/PostItem";
import { HttpService } from "src/services/HttpService";

async function Home() {
  const { posts } = await HttpService.get<{ posts: Post[] }>("/posts");

  const principalPost = posts[0];

  return (
    <main>
      <div className="container mx-auto text-white">
        <header>
          <div className="grid grid-cols-2 items-center gap-5">
            <div>
              <h1 className="font-semibold text-7xl text-white mt-20">
                The Blog
              </h1>
              <Image
                src="/marketing.jpg"
                alt={principalPost.title}
                width={600}
                height={300}
                className="mt-10 rounded-md"
              />
            </div>
            <div>
              <h1 className="text-6xl font-semibold">{principalPost.title}</h1>
              <p className="mt-8 text-gray-300">{principalPost.body}</p>
            </div>
          </div>
        </header>
        <section className="mt-20">
          <h2 className="font-semibold text-5xl  mb-10 text-center">Posts</h2>
          <ul className="list-none grid grid-cols-3 gap-3 mt-10">
            {posts.map((item) => (
              <PostItem
                key={item.id}
                title={item.title}
                description={item.body.slice(0, 100) + "..."}
                imageUrl={"/marketing.jpg"}
              />
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}

export default Home;
