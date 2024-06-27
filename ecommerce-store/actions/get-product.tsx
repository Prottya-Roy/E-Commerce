import { Product } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const getProduct = async (id: string): Promise<Product> => {
    const res = await fetch(`${URL}/${id}`
        , {
            cache: 'no-store'
        });

    if (!res.ok) {
        throw new Error('Failed to fetch categories');
    }

    return res.json();
}

export default getProduct;