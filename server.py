from http.server import BaseHTTPRequestHandler, SimpleHTTPRequestHandler, ThreadingHTTPServer
from urllib.parse import urlparse
import json
from pathlib import Path

HOST = "127.0.0.1"
PORT = 8000

class CommunityCooksHandler(SimpleHTTPRequestHandler):
    def do_GET(self):
        path = urlparse(self.path).path
        if path == "/api/status":
            payload = {
                "name": "Community Cooks",
                "status": "ok",
                "backend": "Python",
                "frontend": "HTML5/CSS3/JavaScript",
                "storage": "browser localStorage"
            }
            data = json.dumps(payload).encode("utf-8")
            self.send_response(200)
            self.send_header("Content-Type", "application/json; charset=utf-8")
            self.send_header("Content-Length", str(len(data)))
            self.end_headers()
            self.wfile.write(data)
            return
        if path == "/api/files":
            files = sorted(p.name for p in Path(".").glob("*.html"))
            data = json.dumps({"pages": files}).encode("utf-8")
            self.send_response(200)
            self.send_header("Content-Type", "application/json; charset=utf-8")
            self.send_header("Content-Length", str(len(data)))
            self.end_headers()
            self.wfile.write(data)
            return
        return super().do_GET()

if __name__ == "__main__":
    print(f"Community Cooks running at http://{HOST}:{PORT}")
    print("API health: http://127.0.0.1:8000/api/status")
    ThreadingHTTPServer((HOST, PORT), CommunityCooksHandler).serve_forever()
