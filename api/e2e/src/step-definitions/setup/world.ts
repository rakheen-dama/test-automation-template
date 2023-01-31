import playwright, {APIRequestContext} from 'playwright';
import {IWorldOptions, setWorldConstructor, World} from '@cucumber/cucumber';
import {GlobalAPIResponseVariables} from "../../env/global";

export type Api = {
    request: APIRequestContext
}

export class ScenarioWorld extends World {
    constructor(options: IWorldOptions) {
        super(options);

        this.globalAPIResponseVariables = {};
    }

    globalAPIResponseVariables: GlobalAPIResponseVariables;
    api!: Api;

    async init(): Promise<Api> {
        const request = await this.newRequest();
        this.api = { request };
        return this.api;
    }

    private newRequest = async (): Promise<APIRequestContext> => {
        return await playwright.request.newContext({
            extraHTTPHeaders: {
                'Content-Type': 'application/json; charset=utf-8',
                'secure': 'false',
                // 'authorization': 'Bearer ' + await this.getToken(),
            },
        });
    }

    //Fetch and return an access token
    private getToken = async () => {
        const response = await this.api.request.post('/login', {data: {username: 'admin', password: 'admin'}});
        const res = await response.json();
        return this.extractToken(res)
    }

    //Extract token from json response
    private extractToken = async (response: any) => {
        return response.token.toString();
    }

}



setWorldConstructor(ScenarioWorld);