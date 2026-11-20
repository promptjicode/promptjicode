<div dir="rtl">
<h1 dir="rtl">سؤال مقابلة #10 · تلات قواعد… مين بيربح؟ (🟢 Junior · CSS)</h1>
<p dir="rtl"><strong>▶ <a href="https://promptjicode.github.io/promptjicode/interview/10-specificity/">جرّب بإيدك</a></strong>: طفّي وشغّل القواعد، وشوف نقاط كل وحدة ولون <code dir="ltr">Hello</code>. وفيك تكتب selector من عندك.</p>
</div>

```html
<div id="main">
  <div class="card">
    <h2 class="title">Hello</h2>
  </div>
</div>
```

```css
#main h2     { color: blue; }
.card .title { color: red; }
h2.title     { color: green; }
```

<div dir="rtl">
<p dir="rtl">شو لون Hello؟ A) أحمر · B) أخضر · C) أزرق · D) أسود</p>
<h2 dir="rtl">الجواب: C · أزرق</h2>
<ol dir="rtl">
<li dir="rtl">كل قاعدة إلها نقاط بتلات خانات: <code dir="ltr">ID · Class · Tag</code>.</li>
<li dir="rtl"><code dir="ltr">#main h2</code> ← <code dir="ltr">1·0·1</code>، و<code dir="ltr">.card .title</code> ← <code dir="ltr">0·2·0</code>، و<code dir="ltr">h2.title</code> ← <code dir="ltr">0·1·1</code>.</li>
<li dir="rtl">منقارن خانة خانة من الشمال. بخانة الـ ID الأزرق عنده 1 والباقي 0، فربح وما منكمّل.</li>
<li dir="rtl">الترتيب (آخر قاعدة بتربح) بيفصل بس إذا النقاط متساوية تماماً. لهيك الأخضر خسر مع إنو آخر وحدة.</li>
</ol>
<h2 dir="rtl">وهلّق إذا…؟</h2>
<p dir="rtl">نفس الـ HTML، بس الـ <code dir="ltr">div#main</code> عليه الـ classes من a لـ k:</p>
</div>

```css
#main h2                       { color: blue; }
.a.b.c.d.e.f.g.h.i.j.k .title  { color: red; }
```

<div dir="rtl">
<p dir="rtl">الجواب: <strong>لسا أزرق</strong>. القاعدة التانية نقاطها <code dir="ltr">0·12·0</code>، وبتخسر قدام <code dir="ltr">1·0·1</code>. الـ class ما بتتجمّع لتصير ID مهما كترت.</p>
<h2 dir="rtl">القاعدة</h2>
<p dir="rtl">الـ ID بيربح على أي عدد classes، والترتيب بيفصل بس لما تتساوى النقاط.</p>
</div>
