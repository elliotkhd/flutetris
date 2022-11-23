'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "3b3d31da9198e3611c965ccf5dc2047d",
"index.html": "b1527d019e690faac6f67dbce6cfce45",
"/": "b1527d019e690faac6f67dbce6cfce45",
"main.dart.js": "09da5aec6185d42bf51e2d73ab4bc131",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "d89f207d94f5ef0fd2cca96a473f9108",
"icons/Icon-192.png": "bf56b29e87c6e1dfff9e53f8fc17046c",
"icons/Icon-maskable-192.png": "bf56b29e87c6e1dfff9e53f8fc17046c",
"icons/Icon-maskable-512.png": "21efa8b32d22047bdce4c59eccaa94ba",
"icons/Icon-512.png": "21efa8b32d22047bdce4c59eccaa94ba",
"manifest.json": "8c490b97d4194266752ad32102ffd348",
".git/ORIG_HEAD": "e0967117514f0dd55be7a5c25736d863",
".git/config": "913ee2247c1305a91f30597ce9bc8f35",
".git/objects/50/fd7ed1e7a552b22b2da179446c4e127233eca8": "703f76fbd8e3752ad08390a7dd2f1ba1",
".git/objects/68/cd21755895469e184eb6532efb15e4d2dc6b89": "147996746e4c913ec3ddbe75e8080812",
".git/objects/57/c05d5008f89b45fb2654135df377ec5d37f42b": "a1741df8f9ca073ba2a981a12c1d6c6f",
".git/objects/6f/1471b76700818171c595de3a34a0183d2cda8c": "a4ef35872d0e823cf5f45263c0a35f4a",
".git/objects/6f/f903a75ddf04f5f9fe40c78cab26691f09a3d9": "8e5f6c59564f1ae5142249d43b8dd1d3",
".git/objects/9e/60b4a9fe4843ebffa9abb22c3a50cd66939505": "f1f89e16f17d7b91a30cf57f160292f4",
".git/objects/35/7164bae0f9a4545b00776ba1ac273326de2084": "6bcca39a9338181b9e622fcd0526a88a",
".git/objects/3c/e3fdce5e138cbbf33f728156fd26e5f9949733": "be683b313db2ecc50743def1472ca4b8",
".git/objects/3d/2928cd0e07a09901cb1cc7b9f21857cd8ec53b": "5961411077d74ef883773e9ab5e30cb6",
".git/objects/58/ab0d756750bed47390b2464b2c484f99d98741": "bae816fab2cb65c1f7742d977bb94e7b",
".git/objects/94/a25f7f4cb416c083d265558da75d457237d671": "f4ba8c706b5e4a214d83e95a0099370a",
".git/objects/d9/bbcfb68e8e802d6680607e73181b893dec363f": "491a313bc25a83304cce301e3492d954",
".git/objects/ac/f1908785a2e121cf223a147a81b5678e266d4a": "a06e716d8a780e9ac18920f21c924d48",
".git/objects/bb/6c5bc6744cb065ed6d7a1a09821f9bfaf6bae5": "2244ce6e75da5133ceac376e09c253c8",
".git/objects/d1/a3fc01a0ca3b09d7d398b83546f4fb6bbdf27d": "4a84c6b96ee3978f3248ea9aa8d1a422",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/ebd4805981b8400db3e3291c74a743fef9a824": "6c33f0e88a71d9ba8563eab3ee932f04",
".git/objects/d8/d40324a881947a589af02460dcc92e1fbff0ba": "da0ce5bad87ab421847ab98391ba3a7e",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/dff1b21b0706f70ae4707e8c7a64f84ca000e6": "ec2e0e8a6a5538702d1cbccb123f8120",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f5/89ca37d210990980a9d9b1a5cb4a29d2db6c70": "8b8d21aac8e6cdbec1fc106163311c31",
".git/objects/ca/126f16e84aa46d5f3098ae109bd576939e7981": "651c2e14911ae2efdf8f3c1360e11049",
".git/objects/fb/c3e9007886bb2acae8d822cb7c75551cf10082": "e9312e40b263cf05521339ec1322f4d6",
".git/objects/c1/4efbebce85c57439a4d7b8bcbf610ef10bc73d": "609a35ef4dcf29627945b811ae609335",
".git/objects/ec/2ec064b4656d10af9b708b0d4117649d62dec3": "46298dd72ffa9191b4e697eb03398c6a",
".git/objects/4b/3d595d3dfaaed5fc00b34b7caa8d1fb9331896": "4ff51fe74d452588127ccd0e8400b86d",
".git/objects/11/4e4a7e9a83eb94d4faa3e6e5a542071a4c9651": "b123e629dd522146ac79f30ae6d9917a",
".git/objects/7c/6580f858f5b4f3c548909cb626a838d4a653b0": "2972b02f590cf27bf9546cc96e8370bf",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/16/6c4e953cfa410286450ccac2713a1cba636797": "45bc654da0e489c0031398bdf3a5c100",
".git/objects/16/3d0b2e02e4d4052787ae0b1fa103c53deb9a59": "740d9cc29fbeccd9e169137591bf4bec",
".git/objects/87/a4732ab75645494835a9ea67bd952f86b95fa6": "02218bce89b8554d3324056c4b2684df",
".git/objects/80/21ae9851aaba115f9a94410cdef738e6c526af": "10d5b0f9823a171a8ce20dd2b5d1770e",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/8a/88cfe8acbd5ba10354a5a15c8d995633c937e6": "c4da1c464843d094633b853e17ad40aa",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/5f54a3bf057f5ec97e6b7b1ec417ce2a6ee477": "ea3a59d45fff1816a5a88438cfa41a26",
".git/objects/4c/d45cd3d77dc0d3cabc156388366e75d46b0a6c": "dff18afac1bef24a6fa53a5a638fb940",
".git/objects/26/d33521af10bcc7fd8cea344038eaaeb78d0ef5": "39554bb11371007e021a7fb3361ecd47",
".git/objects/4d/3c69e53199034c9be1ed21f20e4a20a01acf2f": "a86b1039ddf8aa3e60dbe1d49b9e5f3a",
".git/objects/81/37a3888756c28aaa1f3b0323b52cbd6cbd2d7b": "caf17629f63936a704ffd4e9e1a0ba7e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/bf0a99ed2a52c83de70cd4374f156bfcfdbee8": "91c08bbbb06d6ae92ebb96275633ad55",
".git/objects/07/7a78f5a993692ec4cf9c20d4f5a5173d6a2cef": "26276c5b887b072e5a7b72aaee67f9aa",
".git/objects/65/925eb80f8ae46be7920b305b0b10d5639fdf3e": "d5b14a5caccb6c70b27960748a1afd5c",
".git/objects/65/378c229764fb33084e9da18a1f00155569dc72": "8119f182a52aad71cdcc15f3fba26888",
".git/objects/62/48aad7f88cf0022cb414f3819215fe49aa5bba": "53aad0be0c4cf77544b3938f2ad4ec45",
".git/objects/62/5929a7452f6091bacdd53e014e8ef97ab53914": "9541760045137b5b21f40bcfde687a13",
".git/objects/54/96070494e1fa6e30264aaa957c69c2229a3e1a": "671171d5151e11c30dc4257e5916da4e",
".git/objects/98/9c4b3878635e9d80331a5f8830b7cc0312f670": "8a60863eec1a28fefe362be58a417c98",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/30/ac85c424343844822606017651e644938bca30": "fab1832f67bf8f259a49617721b5aa1f",
".git/objects/30/ffb13de28a7af435dab59f138c59a6f1af1517": "8176fc48670424fdcc06cf2d8513098a",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/63/9900d13c6182e452e33a3bd638e70a0146c785": "488924a8ec51457535ebf377a60e23c8",
".git/objects/63/fa9ee459cc6bfa35c9c680927ac05ced4c947c": "3027fd2a3ae58c0ab02e0efb3736174c",
".git/objects/90/d68934a585e8fcd53ba6ae801c2e602adc2ea3": "61658871da2138a15de2f47edee4904c",
".git/objects/b8/c42abbc08fa8765cef9e2c75783024c2f6bffa": "0d3b62efee166c992551137126cbeec9",
".git/objects/b8/06a37b6150a0948fee856a8da91210b0d2abf7": "c8693c842bd0641bac375d09fd999777",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/b0/795829d9b528951cda908964876b61e3dd7fea": "8037dd1df9bf26a992e358c4a2caf90f",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/1485b095655ae1f888e522184ae9370ade6f79": "b4e455119d389a2b4aa0b307cb2f6a33",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ef/335346a6c2846012db9892ad15012200f64f4c": "a76695f1c97f85b0fa61fcd67327b48c",
".git/objects/ef/5cc9727b084c645b255505850293580b5be250": "bacb26e0d49bbaa1b78f7b5d8a659735",
".git/objects/c3/ab451dda8b763d47fb1fd21f75c81b399f415d": "1fd30ad42bdacb11746479884a418fda",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e8/acbb72a2b5eaf06a7735ff441b010995b51499": "aab109a5b5653df5b9c07c163ae96922",
".git/objects/f6/65f8f2c709a36bb235a5b56787b4fb17c63e18": "5e84c97722f076a914ca4170e1081f61",
".git/objects/f1/e2e6fc9758ccfc3bf5323dadb74bf6381081da": "06ba802afda7f7b4af20a851a305fbcc",
".git/objects/f8/019ce0600a07152fa4941b1561b1015d4bd53f": "03790066345fdabd2b13b2f39a8a2e58",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2c/9a306e09ace85334c3e0d3281463e49409ab42": "f03d947761b557fec0b1b56c5519107e",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/b1b4acc9bbb12c2e6dd2ca645316208473d7d8": "89f6bef94c91d0a2ea64694d3a84d59e",
".git/objects/1b/c2a4f0ccf49dbeecc4331ef6bb763f0aa9048b": "61451dfc286bb638d15dab1afb667cb7",
".git/objects/77/00129dbf79665f6d57dc023b4b8fb1a52cba01": "7dbe9819c85e28ad26b2d3d5b19ec2a1",
".git/objects/4f/c6c758fbf313c41fc3596d3b3fb09f777ff4de": "4c021bf0ef193214917a5c05ca5aa3d5",
".git/objects/15/30239a7ad25b45692b1634f380ba55781a1f34": "f223605cbeddfaea226b5c6e74a735c3",
".git/objects/85/e7c1dfcb7fbb33f932c81024018cd8c10519da": "120e3904444059277744fb60b97d42da",
".git/objects/85/bbca5ef6da4a24872bf5f8cbfb238dafb4ccff": "b9749451c788b5de583eff41bb3bc8a3",
".git/objects/71/f8da6325c160cb079522f55a3a318a26f3523b": "fa505fa06ace952bffdaf1f5587b7f95",
".git/objects/82/74079e6128d8651c41e5a7ac9a5700bc9d1de4": "e5bd4519c8c329b6f04dc8b739de217e",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/8b/3598401fc472fcf1ce77407af8ad69534c8f89": "76f053ce70a481c79e388e43e4b79530",
".git/objects/7a/35347c53e188a9b986ddf7d736a74947e4a8c7": "ad6e0e2b03003a40f9829b55470d54d2",
".git/objects/25/a62b8e4640da36c683c6ea442812731a5b03aa": "913621bcb952101ad12b00052a2387bb",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5a56fce57400bf3c02e835d302dcaa00",
".git/logs/refs/heads/master": "2e0f880455eab968de1bd65640dc89d4",
".git/logs/refs/heads/main": "3fa46f7b8039985ff4fb9fbae10b8775",
".git/logs/refs/remotes/origin/HEAD": "d9dcbd65f55d0975e720709613d91756",
".git/logs/refs/remotes/origin/master": "d5189b31319aa6c60e615ce5cec975e5",
".git/logs/refs/remotes/origin/main": "c258781eb32c559194d53842e4a62725",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "e0967117514f0dd55be7a5c25736d863",
".git/refs/heads/main": "092217d6e156a007b73d7f1749a1acd0",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/master": "07eb1ab189a4f134cbd86f54cc627f29",
".git/refs/remotes/origin/main": "092217d6e156a007b73d7f1749a1acd0",
".git/index": "a2756ee12262d4c17ed5c97b29245be7",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/COMMIT_EDITMSG": "950f6446f3f649ccf75f31379418f109",
".git/FETCH_HEAD": "ff361a4f96eb03c06bd6d510ae09e10b",
"assets/AssetManifest.json": "8e2fa2b049b512613e6a8c05a7824852",
"assets/NOTICES": "fe8d513f0b7d8c2e8fb0340b8af2a7a9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "4d9bcdec6f2f5786f62cc497e386f40e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/d0.png": "9a17df6498fa2a35823442979a588782",
"assets/assets/d1.png": "02e2ee309b1ac68566ce795c80059225",
"assets/assets/d3.png": "ed3f0b9751f662bcbea25ba0c558a25e",
"assets/assets/d2.png": "b065c4fafaea8456c1778ea2ec06ec24",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
".idea/vcs.xml": "166acef3d301bd241d0d6da15bc5ad3c",
".idea/workspace.xml": "357849e5585a4b7600fdd45f67b91a47",
".idea/modules.xml": "1eb3b065c55895e347308e50cd717dee",
".idea/web.iml": "52db5efd0fe9f576a1302b8c4b5eac6c",
".idea/misc.xml": "e6b023077aa4876dbe12734108325458"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
