<div dir="rtl">
<h1 dir="rtl">سؤال مقابلة #05 · سكّر الصوت… ورجع لحاله؟ (🟢 Junior)</h1>
<p dir="rtl"><strong>▶ <a href="https://promptjicode.github.io/promptjicode/interview/05-nullish/">جرّب بإيدك</a></strong>: اختار قيمة وشوف شو بيرجّع <code dir="ltr">||</code> وشو بيرجّع <code dir="ltr">??</code>، وجرّب تسكّر الصوت.</p>
<p dir="rtl">المستخدم سكّر الصوت، فـ <code dir="ltr">volume</code> صار <code dir="ltr">0</code>. شو بيطبع الكود؟</p>
</div>

```js
const settings = { volume: 0 }; // muted

console.log(settings.volume || 50);
console.log(settings.volume ?? 50);
```

<div dir="rtl">
<h2 dir="rtl">الجواب: C · <code dir="ltr">50</code> و <code dir="ltr">0</code></h2>
<ol dir="rtl">
<li dir="rtl"><code dir="ltr">||</code> بيسأل: القيمة <strong>فاضية؟</strong> يعني أي قيمة falsy: <code dir="ltr">0</code> و<code dir="ltr">''</code> و<code dir="ltr">false</code> و<code dir="ltr">null</code> و<code dir="ltr">undefined</code> و<code dir="ltr">NaN</code>.</li>
<li dir="rtl"><code dir="ltr">0</code> falsy، فـ <code dir="ltr">||</code> بيعتبره فاضي، وبيرجّع 50. والصوت اللي سكّره المستخدم رجع لحاله.</li>
<li dir="rtl"><code dir="ltr">??</code> بيسأل بس: القيمة <strong>مش موجودة؟</strong> يعني <code dir="ltr">null</code> أو <code dir="ltr">undefined</code>.</li>
<li dir="rtl"><code dir="ltr">0</code> موجود، فـ <code dir="ltr">??</code> بيخليه 0.</li>
</ol>
<h2 dir="rtl">وهلّق إذا…؟</h2>
</div>

```js
const user = { name: '' };
console.log(user.name || 'Guest');
console.log(user.name ?? 'Guest');
```

<div dir="rtl">
<p dir="rtl">الجواب: <code dir="ltr">Guest</code> وبعدها نص فاضي. النص الفاضي falsy، بس موجود.</p>
<h2 dir="rtl">إمتى بستعمل مين؟</h2>
<ul dir="rtl">
<li dir="rtl"><code dir="ltr">??</code> للقيم الافتراضية لما يكون <code dir="ltr">0</code> أو <code dir="ltr">''</code> أو <code dir="ltr">false</code> قيمة صحيحة: صوت، خصم، كمية، أو خيار متسكّر.</li>
<li dir="rtl"><code dir="ltr">||</code> لما بدك فعلاً تبدّل أي قيمة فاضية.</li>
</ul>
<h2 dir="rtl">القاعدة</h2>
<p dir="rtl"><code dir="ltr">||</code> بيسأل «فاضي؟»… و<code dir="ltr">??</code> بيسأل «مش موجود؟».</p>
</div>
