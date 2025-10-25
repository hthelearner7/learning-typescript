import { useEffect, useState } from "react";
import { tourSchema, type Tour } from "./types";
// import {fetchTours} from "./types";
function Component() {
    const url = "https://www.course-api.com/react-tours-project";
    const [tours, setTours] = useState<Tour[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isError, setIsError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const res = await fetch(url);
                if (!res.ok) {
                    throw new Error("failed to fetch url");
                }
                const rawData: Tour[] = await res.json();
                const result = tourSchema.array().safeParse(rawData);
                if (!result.success) {
                    console.log(result.error.message);
                    throw new Error(`Failed to parse tours`);
                }
                setTours(result.data);
                // console.log({ tours });
            } catch (error) {
                const msg =
                    error instanceof Error ? error.message : "some error";
                console.log(msg);
                setIsError(msg);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
        // fetchTours();
    }, []);

    if (isLoading) {
        return <h3>loading...</h3>;
    }
    if (isError) {
        return <h3>error... {isError}</h3>;
    }
    return (
        <div>
            <h2>React & Typescript</h2>
            <h2>Fetch Data</h2>
            <h1 className="mb-1">Tours</h1>
            {tours.map((tour, i) => (
                <h2 key={i} className="mb-1">
                    {i + 1}. {tour.name}
                </h2>
            ))}
        </div>
    );
}
export default Component;
