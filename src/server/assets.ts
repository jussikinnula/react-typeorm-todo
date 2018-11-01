import * as path from 'path';
import * as serveStatic from 'serve-static';
const assetsPath = path.join(__dirname, '../../target/assets');
export default serveStatic(assetsPath, { maxAge: 30 });
