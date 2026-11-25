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
 url=os.environ['BTR_FEED_URL']; u=urlsplit(url)
 if u.scheme!='https' or u.hostname!='feeds.paidonresults.net': raise ValueError('Unexpected feed host')
 with urllib.request.urlopen(url,timeout=90) as response: raw=response.read(30000001)
 if len(raw)>30000000: raise ValueError('Feed too large')
 products=convert(raw.decode('utf-8-sig')); target=root/'btr-products.json'; tmp=target.with_suffix('.tmp'); tmp.write_text(json.dumps({'updated':datetime.datetime.now(datetime.timezone.utc).isoformat(),'products':products},ensure_ascii=False)); tmp.replace(target)
