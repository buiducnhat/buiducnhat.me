"use strict";(self.webpackChunkbuiducnhat_me=self.webpackChunkbuiducnhat_me||[]).push([[2645],{3757:n=>{n.exports=JSON.parse('{"blogPosts":[{"id":"/2023/01/01/clean-code","metadata":{"permalink":"/buiducnhat.me/en/blogs/2023/01/01/clean-code","editUrl":"https://github.com/buiducnhat/buiducnhat.me/data/blogs/2023-01-01-clean-code/index.mdx","source":"@site/data/blogs/2023-01-01-clean-code/index.mdx","title":"Code b\u1ea9n v\xe0 k\u1ebb th\xf9 c\u1ee7a ch\xfang","description":"Trong cu\u1ed9c s\u1ed1ng c\u1ee7a c\xe1c l\u1eadp tr\xecnh vi\xean, nh\u1eefng d\xf2ng code l\xe0 th\u1ee9 h\u1ecd ti\u1ebfp x\xfac c\xf2n nhi\u1ec1u h\u01a1n ch\xednh chi\u1ebfc gi\u01b0\u1eddng m\xe0 h\u1ecd n\u1eb1m, nhi\u1ec1u h\u01a1n c\u1ea3 th\u1eddi gian h\u1ecd d\xe0nh cho ng\u01b0\u1eddi y\xeau hay ng\u01b0\u1eddi th\xe2n c\u1ee7a m\xecnh. V\u1eady c\xf3 n\xean hay kh\xf4ng vi\u1ec7c th\u01b0\u1eddng xuy\xean \\"d\u1ecdn d\u1eb9p\\" nh\u1eefng \u0111o\u1ea1n code \u0111\xf3 trong qu\xe1 tr\xecnh l\xe0m vi\u1ec7c?","date":"2023-01-01T00:00:00.000Z","formattedDate":"January 1, 2023","tags":[{"label":"code","permalink":"/buiducnhat.me/en/blogs/tags/code"},{"label":"trick","permalink":"/buiducnhat.me/en/blogs/tags/trick"},{"label":"clean_code","permalink":"/buiducnhat.me/en/blogs/tags/clean-code"}],"readingTime":7.78,"hasTruncateMarker":true,"authors":[{"name":"B\xf9i \u0110\u1ee9c Nh\u1eadt","title":"Website\'s owner","url":"https://github.com/buiducnhat","email":"nhaths4701@gmail.com","imageURL":"https://github.com/buiducnhat.png","key":"buiducnhat"}],"frontMatter":{"title":"Code b\u1ea9n v\xe0 k\u1ebb th\xf9 c\u1ee7a ch\xfang","authors":["buiducnhat"],"tags":["code","trick","clean_code"]},"nextItem":{"title":"The most useful VS Code extensions for developers","permalink":"/buiducnhat.me/en/blogs/2022/12/11/the-most-useful-vs-code-extensions-for-developers"}},"content":"Trong cu\u1ed9c s\u1ed1ng c\u1ee7a c\xe1c l\u1eadp tr\xecnh vi\xean, nh\u1eefng d\xf2ng code l\xe0 th\u1ee9 h\u1ecd ti\u1ebfp x\xfac c\xf2n nhi\u1ec1u h\u01a1n ch\xednh chi\u1ebfc gi\u01b0\u1eddng m\xe0 h\u1ecd n\u1eb1m, nhi\u1ec1u h\u01a1n c\u1ea3 th\u1eddi gian h\u1ecd d\xe0nh cho ng\u01b0\u1eddi y\xeau hay ng\u01b0\u1eddi th\xe2n c\u1ee7a m\xecnh. V\u1eady c\xf3 n\xean hay kh\xf4ng vi\u1ec7c th\u01b0\u1eddng xuy\xean \\"d\u1ecdn d\u1eb9p\\" nh\u1eefng \u0111o\u1ea1n code \u0111\xf3 trong qu\xe1 tr\xecnh l\xe0m vi\u1ec7c?\\n\\n![banner](./img/banner.jpeg)\\n\\n\x3c!--truncate--\x3e\\n\\n## T\u1ea1i sao l\u1ea1i g\u1ecdi l\xe0 \\"code b\u1ea9n\\"?\\n\\nTh\u1eadt ra, kh\xf4ng c\xf3 kh\xe1i ni\u1ec7m \\"code b\u1ea9n\\" hay \\"code s\u1ea1ch\\" g\xec \u1edf \u0111\xe2y c\u1ea3, m\xecnh ch\u1ec9 g\u1ecdi th\u1ebf gi\xfap m\u1ecdi ng\u01b0\u1eddi d\u1ec5 h\xecnh dung ra \u0111\u1eb7c \u0111i\u1ec3m c\u1ee7a nh\u1eefng \u0111o\u1ea1n code, hay th\u1eadm ch\xed file code, project code \u0111\xf3 m\xe0 th\xf4i\\n\\nV\xed d\u1ee5 nh\u01b0, m\u1ed9t \u0111o\u1ea1n code nh\u01b0 sau v\u1edbi ng\xf4n ng\u1eef kinh \u0111i\u1ec3n `C++`:\\n\\n```cpp\\nint oddsum(int a[], int n)\\n{\\n  int s=0;\\n   for (int i = 0; i <n;i++)\\n  {\\n   if (a[i] % 2 == 1)\\n    {\\n    s = s+a[i];}\\n  }\\nreturn s;\\n}\\n```\\n\\n\u0110o\u1ea1n code tr\xean l\xe0 m\u1ed9t `function` \u0111\u01a1n gi\u1ea3n \u0111\u1ec3 t\xednh t\u1ed5ng c\xe1c s\u1ed1 l\u1ebb c\u1ee7a m\u1ed9t m\u1ea3ng v\u1edbi \u0111\u1ea7u v\xe0o l\xe0 m\u1ed9t m\u1ea3ng s\u1ed1 nguy\xean v\xe0 s\u1ed1 ph\u1ea7n t\u1eed c\u1ee7a n\xf3\\n\\nK\u1ebft qu\u1ea3 th\xec \u0111o\u1ea1n code tr\xean cho ra k\u1ebft qu\u1ea3 nh\u01b0 mong \u0111\u1ee3i v\xec v\u1edbi _syntax_ hay _logic_ n\xf3 kh\xf4ng h\u1ec1 sai, nh\u01b0ng \u0111o\u1ea1n code tr\xean c\xf3 r\u1ea5t nhi\u1ec1u \u0111i\u1ec3m kh\xf4ng \u1ed5n, v\xed d\u1ee5 nh\u01b0:\\n\\n- T\xean bi\u1ebfn kh\xf4ng c\xf3 \xfd ngh\u0129a\\n- Kh\xf4ng c\xf3 comment\\n- Kh\xf4ng c\xf3 ki\u1ec3m tra \u0111\u1ea7u v\xe0o\\n- V\xe0 \u0111\u1eb7c bi\u1ec7t l\xe0 format code l\u1ed9n x\u1ed9n, c\xe1c d\u1ea5u tab \u0111\u1ea7u d\xf2ng kh\xf4ng kh\u1edbp,...\\n\\nN\u1ebfu l\xe0m vi\u1ec7c m\u1ed9t m\xecnh, d\xf9ng _git_ m\u1ed9t m\xecnh v\u1edbi source code do m\xecnh b\u1ea1n qu\u1ea3n l\xfd, th\xec v\u1ea5n \u0111\u1ec1 n\xe0y kh\xf4ng qu\xe1 to t\xe1t.\\n\\nNh\u01b0ng h\xe3y c\u1ee9 t\u01b0\u1edfng t\u01b0\u1ee3ng vi\u1ec7c 3, 4 th\xe1ng hay th\u1eadm ch\xed 1 n\u0103m sau nh\xecn l\u1ea1i, b\u1ea1n c\xf3 d\xe1m maintain nh\u1eefng \u0111o\u1ea1n code nh\u01b0 v\u1eady m\xe0 do ch\xednh m\xecnh vi\u1ebft l\xean kh\xf4ng?\\n\\nV\xe0 n\u1ebfu b\u1ea1n l\xe0m vi\u1ec7c trong m\u1ed9t team, th\xec v\u1ea5n \u0111\u1ec1 n\xe0y s\u1ebd tr\u1edf n\xean r\u1ea5t kh\xf3 kh\u0103n v\u1edbi nh\u1eefng developer kh\xe1c, \u0111\u1eb7c bi\u1ec7t l\xe0 khi b\u1ea1n kh\xf4ng c\xf2n l\xe0m trong team \u0111\xf3 n\u1eefa.\\nNhi\u1ec1u c\xe2u h\u1ecfi s\u1ebd \u0111\u01b0\u1ee3c \u0111\u1eb7t ra khi x\u1ea3y ra v\u1ea5n \u0111\u1ec1 \u0111\xf3: `a[]` l\xe0 g\xec v\u1eady, what is `n`???, and `s`????\\n\\n\u0110\xf3 m\u1edbi ch\u1ec9 l\xe0 \u0111o\u1ea1n code ch\u01b0a \u0111\u1ea7y 15 d\xf2ng, v\u1eady m\u1ed9t project to \u0111\u1ebfn v\xe0i ch\u1ee5c file, hay c\u1ea3 tr\u0103m file, vi\u1ec7c maintain code nh\u01b0 v\u1eady g\u1eb7p kh\xf3 kh\u0103n th\u1ebf n\xe0o?\\n\\n## Gi\u1ea3i ph\xe1p \\"c\u1ee9u c\xe1nh\\" cho v\u1ea5n \u0111\u1ec1 tr\xean\\n\\n`Clean code` l\xe0 m\u1ed9t thu\u1eadt ng\u1eef th\u01b0\u1eddng \u0111\u01b0\u1ee3c gi\u1edbi _Coder_, _Developer_ s\u1eed d\u1ee5ng v\u1edbi \u0111\u1eb7c \u0111i\u1ec3m \u0111o\u1ea1n code ng\u01b0\u1ee3c v\u1edbi \u0111o\u1ea1n code tr\xean, v\xed d\u1ee5 nh\u01b0:\\n\\nT\u1ea5t nhi\xean **Clean code** kh\xf4ng ch\u1ec9 l\xe0 vi\u1ec7c \u0111\u1eb7t t\xean bi\u1ebfn h\u1ee3p l\xfd, hay format code \u0111\xfang chu\u1ea9n, m\xe0 n\xf3 c\xf2n bao g\u1ed3m vi\u1ec7c **design structure** cho project, hay vi\u1ec7c vi\u1ebft **document** \u0111\u1ea7y \u0111\u1ee7,...\\n\\nV\xec v\u1eady b\xe0i vi\u1ebft n\xe0y m\xecnh ch\u1ec9 \u0111\u1ec1 c\u1eadp \u0111\u1ebfn **Clean code** \u1edf m\u1ee9c \u0111\u1ed9 c\u01a1 b\u1ea3n, \u0111\u01a1n gi\u1ea3n, v\xe0 d\u1ec5 hi\u1ec3u nh\u1ea5t, hay c\u1ee5 th\u1ec3 l\xe0 trong m\u1ed9t v\xe0i _function_ nh\u1ecf l\u1ebb trong 1 _file_ code.\\n\\n### 1. \u0110\u1eb7t t\xean c\xf3 \xfd ngh\u0129a\\n\\n\u0110\u1eb7t t\xean bi\u1ebfn c\xf3 \xfd ngh\u0129a l\xe0 m\u1ed9t trong nh\u1eefng \u0111i\u1ec3m quan tr\u1ecdng nh\u1ea5t trong vi\u1ec7c vi\u1ebft code, v\xec n\xf3 gi\xfap cho ng\u01b0\u1eddi \u0111\u1ecdc code d\u1ec5 hi\u1ec3u h\u01a1n, v\xe0 d\u1ec5 maintain h\u01a1n.\\n\\nV\u1edbi m\xecnh, m\xecnh lu\xf4n c\xf3 nh\u1eefng quy \u01b0\u1edbc ng\u1ea7m \u0111\u1ec3 \u0111\u1eb7t t\xean cho bi\u1ebfn, h\xe0m, class, hay k\u1ec3 c\u1ea3 file ngay t\u1eeb l\xfac vi\u1ebft d\xf2ng \u0111\u1ea7u ti\xean trong project, v\xe0 nhi\u1ec1u ng\u01b0\u1eddi kh\xe1c c\u0169ng l\xe0m nh\u01b0 v\u1eady:\\n\\n- V\u1edbi c\xe1c **variable** (bi\u1ebfn), hay **attribute** (thu\u1ed9c t\xednh trong **class**) th\xf4ng th\u01b0\u1eddng, ch\xfang s\u1ebd \u0111\u01b0\u1ee3c \u0111\u1ecbnh ngh\u0129a b\u1eb1ng m\u1ed9t danh t\u1eeb c\xf3 ngh\u0129a, v\xed d\u1ee5 nh\u01b0 `fullName`, `age`, `number_of_wheel`.\\n- V\u1edbi c\xe1c **variable**, **attribute** c\xf3 ki\u1ec3u d\u1eef li\u1ec7u l\xe0 `boolean`, ch\xfang s\u1ebd \u0111\u01b0\u1ee3c \u0111\u1ecbnh ngh\u0129a b\u1eb1ng m\u1ed9t danh t\u1eeb c\xf3 ngh\u0129a, v\xe0 c\xf3 th\xeam ti\u1ec1n t\u1ed1 `is`, `has`, `can`,... v\xed d\u1ee5 nh\u01b0 `isMale`, `hasWheel`, `can_fly`.\\n- V\u1edbi c\xe1c **variable**, **attribute** c\xf3 ki\u1ec3u d\u1eef li\u1ec7u li\xean quan \u0111\u1ebfn `array`, `list`, `set`,... ch\xfang s\u1ebd \u0111\u01b0\u1ee3c \u0111\u1ecbnh ngh\u0129a b\u1eb1ng m\u1ed9t danh t\u1eeb s\u1ed1 nhi\u1ec1u c\xf3 ngh\u0129a, ho\u1eb7c danh t\u1eeb v\xe0 c\xf3 th\xeam ti\u1ec1n t\u1ed1 hay h\u1eadu t\u1ed1 `list`, `array`, `set`,... v\xed d\u1ee5 nh\u01b0 `students`, `car_list`, `setOfNumber`,....\\n- V\u1edbi t\xean c\xe1c **function** (h\xe0m), **method** (ph\u01b0\u01a1ng th\u1ee9c trong **class**), ch\xfang s\u1ebd \u0111\u01b0\u1ee3c \u0111\u1ecbnh ngh\u0129a b\u1eb1ng m\u1ed9t \u0111\u1ed9ng t\u1eeb c\xf3 ngh\u0129a, v\xed d\u1ee5 nh\u01b0 `getFullName()`, `calculateAge()`, `get_number_of_wheel()`, `toggleLed()`.\\n\\nKhi \u0111\xf3 nh\xecn v\xe0o c\xe1c \u0111o\u1ea1n code, b\u1ea1n c\xf3 th\u1ec3 d\u1ec5 d\xe0ng h\u01a1n trong vi\u1ec7c \u0111\u1ecdc source code, v\xe0 c\u0169ng \u0111\u1ee1 \u0111au \u0111\u1ea7u h\u01a1n m\u1ed7i khi ngh\u0129 c\xe1ch \u0111\u1eb7t t\xean cho ch\xfang.\\n\\n### 2. \u0110\u1eb7t t\xean theo quy t\u1eafc\\n\\nV\xe0o th\u1eb3ng v\u1ea5n \u0111\u1ec1 lu\xf4n, vi\u1ec7c \u0111\u1eb7t t\xean c\xf3 c\xfa ph\xe1p c\u0169ng d\u1ef1a tr\xean m\u1ed9t s\u1ed1 convension chung nh\u01b0:\\n\\n1. Quy t\u1eafc `camelCase`: v\xed d\u1ee5 nh\u01b0 `fullName`, `age`, `isMale`, `carList`, `calculateAge()`, `toggleLed()`, th\u01b0\u1eddng s\u1eed d\u1ee5ng \u0111\u1ec3 \u0111\u1eb7t t\xean cho **bi\u1ebfn, h\xe0m, thu\u1ed9c t\xednh hay ph\u01b0\u01a1ng th\u1ee9c** trong _h\u1ea7u h\u1ebft_ ng\xf4n ng\u1eef l\u1eadp tr\xecnh.\\n2. Quy t\u1eafc `PascalCase`: v\xed d\u1ee5 nh\u01b0 `Student`, `Car`, `CarList`, `CalculateAge()`, `ToggleLed()`, th\u01b0\u1eddng s\u1eed d\u1ee5ng \u0111\u1ec3 \u0111\u1eb7t t\xean cho **class, interface, enum, struct, namespace**, hay c\u0169ng \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\u1ec3 \u0111\u1ea1t t\xean cho thu\u1ed9c t\xednh, ph\u01b0\u01a1ng th\u1ee9c v\u1edbi ng\xf4n ng\u1eef l\u1eadp tr\xecnh `C#`.\\n3. Quy t\u1eafc `snake_case`, hay c\xf2n g\u1ecdi l\xe0 `under_score`: v\xed d\u1ee5 nh\u01b0 `full_name`, `age`, `is_male`, `car_list`, `calculate_age()`, `toggle_led()`, s\u1eed d\u1ee5ng gi\u1ed1ng nh\u01b0 `camelCase`.\\n4. Quy t\u1eafc `kebab-case`: th\u01b0\u1eddng d\xf9ng trong \u0111\u1eb7t t\xean cho **file** h\u01a1n l\xe0 vi\u1ec7c \u0111\u1eb7t t\xean cho bi\u1ebfn, h\xe0m hay class.\\n\\nV\xe0 t\u1ea5t nhi\xean, quy t\u1eafc, hay quy \u01b0\u1edbc c\u0169ng l\xe0 do nh\u1eefng ng\u01b0\u1eddi \\"ti\u1ec1n b\u1ed1i\\" c\u1ee7a ch\xfang ta ngh\u0129 ra, n\xf3 kh\xf4ng ph\u1ea3i l\xe0 m\u1ed9t lu\u1eadt l\u1ec7, n\u1ebfu b\u1ea1n mu\u1ed1n s\xe1ng t\u1ea1o, th\xec b\u1ea1n c\xf3 th\u1ec3 l\xe0m ki\u1ec3u a, ki\u1ec3u b, nh\u01b0ng h\xe3y \u0111\u1ea3m b\u1ea3o hi\u1ec7u qu\u1ea3 c\u1ee7a s\u1ef1 \\"s\xe1ng t\u1ea1o\\" \u0111\xf3.\\n\\n### 3. Vi\u1ebft code theo chu\u1ea9n\\n\\n\u0110\u1ec3 g\u1ecdi l\xe0 \\"chu\u1ea9n\\" th\xec kh\xf4ng ai d\xe1m nh\u1eadn \u0111o\u1ea1n code n\xe0y \u0111\xe3 chu\u1ea9n, hay \u0111\u1eb9p nh\u1ea5t, v\xec n\xf3 l\xe0 m\u1ed9t \u0111\u1eb7c \u0111i\u1ec3m kh\xf4ng th\u1ec3 \u0111\u1ecbnh l\u01b0\u1ee3ng \u0111\u01b0\u1ee3c, nh\u01b0ng m\xecnh v\u1eabn mu\u1ed1n n\xf3i v\u1ec1 n\xf3, v\xec n\xf3 l\xe0 m\u1ed9t trong nh\u1eefng \u0111i\u1ec3m quan tr\u1ecdng trong vi\u1ec7c vi\u1ebft code.\\n\\nV\xed d\u1ee5 nh\u1eefng d\u1ea5u c\xe1ch, d\u1ea5u tab, d\u1ea5u xu\u1ed1ng d\xf2ng, d\u1ea5u ch\u1ea5m ph\u1ea9y, d\u1ea5u ngo\u1eb7c,... \u0111\u1ec1u l\xe0 nh\u1eefng \u0111i\u1ec1u c\u1ea7n ph\u1ea3i tu\xe2n theo 1 chu\u1ea9n (format) n\xe0o \u0111\xf3, \u0111\u1ec3 khi c\xf9ng l\xe0m vi\u1ec7c v\u1edbi m\u1ed9t \u0111o\u1ea1n code, b\u1ea1n v\xe0 ng\u01b0\u1eddi kh\xe1c \u0111\u1ec1u s\u1ebd tr\xe1nh g\u1eb7p ph\u1ea3i v\u1ea5n \u0111\u1ec1 **conflict** ch\u1eb3ng h\u1ea1n.\\n\\nNg\xe0y nay, m\u1ed9t s\u1ed1 **IDE**/**Text Editor** hi\u1ec7n \u0111\u1ea1i th\u01b0\u1eddng \u0111\u01b0\u1ee3c t\xedch h\u1ee3p s\u1eb5n m\u1ed9t c\xf4ng c\u1ee5 \u0111\u1ec3 format code theo chu\u1ea9n, v\xed d\u1ee5 nh\u01b0 **Visual Studio Code** c\xf3 s\u1eb5n tool \u0111\u1ec3 format cho r\u1ea5t r\u1ea5t nhi\u1ec1u ng\xf4n ng\u1eef kh\xe1c nhau. Hay khi b\u1ea1n l\xe0m vi\u1ec7c v\u1edbi **project** vi\u1ebft b\u1eb1ng `Javascript`, `Prettier` l\xe0 m\u1ed9t c\xf4ng c\u1ee5 kh\xf4ng th\u1ec3 thi\u1ebfu\\n\\nC\xe1c c\xf4ng c\u1ee5 nh\u01b0 v\u1eady gi\xfap code b\u1ea1n t\u1ef1 \u0111\u1ed9ng l\xf9i v\xe0o trong, t\u1ef1 \u0111\u1ed9ng th\xeam d\u1ea5u c\xe1ch, t\u1ef1 \u0111\u1ed9ng th\xeam d\u1ea5u ch\u1ea5m ph\u1ea9y, t\u1ef1 \u0111\u1ed9ng th\xeam d\u1ea5u ngo\u1eb7c,... m\u1ed9t c\xe1ch h\u1ee3p l\xfd, khoa h\u1ecdc, v\xe0 \u0111\u1eb9p m\u1eaft.\\n\\n### 4. Comment code khi c\u1ea7n thi\u1ebft\\n\\n**Comment code** l\xe0 th\u1ee9 nhi\u1ec1u ng\u01b0\u1eddi th\u01b0\u1eddng b\u1ecf qua, v\xec n\xf3 t\u1ed1n th\xeam th\u1eddi gian trong qu\xe1 tr\xecnh vi\u1ebft code. Nh\u01b0ng n\u1ebfu nh\u1eefng c\xe1ch tr\xean v\u1eabn kh\xf4ng gi\xfap b\u1ea1n hi\u1ec3u \u0111\u01b0\u1ee3c \u0111o\u1ea1n code, ch\u1ee9ng t\u1ecf nh\u1eefng \u0111o\u1ea1n code \u0111\xf3 r\u1ea5t kh\xf3, v\xe0 kh\xf4ng th\u1ec3 t\u01b0\u1eddng minh h\u01a1n \u0111\u01b0\u1ee3c, th\xec l\xfac n\xe0y **comment code** s\u1ebd l\xe0 m\u1ed9t gi\u1ea3i ph\xe1p t\u1ed1t nh\u1ea5t.\\n\\nV\u1edbi c\xe1c ng\xf4n ng\u1eef kh\xe1c nhau, s\u1ebd c\xf3 c\xe1ch comment code kh\xe1c nhau, tuy nhi\xean m\u1ee5c \u0111\xedch chung c\u1ee7a vi\u1ec7c comment code l\xe0 \u0111\u1ec3 gi\u1ea3i th\xedch cho ng\u01b0\u1eddi \u0111\u1ecdc code c\u1ee7a b\u1ea1n bi\u1ebft, \u0111o\u1ea1n code \u0111\xf3 l\xe0m g\xec, v\xe0 t\u1ea1i sao l\u1ea1i l\xe0m nh\u01b0 v\u1eady.\\n\\nV\xec v\u1eady, n\u1ebfu b\u1ea1n th\u1ea5y \u0111o\u1ea1n code c\u1ee7a ch\xednh m\xecnh c\xf3 th\u1ec3 g\xe2y kh\xf3 \u0111\u1ecdc, hay ch\u01b0a t\u01b0\u1eddng minh, \u0111\u1eebng ng\u1ea7n ng\u1ea1i th\xeam v\xe0i d\xf2ng text \u0111\u1ec3 gi\u1ea3i th\xedch cho ng\u01b0\u1eddi \u0111\u1ecdc sau nh\xe9!\\n\\n## \xc1p d\u1ee5ng v\xe0o v\xed d\u1ee5 ban \u0111\u1ea7u\\n\\nL\xfd thuy\u1ebft \u0111\xe3 c\xf3, h\xe3y th\u1eed c\xf9ng m\xecnh \xe1p d\u1ee5ng v\xe0o \u0111o\u1ea1n \\"code b\u1ea9n\\" tr\xean kia nh\xe9:\\n\\n```cpp\\n// Function to calculate sum of odd numbers in an array\\n// Input: numbers - array of integers\\n//        size - size of the array\\n// Output: sum of odd numbers in the array\\nint calSumOfOdd(int numbers[], int size)\\n{\\n  // Declare variable to store the result\\n  int result = 0;\\n\\n  // Loop through the array\\n  for (int i = 0; i < n; i++)\\n  {\\n    // Check if the number is odd\\n    if (numbers[i] % 2 == 1)\\n    {\\n      result += 2;\\n    }\\n  }\\n\\n  return result;\\n}\\n```\\n\\nT\u1ea5t nhi\xean, vi\u1ec7c \xe1p d\u1ee5ng qu\xe1 nhi\u1ec1u quy t\u1eafc v\xe0o \u0111o\u1ea1n code nh\u1ecf tr\xean c\xf3 v\u1ebb h\u01a1i c\u1ed3ng k\u1ec1nh, nh\u01b0ng \u0111\xf3 ch\u1ec9 l\xe0 v\xed d\u1ee5 \u0111\u01a1n gi\u1ea3n \u0111\u1ec3 m\u1ecdi ng\u01b0\u1eddi c\xf3 th\u1ec3 th\u1ea5y \u0111\u01b0\u1ee3c s\u1ef1 kh\xe1c bi\u1ec7t gi\u1eefa \\"code b\u1ea9n\\" v\xe0 \\"code s\u1ea1ch\\".\\n\\n## K\u1ebft lu\u1eadn\\n\\nTh\u1ef1c t\u1ebf c\xf2n nhi\u1ec1u nh\u1eefng c\xe1ch \u0111\u1ec3 clean code nh\u01b0 m\xecnh \u0111\xe3 gi\u1edbi thi\u1ec7u \u1edf \u0111\u1ea7u b\xe0i, tuy nhi\xean b\xe0i vi\u1ebft ng\u1eafn g\u1ecdn, m\xecnh ch\u1ec9 t\u1eadp trung v\xe0o nh\u1eefng c\xe1ch m\xe0 m\xecnh th\u1ea5y h\u1eefu \xedch nh\u1ea5t, v\xe0 d\u1ec5 \xe1p d\u1ee5ng nh\u1ea5t.\\n\\nHy v\u1ecdng b\xe0i vi\u1ebft n\xe0y s\u1ebd gi\xfap b\u1ea1n c\xf3 th\xeam m\u1ed9t s\u1ed1 kinh nghi\u1ec7m \u0111\u1ec3 vi\u1ebft code t\u1ed1t h\u01a1n, v\xe0 tr\xe1nh \u0111\u01b0\u1ee3c nh\u1eefng l\u1ed7i \\"code b\u1ea9n\\".\\n\\nN\u1ebfu b\u1ea1n c\xf3 th\u1eafc m\u1eafc, ho\u1eb7c mu\u1ed1n b\u1ed5 sung th\xeam, h\xe3y \u0111\u1ec3 l\u1ea1i comment b\xean d\u01b0\u1edbi nh\xe9!\\n\\n## Links\\n\\n- Banner: [https://i1.sndcdn.com/avatars-000089054537-j37dkh-t500x500.jpg](https://i1.sndcdn.com/avatars-000089054537-j37dkh-t500x500.jpg)"},{"id":"/2022/12/11/the-most-useful-vs-code-extensions-for-developers","metadata":{"permalink":"/buiducnhat.me/en/blogs/2022/12/11/the-most-useful-vs-code-extensions-for-developers","editUrl":"https://github.com/buiducnhat/buiducnhat.me/data/blogs/2022-12-11-the-most-useful-vs-code-extensions-for-developers/index.mdx","source":"@site/i18n/en/docusaurus-plugin-content-blog/2022-12-11-the-most-useful-vs-code-extensions-for-developers/index.mdx","title":"The most useful VS Code extensions for developers","description":"Visual Studio Code a.k.a VS Code, released by Microsoft, is one of the most popular open source code editors for developers.","date":"2022-12-11T00:00:00.000Z","formattedDate":"December 11, 2022","tags":[{"label":"tools","permalink":"/buiducnhat.me/en/blogs/tags/tools"},{"label":"vscode","permalink":"/buiducnhat.me/en/blogs/tags/vscode"},{"label":"trick","permalink":"/buiducnhat.me/en/blogs/tags/trick"}],"readingTime":3.335,"hasTruncateMarker":true,"authors":[{"name":"B\xf9i \u0110\u1ee9c Nh\u1eadt","title":"Website\'s owner","url":"https://github.com/buiducnhat","email":"nhaths4701@gmail.com","imageURL":"https://github.com/buiducnhat.png","key":"buiducnhat"}],"frontMatter":{"title":"The most useful VS Code extensions for developers","authors":["buiducnhat"],"tags":["tools","vscode","trick"]},"prevItem":{"title":"Code b\u1ea9n v\xe0 k\u1ebb th\xf9 c\u1ee7a ch\xfang","permalink":"/buiducnhat.me/en/blogs/2023/01/01/clean-code"}},"content":"**Visual Studio Code** a.k.a **VS Code**, released by ***Microsoft***, is one of the most popular open source code editors for developers.\\n\\n**VS Code** helps developers increase productivity in the execution of projects. One of the reasons make **VS Code** popular is its variety of available extensions in <a href=\\"https://marketplace.visualstudio.com/VSCode\\" target=\\"_blank\\" rel=\\"noreferrer\\">marketplace</a>.\\n\\nToday, I am going to list some extensions that I usually use.\\n\\n![banner](./img/banner.jpeg)\\n\\n\x3c!--truncate--\x3e\\n\\n_Note: The below extensions are useful for the most developers in any field, not just for Web App or Embedded developers. So in the future I will have other articles about extensions suitable for specific areas._\\n\\nThey are:\\n\\n- [GitLens](#gitlens)\\n- [Visual Studio IntelliCode](#visual-studio-intellicode)\\n- [Project Manager](#project-manager)\\n- [vscode-icons](#vscode-icons)\\n- [Bracket Pair Colorizer 2](#bracket-pair-colorizer-2)\\n- [indent-rainbow](#indent-rainbow)\\n\\n## GitLens\\n\\n**VS Code** has already integrated built in `git` GUI, it\'s very helpful for developers because nowaday `git` is absolutely necessary for them.\\n\\n![gitlens-image](https://raw.githubusercontent.com/gitkraken/vscode-gitlens/main/images/docs/gitlens-logo-anybg.png)\\n\\nWhen working with other team members, GitLens is a very good choice with its features:\\n\\n- Revision navigation through file history.\\n- A current line blame annotation at the end of the line showing the commit.\\n- A status bar blame annotation for the commit and author who last modified the current line.\\n\\nYou can find it <a href=\\"https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens\\" target=\\"_blank\\" rel=\\"noreferrer\\">here</a> (in Visual Studio Code marketplace).\\n\\n## Visual Studio IntelliCode\\n\\nAt the time I write this article, `Visual Studio IntelliCode` extension has the 8th most downloads in marketplace. So it became indispensable for developers.\\n\\n![visual-studio-intellicode](https://go.microsoft.com/fwlink/?linkid=2006041)\\n\\nThis extension helps us writing code quickly by adding a star before the code snippets (it means this code had used very very much before by developers over the world).\\n\\nYou can install this extension <a href=\\"https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode\\" target=\\"_blank\\" rel=\\"noreferrer\\">here</a>.\\n\\n## Project Manager\\n\\nNormally, each project is a `folder/directory` of your OS. Each time you want to open your project, you have to open the corresponding `folder/directory` and of course, you have to remember its path.\\n\\nWhen the number of your projects increases, or you save them in a disorganized manner, you usually forget where they locate.\\n\\n![project-manager-image](https://raw.githubusercontent.com/alefragnani/vscode-project-manager/master/images/vscode-project-manager-logo-readme.png)\\n\\nThis problem can be easily solved with `Project Manager` extension. You can save your projects like folder/directory or even your workspaces. Your projects will be visible in the side bar like this\\n\\n![side bar](./img/sidebar.png)\\n\\nYou can install this extension <a href=\\"https://marketplace.visualstudio.com/items?itemName=alefragnani.project-manager\\" target=\\"_blank\\" rel=\\"noreferrer\\">here</a>.\\n\\n## vscode-icons\\n\\nThis extension is just an `icon theme` for **VS Code**. It supplies icon for the folders/directories and files in the explorer sidebar of **VS Code**.\\n\\n![vscode-icons-image](https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/images/screenshot.gif)\\n\\nThere are many good choice `icon theme` for us at marketplace, the reason why I recommend this because `vscode-icons` is the official extension of `Microsoft` (who made **VS Code**).\\n\\nYou can install this extension <a href=\\"https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons\\" target=\\"_blank\\" rel=\\"noreferrer\\">here</a>.\\n\\nOf course, you can easily find out for your favorite themes at marketplace by type `icon` into the search input. The next step you just select and install them.\\n\\n## Bracket Pair Colorizer 2 (deprecated)\\n\\n> _Note: This extension is now deprecated and no longer being supported. Instead, this is now a built in feature of `**VS Code**`._\\n> Have you ever known about _LISP_?\\n\\n![bracket-hells](https://image.slidesharecdn.com/lisppivorak-190913103822/85/lisplots-of-irritating-superfluous-parentheses-3-320.jpg?cb=1568371117)\\n\\nWhen your code block increase too big, you use too many brackets, you difficultly find the rights bracket pairs, this extension will help you.\\n\\nLook at this image and you will understand how it works\\n\\n![bracket-colorizer-2-image](https://github.com/CoenraadS/Bracket-Pair-Colorizer-2/raw/HEAD/images/example.png)\\n\\n~~You can install this extension <a href=\\"https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2\\" target=\\"_blank\\" rel=\\"noreferrer\\">here</a>.~~ (deprecated).\\n\\nNow you can enable `Black pair colorizer` as a native feature in `**VS Code**`.\\n\\nJust open your `settings.json` of your `**VS Code**` and add two following lines:\\n\\n```json\\n{\\n  ...\\n  \u200b\\"editor.bracketPairColorization.enabled\\"\u200b: \u200btrue\u200b,\\n  \u200b\u200b\\"editor.guides.bracketPairs\\"\u200b: \u200b\\"active\\"\u200b,\\n  ...\\n}\\n```\\n\\n## indent-rainbow\\n\\nLike `Bracket Pair Colorizer 2`, `indent-rainbow` help us easily when see the code blocks, especially for `Python` developer\\n\\n![indent-rainbow-image](https://raw.githubusercontent.com/oderwat/vscode-indent-rainbow/master/assets/example.png)\\n\\nYou can install this extension <a href=\\"https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow\\" target=\\"_blank\\" rel=\\"noreferrer\\">here</a>.\\n\\n_Note: the last both extensions can be customized, you should read their documents at their homepage to continue._\\n\\nThese are the best extensions for me, and it totally from my opinion, so if you know more helpful extensions, recommend for us!"}]}')}}]);