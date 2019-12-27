#!/usr/bin/env python

import os
import SimpleHTTPServer
import SocketServer


PORT = 8000
if 'PORT' in os.environ:
    PORT = int(os.environ['PORT'])

Handler = SimpleHTTPServer.SimpleHTTPRequestHandler

httpd = SocketServer.TCPServer(("", PORT), Handler)

print("serving at port {}".format(PORT))
httpd.serve_forever()
