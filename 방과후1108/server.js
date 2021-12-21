const http = reuire('http')
http.createServer((req, res) => {

    res.writeHead(200, {'Content-Type' : 'text/plain'})
    res.write('My Name is yonghyun')
    res.end()

}).listen(2000)