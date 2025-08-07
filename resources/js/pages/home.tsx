import { Container } from '@/components/container';
import { buttonVariants } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { Head, Link } from '@inertiajs/react';

type Translation = {
    [locale: string]: string;
};

type Collection = {
    id: number;
    slug: string;
    name: Translation;
    thumbnail?: string;
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
    console.log(collections);
    return (
        <AppLayout>
            <Head title="Dashboard" />
            {/* Hero */}
            <section className="bg-pink-100 py-20 text-center">
                <h1 className="text-brown-800 mb-4 text-4xl font-bold">Productes fets a mà per al teu petit</h1>
                <p className="mb-6 text-lg">Amb molt d’amor i materials sostenibles</p>
                <Link href="/categoria/estoigs" className={buttonVariants({ variant: 'default' })}>
                    COMPRA ARA
                </Link>
            </section>
            <Container>
                <section>
                    <h2 className="mb-4 text-2xl font-semibold">compra per categoria</h2>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                        {collections.map((collection) => (
                            <Link
                                key={collection.id}
                                href={`/categoria/${collection.slug}`}
                                className="rounded-lgp-4 text-center shadow hover:shadow-md"
                            >
                                {collection.thumbnail && <img src={collection.thumbnail} alt={collection.name.ca} className="mb-2 rounded" />}
                                <p className="text-lg font-medium">{collection.name.ca}</p>
                            </Link>
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="mb-4 text-2xl font-semibold">novetats</h2>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                        {products.map((product) => (
                            <Link key={product.id} href={`/producte/${product.slug}`} className="rounded-lg border bg-white p-4 hover:shadow-md">
                                {product.thumbnail && <img src={product.thumbnail} alt={product.name.ca} className="mb-2 rounded" />}
                                <p className="font-semibold">{product.name.ca}</p>
                                <p className="mt-1 text-sm text-gray-600">{product.base_price.formatted}</p>
                            </Link>
                        ))}
                    </div>
                </section>
            </Container>
        </AppLayout>
    );
}
