import { headers } from "next/headers";
import Image from "next/image";

export default async function Home() {
    const lat = headers().get("x-latitude") || -31.252587048673735;
    const lon = headers().get("x-longitude") || -61.491576886333654;

    const weather = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_APIKEY}&q=${lat},${lon}`,
        { cache: "no-store" }
    ).then((res) => res.json());

    const imageURL = `https://${weather.current?.condition.icon}`;

    return (
        <main
            className={`w-full h-[100vh] flex items-center justify-center ${
                weather.current?.is_day
                    ? "bg-white text-black"
                    : "bg-black text-white"
            }`}
        >
            <section className="flex flex-col items-center">
                <Image
                    src={imageURL}
                    width={64}
                    height={64}
                    alt="Weather icon"
                />
                <p className="text-5xl font-bold">{weather.current?.temp_c}°</p>
                <p>
                    {weather.location?.name}, {weather.location?.country}
                </p>
            </section>
        </main>
    );
}
