import { getProduct } from "@/app/util/fourthwall";
import React from "react";
import MerchPage from "./MerchPage";

type Props = {
  params: Promise<{ id?: string }>;
};

export default async function page({ params }: Props) {
  const param = await params;
  const id = param.id;

  const product = await getProduct(id ?? "");
  if (!product) return <h1>404 Not Found</h1>;
  console.log(product);
  const md = product;
  return <MerchPage pd={md} />;
}
