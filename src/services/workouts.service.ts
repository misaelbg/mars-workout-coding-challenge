import http from "@/common/utils/http";
import { GetResponse } from "@/types/http.type";

class WorkoutsService {
  binId: string;
  binVersion: string;

  public constructor() {
    this.binId = "635d64d62b3499323bee96a8";
    this.binVersion = "0";
  }

  public getAll() {
    return http.get<GetResponse>(`/${this.binId}`);
  }
}

export default new WorkoutsService();
