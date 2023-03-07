export class HttpService {
  private static readonly baseURL = "https://dummyjson.com";

  public static async get<T = any>(path: string): Promise<T> {
    await this.delay(1000);

    const url = `${this.baseURL}/${path}`.replaceAll("//", "/");

    const response = await fetch(url);

    const data = await response.json();

    return data satisfies T;
  }

  private static async delay(ms: number) {
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve(null);
      }, ms)
    );
  }
}
