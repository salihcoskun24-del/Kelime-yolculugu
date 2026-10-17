from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from pathlib import Path
import os, socket, webbrowser
os.chdir(Path(__file__).parent / 'www')
try:
    s=socket.socket(socket.AF_INET,socket.SOCK_DGRAM)
    s.connect(('192.0.2.1',1)); ip=s.getsockname()[0]; s.close()
except OSError: ip='BILGISAYARIN-YEREL-IP-ADRESI'
print('Bilgisayar: http://localhost:8080')
print(f'Ayni Wi-Fi agindaki telefon: http://{ip}:8080')
print('Durdurmak icin Ctrl+C. HTTPS olmadan telefonda yukleme/cevrimdisi desteklenmez.')
webbrowser.open('http://localhost:8080')
ThreadingHTTPServer(('0.0.0.0',8080),SimpleHTTPRequestHandler).serve_forever()
