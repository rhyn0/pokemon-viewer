import { listEndpointFetchBuilder } from "@/lib/list-fetch-builder";
import { pokeathlonStatListZ, endpointCollectionName } from "../types";
import { queryOptions } from "@tanstack/react-query";
import keyFactory from "./keys";

export const getPokeathlonStatList = listEndpointFetchBuilder(
    endpointCollectionName,
    pokeathlonStatListZ,
);

export const getListPokeathlonStatQueryOptions = queryOptions({
    queryKey: keyFactory.all,
    queryFn: () => getPokeathlonStatList({ offset: 0 }),
});
