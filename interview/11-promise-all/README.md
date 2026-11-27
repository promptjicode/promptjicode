<div dir="rtl">
<h1 dir="rtl">سؤال مقابلة #11 · تلات طلبات… وحدة فشلت! (🟡 Mid · JavaScript)</h1>
<p dir="rtl"><strong>▶ <a href="https://promptjicode.github.io/promptjicode/interview/11-promise-all/">جرّب بإيدك</a></strong>: اختار لكل طلب إذا بينجح أو بيفشل، وقارن <code dir="ltr">Promise.all</code> مع <code dir="ltr">Promise.allSettled</code>.</p>
<p dir="rtl"><code dir="ltr">ok(v, ms)</code> بينجح بعد <code dir="ltr">ms</code>، و<code dir="ltr">fail(v, ms)</code> بيرفض بعد <code dir="ltr">ms</code>. شو بيطبع؟</p>
</div>

```js
const ok   = (v, ms) => new Promise(r => setTimeout(() => r(v), ms));
const fail = (v, ms) => new Promise((_, j) => setTimeout(() => j(v), ms));

try {
  const r = await Promise.all([ ok(1, 300), fail('posts', 100), ok(3, 500) ]);
  console.log(r);
} catch (e) {
  console.log('error:', e);
}
```

<div dir="rtl">
<p dir="rtl">A) <code dir="ltr">[1, undefined, 3]</code> · B) <code dir="ltr">error: posts</code> · C) <code dir="ltr">[1, 3]</code> · D) <code dir="ltr">[1, 'posts', 3]</code></p>
<h2 dir="rtl">الجواب: B · <code dir="ltr">error: posts</code></h2>
<ol dir="rtl">
<li dir="rtl"><code dir="ltr">Promise.all</code> يا كلهن ينجحوا… يا ولا شي.</li>
<li dir="rtl">بعد <code dir="ltr">100ms</code> بترفض <code dir="ltr">posts</code>، فـ <code dir="ltr">Promise.all</code> كلو بيرفض فوراً، وما بيستنى الباقي.</li>
<li dir="rtl">الطلبين التانيين بيكمّلوا، بس نتيجتهن بتضيع.</li>
<li dir="rtl">منروح على <code dir="ltr">catch</code>، وبيطبع <code dir="ltr">error: posts</code>.</li>
</ol>
<h2 dir="rtl">وهلّق إذا…؟</h2>
</div>

```js
const r = await Promise.allSettled([ ok(1, 300), fail('posts', 100), ok(3, 500) ]);
console.log(r.map(x => x.status));
```

<div dir="rtl">
<p dir="rtl">الجواب: <code dir="ltr">['fulfilled', 'rejected', 'fulfilled']</code>. <code dir="ltr">allSettled</code> بيستنى الكل، وبيعطيك لكل وحدة <code dir="ltr">status</code>، ومعها <code dir="ltr">value</code> أو <code dir="ltr">reason</code>.</p>
<h2 dir="rtl">القاعدة</h2>
<p dir="rtl">بدك النتايج الناجحة حتى لو وحدة فشلت؟ استعمل <code dir="ltr">Promise.allSettled</code>.</p>
</div>
