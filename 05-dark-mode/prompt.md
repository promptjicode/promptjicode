<div dir="rtl">
<h1 dir="rtl">05 · الوضع الليلي… بسطر واحد؟</h1>
<p dir="rtl"><strong>▶ <a href="https://promptjicode.github.io/promptjicode/05-dark-mode/">جرّب الزرين</a></strong>: غيّر الوضع، وبعدين حدّث الصفحة. وجرّب من موبايل على الوضع الليلي.</p>
<h2 dir="rtl">البرومبت الضعيف</h2>
</div>

```
اعملي زر Dark mode
```

<div dir="rtl">
<p dir="rtl">النتيجة: زر بيقلب الألوان وبيشتغل… بس سكّر الصفحة وارجع افتحها، رجعت فاتحة. ولو موبايلك على الوضع الليلي، بتفتح أبيض.</p>
<h2 dir="rtl">البرومبت الصح</h2>
</div>

```
اعملي زر Dark mode لموقع.
أول مرة: خلي الموقع يمشي على وضع الموبايل (فاتح أو غامق).
إذا المستخدم غيّر: احفظ اختياره ورجّعه لما يفتح الصفحة مرة تانية.
وما بدي الصفحة تومض أبيض قبل ما يتطبّق الوضع الغامق.
```

<div dir="rtl">
<h2 dir="rtl">شو بتلاقي بالكود</h2>
<ul dir="rtl">
<li dir="rtl"><strong><code dir="ltr">prefers-color-scheme</code></strong>: بيعرف إذا موبايلك أو كمبيوترك على الوضع الليلي، فالصفحة بتبلّش على نفس الوضع.</li>
<li dir="rtl"><strong><code dir="ltr">localStorage</code></strong>: بيحفظ اختيارك، فلما ترجع بتلاقي الصفحة متل ما تركتها.</li>
<li dir="rtl"><strong>سكربت صغير بالـ <code dir="ltr">&lt;head&gt;</code></strong> قبل ما تنرسم الصفحة: بيحط الوضع الصح من أول لحظة، فما في وميض أبيض.</li>
<li dir="rtl"><strong><code dir="ltr">color-scheme</code></strong> بالـ CSS: حتى أزرار المتصفح وشريط التمرير بيصيروا غامقين كمان.</li>
</ul>
<h2 dir="rtl">الفكرة</h2>
<p dir="rtl"><strong>ما تطلب الزر بس… اطلب شو لازم يصير قبل الضغطة وبعدها.</strong></p>
</div>
