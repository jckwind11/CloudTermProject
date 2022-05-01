import { AppleSong } from "./AppleSong";

export class AppleResponse {
    data: AppleSong[];
    meta: {
        filters: {
            isrc: any;
        }
    }
}