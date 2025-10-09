import { z } from "zod";

const url = "https://www.course-api.com/react-tours-project";

const tourSchema = z.object({
    id: z.string(),
    name: z.string(),
    info: z.string(),
    image: z.string(),
    price: z.string(),
    // something: z.number(),
});

// type Tour = {
//     id: string;
//     name: string;
//     info: string;
//     image: string;
//     price: string;
//     something: boolean;
// };

type Tour = z.infer<typeof tourSchema>;

async function fetchData(url: string): Promise<Tour[]> {
    try {
        const res = await fetch(url);
        console.log(res);
        if (!res.ok) {
            throw new Error(`HTTP ERROR! status ${res.status}`);
        }
        const rawData: Tour[] = await res.json();
        const result = tourSchema.array().safeParse(rawData);
        // console.log("result", result);
        if (!result.success) {
            throw new Error(`Invalid data: ${result.error}`);
        }

        return result.data;
    } catch (error) {
        const errorMsg =
            error instanceof Error ? error.message : "there was an error";
        console.log(error);

        console.log(errorMsg);
        return [];
    }
}

const tours: Tour[] = await fetchData(url);
tours.map((tour: Tour, i: number) => {
    console.log(i, tour.name);
});
