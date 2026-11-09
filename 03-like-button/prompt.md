<div dir="rtl">
<h1 dir="rtl">03 · زر واحد… وفرق كبير بالإحساس</h1>
<p dir="rtl"><strong>▶ <a href="https://promptjicode.github.io/promptjicode/03-like-button/">جرّب الزرين</a></strong>: اضغط عليهم، وجرّب كمان بالكيبورد (Tab ثم Enter).</p>
<h2 dir="rtl">البرومبت الضعيف</h2>
</div>

```
اعملي زر لايك
```

<div dir="rtl">
<p dir="rtl">النتيجة: زر بيتلوّن لما تضغطه، وخلص. ما في إحساس، وقارئ الشاشة ما بيعرف إذا مضغوط أو لأ.</p>
<h2 dir="rtl">البرومبت الصح</h2>
</div>

```
اعملي زر لايك بقلب SVG.
لما ينضغط: القلب بيكبر شوي وبيرجع، بيتلوّن أحمر، وبتطلع منه شرارات صغيرة.
لما ينضغط مرة تانية: بيرجع رمادي بنعومة.
خليه يشتغل بالكيبورد مع aria-pressed، وبدون أنيميشن إذا المستخدم مفعّل تقليل الحركة.
```

<div dir="rtl">
<h2 dir="rtl">شو بتلاقي بالكود</h2>
<ul dir="rtl">
<li dir="rtl"><strong><code dir="ltr">&lt;button&gt;</code> مع <code dir="ltr">aria-pressed</code></strong>: زر حقيقي بيشتغل بالكيبورد لحاله، وقارئ الشاشة بيعرف حالته.</li>
<li dir="rtl"><strong>أنيميشن بـ <code dir="ltr">transform: scale</code></strong>: ناعم، وما بيعيد ترتيب الصفحة.</li>
<li dir="rtl"><strong><code dir="ltr">prefers-reduced-motion</code></strong>: الأنيميشن والشرارات بيوقفوا عند اللي مفعّلين تقليل الحركة.</li>
</ul>
<h2 dir="rtl">الفكرة</h2>
<p dir="rtl"><strong>صِف الإحساس اللي بدك ياه، مش بس الشكل.</strong> قلّه شو لازم يصير لما المستخدم يتفاعل، ومين لازم يقدر يستخدمه.</p>
</div>
