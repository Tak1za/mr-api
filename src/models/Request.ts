export interface IRequest {
    title: string;
    method: string;
    route: string;
    body?: string;
}

export const allRequests: IRequest[] = [
    {
        title: "GET 1",
        method: "GET",
        route: "https://petstore.swagger.io/v2/store/inventory",
    },
    {
        title: "POST 1",
        method: "POST",
        route: "https://petstore.swagger.io/v2/pet",
        body: '{"id":0,"category":{"id":0,"name":"string"},"name":"doggie","photoUrls":["string"],"tags":[{"id":0,"name":"string"}],"status":"available"}',
    }
]