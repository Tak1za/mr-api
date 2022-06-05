export interface IRequest {
    title: string;
    method: string;
    route: string;
    body?: string;
}

export const allRequests: IRequest[] = [
    {
        title: "Get inventory details",
        method: "GET",
        route: "https://petstore.swagger.io/v2/store/inventory",
    },
    {
        title: "Create a new Pet",
        method: "POST",
        route: "https://petstore.swagger.io/v2/pet",
        body: '{"id":0,"category":{"id":0,"name":"string"},"name":"doggie","photoUrls":["string"],"tags":[{"id":0,"name":"string"}],"status":"available"}',
    }
]