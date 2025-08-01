import AppLayout from '@/layouts/app-layout';
import { Head, Link } from '@inertiajs/react';

type Translation = {
    [locale: string]: string;
};

type Collection = {
    id: number;
    slug: string;
    name: Translation;
};

type Product = {
    id: number;
    slug: string;
    name: Translation;
    thumbnail?: string;
    base_price: {
        formatted: string;
    };
};

type Props = {
    collections: Collection[];
    products: Product[];
};

export default function Home({ collections, products }: Props) {
    return (
        <AppLayout>
            <Head title="Dashboard" />
            <div className="space-y-12 px-4 sm:px-6 lg:px-8">
                {/* Hero */}
                <section className="rounded-xl bg-pink-100 py-20 text-center">
                    <h1 className="text-brown-800 mb-4 text-4xl font-bold">Productes fets a mà per al teu petit</h1>
                    <p className="mb-6 text-lg">Amb molt d’amor i materials sostenibles</p>
                    <Link href="/categoria/estoigs" className="bg-brown-700 hover:bg-brown-800 rounded-full px-6 py-3 text-white">
                        COMPRA ARA
                    </Link>
                </section>

                {/* Collections destacades */}
                <section>
                    <h2 className="mb-4 text-2xl font-semibold">Col·leccions destacades</h2>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                        {collections.map((collection) => (
                            <Link
                                key={collection.id}
                                href={`/categoria/${collection.slug}`}
                                className="rounded-lg bg-pink-50 p-4 text-center shadow hover:shadow-md"
                            >
                                <p className="text-lg font-medium">{collection.name.ca}</p>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* Productos recientes */}
                <section>
                    <h2 className="mb-4 text-2xl font-semibold">Novetats</h2>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                        {products.map((product) => (
                            <Link key={product.id} href={`/producte/${product.slug}`} className="rounded-lg border bg-white p-4 hover:shadow-md">
                                {product.thumbnail && <img src={`/storage/${product.thumbnail}`} alt={product.name.ca} className="mb-2 rounded" />}
                                <p className="font-semibold">{product.name.ca}</p>
                                <p className="mt-1 text-sm text-gray-600">{product.base_price.formatted}</p>
                            </Link>
                        ))}
                    </div>
                </section>
            </div>
        </AppLayout>
    );
}
