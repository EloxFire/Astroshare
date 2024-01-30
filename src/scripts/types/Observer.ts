// Pour différencier ces deux types cf. https://docs.astronomyapi.com/requests-and-response/observer-parameters

export type GETObserver = {
  longitude: number;
  latitude: number;
  elevation: number;
  from_date: string;
  to_date: string;
  time: string;
}

export type POSTObserver = {
  longitude: number;
  latitude: number;
  elevation: number;
  fromDate: string;
  toDate: string;
  time: string;
}
