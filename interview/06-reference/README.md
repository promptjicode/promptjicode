<div dir="rtl">
<h1 dir="rtl">سؤال مقابلة #06 · عدّلت b… ليش تغيّر a؟ (🟢 Junior)</h1>
<p dir="rtl"><strong>▶ <a href="https://promptjicode.github.io/promptjicode/interview/06-reference/">جرّب بإيدك</a></strong>: جرّب <code dir="ltr">=</code> و<code dir="ltr">{...a}</code> و<code dir="ltr">structuredClone</code>، وعدّل من <code dir="ltr">b</code>، وشوف شو بيصير بـ <code dir="ltr">a</code>.</p>
</div>

```js
const a = { likes: 1 };
const b = a;

b.likes++;

console.log(a.likes);
```

<div dir="rtl">
<h2 dir="rtl">الجواب: B · <code dir="ltr">2</code></h2>
<ol dir="rtl">
<li dir="rtl"><code dir="ltr">{ likes: 1 }</code> أوبجكت واحد بالذاكرة، و<code dir="ltr">a</code> ماسك <strong>عنوانه</strong>، مش نسخة عنه.</li>
<li dir="rtl"><code dir="ltr">const b = a</code> ما بيعمل أوبجكت جديد. بيعطي <code dir="ltr">b</code> <strong>نفس العنوان</strong>.</li>
<li dir="rtl"><code dir="ltr">b.likes++</code> بيعدّل نفس الأوبجكت، فـ <code dir="ltr">a.likes</code> بيطبع 2.</li>
<li dir="rtl"><code dir="ltr">const</code> بيمنع بس إنك تعطي <code dir="ltr">a</code> قيمة تانية (<code dir="ltr">a = …</code>)، ما بيمنع التعديل جوّا الأوبجكت.</li>
</ol>
<h2 dir="rtl">وهلّق إذا…؟</h2>
</div>

```js
const a = { likes: 1, user: { name: 'Sara' } };
const b = { ...a };

b.likes++;
b.user.name = 'Ali';

console.log(a.likes, a.user.name);
```

<div dir="rtl">
<p dir="rtl">الجواب: <code dir="ltr">1 'Ali'</code>. الـ spread بينسخ <strong>أول طبقة بس</strong> (shallow copy): <code dir="ltr">likes</code> انتسخ، بس <code dir="ltr">user</code> لسا نفس العنوان. لنسخة كاملة: <code dir="ltr">structuredClone(a)</code>.</p>
<h2 dir="rtl">القاعدة</h2>
<p dir="rtl">الأوبجكت بينتقل <strong>بالعنوان</strong>… مش بالقيمة.</p>
</div>
