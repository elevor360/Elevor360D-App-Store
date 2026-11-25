import csv,json,os,io,html,urllib.request,datetime,pathlib
from urllib.parse import urlsplit
root=pathlib.Path('affiliate-offers')
def convert(raw):
 r=csv.DictReader(io.StringIO(raw)); required={'ProductID','ProductName','ProductPrice','AffiliateURL','ImageURL200by200','MerchantName'}
 if not required.issubset(r.fieldnames or []): raise ValueError('Invalid feed headers')
 out=[]; seen=set()
 for x in r:
  if not x['ProductID'] or x['ProductID'] in seen or not x['ProductName']: raise ValueError('Invalid or duplicate product')
  u=urlsplit(x['AffiliateURL']); im=urlsplit(x['ImageURL200by200'])
  if u.scheme!='https' or u.hostname not in ('www.paidonresults.net','paidonresults.net') or not u.path.startswith('/c/63151/'): raise ValueError('Unexpected tracking link')
  seen.add(x['ProductID']); out.append(dict(id=x['ProductID'],name=html.unescape(x['ProductName']),price=x['ProductPrice'],description=html.unescape(x.get('SummaryDescription','')),category=html.unescape(x.get('Category','')),url=x['AffiliateURL'],image=x['ImageURL200by200'] if im.scheme=='https' else ''))
 if not out: raise ValueError('Empty feed; preserving previous catalogue')
 return out
if __name__=='__main__':
 secrets=json.loads(os.environ['SHOP_SECRETS']); config=json.loads((root/'shops-config.json').read_text()); failures=[]
 for shop in config['shops']:
  if not shop.get('enabled'): continue
  sid=shop['id']
  try:
   import re
   if not re.fullmatch(r'[a-z0-9-]+',sid): raise ValueError('Invalid shop ID')
   url=secrets[shop['secret']]; u=urlsplit(url)
   if u.scheme!='https' or u.hostname!='feeds.paidonresults.net': raise ValueError('Invalid feed host')
   with urllib.request.urlopen(url,timeout=90) as response: raw=response.read(30000001)
   if len(raw)>30000000: raise ValueError('Feed too large')
   products=convert(raw.decode('utf-8-sig')); target=root/(sid+'-products.json'); tmp=target.with_suffix('.tmp'); tmp.write_text(json.dumps({'updated':datetime.datetime.now(datetime.timezone.utc).isoformat(),'products':products},ensure_ascii=False)); tmp.replace(target)
   print(sid, len(products), 'products')
  except Exception as e:
   print(sid, 'refresh failed; previous catalogue retained', type(e).__name__); failures.append(sid)
 pathlib.Path('/tmp/affiliate-failures').write_text(' '.join(failures))
