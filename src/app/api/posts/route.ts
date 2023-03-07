import { type NextRequest, NextResponse } from "next/server";
import { type Post } from "src/common/types";
import { HttpService } from "src/services/HttpService";

export async function GET(request: NextRequest) {
  const { posts } = await HttpService.get<{ posts: Post[] }>("/posts");

  return NextResponse.json(posts);
}
