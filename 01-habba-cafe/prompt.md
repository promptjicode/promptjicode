<div dir="rtl">
<h1 dir="rtl">01 · نفس الطلب… شوف الفرق</h1>
<p dir="rtl"><strong>▶ <a href="https://promptjicode.github.io/promptjicode/01-habba-cafe/">افتح الصفحة شغّالة</a></strong></p>
<h2 dir="rtl">البرومبت الضعيف</h2>
</div>

```
اعملي صفحة لمقهى
```

<div dir="rtl">
<p dir="rtl">النتيجة: صفحة عادية بألوان افتراضية، بدون هوية ولا حركة.</p>
<h2 dir="rtl">البرومبت الصح</h2>
</div>

```
اعملي صفحة هبوط بملف HTML واحد لمقهى اسمه "حبّة" بحي قديم، جمهوره طلاب وشباب.

الإحساس: دافي ومريح، ألوان بنية وكريمية، خط عربي عصري.

الأقسام: هيرو بجملة قوية، قائمة 6 مشروبات بأسعار، ساعات الدوام، وزر "احجز طاولة".

خلي التصميم RTL ومناسب للموبايل، مع حركة خفيفة عند السكرول.
```

<div dir="rtl">
<h2 dir="rtl">شو بتلاقي بالكود</h2>
<ul dir="rtl">
<li dir="rtl"><strong>متغيرات CSS</strong> (<code dir="ltr">--bean</code>, <code dir="ltr">--crema</code>, <code dir="ltr">--caramel</code>): كل الألوان بمكان واحد.</li>
<li dir="rtl"><strong>CSS Grid</strong> لقائمة المشروبات.</li>
<li dir="rtl"><strong>IntersectionObserver</strong> لأنيميشن السكرول، بدل الاستماع لحدث <code dir="ltr">scroll</code>.</li>
<li dir="rtl"><strong>prefers-reduced-motion</strong>: الأنيميشن بيتوقف عند اللي مفعّلين تقليل الحركة.</li>
</ul>
<h2 dir="rtl">الفكرة</h2>
<p dir="rtl">قبل أي برومبت قلّه: <strong>مين الجمهور؟ شو الإحساس؟ شو المحتوى؟</strong></p>
</div>
