import { AppleSong } from "./AppleSong";

export class AppleRetryResponse {
    results?: { 
        songs?: {
          data: AppleSong[]; 
        }
    }
}