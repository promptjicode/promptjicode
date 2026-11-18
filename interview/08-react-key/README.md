<div dir="rtl">
<h1 dir="rtl">سؤال مقابلة #08 · حذفت سطر… والـ ✓ انتقل؟ (🟡 Mid · React)</h1>
<p dir="rtl"><strong>▶ <a href="https://promptjicode.github.io/promptjicode/interview/08-react-key/">جرّب بإيدك</a></strong>: React حقيقي. قائمة بـ <code dir="ltr">key={i}</code> وقائمة بـ <code dir="ltr">key={item.id}</code>، علّم ✓ واحذف وشوف الفرق.</p>
<p dir="rtl">القائمة: 🥛 Milk · 🍞 Bread · 🥚 Eggs. علّمنا ✓ على Bread، وبعدين حذفنا Milk. وين صار الـ ✓؟</p>
</div>

```jsx
function Row({ label }) {
  const [done, setDone] = useState(false);
  return <Checkbox checked={done} label={label} />;
}

items.map((item, i) => <Row key={i} label={item} />)
```

<div dir="rtl">
<h2 dir="rtl">الجواب: B · بينتقل لـ Eggs</h2>
<ol dir="rtl">
<li dir="rtl">React بيعرف كل سطر من الـ <code dir="ltr">key</code> تبعه، مش من محتواه.</li>
<li dir="rtl">Bread كان <code dir="ltr">key=1</code>، والـ state تبعه (<code dir="ltr">done: true</code>) مربوط بـ <code dir="ltr">key=1</code>.</li>
<li dir="rtl">حذفنا Milk، فكل الأسطر نزلت رقم: Bread صار <code dir="ltr">key=0</code>، وEggs صار <code dir="ltr">key=1</code>.</li>
<li dir="rtl"><code dir="ltr">key=1</code> لسا موجود، فـ React خلّى الـ state تبعه، وصار عليه Eggs.</li>
</ol>
<h2 dir="rtl">الحل</h2>
</div>

```jsx
items.map((item) => <Row key={item.id} label={item.name} />)
```

<div dir="rtl">
<p dir="rtl"><code dir="ltr">key</code> لازم يكون هوية ثابتة للعنصر (id من الداتا)، مش رقم ترتيبه.</p>
<h2 dir="rtl">وهلّق إذا…؟</h2>
</div>

```jsx
items.map(item => <Row key={Math.random()} label={item} />)
```

<div dir="rtl">
<p dir="rtl">نفس الخطوات: ✓ على Bread، وحذفنا Milk. وين صار الـ ✓؟ الجواب: <strong>بيختفي</strong>. كل ما تتغيّر القائمة، كل سطر بياخد key جديد، فـ React بيمسح الأسطر كلها وبيعملها من جديد، والـ state بتروح.</p>
<h2 dir="rtl">القاعدة</h2>
<p dir="rtl">الـ <code dir="ltr">key</code> هوية السطر… مش رقم ترتيبه.</p>
</div>
