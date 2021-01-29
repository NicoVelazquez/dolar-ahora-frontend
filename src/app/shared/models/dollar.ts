export class Dollar {
  constructor(public name: string,
              public buy: number,
              public sell: number,
              public date: Date,
              public source?: string,
              public order?: number) {
  }
}
