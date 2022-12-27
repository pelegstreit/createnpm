import marker from '@ajar/marker';
export default function slugger(...args){
    marker.red(args)
    let connected = args.join("-")
    return connected;
}
 