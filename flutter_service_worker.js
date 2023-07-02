'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.json": "60e1a55902f9aa06400a2ffe57ee9bc6",
"assets/AssetManifest.smcbin": "59496856952904378747eb87982c85aa",
"assets/FontManifest.json": "b08fa1b18611a59f5b5f4b75b52128b9",
"assets/fonts/MaterialIcons-Regular.otf": "fed0ff041886cb69897d0d9e3e1583f2",
"assets/lib/assests/happy_customers.png": "45dae10a281ee3859bf7fe4a8488b841",
"assets/lib/assests/instagram_logo.png": "3b2748c5e01c22064b004e2da31a59c7",
"assets/lib/assests/our_printer.jpg": "16400173dc2d8c1e9c472415c7b6a6c5",
"assets/lib/assests/printer.jpg": "df9fba9e0bbea7437d13e359bdefbb71",
"assets/lib/assests/tal.jpg": "0660b787b5e47d2990b5f8409b18d2e8",
"assets/NOTICES": "a2f30375f695f869c2676cdc1cb38d80",
"assets/packages/social_media_buttons/fonts/SocialMediaIcons.ttf": "6483bf9fdd106eb77d6f3c04dfe35057",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"CactusPrints.github.io/.git/COMMIT_EDITMSG": "4c613ed6b92246a00c19b70bd3e752af",
"CactusPrints.github.io/.git/config": "9c39e4f142de881133cc026bc4a02f19",
"CactusPrints.github.io/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"CactusPrints.github.io/.git/FETCH_HEAD": "27d67f07cb547239e91a0e67c773116e",
"CactusPrints.github.io/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"CactusPrints.github.io/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"CactusPrints.github.io/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"CactusPrints.github.io/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"CactusPrints.github.io/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"CactusPrints.github.io/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"CactusPrints.github.io/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"CactusPrints.github.io/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"CactusPrints.github.io/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"CactusPrints.github.io/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"CactusPrints.github.io/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"CactusPrints.github.io/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"CactusPrints.github.io/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"CactusPrints.github.io/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"CactusPrints.github.io/.git/index": "087514cc2df7a0e7f7a8b00d0ee08b3c",
"CactusPrints.github.io/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"CactusPrints.github.io/.git/logs/HEAD": "a1cdd6811a774b869bfa22d8e46733fe",
"CactusPrints.github.io/.git/logs/refs/heads/main": "a1cdd6811a774b869bfa22d8e46733fe",
"CactusPrints.github.io/.git/logs/refs/remotes/origin/HEAD": "3856b42b3c8d252424cbc52102a85c19",
"CactusPrints.github.io/.git/logs/refs/remotes/origin/main": "c52a30690ba6192eb3955fd160c6f6fd",
"CactusPrints.github.io/.git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
"CactusPrints.github.io/.git/objects/08/39b3e9a803f9283b70c213652e1b80b2b98138": "cb1dd33bc5948e143df7654fa0521cb3",
"CactusPrints.github.io/.git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
"CactusPrints.github.io/.git/objects/14/3ebe3ef78744ff847aea6e9105dade7f43ea7e": "eab0b71acc168af40ada7a4b6f213305",
"CactusPrints.github.io/.git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
"CactusPrints.github.io/.git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
"CactusPrints.github.io/.git/objects/27/2ae9ed6e1a4c8b8a16fb5ab59d9325fc79d613": "4eed0b5849d5f6f57bba42c98f764266",
"CactusPrints.github.io/.git/objects/27/aaf7fe8caec2ae58231a946ef3e4fffb32ed72": "f49a181b9faaa8f7c03b98c1494a87f2",
"CactusPrints.github.io/.git/objects/2c/694c9844770986b04b2f1ff096b5dfe64b7ed2": "d598526cce515387503b16f2dedafecd",
"CactusPrints.github.io/.git/objects/2e/a3dd356ef6b964bedacd9864d66b373a0cfe5b": "543ee89decbbcb5c27b1e56b0b693575",
"CactusPrints.github.io/.git/objects/33/9d65e049a1271efe5f55a582f58aa309cbec67": "5755a239afc10cd85ed16fadd84dd1a7",
"CactusPrints.github.io/.git/objects/35/89de58b55f99ea030e3b39e9338a306e1fe506": "fbc917a95d7d0649489c73dcdfcb416e",
"CactusPrints.github.io/.git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
"CactusPrints.github.io/.git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
"CactusPrints.github.io/.git/objects/46/f3183e1668749751744aa562ec234e7debefa6": "1d4a4c3652e11dd45225ca6b67c2ca4a",
"CactusPrints.github.io/.git/objects/48/ab2a00e15f5d3eb6b2f79d8a074799768fecab": "9887ef3e8d185a1507474b811a2f37c1",
"CactusPrints.github.io/.git/objects/4e/0620a9455337cc39d074f9aec27aecbe16e916": "a062d14c5c0119b3a2e0ecc34b1d8771",
"CactusPrints.github.io/.git/objects/4f/9d82ef6481e0bbe57c9efab2f37fde20602792": "d2648eb3296876f165455a99d168679f",
"CactusPrints.github.io/.git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
"CactusPrints.github.io/.git/objects/52/c87652df4f564bbc73e8aad369f3988caa5832": "a3187b36a326f37c98954ccd885a0203",
"CactusPrints.github.io/.git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
"CactusPrints.github.io/.git/objects/63/f07452f90e6518b957511130110bf571ff8d1d": "2e43b3928327256b65ee10790fa0bdcd",
"CactusPrints.github.io/.git/objects/6f/43540a4ebccb243f918b07ede4979b539e0fb0": "beb976d21f5ae292cc145896416cae7e",
"CactusPrints.github.io/.git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
"CactusPrints.github.io/.git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
"CactusPrints.github.io/.git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
"CactusPrints.github.io/.git/objects/8a/f1c5c1a5d4583046445394da8b99f430bca5e8": "eef3c4ed9ddf3d3280e6e38d309fb967",
"CactusPrints.github.io/.git/objects/91/75a7b29c293565291237059d578d8110d9e00e": "808c1808baf9af7f94fda2110850a88c",
"CactusPrints.github.io/.git/objects/99/c2ae3ffcc9e5f4e252e207dff303cef03fbc4d": "f2159e164e99f0f777f53691d7579002",
"CactusPrints.github.io/.git/objects/9a/bc15530fcfc26718212d998a534265f95d4fb4": "2124043b2101730d414639f9b47faa31",
"CactusPrints.github.io/.git/objects/a1/939f6fb5b10ace43c3636e216ea2da5abb9389": "15885347b46a741fd3a1631f35bee12d",
"CactusPrints.github.io/.git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
"CactusPrints.github.io/.git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
"CactusPrints.github.io/.git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
"CactusPrints.github.io/.git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
"CactusPrints.github.io/.git/objects/cc/77b69de63430a1016710bd658d8cb2ba463781": "37a645f4e3549de4040c80977aef6455",
"CactusPrints.github.io/.git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
"CactusPrints.github.io/.git/objects/d4/aa4cf2088044881eca639dd2b94435769e69ee": "471803a6580f5e339bb82592e1059ab7",
"CactusPrints.github.io/.git/objects/d5/005e3ce41ef6dffef3da2bb98a8857eadc6b85": "88b6e51ac71be8f910b0093a87bb7731",
"CactusPrints.github.io/.git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
"CactusPrints.github.io/.git/objects/d7/4a2fe7c1c5f8732a39c01d4a216b4f970293d6": "9c7439ad6c45d7258d4dc6137bbcae92",
"CactusPrints.github.io/.git/objects/dc/c9878d340e5cdd3202d38f69dacea18abebeb5": "cc5ea06f6a10ed37f21c42911f49bdee",
"CactusPrints.github.io/.git/objects/de/b34ba03dfbfc5c91eb6e2b05acdab481f5572f": "79adf229652d5ad985f6354b234fe546",
"CactusPrints.github.io/.git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
"CactusPrints.github.io/.git/refs/heads/main": "a07fa4c4bdccd43951b0bf7fc22946a5",
"CactusPrints.github.io/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"CactusPrints.github.io/.git/refs/remotes/origin/main": "a07fa4c4bdccd43951b0bf7fc22946a5",
"CactusPrints.github.io/assets/AssetManifest.json": "60e1a55902f9aa06400a2ffe57ee9bc6",
"CactusPrints.github.io/assets/AssetManifest.smcbin": "59496856952904378747eb87982c85aa",
"CactusPrints.github.io/assets/FontManifest.json": "b08fa1b18611a59f5b5f4b75b52128b9",
"CactusPrints.github.io/assets/fonts/MaterialIcons-Regular.otf": "fed0ff041886cb69897d0d9e3e1583f2",
"CactusPrints.github.io/assets/lib/assests/happy_customers.png": "45dae10a281ee3859bf7fe4a8488b841",
"CactusPrints.github.io/assets/lib/assests/instagram_logo.png": "3b2748c5e01c22064b004e2da31a59c7",
"CactusPrints.github.io/assets/lib/assests/our_printer.jpg": "16400173dc2d8c1e9c472415c7b6a6c5",
"CactusPrints.github.io/assets/lib/assests/printer.jpg": "df9fba9e0bbea7437d13e359bdefbb71",
"CactusPrints.github.io/assets/lib/assests/tal.jpg": "0660b787b5e47d2990b5f8409b18d2e8",
"CactusPrints.github.io/assets/NOTICES": "a2f30375f695f869c2676cdc1cb38d80",
"CactusPrints.github.io/assets/packages/social_media_buttons/fonts/SocialMediaIcons.ttf": "6483bf9fdd106eb77d6f3c04dfe35057",
"CactusPrints.github.io/assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"CactusPrints.github.io/canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"CactusPrints.github.io/canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"CactusPrints.github.io/canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"CactusPrints.github.io/canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"CactusPrints.github.io/canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"CactusPrints.github.io/canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"CactusPrints.github.io/canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"CactusPrints.github.io/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"CactusPrints.github.io/flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"CactusPrints.github.io/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"CactusPrints.github.io/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"CactusPrints.github.io/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"CactusPrints.github.io/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"CactusPrints.github.io/index.html": "0d813a3879c7842af4d3de14a1e167d3",
"/": "3e3aeea617d60a4609a69299b387888f",
"CactusPrints.github.io/main.dart.js": "51431e70082578cd757385ea881ee5de",
"CactusPrints.github.io/manifest.json": "4269a28269c3ad9ae4330c3f9aad02b3",
"CactusPrints.github.io/version.json": "03213143074eac6d72e4ce73e497f455",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"GGreenix.github.io/.git/COMMIT_EDITMSG": "21be940d7d015a0ff148d7ee9cb3c0d6",
"GGreenix.github.io/.git/config": "67ca0c7f9928a1a8e0c205bd96df4a04",
"GGreenix.github.io/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"GGreenix.github.io/.git/FETCH_HEAD": "9b2793b2113de6bd68318d3122338c4a",
"GGreenix.github.io/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"GGreenix.github.io/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"GGreenix.github.io/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"GGreenix.github.io/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"GGreenix.github.io/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"GGreenix.github.io/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"GGreenix.github.io/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"GGreenix.github.io/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"GGreenix.github.io/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"GGreenix.github.io/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"GGreenix.github.io/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"GGreenix.github.io/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"GGreenix.github.io/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"GGreenix.github.io/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"GGreenix.github.io/.git/index": "520ea0f46c85835ba0b1c7ac2900412e",
"GGreenix.github.io/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"GGreenix.github.io/.git/logs/HEAD": "a551520268cb063c4be60e6b62ef9876",
"GGreenix.github.io/.git/logs/refs/heads/main": "a551520268cb063c4be60e6b62ef9876",
"GGreenix.github.io/.git/logs/refs/remotes/origin/HEAD": "2ea19f7051fd0d527dc69574fdd4f7cd",
"GGreenix.github.io/.git/logs/refs/remotes/origin/main": "b24082ce05ed31234a76fad4f458338e",
"GGreenix.github.io/.git/objects/06/836aa646e1fe0bdc81b5d6474b739632481a0f": "5b710edaa654e55014b1fb11104954fd",
"GGreenix.github.io/.git/objects/1f/8e12aac19ee582b94ec504a8fb4edbe434516a": "ec4f5c953a9b69c1b041ed9e87e5546f",
"GGreenix.github.io/.git/objects/29/e9e605d38445507c405b444419ed76c7e63bfd": "bdedf02282fdaa0e56c6a4728fded573",
"GGreenix.github.io/.git/objects/2e/0dee6a833c4b568d44ac99727f7e0c17c6eb67": "c7ad2d2981af735bdf2421a44b61acb1",
"GGreenix.github.io/.git/objects/30/f1c3065eed3ab92bb5d3f9e5119455f6098323": "5156a1f54beef1c833e4af81a44ca398",
"GGreenix.github.io/.git/objects/36/297055f7545d41d678c914507563c910530059": "b88fdbf907b1d594fb3d5b77e1daa499",
"GGreenix.github.io/.git/objects/3b/b876b93b061b8cfb74aa21551d7d4831430489": "36d4dfe1f89c739984925185ea14470e",
"GGreenix.github.io/.git/objects/3c/ae4fb2d2b2a3f266a8dc2de761aa889c4d1753": "961b3cf8d883bff2a4b64dc0ea728ad8",
"GGreenix.github.io/.git/objects/43/da14d84ecb949ca5f5e8ecca3a514aa7fe1c7d": "d970b955bbe605c4f81533fde279992d",
"GGreenix.github.io/.git/objects/48/8d2ee91b487ebe72b305ee6fc3bb46a78c8ead": "95c79f1c7a1644864cb8631673be8865",
"GGreenix.github.io/.git/objects/4a/5bc3958b164df21ed073620b89b58c1d1e420c": "0d4e8359bc787e27a5dac2e84593a9fa",
"GGreenix.github.io/.git/objects/4c/b91c5d56850f622ce671018bbc4f9d9bbb69bc": "6c2ccef0566c8b2cdf68c83fda5fc37c",
"GGreenix.github.io/.git/objects/4c/ec37587a523a27e9c8d76c72e2d91518effa7d": "23e4672202882604ffb2915e497891ff",
"GGreenix.github.io/.git/objects/53/4accfb6227ff360fbfc131b155ae4cd9ebd39d": "86598be2aa4e4b4551bc2029181d16b6",
"GGreenix.github.io/.git/objects/54/aeebec0bb7d38be8963d666a7d86b38fe5fce0": "eb66fc6f5a96e68b1ca1c2faa2c5ac88",
"GGreenix.github.io/.git/objects/61/5931e0b6578208b5ddcd6e72695de356b9bfcd": "02b08478c808afd3a02f80162a40b831",
"GGreenix.github.io/.git/objects/61/ba7c5723c1e21b15340baeeca3d0a50885af59": "79747cc91022fd8f89bb3e1fbf5a16e2",
"GGreenix.github.io/.git/objects/66/ba76eb57380d3404ea10169471fe5ae3108343": "c378dc5afe432b0933aeb8756b405ec6",
"GGreenix.github.io/.git/objects/6a/4f2e0698179ef40660dbd47ca9313c3e85cc11": "d5cbcb5a037d29d92f51692c3d2ecfbb",
"GGreenix.github.io/.git/objects/6b/c15e5ae2360ad4a73f52735fd79946ee456b04": "bbbe4416277f9f0e74d7a3749c6b45b8",
"GGreenix.github.io/.git/objects/6c/7ea87cdfb74964299c265d3b87b838d73d1754": "f84541b5514592c21272ff6d879834cc",
"GGreenix.github.io/.git/objects/6f/5e3e143cc835f30d776fec379a9b4ae4e7cbf1": "b44b9a520ef0a8a320aa1073c2f606b3",
"GGreenix.github.io/.git/objects/70/00aa6ce11eedd31514b5494c3c9a8352ad57bd": "f6762eaf0e876ff7f781b13979bc2578",
"GGreenix.github.io/.git/objects/79/d85c015c94cf0c0370d458a04769fcd67dc03c": "36bdfa3ad1fac49555c9fac2317071d5",
"GGreenix.github.io/.git/objects/82/20ccf86f6ff75e5fe113619a8dee1197e47104": "2d52a6da383e65bae907e236a61a8e66",
"GGreenix.github.io/.git/objects/8d/853d9d1f434c1e2e76f6b8d09d4b1a20cf98de": "528b0aa96d2e7400fc00b12d31c16654",
"GGreenix.github.io/.git/objects/a1/746c64956957e96fd86c2d33b71cb6dcfba977": "2035d39855b53ec8113bcd70ec725ec0",
"GGreenix.github.io/.git/objects/a2/b9ed2469b28f085d6961507d8fc4be152efe9e": "bef26c65afa3a2ff791454a1c0277710",
"GGreenix.github.io/.git/objects/ab/385d5993e6fc9fc2b919a19889588c6004da7a": "eb0efc55f7fb577d75f4bb49fefb04ae",
"GGreenix.github.io/.git/objects/ba/55a02d62463343d6481e619230b73596ab2cb2": "01193f8f102894db450ddfc4eb6f3e17",
"GGreenix.github.io/.git/objects/bc/1ce16f4a5da081ad82340b3dd1382a5760b7c9": "59aa760d0b76aa0925bb15eabdbd16fc",
"GGreenix.github.io/.git/objects/c3/b193c3e4c2036e1a0fdb3e97c7adc1913ee027": "5f22d914906ce4565cda1476afb14d14",
"GGreenix.github.io/.git/objects/c5/cf8b36753e215a15b05a963f900de6805de238": "2f2bb38f5821edb0444610428345ca78",
"GGreenix.github.io/.git/objects/cd/86cbf0ff92addee22ec6e9e9903b3f7750ed07": "c55b6ad64043e583f8529a1a8d2d5518",
"GGreenix.github.io/.git/objects/cf/8e0c77181bd584bc472550074a5cca2a0bd49d": "fcac96f5f79d7331801369abc593fa94",
"GGreenix.github.io/.git/objects/cf/c15f1437c1b33d2ef1cb7554275e4636f9c400": "eeea416baef244a60fcd45834b9d9209",
"GGreenix.github.io/.git/objects/d4/a485bb97308033937256a8326a281e9db6a3fa": "17906c135d4fc5ad3be1494b06ae5800",
"GGreenix.github.io/.git/objects/dd/3ac5a390dbde70b6367ec921c7ed4acf6bc755": "b295a27f754d8847c0ce3b8aa2971526",
"GGreenix.github.io/.git/objects/dd/7b41224b2defe4e640d3549de5c8e894b22122": "652e7468a9a97840c751bfd45a8cb8a5",
"GGreenix.github.io/.git/objects/dd/f4bfacb396e97546364ccfeeb9c31dfaea4c25": "049d11285bcbd30a249b4dff756126a0",
"GGreenix.github.io/.git/objects/de/36131fbe27969be289b8132e3bc8d4ab85c437": "a4396bef3c9983267781cca4485d2b2b",
"GGreenix.github.io/.git/objects/de/ea2eb1367c256f6027129e831196374aa5daf2": "095bebaee0e89dbb505f87ff49539259",
"GGreenix.github.io/.git/objects/e3/4b5b8d4a6b921247281fb6147501ab6a7327af": "da5e98328235fc9f8e0cfa200b656c46",
"GGreenix.github.io/.git/objects/e3/c1ab3b754a457934fd87240651123a7d801a59": "0a53fb1dd8536dcf232a48898e772e6b",
"GGreenix.github.io/.git/objects/e4/cec559aa4c266c8abcef8a0aeb3e32dd147de6": "6ec726dd1b8fb35b943ec7d5b4821f07",
"GGreenix.github.io/.git/objects/e6/d4b627351503cc67d2f1d7c8a0a9cf1c0be4bd": "db9c1ddc656710ef5874f26260405e04",
"GGreenix.github.io/.git/objects/ec/95a2ab8307665bd6d451ed574ccf1ca3c0ee74": "4b99d1c6c3b0addfa2d634aa5b430c2c",
"GGreenix.github.io/.git/objects/ee/8f514cd56eb46f22cc3c3b45e0ff15b77ee7b9": "52effb3d2d75ec6ee66b47f8038e7e82",
"GGreenix.github.io/.git/objects/f2/12e219835961f2410bbec5840984d7256c23f5": "a7192f7f633bf19595d8ce8cdb4cfe08",
"GGreenix.github.io/.git/objects/f2/c46a5ca2497072d109068eecd73fa6b0548a41": "a20b83a0495e447980b654e713729f18",
"GGreenix.github.io/.git/objects/f8/7d51749ad38e55cca698bb7f253b0da9c9f64f": "6f36e4d73d2f7b94aa819ab0180544ca",
"GGreenix.github.io/.git/objects/pack/pack-d0a4a7c6dc2aba30e0d7d720a06c12b888e35d82.idx": "b37eb68f89e93073db0198529bc4bcae",
"GGreenix.github.io/.git/objects/pack/pack-d0a4a7c6dc2aba30e0d7d720a06c12b888e35d82.pack": "d4b44db9d82a8e0ee751869a0fb3ff47",
"GGreenix.github.io/.git/packed-refs": "91798c44cf9244e7e9a81419175183e7",
"GGreenix.github.io/.git/refs/heads/main": "444027f8e2d9923e650d80ae1139e937",
"GGreenix.github.io/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"GGreenix.github.io/.git/refs/remotes/origin/main": "444027f8e2d9923e650d80ae1139e937",
"GGreenix.github.io/assets/AssetManifest.json": "60e1a55902f9aa06400a2ffe57ee9bc6",
"GGreenix.github.io/assets/AssetManifest.smcbin": "59496856952904378747eb87982c85aa",
"GGreenix.github.io/assets/assets/default_apple_pay_config.json": "b75f1f91808ad65a886966d7bd485f38",
"GGreenix.github.io/assets/assets/default_google_pay_config.json": "22357d60d7723c59ceb6eaef81608d6d",
"GGreenix.github.io/assets/assets/images/ts_10_11019a.jpg": "0989f61ebff77b55d32a185b945c58da",
"GGreenix.github.io/assets/FontManifest.json": "b08fa1b18611a59f5b5f4b75b52128b9",
"GGreenix.github.io/assets/fonts/MaterialIcons-Regular.otf": "fed0ff041886cb69897d0d9e3e1583f2",
"GGreenix.github.io/assets/lib/assests/fonts/english/Roboto-Bold.ttf": "b8e42971dec8d49207a8c8e2b919a6ac",
"GGreenix.github.io/assets/lib/assests/fonts/english/Roboto-Regular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"GGreenix.github.io/assets/lib/assests/fonts/english/Roboto-Thin.ttf": "66209ae01f484e46679622dd607fcbc5",
"GGreenix.github.io/assets/lib/assests/fonts/hebrew/OpenSans-Bold.ttf": "5112859ee40a5dfa527b3b4068ccd74d",
"GGreenix.github.io/assets/lib/assests/fonts/hebrew/OpenSans-Light.ttf": "67090f15e31c78e9d1da28225cc08b24",
"GGreenix.github.io/assets/lib/assests/fonts/hebrew/OpenSans-Regular.ttf": "7df68ccfcb8ffe00669871052a4929c9",
"GGreenix.github.io/assets/lib/assests/happy_customers.png": "45dae10a281ee3859bf7fe4a8488b841",
"GGreenix.github.io/assets/lib/assests/instagram_logo.png": "3b2748c5e01c22064b004e2da31a59c7",
"GGreenix.github.io/assets/lib/assests/our_printer.jpg": "16400173dc2d8c1e9c472415c7b6a6c5",
"GGreenix.github.io/assets/lib/assests/printer.jpg": "df9fba9e0bbea7437d13e359bdefbb71",
"GGreenix.github.io/assets/lib/assests/tal.jpg": "0660b787b5e47d2990b5f8409b18d2e8",
"GGreenix.github.io/assets/NOTICES": "c1fae1c74d8f32fa0857632e44a06e19",
"GGreenix.github.io/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"GGreenix.github.io/assets/packages/pay_android/assets/ar/add_to.svg": "bfbc3f2a7dab5c0dfbe76c029f38dcf2",
"GGreenix.github.io/assets/packages/pay_android/assets/ar/book_with.svg": "62ca1e531bc0a87860437cd30fee4068",
"GGreenix.github.io/assets/packages/pay_android/assets/ar/buy_with.svg": "71786115138e3309bbdfe717fae14430",
"GGreenix.github.io/assets/packages/pay_android/assets/ar/checkout_with.svg": "61336374161898241f59a0fade537c6e",
"GGreenix.github.io/assets/packages/pay_android/assets/ar/donate_with.svg": "e11517548b978a92b8f5b178a7d22386",
"GGreenix.github.io/assets/packages/pay_android/assets/ar/order_with.svg": "ba873ae125229361136c2a3cba0c69d0",
"GGreenix.github.io/assets/packages/pay_android/assets/ar/pay_with.svg": "300fcc886a7288e68112cb4d44ff1cbf",
"GGreenix.github.io/assets/packages/pay_android/assets/ar/subscribe_with.svg": "a2c5b7219631639954353f7210faebe8",
"GGreenix.github.io/assets/packages/pay_android/assets/bg/add_to.svg": "2764dcec89836d11f43ee01b5b410a39",
"GGreenix.github.io/assets/packages/pay_android/assets/bg/book_with.svg": "e978bd0f76cc8842954eb4a0ff377c1b",
"GGreenix.github.io/assets/packages/pay_android/assets/bg/buy_with.svg": "2c27ddbeefa43d38d3d22b92a2a784af",
"GGreenix.github.io/assets/packages/pay_android/assets/bg/checkout_with.svg": "38146935f1ef0805dadd4bb4a62963a9",
"GGreenix.github.io/assets/packages/pay_android/assets/bg/donate_with.svg": "0e954d25dd19686a9a0e44e796f42c92",
"GGreenix.github.io/assets/packages/pay_android/assets/bg/order_with.svg": "02045673c1ac0c198a9427d381aadeb1",
"GGreenix.github.io/assets/packages/pay_android/assets/bg/pay_with.svg": "43d3ce415881cdd1d8ecba2ada21542b",
"GGreenix.github.io/assets/packages/pay_android/assets/bg/subscribe_with.svg": "deb266f55fdc8bc92da22081e712ec1c",
"GGreenix.github.io/assets/packages/pay_android/assets/ca/add_to.svg": "d35f8616a0cad736696c65a75473e990",
"GGreenix.github.io/assets/packages/pay_android/assets/ca/book_with.svg": "3bcec32101787214b188c92eaf85904f",
"GGreenix.github.io/assets/packages/pay_android/assets/ca/buy_with.svg": "d044a1e89711749a855bef115c919517",
"GGreenix.github.io/assets/packages/pay_android/assets/ca/checkout_with.svg": "d89e8e85d3688668cc1e66002955bdfc",
"GGreenix.github.io/assets/packages/pay_android/assets/ca/donate_with.svg": "aa1f8542e0d15f552d017cc5f07b7159",
"GGreenix.github.io/assets/packages/pay_android/assets/ca/order_with.svg": "006364d8ec441d2e36fed499af5503c6",
"GGreenix.github.io/assets/packages/pay_android/assets/ca/pay_with.svg": "b42a6702919a67433d8d3e8cbf762985",
"GGreenix.github.io/assets/packages/pay_android/assets/ca/subscribe_with.svg": "142f83d3c82a2a14445ea6fbd32ba9e9",
"GGreenix.github.io/assets/packages/pay_android/assets/cs/add_to.svg": "daafa71326b2a889d6156d88b26f0711",
"GGreenix.github.io/assets/packages/pay_android/assets/cs/book_with.svg": "7cce492056b2bc5a7981cd57be1f3877",
"GGreenix.github.io/assets/packages/pay_android/assets/cs/buy_with.svg": "feac581ab24651bd205d08c55bba91de",
"GGreenix.github.io/assets/packages/pay_android/assets/cs/checkout_with.svg": "a7718b27ad8ce1f66e979bfc76707f5e",
"GGreenix.github.io/assets/packages/pay_android/assets/cs/donate_with.svg": "c058b55505d3f1666a6c93c094717e3a",
"GGreenix.github.io/assets/packages/pay_android/assets/cs/order_with.svg": "4fce0519271b2685ef869187575bc1b3",
"GGreenix.github.io/assets/packages/pay_android/assets/cs/pay_with.svg": "9eefce81bbb95da738e0e061de3399be",
"GGreenix.github.io/assets/packages/pay_android/assets/cs/subscribe_with.svg": "efa32f39a646edf4ba31247ebbf58b0c",
"GGreenix.github.io/assets/packages/pay_android/assets/da/add_to.svg": "051e598d601ad7306f49c1fe6dcd7675",
"GGreenix.github.io/assets/packages/pay_android/assets/da/book_with.svg": "61529e956c930970deae421d0b70e058",
"GGreenix.github.io/assets/packages/pay_android/assets/da/buy_with.svg": "f2b288f505a607cf2aa73bc8e551926b",
"GGreenix.github.io/assets/packages/pay_android/assets/da/checkout_with.svg": "faa6147074607203448da2cc913a7076",
"GGreenix.github.io/assets/packages/pay_android/assets/da/donate_with.svg": "cc9f0e2070b89d93d98253152b50b64e",
"GGreenix.github.io/assets/packages/pay_android/assets/da/order_with.svg": "b0e4b7037c8d828823d65ccabf145e97",
"GGreenix.github.io/assets/packages/pay_android/assets/da/pay_with.svg": "8f4f78d2ab7105e26ffe70de7536ed4c",
"GGreenix.github.io/assets/packages/pay_android/assets/da/subscribe_with.svg": "8563be2addb38c12387be962d54406e2",
"GGreenix.github.io/assets/packages/pay_android/assets/de/add_to.svg": "41a9ed3d62e113b46fb78d7118238754",
"GGreenix.github.io/assets/packages/pay_android/assets/de/book_with.svg": "c8dd500d8eb0502d438c13c9357caffb",
"GGreenix.github.io/assets/packages/pay_android/assets/de/buy_with.svg": "4c3bdeea6442713d2b13b04135e4039f",
"GGreenix.github.io/assets/packages/pay_android/assets/de/checkout_with.svg": "d62b788fb5d5bf9195c0c9daa54f665b",
"GGreenix.github.io/assets/packages/pay_android/assets/de/donate_with.svg": "a64eee9b343b88822abdc6742a67a972",
"GGreenix.github.io/assets/packages/pay_android/assets/de/order_with.svg": "35dfd88daec0bff16b4754d9d1da61bf",
"GGreenix.github.io/assets/packages/pay_android/assets/de/pay_with.svg": "0befeb57715e0da1ffd2149ce2ba598b",
"GGreenix.github.io/assets/packages/pay_android/assets/de/subscribe_with.svg": "790b06151dc37d6905ace9c1cd1ee7d4",
"GGreenix.github.io/assets/packages/pay_android/assets/el/add_to.svg": "43ed4baa0978096c766d2fb4ade3de3b",
"GGreenix.github.io/assets/packages/pay_android/assets/el/book_with.svg": "bbfe623d31b244109edb46a694f10c05",
"GGreenix.github.io/assets/packages/pay_android/assets/el/buy_with.svg": "3d8ee01bc2f69c28583e759d3b15d3a9",
"GGreenix.github.io/assets/packages/pay_android/assets/el/checkout_with.svg": "5e424db870de9ada0e988ff424703bd8",
"GGreenix.github.io/assets/packages/pay_android/assets/el/donate_with.svg": "a933d37f93af89c022528ed0535b1593",
"GGreenix.github.io/assets/packages/pay_android/assets/el/order_with.svg": "4ef6d4fcfdab5bc5179182d4f14fbd89",
"GGreenix.github.io/assets/packages/pay_android/assets/el/pay_with.svg": "dbb0f01963f6f88445f513d6ae4f3b60",
"GGreenix.github.io/assets/packages/pay_android/assets/el/subscribe_with.svg": "e8823321ffe99c31900cd75ff8fbaeb2",
"GGreenix.github.io/assets/packages/pay_android/assets/en/add_to.svg": "4384edacc474fb772f8ea96d2c691b41",
"GGreenix.github.io/assets/packages/pay_android/assets/en/book_with.svg": "29a2bc340906eb63c675e326f46f0d82",
"GGreenix.github.io/assets/packages/pay_android/assets/en/buy_with.svg": "61e0170f33ea84e7644f1f5547a30311",
"GGreenix.github.io/assets/packages/pay_android/assets/en/checkout_with.svg": "0ef13a9f8e0850b04fd81d9c6c405bd6",
"GGreenix.github.io/assets/packages/pay_android/assets/en/donate_with.svg": "72442968c6a419af54ad1ad41eb3d224",
"GGreenix.github.io/assets/packages/pay_android/assets/en/order_with.svg": "b92a457e1f7ef5bea47ef34900599495",
"GGreenix.github.io/assets/packages/pay_android/assets/en/pay_with.svg": "7a5447c6ea0f8ace0d77c47f3aab0d8a",
"GGreenix.github.io/assets/packages/pay_android/assets/en/subscribe_with.svg": "00e5b83f89068151380b2e9d21d9a4f2",
"GGreenix.github.io/assets/packages/pay_android/assets/es/add_to.svg": "25e043ca92ee282adca7c4c5e2e9b3f1",
"GGreenix.github.io/assets/packages/pay_android/assets/es/book_with.svg": "c25ae2d4a84701291317c4ea5e9ad1bf",
"GGreenix.github.io/assets/packages/pay_android/assets/es/buy_with.svg": "37b8ffcd721c681e070564f899e83f95",
"GGreenix.github.io/assets/packages/pay_android/assets/es/checkout_with.svg": "a0a297ffd6469144b0f2d029d3bfd547",
"GGreenix.github.io/assets/packages/pay_android/assets/es/donate_with.svg": "3246afaf6eb07563f968528f2e4a6dab",
"GGreenix.github.io/assets/packages/pay_android/assets/es/order_with.svg": "41b6bfbd7231a29ab6a64f2ebdca220b",
"GGreenix.github.io/assets/packages/pay_android/assets/es/pay_with.svg": "25ce04dc2cb7c3dc1a9013d6fb01076b",
"GGreenix.github.io/assets/packages/pay_android/assets/es/subscribe_with.svg": "9389c8d316f83dc489e20c785cb7af3e",
"GGreenix.github.io/assets/packages/pay_android/assets/et/add_to.svg": "a357fac571c41585d00d4b44294efe9e",
"GGreenix.github.io/assets/packages/pay_android/assets/et/book_with.svg": "1354556ede7ee32cc96d1b6028f09dff",
"GGreenix.github.io/assets/packages/pay_android/assets/et/buy_with.svg": "f8e862c4193d88bcb85690e6c48ad936",
"GGreenix.github.io/assets/packages/pay_android/assets/et/checkout_with.svg": "2a1214a92424478e1d4d0a4a93e1697e",
"GGreenix.github.io/assets/packages/pay_android/assets/et/donate_with.svg": "0e7179269735c4c28f05812c4e2b71e8",
"GGreenix.github.io/assets/packages/pay_android/assets/et/order_with.svg": "57a703e1d5a1816af101899e600d6650",
"GGreenix.github.io/assets/packages/pay_android/assets/et/pay_with.svg": "77f765b2fc4526dafb51f09b93f3c2d0",
"GGreenix.github.io/assets/packages/pay_android/assets/et/subscribe_with.svg": "cb127e3aa9a4eb982acaae567cf9f18f",
"GGreenix.github.io/assets/packages/pay_android/assets/fi/add_to.svg": "4236bf9b17f9b08cbe316f5f91731a22",
"GGreenix.github.io/assets/packages/pay_android/assets/fi/book_with.svg": "060bab763b9b7eefa8263465483e103f",
"GGreenix.github.io/assets/packages/pay_android/assets/fi/buy_with.svg": "0897fc17fa821751da515a2ba316c85f",
"GGreenix.github.io/assets/packages/pay_android/assets/fi/checkout_with.svg": "6f0b56ff5f9666bdb1d4f3d288f2dfb0",
"GGreenix.github.io/assets/packages/pay_android/assets/fi/donate_with.svg": "646d957d81018ace28a9a4c45349f9d1",
"GGreenix.github.io/assets/packages/pay_android/assets/fi/order_with.svg": "84fd018dd1436f29ef254ff68541fe1b",
"GGreenix.github.io/assets/packages/pay_android/assets/fi/pay_with.svg": "7fd770a63ad5c532f58df416dba73385",
"GGreenix.github.io/assets/packages/pay_android/assets/fi/subscribe_with.svg": "1da2d00ea38eff83f92a35ca3291e615",
"GGreenix.github.io/assets/packages/pay_android/assets/fr/add_to.svg": "63a80029255e1f17b42175357f226ec6",
"GGreenix.github.io/assets/packages/pay_android/assets/fr/book_with.svg": "54862c2e74f471ca8a5febb3698ddee0",
"GGreenix.github.io/assets/packages/pay_android/assets/fr/buy_with.svg": "c5bc053ed6e974422c78744697964007",
"GGreenix.github.io/assets/packages/pay_android/assets/fr/checkout_with.svg": "5e3143901571fba53a2103428acf59d0",
"GGreenix.github.io/assets/packages/pay_android/assets/fr/donate_with.svg": "377b87988c85dd925d27c50baee27fad",
"GGreenix.github.io/assets/packages/pay_android/assets/fr/order_with.svg": "337569e7ddce194b73e58fdd57211718",
"GGreenix.github.io/assets/packages/pay_android/assets/fr/pay_with.svg": "8c681b64badc978064f0030f4cbb8593",
"GGreenix.github.io/assets/packages/pay_android/assets/fr/subscribe_with.svg": "bef504c5c3281cfb83dbe71f28ab041a",
"GGreenix.github.io/assets/packages/pay_android/assets/gpay_logo.svg": "779b1dbc265e72faf5485a07d70befbc",
"GGreenix.github.io/assets/packages/pay_android/assets/hr/add_to.svg": "b954c980e87265d1b071ecc31c21cd26",
"GGreenix.github.io/assets/packages/pay_android/assets/hr/book_with.svg": "8f770230b5fa79c26e6984f943b657ba",
"GGreenix.github.io/assets/packages/pay_android/assets/hr/buy_with.svg": "7fbc27b69279015fbe131256cb47f71e",
"GGreenix.github.io/assets/packages/pay_android/assets/hr/checkout_with.svg": "677642904827c908af210656965bf262",
"GGreenix.github.io/assets/packages/pay_android/assets/hr/donate_with.svg": "7f174ff3eb3dfde87d4beb110d35cf28",
"GGreenix.github.io/assets/packages/pay_android/assets/hr/order_with.svg": "73b42c4680b1bb15a9b753226bbf3779",
"GGreenix.github.io/assets/packages/pay_android/assets/hr/pay_with.svg": "64dbb2088427a107451083d4b1e9c912",
"GGreenix.github.io/assets/packages/pay_android/assets/hr/subscribe_with.svg": "24c537afe136067b5ef73cf748216253",
"GGreenix.github.io/assets/packages/pay_android/assets/id/add_to.svg": "096864306f58fff3bf86007456df42fc",
"GGreenix.github.io/assets/packages/pay_android/assets/id/book_with.svg": "1f0d62bda03d99ec91285e996dbeccb4",
"GGreenix.github.io/assets/packages/pay_android/assets/id/buy_with.svg": "80f04844690badea2e6542069ab00079",
"GGreenix.github.io/assets/packages/pay_android/assets/id/checkout_with.svg": "fb1e283ab06ec5051c3593721e479511",
"GGreenix.github.io/assets/packages/pay_android/assets/id/donate_with.svg": "15c12a1c2f35c9cf062f345341c10c4b",
"GGreenix.github.io/assets/packages/pay_android/assets/id/order_with.svg": "b03550b129de4f925b3de781d7cf0356",
"GGreenix.github.io/assets/packages/pay_android/assets/id/pay_with.svg": "8abc5642ea7392bccc9e0f0a22cd0f02",
"GGreenix.github.io/assets/packages/pay_android/assets/id/subscribe_with.svg": "6d87fee87418fc75fc89b83bfcf6d74d",
"GGreenix.github.io/assets/packages/pay_android/assets/it/add_to.svg": "4f0cbd949d77b5b97787f7bbbfb91898",
"GGreenix.github.io/assets/packages/pay_android/assets/it/book_with.svg": "f952993b64bafa5e54edbc77784d928f",
"GGreenix.github.io/assets/packages/pay_android/assets/it/buy_with.svg": "2e53f6aa009df3e31875a4d70cc4d9d1",
"GGreenix.github.io/assets/packages/pay_android/assets/it/checkout_with.svg": "ade4368b6dd984887c49697f4508d839",
"GGreenix.github.io/assets/packages/pay_android/assets/it/donate_with.svg": "046e38d70ffe6ff154b756455ee65455",
"GGreenix.github.io/assets/packages/pay_android/assets/it/order_with.svg": "1058046d5b0112f550cfdfe201a6db6b",
"GGreenix.github.io/assets/packages/pay_android/assets/it/pay_with.svg": "a0f8682fed38a7fa823667beee80a87b",
"GGreenix.github.io/assets/packages/pay_android/assets/it/subscribe_with.svg": "9c98b33517ce858bbf591a1c54a64594",
"GGreenix.github.io/assets/packages/pay_android/assets/ja/add_to.svg": "c02e42e62933532cf18346124404f554",
"GGreenix.github.io/assets/packages/pay_android/assets/ja/book_with.svg": "81e53ac545366c34f4908779ccf3fa46",
"GGreenix.github.io/assets/packages/pay_android/assets/ja/buy_with.svg": "27e1858efca3768084e4a089f61a2aad",
"GGreenix.github.io/assets/packages/pay_android/assets/ja/checkout_with.svg": "e2db6aebfea9168428f768179a289640",
"GGreenix.github.io/assets/packages/pay_android/assets/ja/donate_with.svg": "3236e62abb9338c89f99d47b933a19a0",
"GGreenix.github.io/assets/packages/pay_android/assets/ja/order_with.svg": "8d953c5462fc8428a6d4ef50ab8f3ace",
"GGreenix.github.io/assets/packages/pay_android/assets/ja/pay_with.svg": "8003a85a120579d810e9ff4ca1cd8dc5",
"GGreenix.github.io/assets/packages/pay_android/assets/ja/subscribe_with.svg": "f9e7ae5269c9d2e1f22d55911768b0d1",
"GGreenix.github.io/assets/packages/pay_android/assets/ko/add_to.svg": "a978330cdb2e4f2df6dce6c044d738ce",
"GGreenix.github.io/assets/packages/pay_android/assets/ko/book_with.svg": "9eafe409761ad9ed8e10cf3b346ea773",
"GGreenix.github.io/assets/packages/pay_android/assets/ko/buy_with.svg": "70a9d2b9bf7d4c89321fcd82f0ce6526",
"GGreenix.github.io/assets/packages/pay_android/assets/ko/checkout_with.svg": "1905f0512676b986018e1e4cd66c3474",
"GGreenix.github.io/assets/packages/pay_android/assets/ko/donate_with.svg": "17f2fd6df385d5f3cab0fcbbea49e600",
"GGreenix.github.io/assets/packages/pay_android/assets/ko/order_with.svg": "d34fcf8740a1e61e016f75a6aabaa7d0",
"GGreenix.github.io/assets/packages/pay_android/assets/ko/pay_with.svg": "b4e663fd2b2eaa65643bbb2f7a6c81c9",
"GGreenix.github.io/assets/packages/pay_android/assets/ko/subscribe_with.svg": "72074d8643df3980f267b8a1818e7b69",
"GGreenix.github.io/assets/packages/pay_android/assets/ms/add_to.svg": "ba103b002740499105146d0f76898b74",
"GGreenix.github.io/assets/packages/pay_android/assets/ms/book_with.svg": "1a2149ea7df4851787a249d657afa750",
"GGreenix.github.io/assets/packages/pay_android/assets/ms/buy_with.svg": "5ec48204687cd7cdbdb6e45a0f87c266",
"GGreenix.github.io/assets/packages/pay_android/assets/ms/checkout_with.svg": "a3d82e3ec9942e6c59bd11a3b6be6eb0",
"GGreenix.github.io/assets/packages/pay_android/assets/ms/donate_with.svg": "03047ef5eff5dd4c237bd6d911eb7b49",
"GGreenix.github.io/assets/packages/pay_android/assets/ms/order_with.svg": "2c58a16b22b23b6e141293be07a517e7",
"GGreenix.github.io/assets/packages/pay_android/assets/ms/pay_with.svg": "1d0fc8bd052381fbb0a55fee1ad936f2",
"GGreenix.github.io/assets/packages/pay_android/assets/ms/subscribe_with.svg": "e8edc4fa3c3e1c22efc997a602ba0b9e",
"GGreenix.github.io/assets/packages/pay_android/assets/nl/add_to.svg": "a5084031f739546617178aff26cacf70",
"GGreenix.github.io/assets/packages/pay_android/assets/nl/book_with.svg": "014036004858258aff6644c0da18dd8e",
"GGreenix.github.io/assets/packages/pay_android/assets/nl/buy_with.svg": "ef6ee546859d02688aa40adace22b9a3",
"GGreenix.github.io/assets/packages/pay_android/assets/nl/checkout_with.svg": "8fc6fd42a98b63d122177cf048870714",
"GGreenix.github.io/assets/packages/pay_android/assets/nl/donate_with.svg": "28e5827c91046aeb9e89fdac18bc31bc",
"GGreenix.github.io/assets/packages/pay_android/assets/nl/order_with.svg": "3ff131214b581d1564d1f8497add7353",
"GGreenix.github.io/assets/packages/pay_android/assets/nl/pay_with.svg": "ab567c96dcf133cf54a3c254bb1e55f2",
"GGreenix.github.io/assets/packages/pay_android/assets/nl/subscribe_with.svg": "fd9c89489dfd8603257ea4162a131316",
"GGreenix.github.io/assets/packages/pay_android/assets/no/add_to.svg": "a27994cff66a13093c36d0440c686f66",
"GGreenix.github.io/assets/packages/pay_android/assets/no/book_with.svg": "af560349555d61bb7c7a511c4a14d727",
"GGreenix.github.io/assets/packages/pay_android/assets/no/buy_with.svg": "ac010e0d8e54dcafc715028bac681aeb",
"GGreenix.github.io/assets/packages/pay_android/assets/no/checkout_with.svg": "0654ac3d9257446e59fd9bdaff5643ae",
"GGreenix.github.io/assets/packages/pay_android/assets/no/donate_with.svg": "3ff462fc0f1a11c49180b2d9c8d58b02",
"GGreenix.github.io/assets/packages/pay_android/assets/no/order_with.svg": "81afc99c63433cdbc8fd425aab085dfd",
"GGreenix.github.io/assets/packages/pay_android/assets/no/pay_with.svg": "af5a82050b50e4c25d7e7a2837a703e6",
"GGreenix.github.io/assets/packages/pay_android/assets/no/subscribe_with.svg": "ceb068a4d41334e133a3d7cd079eba51",
"GGreenix.github.io/assets/packages/pay_android/assets/pl/add_to.svg": "3ab8678b88350d72a52d9f47a0dfa21d",
"GGreenix.github.io/assets/packages/pay_android/assets/pl/book_with.svg": "fa8de798c117374d0e2091554e7e3326",
"GGreenix.github.io/assets/packages/pay_android/assets/pl/buy_with.svg": "0e353321ec73ee576c760d36014c606b",
"GGreenix.github.io/assets/packages/pay_android/assets/pl/checkout_with.svg": "fb97461a83ede9f6db26f619fac85624",
"GGreenix.github.io/assets/packages/pay_android/assets/pl/donate_with.svg": "e8f54b2345a2096263fd766ba3ba92ed",
"GGreenix.github.io/assets/packages/pay_android/assets/pl/order_with.svg": "e9c569ddb4904c4b9c5ab7ba93198d30",
"GGreenix.github.io/assets/packages/pay_android/assets/pl/pay_with.svg": "11f3590ea4dc7ce420ccd17705892592",
"GGreenix.github.io/assets/packages/pay_android/assets/pl/subscribe_with.svg": "22d5a1672e572f6ea96d5e57103e32a6",
"GGreenix.github.io/assets/packages/pay_android/assets/pt/add_to.svg": "c92b07aa6b830568d6a4518e122c1caa",
"GGreenix.github.io/assets/packages/pay_android/assets/pt/book_with.svg": "80e114151af825b2d774980d2247e045",
"GGreenix.github.io/assets/packages/pay_android/assets/pt/buy_with.svg": "d3d84b6c2400c829f4c83179d0445adb",
"GGreenix.github.io/assets/packages/pay_android/assets/pt/checkout_with.svg": "faed8689aa80f16153e6ff3040bf11f2",
"GGreenix.github.io/assets/packages/pay_android/assets/pt/donate_with.svg": "0a7c6fee7469c1a96cfc21296f842575",
"GGreenix.github.io/assets/packages/pay_android/assets/pt/order_with.svg": "f9ee2ab62b06a635306944be5f40a38e",
"GGreenix.github.io/assets/packages/pay_android/assets/pt/pay_with.svg": "6266e87129065cfdb8db8a5cef5f3aee",
"GGreenix.github.io/assets/packages/pay_android/assets/pt/subscribe_with.svg": "4940d3c83c8efb4e2d5891163894f11a",
"GGreenix.github.io/assets/packages/pay_android/assets/ru/add_to.svg": "4b680682f984861d98aa1da2f8e3b3f7",
"GGreenix.github.io/assets/packages/pay_android/assets/ru/book_with.svg": "77362d606780731e4380fe3e286437b1",
"GGreenix.github.io/assets/packages/pay_android/assets/ru/buy_with.svg": "507c3187c575be1ffa543b75ee0638fb",
"GGreenix.github.io/assets/packages/pay_android/assets/ru/checkout_with.svg": "b357f2747ac8ae70556aa4568f050021",
"GGreenix.github.io/assets/packages/pay_android/assets/ru/donate_with.svg": "8b95678ca16940cea26df54bfb351a7e",
"GGreenix.github.io/assets/packages/pay_android/assets/ru/order_with.svg": "758e060f6a497f0b268eb44bd562682c",
"GGreenix.github.io/assets/packages/pay_android/assets/ru/pay_with.svg": "a5eac78ff0b25303773903f9b708e069",
"GGreenix.github.io/assets/packages/pay_android/assets/ru/subscribe_with.svg": "a7f9aaafa86d854d8b51c447dd7014ad",
"GGreenix.github.io/assets/packages/pay_android/assets/sk/add_to.svg": "046ad0ccfa72aff59ae4f521d8822958",
"GGreenix.github.io/assets/packages/pay_android/assets/sk/book_with.svg": "e4143273816c52f0c7e8af4c9e5ce4f0",
"GGreenix.github.io/assets/packages/pay_android/assets/sk/buy_with.svg": "5bd4629cd67b54666353f20039af5fac",
"GGreenix.github.io/assets/packages/pay_android/assets/sk/checkout_with.svg": "e2eee6d5562792903cc40c66bb3e83bf",
"GGreenix.github.io/assets/packages/pay_android/assets/sk/donate_with.svg": "328a2c684108d7b885bb39b4b0823ede",
"GGreenix.github.io/assets/packages/pay_android/assets/sk/order_with.svg": "680febfbc775f0df1e9a75361039d079",
"GGreenix.github.io/assets/packages/pay_android/assets/sk/pay_with.svg": "0a14ad03155bbeceb1cb1d2a59bd10c2",
"GGreenix.github.io/assets/packages/pay_android/assets/sk/subscribe_with.svg": "dc5b2d73c71330fb0a62e62266e15386",
"GGreenix.github.io/assets/packages/pay_android/assets/sl/add_to.svg": "4425689d21bc30332387e8af16f4f756",
"GGreenix.github.io/assets/packages/pay_android/assets/sl/book_with.svg": "4cf7c31011e7c74e7e4de1346a69dff5",
"GGreenix.github.io/assets/packages/pay_android/assets/sl/buy_with.svg": "218c1bc8ea5210400aa486135a08fc66",
"GGreenix.github.io/assets/packages/pay_android/assets/sl/checkout_with.svg": "1d7b93c70008132032ae6acc62cf9848",
"GGreenix.github.io/assets/packages/pay_android/assets/sl/donate_with.svg": "eea54f9b8b07d12bb4a2b3a34609e783",
"GGreenix.github.io/assets/packages/pay_android/assets/sl/order_with.svg": "966e7da4d2c20d4a4ed79c86ed6bd0c0",
"GGreenix.github.io/assets/packages/pay_android/assets/sl/pay_with.svg": "a946836a7f9bd2f92aeaa6ecc6116929",
"GGreenix.github.io/assets/packages/pay_android/assets/sl/subscribe_with.svg": "064ab4c835449a611932547136eae5b6",
"GGreenix.github.io/assets/packages/pay_android/assets/sr/add_to.svg": "ac3e2b9484aaa12d02c19b632bcb5d47",
"GGreenix.github.io/assets/packages/pay_android/assets/sr/book_with.svg": "1142f214d5c98efd5d52dd1c427e414c",
"GGreenix.github.io/assets/packages/pay_android/assets/sr/buy_with.svg": "cf9d5806596c1ae20955771fb2a55b2a",
"GGreenix.github.io/assets/packages/pay_android/assets/sr/checkout_with.svg": "d521efb7272a749cedab8f24bea147f2",
"GGreenix.github.io/assets/packages/pay_android/assets/sr/donate_with.svg": "752f8ff1df2ee391d5f8b7f95330e1f1",
"GGreenix.github.io/assets/packages/pay_android/assets/sr/order_with.svg": "0d892797f61114a91cb1ffb9d42f053e",
"GGreenix.github.io/assets/packages/pay_android/assets/sr/pay_with.svg": "523092aede2b4dba6b6496058bbc2149",
"GGreenix.github.io/assets/packages/pay_android/assets/sr/subscribe_with.svg": "7b7c5b958b01c6eb4ec53d34d5dffe79",
"GGreenix.github.io/assets/packages/pay_android/assets/sv/add_to.svg": "91a25d4f24ba58c5bb416853dff7c1b1",
"GGreenix.github.io/assets/packages/pay_android/assets/sv/book_with.svg": "e518f8e9bb5d032a75e695881b9fd75a",
"GGreenix.github.io/assets/packages/pay_android/assets/sv/buy_with.svg": "9d1fd44967b708f4026577e39de6713b",
"GGreenix.github.io/assets/packages/pay_android/assets/sv/checkout_with.svg": "0de060cc30d4e5e1d83eafd4f084ebca",
"GGreenix.github.io/assets/packages/pay_android/assets/sv/donate_with.svg": "4e4e04c9cfec7746fc1762fdb26a5294",
"GGreenix.github.io/assets/packages/pay_android/assets/sv/order_with.svg": "10015da833ad94d5a1fa2b2856c68bee",
"GGreenix.github.io/assets/packages/pay_android/assets/sv/pay_with.svg": "60ab47c093a5fc47a6771132a6d9b64f",
"GGreenix.github.io/assets/packages/pay_android/assets/sv/subscribe_with.svg": "8fd983579021aeaece67cd44090b67ab",
"GGreenix.github.io/assets/packages/pay_android/assets/th/add_to.svg": "e181277f8a53956b45b39c6473ae4a1d",
"GGreenix.github.io/assets/packages/pay_android/assets/th/book_with.svg": "a78f160e3ddabbe1b4dc309a3e53b9b1",
"GGreenix.github.io/assets/packages/pay_android/assets/th/buy_with.svg": "f580b2aa892290168a9f24e60c56bc56",
"GGreenix.github.io/assets/packages/pay_android/assets/th/checkout_with.svg": "bb82483a7b0385a7aaba3aacf5481b65",
"GGreenix.github.io/assets/packages/pay_android/assets/th/donate_with.svg": "926ead1b133ab5cf112376ec8177909e",
"GGreenix.github.io/assets/packages/pay_android/assets/th/order_with.svg": "7ad6a1ac62ad56bd47dd1fd7d7c6c387",
"GGreenix.github.io/assets/packages/pay_android/assets/th/pay_with.svg": "97eef436a6c5b006205b348e41feaaa1",
"GGreenix.github.io/assets/packages/pay_android/assets/th/subscribe_with.svg": "6c76ab8ae9da3637015c2c42b194a935",
"GGreenix.github.io/assets/packages/pay_android/assets/tr/add_to.svg": "6bf9e352e225680def3a88864d67970d",
"GGreenix.github.io/assets/packages/pay_android/assets/tr/book_with.svg": "2bf42ad93f9b02f9c04db7a4db97c09b",
"GGreenix.github.io/assets/packages/pay_android/assets/tr/buy_with.svg": "6839704c43a2064bccec85b1c3387109",
"GGreenix.github.io/assets/packages/pay_android/assets/tr/checkout_with.svg": "a5ffd193e6242c63cdbae7d84928f549",
"GGreenix.github.io/assets/packages/pay_android/assets/tr/donate_with.svg": "a3c0086f37bad61d917fb32f235d238d",
"GGreenix.github.io/assets/packages/pay_android/assets/tr/order_with.svg": "6a3b93a625c0dd38e529ec04d57095ff",
"GGreenix.github.io/assets/packages/pay_android/assets/tr/pay_with.svg": "6f3f1d607b408ed907eda941786a452a",
"GGreenix.github.io/assets/packages/pay_android/assets/tr/subscribe_with.svg": "1ec393c9299a999cd0e283b596770c4e",
"GGreenix.github.io/assets/packages/pay_android/assets/uk/add_to.svg": "4c569543634941882e41cb11a7e0cd25",
"GGreenix.github.io/assets/packages/pay_android/assets/uk/book_with.svg": "08789fbaec5e3207c5128d6aeba29913",
"GGreenix.github.io/assets/packages/pay_android/assets/uk/buy_with.svg": "7317e8d52999d0e50c63e7f1651cedd4",
"GGreenix.github.io/assets/packages/pay_android/assets/uk/checkout_with.svg": "a70df41b1b4da83afb01b71c795c7adc",
"GGreenix.github.io/assets/packages/pay_android/assets/uk/donate_with.svg": "2b4e967986ca11a4d226bc756f796dc1",
"GGreenix.github.io/assets/packages/pay_android/assets/uk/order_with.svg": "ea09899e72c1d594ca7dc3a5b8558eb2",
"GGreenix.github.io/assets/packages/pay_android/assets/uk/pay_with.svg": "75098046f1f6d374ca4f723781e5b3e7",
"GGreenix.github.io/assets/packages/pay_android/assets/uk/subscribe_with.svg": "6829023275667a465ad95178e36e9fd2",
"GGreenix.github.io/assets/packages/pay_android/assets/zh/add_to.svg": "aa978c2034c622f3347d4251992e2f18",
"GGreenix.github.io/assets/packages/pay_android/assets/zh/book_with.svg": "bc90f5503bc752f32bc58cc377906592",
"GGreenix.github.io/assets/packages/pay_android/assets/zh/buy_with.svg": "aafb1c98179b017cf11d069d125a6fb0",
"GGreenix.github.io/assets/packages/pay_android/assets/zh/checkout_with.svg": "dfb3bcff5a628a2a2578c24c75fa587f",
"GGreenix.github.io/assets/packages/pay_android/assets/zh/donate_with.svg": "d82b42c6a7d7815eb09a49740c39ee0f",
"GGreenix.github.io/assets/packages/pay_android/assets/zh/order_with.svg": "a2646e9aa1486bed7a5f44b8e16a743d",
"GGreenix.github.io/assets/packages/pay_android/assets/zh/pay_with.svg": "cad93fc03d1618cb550da77e1661e6af",
"GGreenix.github.io/assets/packages/pay_android/assets/zh/subscribe_with.svg": "8fcfb7c39eb6f0428d9a5d04ed07bf3c",
"GGreenix.github.io/assets/packages/pay_platform_interface/pubspec.yaml": "d9e0f691eb7eb9f95af24b2ce0cc8f9f",
"GGreenix.github.io/assets/packages/social_media_buttons/fonts/SocialMediaIcons.ttf": "6483bf9fdd106eb77d6f3c04dfe35057",
"GGreenix.github.io/assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"GGreenix.github.io/canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"GGreenix.github.io/canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"GGreenix.github.io/canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"GGreenix.github.io/canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"GGreenix.github.io/canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"GGreenix.github.io/canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"GGreenix.github.io/canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"GGreenix.github.io/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"GGreenix.github.io/flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"GGreenix.github.io/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"GGreenix.github.io/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"GGreenix.github.io/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"GGreenix.github.io/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"GGreenix.github.io/index.html": "b4f30ba4d6d68532b35f4f448f48ab5f",
"GGreenix.github.io/main.dart.js": "113df3a0ff7ea33c951552b86a1e6a7c",
"GGreenix.github.io/manifest.json": "4269a28269c3ad9ae4330c3f9aad02b3",
"GGreenix.github.io/version.json": "03213143074eac6d72e4ce73e497f455",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "3e3aeea617d60a4609a69299b387888f",
"main.dart.js": "51431e70082578cd757385ea881ee5de",
"manifest.json": "4269a28269c3ad9ae4330c3f9aad02b3",
"version.json": "03213143074eac6d72e4ce73e497f455"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
