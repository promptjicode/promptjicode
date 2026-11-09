<div dir="rtl">
<h1 dir="rtl">02 · هالكود شغّال… بس بيكذب عليك</h1>
<p dir="rtl"><strong>▶ <a href="https://promptjicode.github.io/promptjicode/02-countdown-timer/">جرّب العدادين</a></strong>: شغّلهم، واقفل شاشة موبايلك دقيقة، وارجع.</p>
<h2 dir="rtl">البرومبت العادي</h2>
</div>

```
اعملي عداد تنازلي لـ 10 دقايق
```

<div dir="rtl">
<p dir="rtl">النتيجة: كود بيشتغل، بس بيعدّ <strong>المرات</strong> مو <strong>الوقت</strong>:</p>
</div>

```js
let seconds = 10 * 60;
setInterval(() => {
  seconds--;
  // ...
}, 1000);
```

<div dir="rtl">
<p dir="rtl">لما تقفل الشاشة أو تروح على تاب تاني، المتصفح بيوقّف التايمرات أو بيبطّئها. فبيتأخر العداد بقد ما الشاشة ضلت مقفولة.</p>
<h2 dir="rtl">البرومبت الصح</h2>
</div>

```
اعملي عداد تنازلي لـ 10 دقايق، ولازم يضل دقيق حتى لو المستخدم طلع من التاب أو قفل الشاشة.
```

<div dir="rtl">
<p dir="rtl">النتيجة: بيحفظ وقت النهاية وبيحسب الباقي من الساعة الحقيقية بكل تحديث:</p>
</div>

```js
const end = Date.now() + 10 * 60 * 1000;
function tick() {
  const left = Math.max(0, end - Date.now());
  // ...
  if (left > 0) requestAnimationFrame(tick);
}
tick();
```

<div dir="rtl">
<h2 dir="rtl">الفكرة</h2>
<p dir="rtl">الكود اللي بيشتغل مش دايماً صح. <strong>قلّه بالبرومبت شو الحالات الصعبة</strong> اللي لازم ينجح فيها.</p>
</div>
