import { useQuery } from "@tanstack/react-query";
import { fetchTours } from "./types";

const Component = () => {
    // const returnedValue = useQuery({
    //     queryKey: ["tours"],
    //     queryFn: fetchTours,
    // });
    // console.log(returnedValue);
    const {
        isPending,
        data: tours,
        error,
        isError,
    } = useQuery({
        queryKey: ["tours"],
        queryFn: fetchTours,
    });
    // console.log(isPending, tours, error, isError);

    if (isPending) {
        return <h2>Loading...</h2>;
    }
    if (isError) {
        return <h2>Error {error.message}</h2>;
    }

    return (
        <div>
            <h2 className="mb-1">Tours </h2>
            {tours.map((tour) => {
                return (
                    <p className="mb-1" key={tour.id}>
                        {tour.name}
                    </p>
                );
            })}
        </div>
    );
};

export default Component;
