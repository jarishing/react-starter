const path      = require('path');
const express   = require('express');
const httpProxy = require('http-proxy');

const app       = express();
const proxy     = httpProxy.createProxyServer({});

app.use(express.static('build'));

// change target in production 
app.use('/api', (req, res, next) => {
    proxy.web(req, res, {
        changeOrigin: true,
        autoRewrite: true,
        followRedirects: true,
        target: 'http://52.226.35.173:3000',
    });
})

app.get('*', (req, res) => {
    res.sendFile(path.resolve( __dirname, 'build', 'index.html'));
});

app.listen( 3100, ()=>{
    console.log(`Server on`);
});