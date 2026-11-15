<div dir="rtl">
<h1 dir="rtl">09 · مربع بحث… بيبعت 6 طلبات لكلمة وحدة</h1>
<p dir="rtl"><strong>▶ <a href="https://promptjicode.github.io/promptjicode/09-search-debounce/">جرّب المربعين</a></strong>: اكتب «شاورما» بكل واحد، وراقب عدّاد الطلبات وسجلّها. السيرفر وهمي وبطيء عن قصد، لتشوف المشكلة حتى على نت سريع.</p>
<h2 dir="rtl">البرومبت الضعيف</h2>
</div>

```
اعملي مربع بحث للمنيو
```

<div dir="rtl">
<p dir="rtl">النتيجة: مربع شغّال… بس كل حرف بتكتبه طلب جديد للسيرفر. «شاورما» = 6 طلبات. والطلبات بترجع بأي ترتيب، فإذا طلب «شا» رجع آخر واحد، بتطلعلك نتائج شاي بدل الشاورما. وبين حرف وحرف الشاشة فاضية، وما في شي بيقلّك إنو عم يبحث.</p>
<h2 dir="rtl">البرومبت الصح</h2>
</div>

```
اعملي مربع بحث للمنيو بيجيب النتائج من السيرفر.
ما تبعت طلب مع كل حرف: استنى المستخدم يوقف كتابة.
إذا كتب حرف جديد والطلب القديم لسا ما رجع، الغيه.
وفرجيه "عم يبحث…" وقت التحميل، و"ما في نتائج" إذا ما لقى شي.
```

<div dir="rtl">
<h2 dir="rtl">شو بتلاقي بالكود</h2>
</div>

```js
let timer, controller;

input.addEventListener('input', () => {
  clearTimeout(timer);
  timer = setTimeout(search, 500);   // debounce
});

async function search() {
  controller?.abort();               // cancel the old request
  controller = new AbortController();
  show('Searching…');
  const res = await fetch(`/api/menu?q=${input.value}`, { signal: controller.signal });
  const items = await res.json();
  items.length ? render(items) : show('No results');
}
```

<div dir="rtl">
<ul dir="rtl">
<li dir="rtl"><strong>debounce</strong>: <code dir="ltr">clearTimeout</code> و<code dir="ltr">setTimeout</code> بيستنوا نص ثانية بعد آخر حرف، وبعدها بيبعتوا طلب واحد.</li>
<li dir="rtl"><strong><code dir="ltr">AbortController</code></strong>: إذا رجع المستخدم كتب والطلب القديم لسا ما رجع، بينلغى، فما بيرجع يخرب النتيجة.</li>
<li dir="rtl"><strong>«عم يبحث…» و«ما في نتائج»</strong>: المستخدم بيعرف شو عم يصير بدل شاشة فاضية.</li>
</ul>
<h2 dir="rtl">الفكرة</h2>
<p dir="rtl"><strong>ما بيكفي تقلّه بدي أداة بحث… لازم تشرحله كيف لازم تشتغل خطوة بخطوة.</strong></p>
</div>
