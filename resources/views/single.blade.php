<!DOCTYPE html>
<html lang="en">
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <link rel="icon" type="image/x-icon" href="/favicon.ico">

        <title>Medium Single Page webapp</title>
    </head>
    <body>

        <div id="app">
            <app></app>
        </div>

        <script type="text/javascript" src="js/app.js"></script>

    </body>
</html>