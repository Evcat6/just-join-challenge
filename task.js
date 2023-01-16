const fs = require('fs');
const http = require('http');

const html = 
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Just Join IT task</title>
    <style type="text/css">
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: 'Roboto', sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
        .container {
            display: flex;
            flex-direction: column;
            row-gap: 25px;
            align-items: center;
        }
        .button {
            background-color: #2B2D42;
            border: none;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 35px;
            color: #fff;
            border-radius: 8px;
            width: 90px;
        }
        .title {
            font-size: 30px;
            font-weight: bold;
            padding: 20px;
        }
    </style>
    </head>
    <body>
    <div class="container" >
    <p id="paragraph" class="title" ></p>
    <button id="btn" class="button" >Click</button>
    </div>
    <script type="text/javascript" >
        let i = 0;
        const titleValues = [{title: "Lorem Ipsum", color: '#204E4A', background: "#635D5C"}, {title: "Ipsum Lorem", color: '#49111C', background: "green"}];
        const button = document.getElementById("btn");
        const title = document.getElementById("paragraph");
        title.innerHTML = titleValues[i].title;
        title.style.color = titleValues[i].color;
        title.style.backgroundColor = titleValues[i].background;

        const changer = () => {
            if(i === 0) {
                i++;
            }else {
                i--;
            }
             title.innerHTML = titleValues[i].title;
             title.style.color = titleValues[i].color;
             title.style.backgroundColor = titleValues[i].background;
        }
        button.addEventListener("click", changer)
    </script>
</body>
</html>`

const PORT = 3000;

fs.writeFile('./index.html', html, () => console.error(`site is running on http://localhost:${PORT}`));

fs.readFile('./index.html', function (err, html) {

    if (err) throw err;    

    http.createServer(function(request, response) {  
        response.writeHead(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(PORT);
});
