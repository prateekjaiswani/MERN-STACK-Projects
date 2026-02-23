// static different pages

const xpress = require ('express');
const app=xpress();
const path=require ('path');
const publicpath=path.join(__dirname,'public');
// console.log(publicpath);

app.use(xpress.static(publicpath));// will use static function from xpress


app.listen(3000);

// Path is used folder access
// static method loads static content
// static html and css is complicated ..