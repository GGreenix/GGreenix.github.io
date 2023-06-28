'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.json": "003736dfb5591861e26748a89ec34203",
"assets/AssetManifest.smcbin": "fb32a782602ded4a058123ae5a3d5431",
"assets/FontManifest.json": "bd71e70f7525fd56dbce54143979503b",
"assets/fonts/MaterialIcons-Regular.otf": "fed0ff041886cb69897d0d9e3e1583f2",
"assets/lib/assests/fonts/english/Roboto-Bold.ttf": "b8e42971dec8d49207a8c8e2b919a6ac",
"assets/lib/assests/fonts/english/Roboto-Regular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/lib/assests/fonts/english/Roboto-Thin.ttf": "66209ae01f484e46679622dd607fcbc5",
"assets/lib/assests/fonts/hebrew/OpenSans-Bold.ttf": "5112859ee40a5dfa527b3b4068ccd74d",
"assets/lib/assests/fonts/hebrew/OpenSans-Light.ttf": "67090f15e31c78e9d1da28225cc08b24",
"assets/lib/assests/fonts/hebrew/OpenSans-Regular.ttf": "7df68ccfcb8ffe00669871052a4929c9",
"assets/lib/assests/happy_customers.png": "45dae10a281ee3859bf7fe4a8488b841",
"assets/lib/assests/instagram_logo.png": "3b2748c5e01c22064b004e2da31a59c7",
"assets/lib/assests/our_printer.jpg": "16400173dc2d8c1e9c472415c7b6a6c5",
"assets/lib/assests/printer.jpg": "df9fba9e0bbea7437d13e359bdefbb71",
"assets/lib/assests/tal.jpg": "0660b787b5e47d2990b5f8409b18d2e8",
"assets/NOTICES": "21b5987cd9d531bf574da418fdb695e5",
"assets/packages/social_media_buttons/fonts/SocialMediaIcons.ttf": "6483bf9fdd106eb77d6f3c04dfe35057",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"GGreenix.github.io/.git/COMMIT_EDITMSG": "b9e3be7c68b8364c45614d92ec7ca8ea",
"GGreenix.github.io/.git/config": "67ca0c7f9928a1a8e0c205bd96df4a04",
"GGreenix.github.io/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"GGreenix.github.io/.git/FETCH_HEAD": "a2ebe6c988768e356033ad9ca29b51df",
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
"GGreenix.github.io/.git/index": "eb4a119967bea19c144fe45163aa995b",
"GGreenix.github.io/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"GGreenix.github.io/.git/logs/HEAD": "a8658be42ffe4ff7102edc8cd6fe453e",
"GGreenix.github.io/.git/logs/refs/heads/main": "a8658be42ffe4ff7102edc8cd6fe453e",
"GGreenix.github.io/.git/logs/refs/remotes/origin/HEAD": "929d66b2db038df3fb9cc55b68716129",
"GGreenix.github.io/.git/logs/refs/remotes/origin/main": "c615fafe642692d829ed29d7bd11f6b7",
"GGreenix.github.io/.git/objects/29/e9e605d38445507c405b444419ed76c7e63bfd": "bdedf02282fdaa0e56c6a4728fded573",
"GGreenix.github.io/.git/objects/2e/0dee6a833c4b568d44ac99727f7e0c17c6eb67": "c7ad2d2981af735bdf2421a44b61acb1",
"GGreenix.github.io/.git/objects/36/297055f7545d41d678c914507563c910530059": "b88fdbf907b1d594fb3d5b77e1daa499",
"GGreenix.github.io/.git/objects/3b/b876b93b061b8cfb74aa21551d7d4831430489": "36d4dfe1f89c739984925185ea14470e",
"GGreenix.github.io/.git/objects/43/da14d84ecb949ca5f5e8ecca3a514aa7fe1c7d": "d970b955bbe605c4f81533fde279992d",
"GGreenix.github.io/.git/objects/48/8d2ee91b487ebe72b305ee6fc3bb46a78c8ead": "95c79f1c7a1644864cb8631673be8865",
"GGreenix.github.io/.git/objects/4a/5bc3958b164df21ed073620b89b58c1d1e420c": "0d4e8359bc787e27a5dac2e84593a9fa",
"GGreenix.github.io/.git/objects/4c/b91c5d56850f622ce671018bbc4f9d9bbb69bc": "6c2ccef0566c8b2cdf68c83fda5fc37c",
"GGreenix.github.io/.git/objects/66/ba76eb57380d3404ea10169471fe5ae3108343": "c378dc5afe432b0933aeb8756b405ec6",
"GGreenix.github.io/.git/objects/6a/4f2e0698179ef40660dbd47ca9313c3e85cc11": "d5cbcb5a037d29d92f51692c3d2ecfbb",
"GGreenix.github.io/.git/objects/6c/7ea87cdfb74964299c265d3b87b838d73d1754": "f84541b5514592c21272ff6d879834cc",
"GGreenix.github.io/.git/objects/70/00aa6ce11eedd31514b5494c3c9a8352ad57bd": "f6762eaf0e876ff7f781b13979bc2578",
"GGreenix.github.io/.git/objects/ba/55a02d62463343d6481e619230b73596ab2cb2": "01193f8f102894db450ddfc4eb6f3e17",
"GGreenix.github.io/.git/objects/c3/b193c3e4c2036e1a0fdb3e97c7adc1913ee027": "5f22d914906ce4565cda1476afb14d14",
"GGreenix.github.io/.git/objects/cf/8e0c77181bd584bc472550074a5cca2a0bd49d": "fcac96f5f79d7331801369abc593fa94",
"GGreenix.github.io/.git/objects/d4/a485bb97308033937256a8326a281e9db6a3fa": "17906c135d4fc5ad3be1494b06ae5800",
"GGreenix.github.io/.git/objects/dd/7b41224b2defe4e640d3549de5c8e894b22122": "652e7468a9a97840c751bfd45a8cb8a5",
"GGreenix.github.io/.git/objects/dd/f4bfacb396e97546364ccfeeb9c31dfaea4c25": "049d11285bcbd30a249b4dff756126a0",
"GGreenix.github.io/.git/objects/de/36131fbe27969be289b8132e3bc8d4ab85c437": "a4396bef3c9983267781cca4485d2b2b",
"GGreenix.github.io/.git/objects/e3/4b5b8d4a6b921247281fb6147501ab6a7327af": "da5e98328235fc9f8e0cfa200b656c46",
"GGreenix.github.io/.git/objects/e4/cec559aa4c266c8abcef8a0aeb3e32dd147de6": "6ec726dd1b8fb35b943ec7d5b4821f07",
"GGreenix.github.io/.git/objects/e6/d4b627351503cc67d2f1d7c8a0a9cf1c0be4bd": "db9c1ddc656710ef5874f26260405e04",
"GGreenix.github.io/.git/objects/ee/8f514cd56eb46f22cc3c3b45e0ff15b77ee7b9": "52effb3d2d75ec6ee66b47f8038e7e82",
"GGreenix.github.io/.git/objects/f2/c46a5ca2497072d109068eecd73fa6b0548a41": "a20b83a0495e447980b654e713729f18",
"GGreenix.github.io/.git/objects/f8/7d51749ad38e55cca698bb7f253b0da9c9f64f": "6f36e4d73d2f7b94aa819ab0180544ca",
"GGreenix.github.io/.git/objects/pack/pack-d0a4a7c6dc2aba30e0d7d720a06c12b888e35d82.idx": "b37eb68f89e93073db0198529bc4bcae",
"GGreenix.github.io/.git/objects/pack/pack-d0a4a7c6dc2aba30e0d7d720a06c12b888e35d82.pack": "d4b44db9d82a8e0ee751869a0fb3ff47",
"GGreenix.github.io/.git/packed-refs": "91798c44cf9244e7e9a81419175183e7",
"GGreenix.github.io/.git/refs/heads/main": "48b45a09ac3d02a38fd5105b5c89cd02",
"GGreenix.github.io/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"GGreenix.github.io/.git/refs/remotes/origin/main": "48b45a09ac3d02a38fd5105b5c89cd02",
"GGreenix.github.io/assets/AssetManifest.json": "003736dfb5591861e26748a89ec34203",
"GGreenix.github.io/assets/AssetManifest.smcbin": "fb32a782602ded4a058123ae5a3d5431",
"GGreenix.github.io/assets/assets/default_apple_pay_config.json": "b75f1f91808ad65a886966d7bd485f38",
"GGreenix.github.io/assets/assets/default_google_pay_config.json": "22357d60d7723c59ceb6eaef81608d6d",
"GGreenix.github.io/assets/assets/images/ts_10_11019a.jpg": "0989f61ebff77b55d32a185b945c58da",
"GGreenix.github.io/assets/FontManifest.json": "f7fd41faa3ef12d91768a5f91c4761ae",
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
"GGreenix.github.io/assets/NOTICES": "984c3d9a2d2fb23c7d5d93fc67dfca43",
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
"GGreenix.github.io/index.html": "a0c582f09d656261562e7d8717a7d1eb",
"/": "3c934eb9131ffbaa752bdf6e8c6d0b39",
"GGreenix.github.io/main.dart.js": "1521335122bff44f4af484934acd1481",
"GGreenix.github.io/manifest.json": "4269a28269c3ad9ae4330c3f9aad02b3",
"GGreenix.github.io/version.json": "03213143074eac6d72e4ce73e497f455",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "3c934eb9131ffbaa752bdf6e8c6d0b39",
"main.dart.js": "396cef5b3d6c482bfea327861c629d64",
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
