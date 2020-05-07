//import { createBrowserHistory } from 'history';
import createHashHistory from 'history/createHashHistory';

//For development use
//export default createBrowserHistory({baseName:document.location.href.replace('file://','')});
//For production use
export default createHashHistory();