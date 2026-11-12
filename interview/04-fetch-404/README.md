<div dir="rtl">
<h1 dir="rtl">سؤال مقابلة #04 · السيرفر رجّع 404… ووين الخطأ؟ (🟡 Mid)</h1>
<p dir="rtl"><strong>▶ <a href="https://promptjicode.github.io/promptjicode/interview/04-fetch-404/">جرّب بإيدك</a></strong>: طلبات حقيقية من متصفحك: ملف موجود (200)، وملف مش موجود (404)، ودومين مش موجود (متل النت المقطوع).</p>
<p dir="rtl">السيرفر شغّال، بس المستخدم 999 مش موجود، فبيرجّع <code dir="ltr">404 Not Found</code>. شو بيطبع الكود؟</p>
</div>

```js
// GET /api/users/999 → 404 Not Found
try {
  const res = await fetch('/api/users/999');
  console.log('ok', res.status);
} catch (e) {
  console.log('error');
}
```

<div dir="rtl">
<h2 dir="rtl">الجواب: B · <code dir="ltr">ok 404</code></h2>
<ol dir="rtl">
<li dir="rtl"><code dir="ltr">fetch</code> بيبعت الطلب، والطلب بيوصل للسيرفر.</li>
<li dir="rtl">السيرفر ما بيلاقي المستخدم، فبيرجّع ردّ: 404.</li>
<li dir="rtl">في ردّ؟ يعني الطلب <strong>وصل</strong>، فـ <code dir="ltr">fetch</code> بيعتبره <strong>نجاح</strong>، والكود بيكمّل بالـ <code dir="ltr">try</code>.</li>
<li dir="rtl">الـ <code dir="ltr">catch</code> ما بيشتغل، والكود بيكمّل كأنو كل شي تمام.</li>
</ol>
<p dir="rtl"><code dir="ltr">fetch</code> بيفشل (reject) بس إذا الطلب <strong>ما وصل</strong> لأي سيرفر: نت مقطوع، أو دومين غلط، أو CORS.</p>
<h2 dir="rtl">الحل</h2>
</div>

```js
const res = await fetch('/api/users/999');
if (!res.ok) throw new Error(res.status); // res.ok بيكون true بس للـ 200 لـ 299
```

<div dir="rtl">
<h2 dir="rtl">وهلّق إذا…؟</h2>
<p dir="rtl">النت مقطوع، والطلب ما وصل للسيرفر أصلاً. شو بيطبع نفس الكود؟</p>
<p dir="rtl">الجواب: <code dir="ltr">error</code>. هون <code dir="ltr">fetch</code> بيفشل فعلاً، فبيروح على الـ <code dir="ltr">catch</code>.</p>
<h2 dir="rtl">القاعدة</h2>
<p dir="rtl"><code dir="ltr">fetch</code> بيقلّك إذا <strong>وصلت</strong>… مش إذا <strong>نجحت</strong>.</p>
</div>
