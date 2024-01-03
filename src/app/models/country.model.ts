export interface Country{
    name:{common:string};
    flags:{svg:string};
    capital:string;
    region:string;
    currencies:{[key:string]:{name:string,symbol:string}};
    population:number;
    latlng:number[];

}