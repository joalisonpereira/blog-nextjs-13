import { type NextRequest, NextResponse } from "next/server";
import { type Product } from "src/common/types";
import { HttpService } from "src/services/HttpService";

export async function GET(request: NextRequest) {
  const { products } = await HttpService.get<{ products: Product[] }>(
    "/products"
  );

  return NextResponse.json(products);
}
