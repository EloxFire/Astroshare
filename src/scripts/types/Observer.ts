// Pour différencier ces deux types cf. https://docs.astronomyapi.com/requests-and-response/observer-parameters

export type GETObserver = {
  longitude: number;
  latitude: number;
  elevation: number;
  date: string;
  from_date: string;
  to_date: string;
  time: string;
}

export type POSTObserver = {
  longitude: number;
  latitude: number;
  elevation: number;
  date: string;
  fromDate: string;
  toDate: string;
  time: string;
}
