export interface ITabData {
    tabKey: string;
    id: string;
    name: string;
    protocol: string;
    url: string;
    requestType: string;
    requestBody: string;
    responseStatus: string;
    responseBody: string | null;
}