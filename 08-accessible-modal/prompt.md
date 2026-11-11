<div dir="rtl">
<h1 dir="rtl">08 · هالنافذة… حاول تسكّرها</h1>
<p dir="rtl"><strong>▶ <a href="https://promptjicode.github.io/promptjicode/08-accessible-modal/">جرّب النافذتين</a></strong>: افتح كل وحدة وجرّب تسكّرها بـ Escape، وبالضغط برّاها، وبزر الإغلاق. ومن الكمبيوتر جرّب الـ Tab.</p>
<h2 dir="rtl">البرومبت الضعيف</h2>
</div>

```
اعملي نافذة منبثقة لاشتراك بالنشرة
```

<div dir="rtl">
<p dir="rtl">النتيجة: نافذة حلوة… بس Escape ما بيسكّرها، والضغط برّاها ما بيعمل شي، وزر الإغلاق صغير لدرجة إنك بتضغط جنبه. ومن الكيبورد، الـ Tab بيهرب لورا النافذة.</p>
<h2 dir="rtl">البرومبت الصح</h2>
</div>

```
اعملي نافذة منبثقة لاشتراك بالنشرة.
بدي تتسكّر بـ Escape، وبالضغط برّاها، وبزر إغلاق كبير وواضح عالموبايل.
وهي مفتوحة: الصفحة اللي وراها ما تتحرك، والتركيز يضل جوّاها.
ولما تتسكّر، يرجع التركيز للزر اللي فتحها.
```

<div dir="rtl">
<h2 dir="rtl">شو بتلاقي بالكود</h2>
<ul dir="rtl">
<li dir="rtl"><strong><code dir="ltr">&lt;dialog&gt;</code> مع <code dir="ltr">showModal()</code></strong>: المتصفح لحاله بيسكّرها بـ Escape، وبيحبس التركيز جوّاها، وبيفتحها بالـ top layer فوق كل شي.</li>
<li dir="rtl"><strong>الضغط برّاها</strong>: الضغطة على الخلفية بتوصل للـ <code dir="ltr">dialog</code> نفسه، فمنسكّرها لما <code dir="ltr">e.target === news</code>.</li>
<li dir="rtl"><strong>زر إغلاق 48px</strong> مع <code dir="ltr">aria-label="إغلاق"</code>: سهل تضغطه بإصبعك، وقارئ الشاشة بيعرف شو هو.</li>
<li dir="rtl"><strong><code dir="ltr">aria-labelledby</code></strong>: قارئ الشاشة بيقول «نافذة، اشترك بنشرتنا».</li>
<li dir="rtl"><strong><code dir="ltr">body:has(dialog[open])</code></strong> مع <code dir="ltr">overflow: hidden</code>: الصفحة اللي وراها ما بتتحرك.</li>
<li dir="rtl"><strong>حدث <code dir="ltr">close</code></strong>: بيرجّع التركيز لزر «اشترك بالنشرة».</li>
</ul>
<h2 dir="rtl">الفكرة</h2>
<p dir="rtl"><strong>تجربة المستخدم ما بتنحسب من الفتحة بس… لازم تحسبها من أول ضغطة لآخر ضغطة.</strong></p>
</div>
