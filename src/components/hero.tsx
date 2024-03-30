import Img, { StaticImageData } from "next/image";

interface HeroProps {
    imgData: StaticImageData;
    imgAlt: string;
    title: string;
}

export default function Hero(props: HeroProps) {
    const { imgData, imgAlt, title } = props;
    return (
        <div className="relative h-screen">
            <div className="absolute -z-10 inset-0">
                <Img src={imgData} alt={imgAlt} fill style={{objectFit: 'cover'}}/>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900" />
            <div className="pt-48 flex justify-center items-center">
                <h1 className="text-white text-6xl">{title}</h1>
            </div>
        </div>
    )
}