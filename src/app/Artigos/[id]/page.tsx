"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Layout from "@/pages/layout";
import PostId from "@/pages/modules/screens/dynamic";
import Image from "next/image";
import Mock from "@/pages/assets/images/mock.png"; // ajuste se necessário
import * as S from "@/pages/components/post/styles"; // ajuste se necessário

interface PostData {
  id: number;
  title: string;
  content: string;
  date: string;
  user_data: {
    user_name: string;
    user_id: number;
  };
}

export default function BlogPostPage() {
  const params = useParams();
  const id = params?.id;

  const [post, setPost] = useState<PostData | null>(null);

  const mock = {
    id: 0,
    user_data: {
      user_id: 0,
      user_name: "john doe",
    },
    title:
      "Desvendando o JavaScript: Dicas e Técnicas Essenciais para Desenvolvedores",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sodales leo nisi, at scelerisque metus pharetra sed. Nulla eu efficitur dolor. Integer sit amet dui ornare, tempor risus a, vestibulum purus. Morbi lacus magna, molestie varius elit a, dignissim volutpat dui. Nam sit amet sem condimentum, hendrerit tortor nec, ultricies eros. Curabitur eget sodales odio, non tempor ex. Vestibulum id fringilla est. Praesent id urna nisi. Phasellus ac odio eros. Vestibulum dictum erat nibh, vel placerat est condimentum vel. Phasellus malesuada, leo et commodo hendrerit, nisi tortor tincidunt ipsum, ut tincidunt enim sapien vel neque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus eu auctor felis.
Proin vitae malesuada mauris. Morbi quis ex ligula. Aenean consectetur mauris non iaculis porta. Nunc ultrices, mauris tincidunt pulvinar scelerisque, dolor est condimentum metus, ut interdum est nisl ut ante. Cras rhoncus lacus eu finibus convallis. Ut varius lacus eros, eget suscipit odio aliquet nec. Nam sem eros, ornare ac erat eu, pharetra finibus ex. Donec in massa vitae lectus blandit posuere. Cras ut risus id metus mattis dictum.

Pellentesque at urna feugiat, accumsan diam vel, condimentum mi. Fusce ac semper arcu, vel pellentesque ante. Aenean et volutpat orci. Donec vitae feugiat odio. Aenean vel luctus sem, vitae cursus urna. Suspendisse consectetur urna vitae aliquam ornare. Donec mattis nisl id lectus sollicitudin, pulvinar dictum velit lacinia. Quisque finibus justo a nibh rhoncus, a efficitur purus maximus. Etiam posuere libero id fringilla maximus. Morbi molestie quam fermentum dolor hendrerit condimentum. Suspendisse accumsan semper pretium. Donec nisi lacus, feugiat eu sem at, pretium consequat dolor. Integer commodo massa nisi, quis viverra massa interdum ac. Ut commodo et magna vel lobortis. Nullam varius enim nec ultricies lacinia. Proin egestas tempus est.

Cras ac ex ac ex auctor semper ac quis metus. Praesent et tempus nibh. Nam a efficitur risus. Cras nibh ex, lobortis at aliquam et, varius vitae turpis. Duis consequat velit varius velit mattis, non maximus est elementum. Donec vel tellus cursus enim posuere tempus ac at velit. Maecenas quis eros purus. Proin vulputate ante vitae placerat varius. Maecenas vitae ligula nec tortor tempor lobortis non quis velit. Sed vulputate et erat id laoreet. Etiam erat mi, bibendum non mauris id, aliquet malesuada urna. Nam ex est, vehicula eget consequat in, bibendum ac elit. Fusce porta pellentesque placerat.

Suspendisse potenti. Sed pulvinar facilisis libero vitae gravida. Nam quis pellentesque sapien. Pellentesque venenatis vel ipsum tincidunt hendrerit. Vestibulum eleifend erat nec sem aliquam, aliquet lacinia est congue. Fusce a nisl non massa congue vestibulum sed nec nisl. Vestibulum id maximus nibh. Aliquam ante sapien, dapibus ac vestibulum interdum, lacinia vitae mauris. Etiam non posuere orci, non semper risus. Aenean non facilisis urna. Praesent ut dui nibh. Morbi lacus dolor, egestas facilisis pellentesque in, cursus pretium ligula. Praesent rutrum turpis in nisl blandit, a euismod lectus suscipit. Vivamus ut ullamcorper odio, vel vulputate lacus.`,
    date: "21/05/2025",
  };

  useEffect(() => {
    if (id) {
      const mockPost: PostData = {
        id: Number(id),
        title: "Desvendando o JavaScript",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam cupiditate voluptatem reiciendis error, delectus assumenda eaque dignissimos qui ratione? Cumque, at eveniet vero blanditiis nobis accusantium cum sed illo architecto?",
        date: "25/05/2025",
        user_data: {
          user_name: "John Doe",
          user_id: 1,
        },
      };

      setPost(mockPost);
    }
  }, [id]);

  if (!post) return <p>Carregando post...</p>;

  return (
    <Layout>
      <PostId content={mock} />
    </Layout>
  );
}
