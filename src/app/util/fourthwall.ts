import axios from "axios";

const baseURL = "https://storefront-api.fourthwall.com/v1";
const storefrontId = process.env.NEXT_PUBLIC_FOURTHWALL_STKN;

const api = axios.create({
  baseURL: baseURL,
  params: {
    storefront_token: storefrontId,
  },
});
export async function getProducts() {
  try {
    const res = await api.get("/collections/all/products");
    if (res.data) {
      return res.data.results;
    }
  } catch (e) {
    console.log("Error fetching products:", e);

    return [];
  }
}

export async function getProduct(slug: string) {
  try {
    const res = await api.get(`/products/${slug}`);
    if (res.data) {
      return res.data;
    }
  } catch (e) {
    console.log("Error fetching product:", e);
    return null;
  }
}
