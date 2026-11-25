// 地政士國考《土地徵收條例及其施行細則》數位講義 — Part 2（第 4 課、第 5 課、第 6 課）
window.EXPROPRIATION_LESSONS.push(
  // =========================================================================
  // 第 4 課：徵收程序（下）（條例 §18～§29 ＋ 細則 §20～§28）
  // =========================================================================
  {
    id: "lesson-4",
    group: "第二階段：正當法律程序與徵收補償",
    badge: "第 4 課",
    shortTitle: "徵收程序（下）：公告異議與保管專戶",
    title: "第 4 課：徵收程序（下）— 公告通知、異議救濟、保管專戶與先補償後使用（條例 §18～§29 ＋ 細則 §20～§28）",
    articles: "條例 §18～§29（含 §18-1）・細則 §20～§28",
    importance: "★★★★★",
    lead: "當內政部核准徵收案並通知地方政府後，就進入決定人民財產權生死的「後半場執行期」！從公告 30 日、期滿 15 日未發價即徵收失效（§20）、雙軌異議與復議救濟（§22）、公告日禁止處分與共有分管耕地破冰（§23），到不適用提存法的保管專戶（§26）與先補償後使用原則（§27），每一個天數與例外都是地政士申論必考王牌！",
    content: `
      <h2>一、架構鳥瞰：徵收執行「時間軸」一次打通</h2>
      <p>第 3 課完成了徵收的前半場（公聽會 → 聽證 → 協議價購 → 內政部核准），第 4 課開始則是地方主管機關依 §17 接到核准通知後的<strong>執行、發價、異議與交付使用</strong>階段。先把這條黃金時間軸刻在腦海裡，所有天數再也不會搞混：</p>

      <div class="trust-diagram" aria-label="徵收程序後半場時間軸圖">
        <div class="diagram-row">
          <div class="diagram-node node-dark">
            <div class="diagram-node-title">① 公告前置與公告 30 日（§18、§18-1、細則 §20）</div>
            <div class="diagram-node-desc">部分徵收先辦分割測量 → 公告 30 日＋掛號通知 → 同步囑託註記、凍結處分與新建（§23）</div>
          </div>
        </div>
        <div class="diagram-row">
          <div class="diagram-arrow">▼ 公告期間內對「公告事項」異議（§22Ⅰ） ／ 公告期滿啟動發價 ▼</div>
        </div>
        <div class="diagram-row">
          <div class="diagram-node node-gold">
            <div class="diagram-node-title">② 期滿 15 日內發給補償費（§19、§20）</div>
            <div class="diagram-node-desc">需用土地人繳交地方政府轉發・逾期未發竣且無 4 例外 → 該部分徵收失其效力！</div>
          </div>
          <div class="diagram-arrow">──▶</div>
          <div class="diagram-node">
            <div class="diagram-node-title">②-B 補償價額異議（§22Ⅱ～Ⅴ）</div>
            <div class="diagram-node-desc">期滿次日起 30 日內異議 → 查處 → 30 日不服提評議會復議 → 行政救濟 → 差額 3 個月內發給</div>
          </div>
        </div>
        <div class="diagram-row">
          <div class="diagram-arrow">▼ 補償完竣（§21Ⅰ）或 3 個月內存入保管專戶視同完竣（§26Ⅲ） ▼</div>
        </div>
        <div class="diagram-row">
          <div class="diagram-node node-dark">
            <div class="diagram-node-title">③ 先補償後使用與限期遷移（§27～§29）</div>
            <div class="diagram-node-desc">補償完竣或核定抵價地後始得進場（例外：國防交通水利公安急需）→ 限期遷移、逾期行政執行</div>
          </div>
        </div>
      </div>

      <h2>二、公告 30 日、部分分割與通知效力（條例 §18、§18-1 ＋ 細則 §20、§21、§25）</h2>
      <ul>
        <li><strong>一宗土地部分被徵收先辦分割（細則 §20）</strong>：地方主管機關應於<strong>公告徵收前</strong>，囑託登記機關就徵收部分辦理<strong>分割測量登記</strong>，並以分割後土地標示辦理公告徵收。</li>
        <li><strong>公告期間 30 日與 9 款必載事項（§18、細則 §21）</strong>：地方主管機關接到內政部通知核准徵收案時，應即公告 <strong>30 日</strong>並書面通知所有權人及他項權利人。公告應載明需用土地人名稱、興辦事業種類、核准機關及文號、徵收標的及補償費額、公告期間、異議與救濟期限、禁止事項、申請一併徵收要件及期限等 9 款事項；農作改良物或未登記建物應載明應受補償人姓名、住所，並附同徵收土地圖公布。</li>
        <li><strong>公告通知基準日與效力延伸（§18-1、細則 §25）</strong>：已登記者，以<strong>「公告之日」</strong>土地或建物登記簿記載之所有權人及他項權利人姓名、住所辦理公告及通知，應以<strong>掛號交寄並取得回執</strong>（無法送達者公示送達），並得一併通知領取補償費日期。</li>
      </ul>

      <div class="callout callout-law">
        <div class="callout-title">📖 必考細節：§18-1 效力及於「已取得未辦登記」之人</div>
        <p>依條例 <strong>§18-1</strong>，依公告日登記簿辦理之公告及通知，其效力並及於<strong>公告前因「繼承、強制執行或法院之判決」</strong>已取得所有權或他項權利而尚未辦竣登記之人！</p>
        <p>👉 <strong>老師解析</strong>：這三類屬於《民法》§759 非因法律行為取得物權，縱未辦登記已實質取得權利；法律明定政府依登記簿通知即對其發生效力，避免繼承人多年不辦繼承登記卻反咬政府「未合法通知」！</p>
      </div>

      <h2>三、15 日發給補償費、逾期失效與權利終止（條例 §19～§21 ＋ 細則 §22）</h2>
      <div class="callout callout-warn">
        <div class="callout-title">🔥 憲法級超級大考點：逾期 15 日不發錢，徵收直接失效！（§20）</div>
        <ol>
          <li><strong>負擔與轉發（§19）</strong>：補償費由<strong>需用土地人負擔</strong>，並繳交直轄市或縣（市）主管機關<strong>轉發</strong>。</li>
          <li><strong>發給期限（§20Ⅰ）</strong>：應於<strong>公告期滿後 15 日內</strong>發給之（但依 §22Ⅴ 發給復議或行政救濟後之差額者，不在此限）。</li>
          <li><strong>逾期失其效力（§20Ⅱ 本文）</strong>：需用土地人未於公告期滿 <strong>15 日內</strong>繳交主管機關發給完竣者，<strong>「該部分土地或土地改良物之徵收從此失其效力」</strong>！（符合大法官釋字第 516 號意旨）。</li>
          <li><strong>4 款不失效例外（§20Ⅱ 但書）</strong>：
            <ul>
              <li>① 於公告期間內因對補償之估定有異議，由主管機關依 §22 提交<strong>地價評議委員會復議</strong>。</li>
              <li>② 經應受補償人以<strong>書面同意延期或分期發給</strong>。</li>
              <li>③ 應受補償人<strong>拒絕受領或不能受領</strong>。</li>
              <li>④ 應受補償人<strong>所在地不明</strong>。</li>
            </ul>
          </li>
          <li><strong>主張徵收失效程序（細則 §22）</strong>：原土地所有權人向直轄市或縣（市）主管機關申請 → 地方主管機關查明研擬意見 → 報<strong>原核准徵收機關（內政部）核定</strong>後函復。</li>
        </ol>
      </div>

      <ul>
        <li><strong>權利義務終止時點（§21Ⅰ）</strong>：所有權人對被徵收土地或改良物之權利義務，於<strong>「應受之補償費發給完竣時」終止</strong>（不是公告日，也不是辦完移轉登記日！）。</li>
        <li><strong>發給前從來之使用（§21Ⅱ）</strong>：補償費未發給完竣前，得繼續為從來之使用（但合於 §27 但書急需先行使用者除外）。</li>
      </ul>

      <h2>四、雙軌異議、地價評議會復議與 3 個月發給差額（條例 §22 ＋ 細則 §23）</h2>
      <p>考場最愛考的天數陷阱就在 §22！「對公告事項有異議」跟「對徵收補償價額有異議」的起算點完全不同，務必用這張表一眼記牢：</p>

      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>比較項目</th>
              <th>軌道 A：對「公告事項」異議（§22Ⅰ）</th>
              <th>軌道 B：對「徵收補償價額」異議（§22Ⅱ、Ⅲ、細則 §23）</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>異議標的</strong></td>
              <td>面積、地號、改良物漏列、所有權人誤載等公告內容</td>
              <td>認為地價市價或地上物補償價額估定過低</td>
            </tr>
            <tr>
              <td><strong>法定期間</strong></td>
              <td><strong>公告期間內（30 日內）</strong></td>
              <td><strong>公告期間屆滿之次日起 30 日內</strong></td>
            </tr>
            <tr>
              <td><strong>處理與復議</strong></td>
              <td>地方主管機關書面受理 → 查明處理並書面通知</td>
              <td>地方主管機關查明處理書面通知 → 不服查處者於<strong>查處通知送達之日起 30 日內</strong>書面敘明理由（細則 §23）→ 提請<strong>地價評議委員會復議</strong> → 不服復議結果依法提起<strong>行政救濟</strong></td>
            </tr>
            <tr>
              <td><strong>停止執行？</strong></td>
              <td colspan="2"><strong>不停止執行（§22Ⅳ）</strong>：依 §20 發給補償費完竣後，徵收計畫之執行，不因提出異議或提起行政救濟而停止！</td>
            </tr>
            <tr>
              <td><strong>差額發給</strong></td>
              <td>—</td>
              <td>經復議、行政救濟結果變動，或補償費已發竣嗣發現原補償價額認定錯誤者，其應補償價額差額應於<strong>結果確定之日起 3 個月內</strong>發給（§22Ⅴ，釋字第 652 號修法成果）</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>五、公告日雙重凍結、共有分管耕地例外與未辦繼承領款（條例 §23～§25 ＋ 細則 §24）</h2>
      <ol>
        <li><strong>權利處分凍結（§23Ⅰ、細則 §24）</strong>：自<strong>公告日起</strong>，主管機關同時囑託登記機關於登記簿註記徵收公告日期及文號，不得<strong>分割、合併、移轉或設定負擔</strong>。<strong>唯一例外</strong>：於公告前因<strong>繼承、強制執行或法院之判決</strong>取得所有權或他項權利，並於<strong>公告期間內申請登記</strong>者。</li>
        <li><strong>事實行為凍結（§23Ⅰ）</strong>：不得為建物之<strong>新建、增建、改建</strong>或<strong>採取土石、變更地形</strong>或農作改良物之<strong>增加種植</strong>；公告時已在工作中者，<strong>應即停止</strong>（已合法動工停工之損失依 §32 補償）。</li>
        <li><strong>共有分管耕地破冰條款（§23Ⅱ、§24Ⅱ）</strong>：<strong>共有分管之耕地，部分被徵收者</strong>，土地所有權人得於<strong>徵收補償地價發給完竣前或核定發給抵價地前</strong>，申請<strong>共有物分割登記</strong>或<strong>應有部分交換移轉登記</strong>，不受 §23Ⅰ 限制！且辦理登記後，其權利改以<strong>登記後土地登記簿記載者為準</strong>（§24Ⅱ）。</li>
        <li><strong>權利認定與備案（§24Ⅰ）</strong>：原則以<strong>公告之日</strong>登記簿記載為準；但公告前因繼承、強制執行、法院之判決或<strong>其他依法律規定</strong>取得權利尚未登記完畢者，權利人應於<strong>徵收公告期間內</strong>向地方主管機關申請將其權利<strong>備案</strong>。</li>
        <li><strong>未辦繼承或公同共有繼承按應繼分領款（§25）</strong>：所有權人死亡未辦竣繼承登記，其徵收補償費得由<strong>部分繼承人按其應繼分領取之</strong>；已辦竣<strong>公同共有繼承登記</strong>者，亦同！（不必全體繼承人同意！）。</li>
      </ol>

      <h2>六、補償費保管專戶 vs. 先補償後使用與強制遷移（條例 §26～§29 ＋ 細則 §26～§28）</h2>

      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>比較項目</th>
              <th>土地徵收補償費保管專戶（土徵 §26）</th>
              <th>民法法院清償提存（提存法）</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>法律適用與機構</strong></td>
              <td>明文<strong>不適用提存法</strong>；於<strong>國庫</strong>設立專戶保管</td>
              <td>適用提存法；向地方法院提存所提存</td>
            </tr>
            <tr>
              <td><strong>存入條件與期限</strong></td>
              <td>受領遲延、拒絕受領或不能受領 → 應發給期限（§20Ⅰ 或 §22Ⅴ）<strong>屆滿次日起 3 個月內</strong>存入並通知（細則 §26）</td>
              <td>無統一 3 個月法定上限</td>
            </tr>
            <tr>
              <td><strong>效力與利息</strong></td>
              <td>繳存專戶時<strong>視同補償完竣（§26Ⅲ）</strong>；應給付利息並<strong>以實收利息照付（§26Ⅱ）</strong></td>
              <td>發生清償效力；依提存法計息</td>
            </tr>
            <tr>
              <td><strong>歸屬國庫年限</strong></td>
              <td>自<strong>通知送達發生效力之日起，逾 15 年</strong>未領取歸屬國庫</td>
              <td>自提存通知書送達生效翌日起逾 <strong>10 年</strong>歸屬國庫</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="callout callout-case">
        <div class="callout-title">📌 實務案例：拒領補償費能擋住怪手進場拆屋嗎？（§26、§27、§28）</div>
        <p><strong>情境</strong>：地主阿明對徵收補償價額不滿，在 15 日領款期間內刻意拒領補償費，想藉此讓徵收逾 15 日失效，或阻止需用土地人進場施工。請問可行嗎？</p>
        <p>👉 <strong>老師解析</strong>：<strong>完全不可行！</strong>① 阿明拒絕受領屬 <strong>§20Ⅱ 第 3 款</strong>例外，徵收不會失效；② 地方政府依 <strong>§26Ⅰ</strong> 於 15 日期滿次日起 <strong>3 個月內</strong>存入國庫保管專戶並通知阿明，存入時即依 <strong>§26Ⅲ「視同補償完竣」</strong>；③ 需用土地人既已補償完竣，即符合 <strong>§27 先補償後使用</strong>要件，可合法進場施工，並依 <strong>§28</strong> 通知限期遷移，逾期未遷者得依<strong>《行政執行法》</strong>強制執行！</p>
      </div>

      <ul>
        <li><strong>先補償後使用原則與緊急例外（§27、細則 §28）</strong>：需用土地人應俟<strong>補償費發給完竣</strong>或<strong>核定發給抵價地</strong>後，始得進入被徵收土地內工作。但<strong>國防、交通及水利事業</strong>，因<strong>公共安全急需先行使用</strong>者，不在此限（程序：申請徵收前擬具理由 → 報<strong>目的事業主管機關許可</strong> → 載明於徵收計畫書送<strong>中央主管機關核准徵收及先行使用</strong> → 徵收公告時<strong>一併公告</strong>）。</li>
        <li><strong>限期遷移與墳墓遷葬（§28、§29）</strong>：補償完竣或核定抵價地後通知限期遷移；應受領遷移費人無可考或所在地不明者，<strong>公告 30 日</strong>限期遷移；逾期未遷者依<strong>《行政執行法》</strong>執行。徵收範圍內應行遷葬之墳墓，需用土地人應申請當地墳墓主管機關依<strong>《殯葬管理條例》</strong>辦理，詳細記載列冊報地方政府備案。補償完竣並完成土地登記後，報中央主管機關備查（細則 §27）。</li>
      </ul>

      <div class="feature-band">
        <h3>📝 第 4 課重點速記口訣</h3>
        <ul>
          <li><strong>天數四連擊</strong>：公告 <strong>30 日</strong> → 發價 <strong>15 日</strong>（不發失效）→ 補差額與存專戶 <strong>3 個月</strong> → 專戶歸國庫 <strong>15 年</strong>！</li>
          <li><strong>§20 不失效 4 例外</strong>：「<strong>異議復議、書面同意、拒領不能、所在不明</strong>」。</li>
          <li><strong>§22 雙軌異議</strong>：公告事項「<strong>公告期間 30 日內</strong>」；補償價額「<strong>期滿次日起 30 日內</strong> → 查處 → <strong>30 日內</strong>不服提評議會復議 → 行政救濟」。</li>
          <li><strong>§23Ⅱ 共有分管耕地</strong>：「<strong>分管耕地部徵收，完竣核定前，可分割交換，以登記後為準</strong>」。</li>
          <li><strong>§27 急需先行使用</strong>：「<strong>國、交、水，公安急需</strong>（目許 → 中核 → 併公告）」。</li>
        </ul>
      </div>

      <div class="quiz-box">
        <h3>✍️ 第 4 課隨堂小練習</h3>
        <div class="quiz-item">
          <span class="quiz-item-label">1. 申論熱身題（§20 逾期失效 × §26 保管專戶）</span>
          <p>徵收土地補償費法定發給期限為何？逾期未發給完竣之法律效果及四款不失效例外為何？若應受補償人拒絕受領，主管機關應於何時存入國庫保管專戶？其利息、效力及歸屬國庫年限為何？</p>
          <details class="quiz-answer">
            <summary>點此查看老師解析</summary>
            <div class="quiz-answer-body">
              <p><strong>一、發給期限與逾期失效（§20、細則 §22）</strong>：應於<strong>公告期滿後 15 日內</strong>發給；需用土地人逾期未繳交發給完竣者，<strong>該部分土地或改良物之徵收從此失其效力</strong>（原所有權人向地方主管機關申請，查明後報內政部核定）。<strong>四款例外</strong>：①公告期間內異議提交評議會復議；②書面同意延期或分期發給；③拒絕受領或不能受領；④所在地不明。</p>
              <p><strong>二、保管專戶處理（§26、細則 §26）</strong>：於國庫設立專戶，<strong>不適用提存法</strong>；應於應發給期限屆滿次日起 <strong>3 個月內</strong>存入專戶並通知；以<strong>實收利息照付</strong>；繳存時<strong>視同補償完竣</strong>；自通知送達發生效力之日起<strong>逾 15 年</strong>未領取者，歸屬國庫。</p>
            </div>
          </details>
        </div>
        <div class="quiz-item">
          <span class="quiz-item-label">2. 實例辨析題（§22 雙軌異議 × §25 未辦繼承）</span>
          <p>老王過世後未辦繼承登記，由三名子女公同共有 A 地，今遭徵收。(1) 其中長女一人可否單獨先領取自己 1/3 的徵收補償費？(2) 若長女認為徵收補償地價過低，應於何期限內循何程序救濟？</p>
          <details class="quiz-answer">
            <summary>點此查看老師解析</summary>
            <div class="quiz-answer-body">
              <p><strong>(1) 可以單獨領取！</strong>依 <strong>§25</strong>，被徵收土地所有權人死亡未辦竣繼承登記（或已辦竣公同共有繼承登記），其徵收補償費得由<strong>部分繼承人按其應繼分領取之</strong>，不必全體繼承人會同。</p>
              <p><strong>(2) 補償價額異議程序（§22Ⅱ～Ⅴ、細則 §23）</strong>：應於<strong>公告期間屆滿之次日起 30 日內</strong>以書面向地方主管機關提出異議 → 查明處理書面通知 → 不服查處者於<strong>查處通知送達之日起 30 日內</strong>書面敘明理由送主管機關，由主管機關提請<strong>地價評議委員會復議</strong> → 不服復議結果依法提起行政救濟；若有差額，應於<strong>結果確定之日起 3 個月內</strong>發給。</p>
            </div>
          </details>
        </div>
      </div>
    `
  },

  // =========================================================================
  // 第 5 課：徵收補償篇（條例 §30～§36-1 ＋ 細則 §29～§33）
  // =========================================================================
  {
    id: "lesson-5",
    group: "第二階段：正當法律程序與徵收補償",
    badge: "第 5 課",
    shortTitle: "徵收補償篇：市價查估、安置與他項權利",
    title: "第 5 課：徵收補償篇 — 市價補償、地上物查估、弱勢安置與他項權利（條例 §30～§36-1 ＋ 細則 §29～§33）",
    articles: "條例 §30～§36-1（含 §34-1）・細則 §29～§33・市價查估辦法",
    importance: "★★★★★",
    lead: "徵收是國家為了公益對人民課予的「特別犧牲」，沒有「完全、相當之補償」，就無法通過憲法財產權檢驗！本課一次打通 101 年修法兩大靈魂：§30 市價補償（含公設保留地毗鄰平均市價與細則三大從高原則）、§34-1 低收／中低收入戶弱勢安置計畫，並徹底整合地上物查估（§31）、營業損失（§33）、5 款遷移費（§34）與他項權利／三七五租約清理（§35～§36）！",
    content: `
      <h2>一、架構鳥瞰：第三章「徵收補償」五大支柱</h2>
      <p>依<strong>細則 §29</strong>，被徵收土地補償金額之計算及發給，由土地所在直轄市或縣（市）主管機關為之。整章條文由「地價 → 地上物 → 營業與遷移 → 弱勢安置 → 負擔清理」構成完整保障網：</p>

      <div class="trust-diagram" aria-label="徵收補償五大支柱架構圖">
        <div class="diagram-row">
          <div class="diagram-node node-dark">
            <div class="diagram-node-title">① 地價市價補償（§30、細則 §30～§31-1）</div>
            <div class="diagram-node-desc">一般土地：徵收當期市價・公設保留地：毗鄰非公保地平均市價・每 6 個月評定變動幅度</div>
          </div>
          <div class="diagram-node">
            <div class="diagram-node-title">② 改良物與停工費用（§31、§32）</div>
            <div class="diagram-node-desc">建物：重建價格・農作物：1 年內成熟孳息／逾 1 年培育費參酌現值・領照停工補償</div>
          </div>
        </div>
        <div class="diagram-row">
          <div class="diagram-arrow">▼ 兼顧營業生計、遷移成本與居住人權 ▼</div>
        </div>
        <div class="diagram-row">
          <div class="diagram-node">
            <div class="diagram-node-title">③ 營業損失與 5 款遷移費（§33、§34）</div>
            <div class="diagram-node-desc">合法營業停業或縮小損失・6 個月前設籍人口遷移費（結婚出生例外）等 5 款</div>
          </div>
          <div class="diagram-node node-gold">
            <div class="diagram-node-title">④ 弱勢安置計畫（§34-1）</div>
            <div class="diagram-node-desc">公告 1 年前居住之低收／中低收入戶無屋可住 → 安置住宅、貸款利息補貼、租金補貼</div>
          </div>
        </div>
        <div class="diagram-row">
          <div class="diagram-arrow">▼ 徵收原始取得：原有負擔以補償費為限清償結束 ▼</div>
        </div>
        <div class="diagram-row">
          <div class="diagram-node node-dark">
            <div class="diagram-node-title">⑤ 他項權利消滅與三七五租約清理（§35、§36 ＋ 平均地權 §11）</div>
            <div class="diagram-node-desc">以補償金額為限・他項權利限期協議代償／不成存專戶・三七五租約承租人代扣 1/3</div>
          </div>
        </div>
      </div>

      <h2>二、市價補償與公設保留地三大「從高原則」（條例 §30 ＋ 細則 §30～§31-1）</h2>
      <div class="callout callout-law">
        <div class="callout-title">📖 核心法條白話拆解（條例 §30）</div>
        <ul>
          <li><strong>一般土地（§30Ⅰ 前段）</strong>：按<strong>「徵收當期之市價」</strong>補償其地價（由地方主管機關提交<strong>地價評議委員會</strong>評定，§30Ⅱ）。</li>
          <li><strong>都市計畫區內公共設施保留地（§30Ⅰ 後段）</strong>：按<strong>「毗鄰非公共設施保留地之平均市價」</strong>補償其地價（防止土地因被劃為公園道路而地價腰斬，遭國家低價收割！）。</li>
          <li><strong>每 6 個月動態調整（§30Ⅲ）</strong>：地方主管機關應經常調查轄區地價動態，<strong>每 6 個月</strong>提交地價評議委員會評定被徵收土地<strong>市價變動幅度</strong>，作為調整徵收補償地價之依據。</li>
          <li><strong>跨科提醒（對比《平均地權條例》§10）</strong>：平均地權條例 §10 仍寫「公告土地現值」，但依土徵條例 §1Ⅲ，其他法律有關徵收程序與補償標準牴觸本條例者，<strong>優先適用《土地徵收條例》§30 市價補償</strong>！</li>
        </ul>
      </div>

      <h3>施行細則三大「從高保護」＋ 前置通報期限（細則 §30、§31、§31-1）</h3>
      <ol>
        <li><strong>「徵收當期之市價」定義與從高原則（細則 §30）</strong>：指<strong>「徵收公告期滿次日起算第 15 日」</strong>經地價評議委員會評定之當期市價；若該當期市價<strong>低於徵收公告之市價</strong>，仍按<strong>「徵收公告之市價」</strong>補償（只漲不跌！）。</li>
        <li><strong>公設保留地毗鄰平均市價 3 大計算規則（細則 §31）</strong>：
          <ul>
            <li><strong>加權平均＋排除拉低</strong>：比照《平均地權條例施行細則》§63Ⅱ 計算（按毗鄰各非公保地之區段線長度加權平均）；毗鄰部分為公共設施用地經納入計算致平均市價<strong>降低</strong>者，<strong>不予納入</strong>。</li>
            <li><strong>零星建築用地救濟（細則 §31Ⅱ）</strong>：都市計畫農業區、保護區之<strong>零星建築用地</strong>，或依規定應整體開發而未開發之<strong>零星已建築用地</strong>，經劃屬公設保留地者，以該保留地<strong>距離最近之 3 個同使用性質地價區段之平均市價</strong>計算；計算結果較高者，<strong>從高計算</strong>。</li>
            <li><strong>評定後始劃定為公保地（細則 §31Ⅲ）</strong>：應於公告徵收前重新計算；重新計算結果降低者，<strong>仍以原市價</strong>為依據。</li>
          </ul>
        </li>
        <li><strong>市價查估前置通知期限（細則 §31-1）</strong>：需用土地人應於<strong>每年 9 月 1 日前</strong>函文通知地方主管機關預定徵收範圍，作為次年查估依據；當年具急迫性或重大公共建設推動之需者，得於<strong>當年 3 月 1 日前</strong>送達。逾期未提供者，應自行提供查估市價或協調查估提交評議，所需費用得由需用土地人負擔。</li>
      </ol>

      <div class="callout callout-tip">
        <div class="callout-title">💡 《土地徵收補償市價查估辦法》考場加分 4 關鍵字</div>
        <p>申論題問市價怎麼查估時，補寫這 4 點直接滿分：① <strong>市價定義</strong>＝市場正常交易價格；② <strong>估價基準日</strong>＝每年 9 月 1 日；③ <strong>估價方法</strong>＝以<strong>比較法</strong>為原則（蒐集實價登錄買賣實例進行情況、價格日期、區域及個別因素調整），無適當實例時得以<strong>收益法</strong>估計；④ <strong>作業流程</strong>＝劃分地價區段 → 選定比準地查估 → 估計宗地單位市價 → 提交地價評議委員會評定。</p>
      </div>

      <h2>三、地上改良物查估與停工改良費補償（條例 §31、§32 ＋ 細則 §32、§33）</h2>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>補償標的</th>
              <th>法條依據</th>
              <th>查估標準與要件</th>
              <th>考場易混淆陷阱</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>建築改良物</strong></td>
              <td>§31Ⅰ</td>
              <td>按徵收當時該建築改良物之<strong>「重建價格」</strong>估定之</td>
              <td>🔥 <strong>不扣折舊！</strong>保障原地主能蓋回同等房屋（對比平均地權細則 §5 空地採「現存價值」）</td>
            </tr>
            <tr>
              <td><strong>農作改良物</strong></td>
              <td>§31Ⅱ</td>
              <td>① 距孳息成熟時期在<strong> 1 年以內</strong>：按<strong>成熟時之孳息</strong>估定<br>② <strong>逾 1 年</strong>：按<strong>種植及培育費用，並參酌現值</strong>估定</td>
              <td>以 <strong>1 年</strong>為黃金分水嶺；由地方主管機關會同有關機關估定，查估基準由中央主管機關定之（§31Ⅲ）</td>
            </tr>
            <tr>
              <td><strong>已領照／農地合法改良停工費用</strong></td>
              <td>§32<br>細則 §32、§33</td>
              <td>公告前已領建照或於農地上為合法改良土地，依 §23Ⅰ 停止工作者 → 補償<strong>已支付之土地改良費用</strong></td>
              <td>細則 §32 分建築基地、農地、其他用地開發改良 3 類；依細則 §33 須先依<strong>平均地權細則 §12 驗證登記</strong>，持憑「改良土地費用證明書」領取</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>四、營業損失、5 款遷移費與弱勢安置計畫（條例 §33、§34、§34-1）</h2>
      <ul>
        <li><strong>合法營業損失補償（§33）</strong>：土地或土地改良物原供<strong>合法營業</strong>之用，因徵收而致<strong>營業停止</strong>或<strong>營業規模縮小</strong>之損失，應給予補償（基準由中央主管機關定之）。</li>
        <li><strong>5 款法定遷移費（§34）</strong>：
          <ol>
            <li>依 <strong>§5Ⅰ①</strong>（所有權人要求取回並於公告期滿日起 15 日內自行遷移）或 <strong>§5Ⅰ②</strong>（墳墓及其他紀念物必須遷移）規定遷移者。</li>
            <li><strong>徵收公告 6 個月前設有戶籍</strong>之人口必須遷移者。<strong>但因「結婚或出生」而設籍者，不受 6 個月期限之限制！</strong></li>
            <li><strong>動力機具、生產原料或經營設備</strong>等必須遷移者。</li>
            <li>因土地<strong>一部分之徵收</strong>而其改良物須<strong>全部遷移</strong>者。</li>
            <li><strong>水產養殖物或畜產</strong>必須遷移者。</li>
          </ol>
        </li>
      </ul>

      <div class="callout callout-warn">
        <div class="callout-title">🔥 101 年大修法明星考點：§34-1 弱勢族群安置計畫</div>
        <p><strong>適用要件（缺一不可）</strong>：① <strong>徵收公告 1 年前有居住事實</strong>；② 具<strong>低收入戶或中低收入戶</strong>身分；③ 因其所有建築改良物被徵收，<strong>致無屋可居住者</strong>（或<strong>情境相同經直轄市或縣（市）政府社會工作人員查訪屬實者</strong>）。</p>
        <p><strong>法定義務與方式</strong>：<strong>需用土地人</strong>應訂定<strong>安置計畫</strong>，並於<strong>徵收計畫書</strong>內敘明（並列為中央主管機關依 §13Ⅱ⑥ 必審事項）。安置方式包括：<strong>安置住宅、購置住宅貸款利息補貼、租金補貼</strong>等！</p>
      </div>

      <h2>五、他項權利消滅與耕地三七五租約代償（條例 §35～§36-1 ＋ 平均地權 §11）</h2>
      <ul>
        <li><strong>有限清償原則（§35Ⅰ）</strong>：被徵收土地或建物<strong>應有之負擔</strong>（除申領抵價地改依 §41、§42 辦理外），款額計算<strong>以該土地或建物應得之補償金額為限</strong>，由地方主管機關於發給地價補償費或建物補償費時為<strong>清償結束之</strong>。</li>
        <li><strong>「應有之負擔」2 大類（§35Ⅱ）</strong>：① <strong>他項權利價值</strong>；② <strong>依法應補償耕地三七五租約承租人之地價</strong>。</li>
        <li><strong>他項權利消滅與二階段清理（§36）</strong>：原設定之他項權利<strong>因徵收而消滅</strong>。主管機關應通知當事人<strong>限期自行協議</strong>款額，再依協議結果<strong>代為清償</strong>；<strong>協議不成者</strong>，補償費依 <strong>§26 規定存入國庫保管專戶</strong>！</li>
        <li><strong>核計發放辦法授權（§36-1）</strong>：補償費之核計、核發對象、領取應備文件等辦法，由中央主管機關定之。</li>
      </ul>

      <div class="callout callout-case">
        <div class="callout-title">📌 跨科實務試算：出租耕地遭一般徵收，三七五佃農拿多少？（整合平均地權 §11 × 土地稅法 §39Ⅰ）</div>
        <p><strong>情境</strong>：地主老陳將私有農地訂立三七五租約出租予實際自任耕作的佃農阿伯。今該地遭政府一般徵收，評定市價補償地價為 <strong>900 萬元</strong>，阿伯地上另有距收割僅剩 3 個月的成熟稻作（成熟孳息估定 15 萬元）。請問阿伯與老陳各可領多少錢？</p>
        <p>👉 <strong>老師解析</strong>：</p>
        <ul>
          <li><strong>步驟 1（跨科關鍵！）</strong>：依《土地稅法》<strong>§39Ⅰ</strong>，<strong>被徵收之土地免徵土地增值稅</strong>，故老陳實際應納土增稅為 <strong>0 元</strong>！</li>
          <li><strong>步驟 2（地主分 1/3 代扣交）</strong>：依《平均地權條例》§11 與《土地徵收條例》§35Ⅱ，補償地價扣除實際應納土增稅後餘額 ＝ 900 萬 － 0 ＝ 900 萬元；其中 <strong>1/3 ＝ 300 萬元</strong>由主管機關於發給地價補償費時<strong>代為扣交</strong>給阿伯！</li>
          <li><strong>步驟 3（農作物補償）</strong>：稻作距成熟僅 3 個月（1 年以內），依 §31Ⅱ 按成熟時孳息由政府發給阿伯 <strong>15 萬元</strong>。</li>
          <li><strong>結果</strong>：阿伯總計領取 <strong>315 萬元</strong>；地主老陳實拿 900 萬 － 300 萬 ＝ <strong>600 萬元</strong>！</li>
        </ul>
      </div>

      <div class="feature-band">
        <h3>📝 第 5 課重點速記口訣</h3>
        <ul>
          <li><strong>地價從高三原則（細則 §30、§31）</strong>：「<strong>第 15 日當期不低於公告、公設拉低不納入、零星建地取最近 3 同性質區段從高算</strong>」。</li>
          <li><strong>地上物查估（§31）</strong>：「<strong>建物重建不折舊；農作 1 年內算成熟，逾 1 年算培育參酌現值</strong>」。</li>
          <li><strong>遷移費 5 款（§34）</strong>：「<strong>取回墳墓、6 月設籍（婚生除外）、機具設備、一部徵全遷、水產畜產</strong>」。</li>
          <li><strong>弱勢安置（§34-1）</strong>：「<strong>公告 1 年前居住 ＋ 低收／中低收（或社工查實）＋ 無屋可住 → 住、息、租</strong>」。</li>
          <li><strong>他項權利清理（§35、§36）</strong>：「<strong>徵收消滅、補償為限、限期協議代償、不成存專戶</strong>」。</li>
        </ul>
      </div>

      <div class="quiz-box">
        <h3>✍️ 第 5 課隨堂小練習</h3>
        <div class="quiz-item">
          <span class="quiz-item-label">1. 觀念計算題（§30 公設保留地毗鄰平均市價）</span>
          <p>某都市計畫公園預定地（公共設施保留地）公告徵收時評定毗鄰平均市價為 20 萬元/㎡，公告期滿次日起算第 15 日當期評定市價因房市反轉跌至 18 萬元/㎡。請問應按多少補償？若該地原屬農業區零星建築用地遭劃為公保地，應如何特別計算？</p>
          <details class="quiz-answer">
            <summary>點此查看老師解析</summary>
            <div class="quiz-answer-body">
              <p><strong>一、應按 20 萬元/㎡ 補償！</strong>依<strong>細則 §30</strong>，徵收當期市價指公告期滿次日起算第 15 日評定之當期市價；惟當期市價<strong>低於徵收公告之市價</strong>者，仍按<strong>徵收公告之市價</strong>補償（從高保護原則）。</p>
              <p><strong>二、零星建地特別計算法（細則 §31Ⅱ）</strong>：都市計畫農業區、保護區之零星建築用地，經劃屬公設保留地者，以該保留地<strong>距離最近之 3 個同使用性質地價區段之平均市價</strong>計算；計算結果較高者，<strong>應從高計算</strong>。</p>
            </div>
          </details>
        </div>
        <div class="quiz-item">
          <span class="quiz-item-label">2. 比較申論題（§34 人口遷移費 vs. §34-1 弱勢安置計畫）</span>
          <p>請比較《土地徵收條例》§34Ⅰ②「人口遷移費」與 §34-1「弱勢安置計畫」在<strong>時間點要件、身分條件與排除規定</strong>上有何不同？</p>
          <details class="quiz-answer">
            <summary>點此查看老師解析</summary>
            <div class="quiz-answer-body">
              <p><strong>一、人口遷移費（§34Ⅰ②）</strong>：時間要件為<strong>「徵收公告 6 個月前設有戶籍」</strong>之人口必須遷移者，不限經濟身分；但書規定<strong>因「結婚或出生」而設籍者，不受 6 個月期限之限制</strong>。</p>
              <p><strong>二、弱勢安置計畫（§34-1）</strong>：時間要件為<strong>「徵收公告 1 年前有居住事實」</strong>（看實際居住事實而非僅形式設籍）；身分條件為<strong>低收入戶或中低收入戶</strong>人口，因自有建物被徵收致無屋可居住者（或情境相同經社工查訪屬實者）；由需用土地人訂定安置計畫（安置住宅、購屋貸款利息補貼、租金補貼）並載明於徵收計畫書。</p>
            </div>
          </details>
        </div>
      </div>
    `
  },

  // =========================================================================
  // 第 6 課：區段徵收（上）（條例 §4、§37～§42 ＋ 細則 §34～§49）
  // =========================================================================
  {
    id: "lesson-6",
    group: "第三階段：區段徵收與權利清理",
    badge: "第 6 課",
    shortTitle: "區段徵收（上）：事由、抵價地與權利清理",
    title: "第 6 課：區段徵收（上）— 法定事由、前置禁建、抵價地比例與權利清理（條例 §4、§37～§42 ＋ 細則 §34～§49）",
    articles: "條例 §4、§37～§42・細則 §34～§49（含 §48-1）",
    importance: "★★★★★",
    lead: "區段徵收是台灣最重要的大面積都市開發工具，也是地政士考場年年必爭的 25 分大題！本堂課精講區段徵收「上半場」：§4 六大法定事由與先行區段徵收、§37 範圍勘定後 1 年 6 個月禁建管制、§38 內政部自辦報行政院核准、§39 抵價地 50%／40%／45% 三層比例、§40 抵價地申請與 1 個月改領機制，以及最具殺傷力的 §41～§42 原有負擔清理與抵押權重設！",
    content: `
      <h2>一、架構鳥瞰：區段徵收「發動 → 申請 → 權利清理」全流程</h2>
      <p>區段徵收就像一場「國家主導、地主合建」的大開發：政府先將一整片土地強制徵收、興建完善公共設施，再把其中一部分變值錢的可建築用地（<strong>抵價地</strong>）配還給選擇領地的原地主！先看懂上半場的五大推進關卡：</p>

      <div class="trust-diagram" aria-label="區段徵收上半場流程圖">
        <div class="diagram-row">
          <div class="diagram-node node-dark">
            <div class="diagram-node-title">① 6 大法定事由與先行區段徵收（§4）</div>
            <div class="diagram-node-desc">新都／舊都／農保變建工變住商／非都／農村／其他・公告期滿 1 年內發布都計・可跨區合併</div>
          </div>
        </div>
        <div class="diagram-row">
          <div class="diagram-arrow">▼ 範圍勘定後即可提前防搶建 ▼</div>
        </div>
        <div class="diagram-row">
          <div class="diagram-node">
            <div class="diagram-node-title">② 前置禁建最長 1 年 6 個月（§37）</div>
            <div class="diagram-node-desc">報上級核定 → 禁止新建增改重建、採土、變更地形（注意：不禁止移轉分割！）</div>
          </div>
          <div class="diagram-arrow">──▶</div>
          <div class="diagram-node">
            <div class="diagram-node-title">③ 公聽會與計畫書報核（§38）</div>
            <div class="diagram-node-desc">7 日前公告通知開公聽會 → 報內政部核准（內政部申請 → 報行政院核准！）</div>
          </div>
        </div>
        <div class="diagram-row">
          <div class="diagram-arrow">▼ 公告徵收 30 日內：領現金 vs. 申領抵價地（§39、§40） ▼</div>
        </div>
        <div class="diagram-row">
          <div class="diagram-node node-gold">
            <div class="diagram-node-title">④ 抵價地 50%／40%／45% 與申請改領</div>
            <div class="diagram-node-desc">30 日申請 → 2 月審 → 3 月補 → 15 日覆・核定通知時權利終止・1 個月內得改領 1 次</div>
          </div>
          <div class="diagram-arrow">──▶</div>
          <div class="diagram-node node-dark">
            <div class="diagram-node-title">⑤ 權利清理與抵典重設（§41、§42）</div>
            <div class="diagram-node-desc">租約／用益／限制登記限期清理（或細則 §45 協調代扣）・抵押權典權得於抵價地同時登記</div>
          </div>
        </div>
      </div>

      <h2>二、6 大法定事由、先行區段徵收與跨區合併（條例 §4）</h2>
      <div class="callout callout-law">
        <div class="callout-title">📖 區段徵收 6 大法定事由（條例 §4Ⅰ — 申論必背！）</div>
        <ol>
          <li><strong>新設都市地區</strong>之全部或一部，實施開發建設者。</li>
          <li><strong>舊都市地區</strong>為公共安全、衛生、交通之需要或促進土地之合理使用實施更新者。</li>
          <li><strong>都市土地之農業區、保護區變更為建築用地</strong>，或<strong>工業區變更為住宅區、商業區</strong>者。</li>
          <li><strong>非都市土地</strong>實施開發建設者。</li>
          <li><strong>農村社區</strong>為加強公共設施、改善公共衛生之需要或配合農業發展之規劃實施更新者。</li>
          <li><strong>其他依法</strong>得為區段徵收者。</li>
        </ol>
      </div>

      <ul>
        <li><strong>都市計畫型「先行區段徵收」（§4Ⅱ、Ⅳ）</strong>：第 1～3 款（及第 4、6 款涉及都計新訂、擴大或變更者），開發範圍經<strong>中央主管機關核定</strong>者，得先行區段徵收，並於<strong>「區段徵收公告期滿後 1 年內」發布實施都市計畫</strong>，<strong>不受《都市計畫法》§52 規定之限制</strong>！（細則 §48-1Ⅳ 補充：設有農業專用區者，都計應於農專區劃設完成後再發布實施）。</li>
        <li><strong>農村社區／非都市型「先行區段徵收」（§4Ⅲ、Ⅳ）</strong>：第 5 款（及第 4、6 款未涉都計者），研擬開發範圍並檢具經上級目的事業主管機關核准之興辦事業計畫書，報經中央主管機關核定後先行區段徵收，於公告期滿後完成非都市土地分區或用地編定變更。</li>
        <li><strong>跨區合併辦理（§4Ⅴ）</strong>：<strong>不相連之地區</strong>，得依都市計畫或興辦事業計畫書內容、範圍合併辦理區段徵收，並適用先行區段徵收規定。</li>
      </ul>

      <h2>三、範圍勘定後前置禁建與公聽會報核（條例 §37、§38 ＋ 細則 §34～§39、§41）</h2>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>比較項目</th>
              <th>一般徵收公告管制（土徵 §23Ⅰ）</th>
              <th>區段徵收前置禁建（土徵 §37）</th>
              <th>市地重劃前置管制（平均地權 §59）</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>發動時點</strong></td>
              <td>徵收公告日起</td>
              <td><strong>範圍勘定後</strong>（公告徵收前）</td>
              <td>重劃地區選定後（公告重劃前）</td>
            </tr>
            <tr>
              <td><strong>禁止處分？</strong></td>
              <td><strong>有</strong>（分割、合併、移轉、設定負擔）</td>
              <td>🔥 <strong>無！</strong>（僅禁止事實行為）</td>
              <td><strong>有</strong>（移轉、分割或設定負擔）</td>
            </tr>
            <tr>
              <td><strong>禁止事實行為</strong></td>
              <td>新建、增建、改建、採土、變更地形、農作增種</td>
              <td>新建、增建、改建或<strong>重建</strong>、採土或變更地形</td>
              <td>新建、增建、改建或<strong>重建</strong>、採土或變更地形</td>
            </tr>
            <tr>
              <td><strong>最長期間</strong></td>
              <td>至補償完竣</td>
              <td><strong>不得超過 1 年 6 個月</strong>（報上級核定；內政部自辦逕行核定，細則 §41）</td>
              <td><strong>不得超過 1 年 6 個月</strong>（報上級核定）</td>
            </tr>
          </tbody>
        </table>
      </div>

      <ul>
        <li><strong>區段徵收計畫書與公聽會（§38Ⅰ、細則 §35～§39）</strong>：需用土地人檢具區段徵收計畫書（細則 §36 詳列 23 款應載明事項）、徵收土地圖冊、土地使用計畫圖各 <strong>2 份</strong>，由地方主管機關邀集需用土地人及土地所有權人舉行公聽會（細則 §39：召開 <strong>7 日前</strong>公告及書面通知，說明必要性、補償標準、抵價地比例程序、稅捐減免、租約與他項權利處理、安置計畫等 8 大事項，並公告及書面通知會議紀錄）後，報請<strong>中央主管機關（內政部）</strong>核准。</li>
        <li><strong>考場陷阱（§38Ⅱ）</strong>：<strong>內政部申請區段徵收時</strong>，準用前項規定報請<strong>「行政院」</strong>核准！</li>
      </ul>

      <h2>四、抵價地三層比例、申請審查與反悔改領（條例 §39、§40 ＋ 細則 §40～§43）</h2>
      <div class="callout callout-warn">
        <div class="callout-title">🔥 必背三層法定比例：50% ／ 40% ／ 45%（條例 §39 ＋ 細則 §40）</div>
        <ol>
          <li><strong>原則比例</strong>：抵價地總面積，以徵收總面積<strong> 50% </strong>為原則。</li>
          <li><strong>特殊情形下限</strong>：因情況特殊，經<strong>上級主管機關核准</strong>者（須於計畫書報核前擬具具體理由報核；內政部自辦逕行核定），得低於 50%，但<strong>不得少於 40%</strong>。</li>
          <li><strong>曾經農地重劃下限</strong>：曾經農地重劃並分擔農路、水路用地（已登記為地方政府或農田水利會所有）者，該重劃地區部分<strong>不得少於 45%</strong>！</li>
          <li><strong>實務彈性（細則 §40Ⅱ）</strong>：因地主領取現金或選擇高價區位土地較多，致實際發給面積比例降低者，<strong>視為已符合 §39 規定</strong>！</li>
        </ol>
        <p>💡 提醒：僅「地價補償」得申請折算領回抵價地；地上改良物、營業損失、遷移費仍依 <strong>§31～§34</strong> 發給現金（§39Ⅰ）！</p>
      </div>

      <ul>
        <li><strong>申請期間與審查補正流程（§40Ⅰ、Ⅱ、細則 §42）</strong>：原土地所有權人得就<strong>全部或部分</strong>應領補償地價，於<strong>徵收公告期間內（30 日內）</strong>書面申請抵價地 → 主管機關應於<strong>公告期滿後 2 個月內</strong>審查完畢 → 應補正者通知於<strong>接到通知書之日起 3 個月內</strong>補正（屆滿前申請得酌予展延）→ 補正後 <strong>15 日內</strong>審查完畢；屆期未補正者核定不發給抵價地。</li>
        <li><strong>權利義務終止與免受 15 日限制（§40Ⅲ、Ⅴ）</strong>：申請抵價地者，對土地權利義務於<strong>「接到核定發給抵價地通知時」終止</strong>，且主管機關<strong>不受 §20Ⅰ 公告期滿 15 日發給期限之限制</strong>。</li>
        <li><strong>「現金 ↔ 抵價地」反悔改領機制（§40Ⅲ、Ⅳ、細則 §43）</strong>：已核定抵價地或已領竣現金地價者，得申請改領現金或改領抵價地，須由主管機關就資金調度及作業情形<strong>徵得需用土地人同意後核准</strong>；應於<strong>核定發給抵價地通知之日</strong>、<strong>現金補償發給完竣之日</strong>或<strong>通知補償地價存入保管專戶之日</strong>起<strong>「1 個月內」</strong>為之，並以<strong>「1 次為限」</strong>！（改領抵價地須先限期繳回原領補償地價）。</li>
        <li><strong>囑託登記與視為接管（§40Ⅵ）</strong>：規劃分配後由主管機關<strong>囑託登記機關逕行辦理土地所有權登記</strong>，並通知定期到場接管；<strong>未按指定期限接管者，視為已接管</strong>。</li>
      </ul>

      <h2>五、抵價地之原有權利清理與抵押權／典權重設（條例 §41、§42 ＋ 細則 §44、§45）</h2>
      <p>選擇領現金走 §35～§36（政府直接從現金扣款代償）；但選擇領抵價地時政府沒發現金，故必須先走 §41、§42 把舊土地上的負擔清理乾淨：</p>

      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>原有負擔類型</th>
              <th>清理管道與應提證明文件（細則 §44）</th>
              <th>特別救濟／配套機制</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>耕地三七五租約</strong></td>
              <td>限期自行清理，提出<strong>補償承租人之證明文件</strong></td>
              <td rowspan="2">🔥 <strong>細則 §45 協調代扣機制</strong>：可請求主管機關邀集協調，合於①確定金額並同意代扣清償、②同意註銷租約或塗銷他項權利者，由主管機關就補償地價代扣清償，地主就<strong>賸餘補償地價</strong>申領抵價地！</td>
            </tr>
            <tr>
              <td><strong>地上權、不動產役權、永佃權、農育權</strong></td>
              <td>限期自行清理，提出<strong>同意塗銷他項權利之證明文件</strong></td>
            </tr>
            <tr>
              <td><strong>抵押權、典權</strong></td>
              <td>① 自行清理：提出<strong>清償、回贖或同意塗銷之證明文件</strong>（§41）<br>② <strong>特快車重設（§42）</strong>：雙方共同申請於抵價地重新設定！</td>
              <td>🔥 <strong>§42 同時登記特快車</strong>：原所有權人與他項權利人共同申請，提原權同意塗銷證明，協議新設定之<strong>權利範圍、價值、次序</strong>，於<strong>抵價地登記時同時登記</strong>，並於登記後通知他項權利人！</td>
            </tr>
            <tr>
              <td><strong>限制登記（查封、預告登記等）</strong></td>
              <td>提出<strong>已為塗銷限制登記之土地登記謄本</strong>，或<strong>預告登記權利人同意塗銷之證明文件</strong></td>
              <td>須先行塗銷，無代扣或搬家移轉機制</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="callout callout-case">
        <div class="callout-title">📌 考場必殺細節：未依限清理的法律效果（§41Ⅱ、Ⅲ）</div>
        <p>如果申請人逾期未能提出清理證明文件，也未辦妥協調代扣或 §42 重新設定，主管機關應<strong>核定「不發給抵價地」</strong>，並應於<strong>「核定之次日起 15 日內」發給現金補償</strong>！（接著就回歸 §35、§36 由主管機關從現金中代償清理，完全不會卡住開發進度！）。</p>
      </div>

      <div class="callout callout-tip">
        <div class="callout-title">💡 細則 §46～§49 開發配套預告（接軌第 7 課 §43、§43-1）</div>
        <ul>
          <li><strong>公有地處理與指配順位（細則 §46～§48）</strong>：申請前應協調公地管理機關採作價或領回土地；已實際作九項公設之公地循無償撥用辦理；配回公設用地指配順序為「<strong>本直轄市／縣（市）有 → 本鄉（鎮、市）有 → 國有 → 他直轄市／縣（市）有 → 他鄉（鎮、市）有</strong>」。</li>
          <li><strong>農業專用區預告（細則 §48-1）</strong>：都計規劃時調查續耕意願；徵收公告應載明欲配售農專區者<strong>應選擇領取現金補償</strong>；先行區段徵收須待農專區劃設完成後再發布都計。</li>
          <li><strong>未登記土地（細則 §49）</strong>：得視需用土地人分別登記為國有、直轄市或縣（市）有，並由其指定管理機關。</li>
        </ul>
      </div>

      <div class="feature-band">
        <h3>📝 第 6 課重點速記口訣</h3>
        <ul>
          <li><strong>§4 六大事由</strong>：「<strong>新都、舊都、農保變建／工變住商、非都開發、農村更新、其他依法</strong>」。</li>
          <li><strong>§37 vs. §59 禁建</strong>：兩者都是「<strong>1 年 6 個月</strong>＋新建增改重建採土變更地形」，但區段徵收 §37 <strong>不禁止移轉分割</strong>！</li>
          <li><strong>§38 報核機關</strong>：一般報<strong>內政部</strong>；內政部自辦報<strong>行政院</strong>！</li>
          <li><strong>§39 抵價地比例</strong>：「<strong>原則 50、特准底線 40、曾辦農地重劃 45</strong>」。</li>
          <li><strong>§40 期限大滿貫</strong>：「<strong>30 日申請 → 2 個月審 → 3 個月補 → 15 日覆；1 個月內改領限 1 次</strong>」。</li>
          <li><strong>§42 抵押典權重設</strong>：「<strong>抵典限定、雙方申請、提原權塗銷、協議範圍價值次序、抵價地登記時同時登記後通知</strong>」。</li>
        </ul>
      </div>

      <div class="quiz-box">
        <h3>✍️ 第 6 課隨堂小練習</h3>
        <div class="quiz-item">
          <span class="quiz-item-label">1. 觀念陷阱題（§37 前置禁建 × §38 報核機關 × §39 比例）</span>
          <p>(1) 區段徵收範圍勘定後依 §37 公告禁止事項期間，土地所有權人可否將土地出售移轉給第三人？(2) 若該案為內政部自行申請區段徵收，計畫書應報請哪個機關核准？(3) 範圍內部分土地曾經辦理過農地重劃，該重劃地區部分之抵價地比例不得少於多少？</p>
          <details class="quiz-answer">
            <summary>點此查看老師解析</summary>
            <div class="quiz-answer-body">
              <p><strong>(1) 可以出售移轉！</strong>§37 僅禁止建物之新建、增建、改建或重建及採取土石或變更地形（最長 1 年 6 個月），並<strong>未禁止土地移轉、分割或設定負擔</strong>（直到正式公告徵收日才依 §23Ⅰ 禁止處分）。</p>
              <p><strong>(2) 報請「行政院」核准（§38Ⅱ）</strong>。</p>
              <p><strong>(3) 不得少於 45%（§39Ⅱ、細則 §40）</strong>（指曾參加農地重劃並分擔農路、水路用地，且該農路、水路用地已登記為直轄市、縣（市）或農田水利會所有者）。</p>
            </div>
          </details>
        </div>
        <div class="quiz-item">
          <span class="quiz-item-label">2. 申論核心題（§41、§42 抵價地權利清理與抵押權重設）</span>
          <p>甲之土地設定有乙銀行抵押權及丙之地上權，今納入區段徵收，甲擬申請領回抵價地但手頭缺乏現金清償。請問依《土地徵收條例》及其施行細則，針對丙之地上權與乙銀行之抵押權，甲分別有何解套機制？若逾期未處理，後果為何？</p>
          <details class="quiz-answer">
            <summary>點此查看老師解析</summary>
            <div class="quiz-answer-body">
              <p><strong>一、丙之地上權（§41、細則 §45 協調代扣）</strong>：地上權不得移轉於抵價地重新設定，原則應限期自行清理提同意塗銷證明；但甲得依<strong>細則 §45</strong> 請求主管機關邀集丙協調，若雙方確定權利價值並同意由主管機關代為扣繳清償且丙同意塗銷地上權，主管機關即可由應領補償地價代扣清償，甲再就<strong>賸餘應領補償地價</strong>申領抵價地。</p>
              <p><strong>二、乙銀行之抵押權（§42 同時登記重設）</strong>：甲與乙銀行得共同申請於發給之抵價地<strong>重新設定抵押權</strong>，申請時提出<strong>同意塗銷原土地抵押權之證明文件</strong>；新設定之權利範圍、價值、次序由雙方協議定之，並於<strong>抵價地登記時同時登記</strong>，登記後通知乙銀行。</p>
              <p><strong>三、逾期未清理後果（§41Ⅱ、Ⅲ）</strong>：主管機關應核定<strong>不發給抵價地</strong>，並應於<strong>核定之次日起 15 日內發給現金補償</strong>。</p>
            </div>
          </details>
        </div>
      </div>
    `
  }
);
