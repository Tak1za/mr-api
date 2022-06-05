export interface IRequest {
    id: string;
    title: string;
    method: string;
    route: string;
    body?: string;
}

export const allRequests: IRequest[] = [
    {
        id: "b0316461-2dee-4ce9-8272-994d56ba2833",
        title: "Get inventory details",
        method: "GET",
        route: "https://petstore.swagger.io/v2/store/inventory",
    },
]