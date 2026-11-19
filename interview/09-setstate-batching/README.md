<div dir="rtl">
<h1 dir="rtl">سؤال مقابلة #09 · 3 مرات <code dir="ltr">+1</code>… والعداد طلع كم؟ (🟡 Mid · React)</h1>
<p dir="rtl"><strong>▶ <a href="https://promptjicode.github.io/promptjicode/interview/09-setstate-batching/">جرّب بإيدك</a></strong>: React حقيقي. زر بـ <code dir="ltr">count + 1</code> تلات مرات، وزر بـ <code dir="ltr">c =&gt; c + 1</code> تلات مرات، وتحت كل زر طابور بيوريك شو صار بكل طلب.</p>
<p dir="rtl">ضغطنا الزر مرة وحدة، والعداد بلّش من 0. شو بيطلع على الزر؟</p>
</div>

```jsx
const [count, setCount] = useState(0);

function handleClick() {
  setCount(count + 1);
  setCount(count + 1);
  setCount(count + 1);
}

<button onClick={handleClick}>{count}</button>
```

<div dir="rtl">
<h2 dir="rtl">الجواب: B · 1</h2>
<ol dir="rtl">
<li dir="rtl">بهالـ render قيمة <code dir="ltr">count</code> مجمّدة على 0، متل صورة.</li>
<li dir="rtl">كل سطر بيطلب من React: «خلّيها <code dir="ltr">0 + 1</code>»، يعني 1.</li>
<li dir="rtl">React ما بيرسم بعد كل سطر. بيجمع الطلبات (batching) وبيعمل render واحد بالآخر.</li>
<li dir="rtl">آخر طلب بيقول «خلّيها 1»، فالنتيجة 1 مش 3.</li>
</ol>
<h2 dir="rtl">الحل</h2>
</div>

```jsx
setCount(c => c + 1);
setCount(c => c + 1);
setCount(c => c + 1);
```

<div dir="rtl">
<p dir="rtl">لما تمرّر دالة، React بيعطي كل طلب آخر قيمة طلعت من الطلب اللي قبله: 1 ← 2 ← 3.</p>
<h2 dir="rtl">وهلّق إذا…؟</h2>
</div>

```jsx
function handleClick() {
  setCount(c => c + 1);
  setCount(count + 1);
  setCount(c => c + 1);
}
```

<div dir="rtl">
<p dir="rtl">نفس الشي: ضغطة وحدة والعداد من 0. الجواب: <strong>2</strong>. الأول بيعطي 1، والتاني بيرجّعها <code dir="ltr">0 + 1</code> يعني 1، والتالت بيزيد عليها فبتصير 2.</p>
<h2 dir="rtl">القاعدة</h2>
<p dir="rtl">إذا القيمة الجديدة بتعتمد على القديمة، اكتب <code dir="ltr">setCount(c =&gt; c + 1)</code>.</p>
</div>
