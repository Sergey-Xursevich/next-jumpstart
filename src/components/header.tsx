import Link from "next/link";


export default function Header() {
    return (
        <div className="w-full absolute text-white z-10">
            <nav className="container relative flex flex-wrap items-center justify-between mx-auto p-8">
                <Link href="/" className="font-bold text-3xl">Home page</Link>
                <div className="space-x-4 text-xl flex items-center">
                    <Link href="/performance" className="mx-3">Perfomance page</Link>
                    <Link href="/reliability" className="mx-3">Reliability page</Link>
                    <Link href="/scale" className="mx-3">Scale page</Link>
                </div>
            </nav>
        </div>
    )
}