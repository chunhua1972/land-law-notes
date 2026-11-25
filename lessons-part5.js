// 地政士國考《平均地權條例及其施行細則》數位講義 — Part 5（第 9 課、第 10 課完結篇）
window.EQUALIZATION_LESSONS.push(
  // =========================================================================
  // 第 9 課：土地使用其餘限制與耕地租約終止（條例 §68～§79 ＋ 細則 §93～§101）
  // =========================================================================
  {
    id: "lesson-9",
    group: "第五階段：使用管制、罰則與總複習",
    badge: "第 9 課",
    shortTitle: "土地使用其餘限制與耕地租約終止",
    title: "第 9 課：土地使用其餘限制與耕地租約終止（條例 §68～§79 ＋ 細則 §93～§101）",
    articles: "條例 §68～§79・細則 §93～§101",
    importance: "★★★★☆",
    lead: "本堂課鎖定兩大高頻考點：① 私有未建築用地最高面積「10 公畝」限制（與 20% 彈性保留、2 年限期建築、承購收買地 1 年興工逾期原價收回）；② 萬年必考大魔王「出租耕地因依法編為建築用地終止租約（§76～§78）」之扣除土增稅後餘額 1/3 補償計算與程序！",
    content: `
      <h2>一、架構鳥瞰：個別土地使用管制與耕地租約終止</h2>
      <p>條例 §68～§70 及 §75 已刪除，本單元聚焦於 §71～§79（§79-1 私法人購屋許可制已於第 6 課精講）：</p>

      <div class="trust-diagram" aria-label="土地使用限制與耕地租約終止架構圖">
        <div class="diagram-row">
          <div class="diagram-node node-dark">
            <div class="diagram-node-title">防止私人囤積未建地（§71～§74）</div>
            <div class="diagram-node-desc">最高限額 <strong>10 公畝</strong>（不能獨立使用得保留 20% 內）<br>通知 <strong>2 年內</strong>出售或建築 → 逾期<strong>照價收買</strong><br>承購收買地 <strong>1 年內</strong>興工（延期 ≤ 6 月）→ 逾期<strong>照原價收回</strong></div>
          </div>
          <div class="diagram-node node-gold">
            <div class="diagram-node-title">出租耕地編為建地終止租約（§76～§78）</div>
            <div class="diagram-node-desc">要件：編為建地＋收回自建或出售建築<br>補償：書面通知改良費＋未收穫農作＋<strong>(公告現值 − 預計土增稅) × 1/3</strong><br>防弊：實際收回滿 <strong>1 年</strong>未依計畫建築 → 得<strong>照價收買</strong></div>
          </div>
        </div>
        <div class="diagram-row">
          <div class="diagram-node">
            <div class="diagram-node-title">稅捐代扣與強制執行（§79、細則 §100、§101）</div>
            <div class="diagram-node-desc">徵收／收買補償金代扣「該土地本身」欠稅及滯納金（稅捐機關 <strong>15 日</strong>查填）；終止耕地租約返還強制執行以<strong>出租人</strong>為聲請人</div>
          </div>
        </div>
      </div>

      <h2>二、私有未建築用地 10 公畝上限與收買後 1 年興工（§71～§74；細則 §93～§96）</h2>
      <ul>
        <li><strong>最高面積 10 公畝（§71）</strong>：尚未建築之私有建築用地，最高以 <strong>10 公畝</strong>為限；<strong>工業用地、學校用地及核准之大規模建築用地</strong>視需要分別訂定（欲保留者通知次日起 1 年內擬計畫報核，細則 §95）；<strong>法令限制不能建築</strong>土地應予扣除。</li>
        <li><strong>20% 彈性保留（細則 §94）</strong>：超過 10 公畝部分若不能供獨立使用者，得視土地坵形為 <strong>20% 以內之保留</strong>（最多 12 公畝）。</li>
        <li><strong>超額限期 2 年與照價收買（§72、細則 §96）</strong>：通知於 <strong>2 年內</strong>出售或建築使用，逾期得<strong>照價收買</strong>；但<strong>建設發展較緩之地段</strong>（公設未完竣或依法不得核發建照地區）不在此限。</li>
        <li><strong>承購收買地 1 年興工與原價收回（§73）</strong>：承購依 §26、§72、§76 照價收買後再出售之土地者，應自承購日起 <strong>1 年內</strong>興工建築（報准延期不得逾 <strong>6 個月</strong>）；逾期不建築者，政府得<strong>照原價收回</strong>！</li>
        <li><strong>空地遇租賃／地上權（§74）</strong>：限期建築空地有出租、貸與或地上權者，地主與使用人協議建築、增建或改建；<strong>協議不成得終止租約、借貸或撤銷地上權</strong>。</li>
      </ul>

      <h2>三、萬年必考大題：出租耕地編為建築用地終止租約（§76～§78；細則 §97～§99、§101）</h2>
      <div class="callout callout-law">
        <div class="callout-title">📐 終止耕地租約三部曲：要件（§76）→ 三項補償（§77）→ 四階段程序（§78）</div>
        <ol>
          <li><strong>終止要件與防弊（§76、細則 §97）</strong>：出租耕地經依法編為建築用地，出租人為<strong>收回自行建築</strong>或<strong>出售作為建築使用</strong>時，得終止租約；但實際收回耕地<strong>屆滿 1 年</strong>（協議終止自達成協議次日起算；核定終止自核定送達次日起算）不依使用計畫建築使用者，政府得<strong>照價收買</strong>！</li>
          <li><strong>三大法定補償（§77、細則 §98）</strong>：
            <ul>
              <li>① 改良土地費用：限承租人已依《耕地三七五減租條例》§13 <strong>書面通知出租人者</strong>。</li>
              <li>② 尚未收穫之農作改良物。</li>
              <li>③ <strong>(申請終止租約收件當期公告土地現值 − 預計土地增值稅) × 1/3</strong>。</li>
              <li>📌 <strong>公有出租耕地（§77③）</strong>：終止租約時比照同條件私有土地補償承租人！</li>
            </ul>
          </li>
          <li><strong>四階段程序與登記（§78、細則 §99、§101）</strong>：地主書面申請 → 審核協議成立准予終止；未達協議由地方政府邀集協調 → 拒不協調或有爭議由地方政府核定（不服得提訴願、行政訴訟）→ 補償費領取或提存後<strong>逕行辦理終止租約登記</strong>（承租人拒不返還聲請強制執行以<strong>出租人</strong>為聲請人）。</li>
        </ol>
      </div>

      <div class="callout callout-tip">
        <div class="callout-title">🧮 實戰計算範例：終止三七五耕地租約 1/3 補償</div>
        <p>老林之出租耕地變更為住宅區，書面申請終止租約收件當期公告土地現值 <strong>1,500 萬元</strong>，預計土地增值稅 <strong>300 萬元</strong>；承租人曾書面通知投入改良費 <strong>40 萬元</strong>，尚有未收穫稻作 <strong>20 萬元</strong>。</p>
        <p>👉 <strong>總補償金額</strong> ＝ (1,500 萬 − 300 萬) × 1/3 ＋ 40 萬 ＋ 20 萬 ＝ 400 萬 ＋ 60 萬 ＝ <strong>460 萬元</strong>！</p>
      </div>

      <h2>四、補償金代為扣繳欠稅（條例 §79；細則 §100）</h2>
      <p>被徵收或照價收買土地應納未納之土地稅捐及滯納金，由地方政府於發放補償金時代為扣繳，以餘款交付原所有權人。依細則 §100，代扣範圍限於<strong>該被徵收或照價收買土地本身應納未納者</strong>，且稅捐機關應於收到清冊後 <strong>15 日內</strong>查填函復。</p>

      <div class="feature-band">
        <h3>📝 第 9 課重點速記口訣</h3>
        <ul>
          <li><strong>未建地管制（§71～§73）</strong>：上限 <strong>10 公畝</strong>（坵形留 20%）→ 限期 <strong>2 年</strong>建或售（否則收買）→ 承購人 <strong>1 年</strong>興工（延 ≤ 6 月，否則<strong>原價收回</strong>）。</li>
          <li><strong>耕地終止三項補（§77）</strong>：<strong>書面改良費</strong> ＋ <strong>未收穫農作</strong> ＋ <strong>(收件當期公告現值 − 預計土增稅) × 1/3</strong>（公有耕地亦同！）。</li>
          <li><strong>強制執行聲請人陷阱（細則 §101）</strong>：§30、§60、§60-1、§66 是<strong>移送機關</strong>；§78② 返還耕地是<strong>出租人</strong>！</li>
        </ul>
      </div>

      <div class="quiz-box">
        <h3>✍️ 第 9 課隨堂小練習</h3>
        <div class="quiz-item">
          <span class="quiz-item-label">1. 實例計算與法理題（條例 §76、§77 ＋ 細則 §97、§98）</span>
          <p>甲之私有出租耕地經都市計畫編為商業區，甲為收回自建，向市政府書面申請終止租約。收件當期公告土地現值為 900 萬元，預計土地增值稅為 150 萬元，地上有承租人乙未收穫作物 10 萬元，以及乙「未曾書面通知甲」自行施作之水溝改良費 20 萬元。請問甲應補償乙多少元？又甲實際收回後超過 1 年仍閒置不建，政府得如何處理？</p>
          <details class="quiz-answer">
            <summary>點此查看老師解析</summary>
            <div class="quiz-answer-body">
              <ol>
                <li><strong>應補償金額（§77）</strong>：乙之水溝改良費因未依耕地三七五減租條例 §13 書面通知甲，依法不予補償（§77②）；故總補償 ＝ (900 萬 − 150 萬) × 1/3 ＋ 10 萬（未收穫農作）＝ 250 萬 ＋ 10 萬 ＝ <strong>260 萬元</strong>。</li>
                <li><strong>收回滿 1 年未建築之效果（§76②）</strong>：實際收回耕地屆滿 1 年後不依照使用計畫建築使用者，市政府得<strong>照價收買</strong>之（按公告收買當期公告土地現值，§31③）。</li>
              </ol>
            </div>
          </details>
        </div>
        <div class="quiz-item">
          <span class="quiz-item-label">2. 面積限制與原價收回題（條例 §71～§73 ＋ 細則 §94）</span>
          <p>丙在都市計畫區內擁有尚未建築之私有住宅區土地 11.5 公畝，其中超過 10 公畝之 1.5 公畝為狹長畸零地不能供獨立使用，請問該 1.5 公畝是否必然超額受限？又若丁向政府承購依 §72 照價收買後再出售之土地，滿 1 年半仍未興工且未申請延期，政府得如何處置？</p>
          <details class="quiz-answer">
            <summary>點此查看老師解析</summary>
            <div class="quiz-answer-body">
              <ol>
                <li><strong>1.5 公畝畸零地（細則 §94）</strong>：因超過 10 公畝部分不能供獨立使用，且 1.5 公畝在 10 公畝之 <strong>20%（2 公畝）以內</strong>，得視土地坵形予以保留，不受強制限期出售或收買。</li>
                <li><strong>承購人逾期未興工（§73）</strong>：承購人應自承購日起 <strong>1 年內</strong>興工建築（報准延期不得逾 6 個月）；丁未報准延期且逾 1 年未興工，地方政府得<strong>照原價收回</strong>！</li>
              </ol>
            </div>
          </details>
        </div>
      </div>
    `
  },

  // =========================================================================
  // 第 10 課（完結篇）：罰則、附則與申論實戰總複習（條例 §80～§87 ＋ 細則 §100～§102）
  // =========================================================================
  {
    id: "lesson-10",
    group: "第五階段：使用管制、罰則與總複習",
    badge: "第 10 課",
    shortTitle: "罰則、附則與申論實戰總複習",
    title: "第 10 課（完結篇）：罰則、附則與申論實戰總複習（條例 §80～§87 ＋ 細則 §100～§102）",
    articles: "條例 §80～§87・細則 §100～§102",
    importance: "★★★★☆",
    lead: "壓軸完結篇！一次統整全法所有行政罰鍰（§81～§81-4 含打炒房重罰 5,000 萬、法人兩罰與檢舉獎金）與刑事責任（§83、§83-1）、附則重點，並奉上「全套 10 堂考前 5 分鐘十大數字地雷表」與「地政士申論四段黃金破題模板」，帶你穩拿高分金榜題名！",
    content: `
      <h2>一、架構鳥瞰：第七章罰則（行政罰 × 刑事罰）與第八章附則</h2>
      <div class="trust-diagram" aria-label="平均地權條例罰則體系圖">
        <div class="diagram-row">
          <div class="diagram-node node-dark">
            <div class="diagram-node-title">一、行政罰鍰（§81～§81-4）</div>
            <div class="diagram-node-desc">§81 未登記再轉售（登記費 20 倍↓）・§81-1 社福違規（補稅＋2 倍罰鍰）<br>§81-2 實價登錄 3～15 萬（2 次未改 30～100 萬）／紅單 15～100 萬<br>§81-3 違法換約 50～300 萬／炒作 <strong>100～5,000 萬（含法人兩罰）</strong>／規避查核 6～30 萬<br>§81-4 檢舉獎金：實收罰鍰 <strong>30%</strong>（每案上限 1,000 萬）</div>
          </div>
        </div>
        <div class="diagram-row">
          <div class="diagram-node node-gold">
            <div class="diagram-node-title">二、刑事責任（§83、§83-1）</div>
            <div class="diagram-node-desc">§83 土地壟斷投機罪：<strong>3 年以下</strong>有期徒刑，得併科 7,000 元以下罰金<br>§83-1 妨害市地重劃罪（毀損標樁／強暴脅迫）：<strong>3 年以下</strong>有期徒刑、拘役或科／併科 5,000 元以下罰金</div>
          </div>
        </div>
      </div>

      <h2>二、全法行政罰與刑事罰終極對照表（條例 §81～§83-1）</h2>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>條文</th>
              <th>違規／犯罪行為</th>
              <th>處罰額度與方式</th>
              <th>考場超級陷阱</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>§81</strong></td>
              <td>買賣未辦移轉登記，承買人再行出售</td>
              <td>應納登記費 <strong>20 倍以下</strong>罰鍰</td>
              <td>取締中間省略登記（與土地法 §73 逾期申請罰鍰不同）</td>
            </tr>
            <tr>
              <td><strong>§81-1</strong></td>
              <td>§35-1 受贈社福財團法人未按目的使用、違背宗旨或收益未全用於該事業</td>
              <td><strong>追補土增稅 ＋ 2 倍罰鍰</strong></td>
              <td>三款違規事由務必記熟！</td>
            </tr>
            <tr>
              <td><strong>§81-2</strong></td>
              <td>成屋／預售屋實價登錄與解約未申報或不實；規避查核；違反紅單管制</td>
              <td>登錄＆解約＆查核：<strong>3～15 萬</strong>（2 次未改加重 <strong>30～100 萬</strong>）<br>紅單違規：<strong>15～100 萬</strong></td>
              <td>含建物者按戶（棟）處罰</td>
            </tr>
            <tr>
              <td><strong>§81-3</strong></td>
              <td>① 預售屋／新建成屋違法換約或刊登廣告<br>② 三大不動產炒作行為（§47-5）<br>③ 規避、妨礙或拒絕查核</td>
              <td>① 換約：<strong>50～300 萬</strong>／戶<br>② 炒作：<strong>100～5,000 萬</strong>／戶<br>③ 規避查核：<strong>6～30 萬</strong></td>
              <td>🔥 <strong>法人兩罰規定（§81-3②）</strong>：代表人、受僱人違規，對法人亦併處罰鍰！且規避查核（6～30 萬）比 §81-2 重一倍！</td>
            </tr>
            <tr>
              <td><strong>§81-4</strong></td>
              <td>民眾實名檢舉不動產銷售、買賣或實價登錄違規</td>
              <td>實收罰鍰 <strong>30%</strong> 檢舉獎金（上限 <strong>1,000 萬</strong>）</td>
              <td>檢舉人身分嚴格保密；實收罰鍰亦提撥主管機關查核經費</td>
            </tr>
            <tr>
              <td><strong>§83、§83-1</strong></td>
              <td>§83 土地壟斷投機罪；§83-1 移動毀損重劃標樁或強暴脅迫妨害重劃</td>
              <td>均為 <strong>3 年以下</strong>有期徒刑（§83 併科 7,000 元↓罰金；§83-1 拘役或 5,000 元↓罰金）</td>
              <td>全法唯二保留之刑事責任條文！</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>📌 <strong>第八章附則（§85～§87；細則 §100～§102）</strong>：施行區域（§85）、施行細則（§86）及重大修法施行日期（§87，如 112 年打炒房新制自 112/7/1 施行）均授權由<strong>行政院</strong>定之。</p>

      <h2>三、全套 10 堂課「考前 5 分鐘」十大數字地雷總複習</h2>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>考點主題</th>
              <th>必背黃金數字與規則</th>
              <th>條文</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>1. 規定地價＆申報區間</strong></td>
              <td>每 <strong>2 年</strong>重定 1 次；公告 <strong>30 日</strong>（次日起算）；私有未報 <strong>80%</strong>、<strong>公有免報 100%</strong></td>
              <td>§14～§16、細則 §21</td>
            </tr>
            <tr>
              <td><strong>2. 累進起點＆特別稅率</strong></td>
              <td><strong>7 公畝</strong>（扣工礦農免）；自住 <strong>2‰</strong>、公設保留地 <strong>6‰</strong>（隔離免徵）、工業／公有 <strong>10‰</strong></td>
              <td>§18、§20～§24</td>
            </tr>
            <tr>
              <td><strong>3. 空地稅 vs. 荒地稅</strong></td>
              <td>空地按基本稅額加 <strong>2～5 倍</strong>（直轄市 2 年／縣 3 年）；荒地按田賦加 <strong>1～3 倍</strong>（滿 3 年收買）</td>
              <td>§26、§26-1</td>
            </tr>
            <tr>
              <td><strong>4. 照價收買黃金天數</strong></td>
              <td>繳書狀 <strong>50 日</strong> → 給錢 <strong>30 日</strong> → 囑託登記 <strong>10 日</strong>（直轄市／縣市有）→ 交地 <strong>60 日</strong></td>
              <td>§28、§30、細則 §47</td>
            </tr>
            <tr>
              <td><strong>5. 土增稅長期減徵＆抵繳</strong></td>
              <td>持有 <strong>20/30/40 年</strong>超 20% 部分減徵 <strong>20%/30%/40%</strong>；增繳地價稅抵繳上限 <strong>5%</strong></td>
              <td>§36③、§40</td>
            </tr>
            <tr>
              <td><strong>6. 一生一次 vs. 一生一屋</strong></td>
              <td>一生一次（都 3/非 7、1 年無租營）；一生一屋（都 <strong>1.5</strong>/非 <strong>3.5</strong>、<strong>5 年</strong>無租營、<strong>6 年</strong>持有設籍、唯一一屋）</td>
              <td>§41</td>
            </tr>
            <tr>
              <td><strong>7. 打炒房罰鍰＆閉鎖期</strong></td>
              <td>解約 <strong>3～15 萬</strong> → 紅單 <strong>15～100 萬</strong> → 換約 <strong>50～300 萬</strong> → 炒作 <strong>100～5,000 萬</strong>；私法人 <strong>5 年</strong>閉鎖期</td>
              <td>§47-3～§47-5、§79-1</td>
            </tr>
            <tr>
              <td><strong>8. 區段徵收 vs. 市地重劃</strong></td>
              <td>抵價地原則 <strong>50%</strong>（土徵 ≥ <strong>40%</strong>、曾農地重劃 ≥ <strong>45%</strong>）；重劃共同負擔上限 <strong>45%</strong>（10 項公設）</td>
              <td>§54、§60、土徵 §39</td>
            </tr>
            <tr>
              <td><strong>9. 耕地終止租約 1/3 補償</strong></td>
              <td>編為建地終止租約補 <strong>(收件當期公告現值 − 預計土增稅) × 1/3</strong>；收回滿 <strong>1 年</strong>未建照價收買</td>
              <td>§76～§78</td>
            </tr>
            <tr>
              <td><strong>10. 重劃權利請求期限</strong></td>
              <td>§63-1（非耕地 1 年租金）＆ §64（他項權利消滅補償／重設）限分配確定次日起 <strong>2 個月內</strong>行使</td>
              <td>§65</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="feature-band">
        <h3>🏆 地政士申論題「四段黃金破題模板」</h3>
        <ol>
          <li><strong>破題結論</strong>：第一行直接寫出「可以／不可以」或「計有三種情形」，並報出母法條號。</li>
          <li><strong>法條要件拆解</strong>：分點條列母法＋施行細則要件，把<strong>數字、比例、天數、排除項目</strong>全部精準寫出。</li>
          <li><strong>案例涵攝</strong>：把題目的人名與事實逐一代入法條要件，推論法律效果。</li>
          <li><strong>跨法／罰則加分</strong>：補上關聯法規（如《土地徵收條例》、《土地稅法》）或對應罰則（§81-2～§81-4），穩拿 20 分以上！</li>
        </ol>
      </div>

      <div class="quiz-box">
        <h3>✍️ 終極綜合模擬演練（完結篇壓軸題）</h3>
        <div class="quiz-item">
          <span class="quiz-item-label">1. 打炒房罰則＋兩罰規定＋檢舉獎金（§47-4、§47-5、§81-3、§81-4）</span>
          <p>建設公司業務經理小王在網路散布「本建案開賣當天完銷九成」之不實資訊，並協助已購客私下將預售屋買賣契約轉讓給非親屬第三人。請問小王與建設公司各面臨何種罰鍰處分？又民眾實名檢舉查證屬實可獲何種獎金？</p>
          <details class="quiz-answer">
            <summary>點此查看老師解析</summary>
            <div class="quiz-answer-body">
              <ol>
                <li><strong>散布不實資訊炒作（§47-5①①、§81-3②）</strong>：按交易戶（棟、筆）處 <strong>100 萬～5,000 萬元</strong>罰鍰；依<strong>法人兩罰規定</strong>，除罰行為人小王外，對<strong>該建設公司亦併處該罰鍰</strong>！</li>
                <li><strong>協助違法換約（§47-4③、§81-3①）</strong>：按交易戶（棟）處 <strong>50 萬～300 萬元</strong>罰鍰。</li>
                <li><strong>檢舉獎金（§81-4）</strong>：實名檢舉查證屬實裁罰確定者，發給實收罰鍰 <strong>30%</strong> 檢舉獎金（每案上限 <strong>1,000 萬元</strong>），並嚴格保密身分。</li>
              </ol>
            </div>
          </details>
        </div>
        <div class="quiz-item">
          <span class="quiz-item-label">2. 跨章綜合大題（§16、§31、§76、§77 ＋ 細則 §46）</span>
          <p>甲之出租耕地（早年已設銀行抵押權，後訂三七五租約）於重新規定地價時低報未滿公告地價 80%，若政府決定照價收買，其收買地價如何計算？銀行抵押權與耕地承租人何者優先受償？又若未收買而日後編為住宅區，甲終止租約收回滿 1 年未建，政府得如何處理？</p>
          <details class="quiz-answer">
            <summary>點此查看老師解析</summary>
            <div class="quiz-answer-body">
              <ol>
                <li><strong>收買地價與受償順序（§31①、細則 §46③）</strong>：依 §16 收買者以<strong>申報地價</strong>為準；因銀行抵押權設定登記在耕地租約訂立之前，<strong>抵押權人優先於耕地承租人受償</strong>！</li>
                <li><strong>收回滿 1 年未建（§76②、§31③）</strong>：出租耕地編為建築用地終止租約，實際收回屆滿 1 年不依使用計畫建築使用者，地方政府得<strong>照價收買</strong>之（收買地價為<strong>公告收買當期之公告土地現值</strong>）。</li>
              </ol>
            </div>
          </details>
        </div>
      </div>

      <div class="callout callout-tip">
        <div class="callout-title">🎉 恭喜完成全套 10 堂《平均地權條例及其施行細則》數位課程！</div>
        <p>您已完整打通本法 8 大章節與施行細則 102 條核心考點！善用每堂課下方的「標記本單元已複習」追蹤進度，預祝您地政士國家考試<strong>金榜題名、高分上榜</strong>！</p>
      </div>
    `
  }
);
