 import slugger from "./index.mjs";
 import marker from '@ajar/marker';


const word = slugger("hello", "world", "this", "is", "slugger")
marker.blue(word)