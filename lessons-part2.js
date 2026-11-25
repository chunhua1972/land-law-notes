// 地政士國考《平均地權條例及其施行細則》數位講義 — Part 2（第 3 課、第 4 課）
window.EQUALIZATION_LESSONS.push(
  // =========================================================================
  // 第 3 課：照價徵稅篇（條例 §17～§26-1 ＋ 細則 §27～§42）
  // =========================================================================
  {
    id: "lesson-3",
    group: "第二階段：照價徵稅與照價收買",
    badge: "第 3 課",
    shortTitle: "照價徵稅篇：地價稅、累進起點與田賦",
    title: "第 3 課：照價徵稅篇 — 地價稅、累進起點與田賦（條例 §17～§26-1 ＋ 細則 §27～§42）",
    articles: "條例 §17～§26-1・細則 §27～§42",
    importance: "★★★★★",
    lead: "本堂課是地政士〈土地法規〉與〈土地稅法規〉雙科超級大補丸！讀通累進起點地價公式、地價稅 6 級超額累進、信託土地歸戶、自用住宅 2‰ 認定順序、公設保留地 6‰／免徵、都市農地課徵田賦 5 款與自耕／三七五限制，以及空地稅與荒地稅，直接一魚兩吃狂拿高分！",
    content: `
      <h2>一、架構鳥瞰：照價徵稅體系全貌</h2>
      <p>第 2 課「規定地價」訂出了每筆土地的<strong>申報地價</strong>並編造<strong>總歸戶冊</strong>（細則 §26），第 3 課「照價徵稅」就正式以此為課稅基礎！政府用<strong>累進稅率</strong>抑制大地主囤地，用<strong>特別稅率</strong>保護自住與產業，並用<strong>空地稅、荒地稅</strong>逼迫閒置土地投入利用：</p>

      <div class="trust-diagram" aria-label="照價徵稅體系架構圖">
        <div class="diagram-row">
          <div class="diagram-node node-dark">
            <div class="diagram-node-title">課稅基礎：申報地價（§17）</div>
            <div class="diagram-node-desc">同一直轄市或縣（市）總歸戶・公告地價大漲可延期 6 月／分期 1 年</div>
          </div>
        </div>
        <div class="diagram-row">
          <div class="diagram-arrow">▼ 依土地用途與權屬分流課徵 ▼</div>
        </div>
        <div class="diagram-row">
          <div class="diagram-node">
            <div class="diagram-node-title">一般用地：6 級累進（§18、§19）</div>
            <div class="diagram-node-desc">基本 10‰ 起跳，最高 55‰<br>信託土地由受託人繳納（§19-1）</div>
          </div>
          <div class="diagram-node">
            <div class="diagram-node-title">優惠特別稅率（§20、§21、§23、§24）</div>
            <div class="diagram-node-desc">自住 <strong>2‰</strong>・公設保留地 <strong>6‰</strong>（隔離免徵）<br>工業等事業 <strong>10‰</strong>・公有地 <strong>10‰</strong>（公用免徵）</div>
          </div>
        </div>
        <div class="diagram-row">
          <div class="diagram-node node-gold">
            <div class="diagram-node-title">農業用地：徵收田賦（§22）</div>
            <div class="diagram-node-desc">非都市農地＋都市農地 5 款（現已停徵）<br>公設未完竣＆限建須為自耕或三七五耕地</div>
          </div>
          <div class="diagram-node node-dark">
            <div class="diagram-node-title">懲罰稅制：空地稅＆荒地稅（§26、§26-1）</div>
            <div class="diagram-node-desc">空地加徵基本稅額 <strong>2～5 倍</strong>或照價收買<br>荒地加徵田賦 <strong>1～3 倍</strong>，滿 3 年得收買</div>
          </div>
        </div>
      </div>

      <h2>二、地價稅課徵基礎、累進起點地價與 6 級累進（條例 §17～§19；細則 §27、§28）</h2>

      <h3>1. 課稅依據與繳納困難緩衝（§17）</h3>
      <ul>
        <li><strong>原則（§17①）</strong>：已規定地價之土地，應按<strong>申報地價</strong>，依法徵收地價稅。</li>
        <li><strong>延期或分期繳納（§17②③）</strong>：應納地價稅額因<strong>公告地價調整</strong>致納稅義務人繳納困難者，得於規定繳納期間內向稅捐稽徵機關申請：
          <ul>
            <li><strong>延期繳納</strong>：期間不得逾 <strong>6 個月</strong>。</li>
            <li><strong>分期繳納</strong>：期間不得逾 <strong>1 年</strong>。</li>
          </ul>
        </li>
      </ul>

      <h3>2. 累進起點地價公式與四大排除土地（§18 ＋ 細則 §27 附件一）</h3>
      <div class="callout callout-law">
        <div class="callout-title">📖 必背公式：地價稅累進起點地價（7 公畝平均地價）</div>
        <p><strong>條例 §18</strong>：地價稅採累進稅率，以各該直轄市或縣（市）土地 <strong>7 公畝</strong>之平均地價，為累進起點地價。但<strong>不包括工業用地、礦業用地、農業用地及免稅土地</strong>在內（口訣：<strong>「工、礦、農、免」</strong>）。</p>
        <p><strong>細則 §27（附件一計算公式）</strong>：</p>
        <p style="background: rgba(255,255,255,0.75); padding: 10px 14px; border-radius: 8px; border: 1px solid var(--border-subtle); font-weight: 600;">
          累進起點地價 ＝ ［直轄市或縣（市）規定地價總額 −（工＋礦＋農＋免四類土地地價）］ ÷ ［直轄市或縣（市）規定地價總面積（公畝） −（工＋礦＋農＋免四類土地面積（公畝））］ × 7
        </p>
        <ul>
          <li><strong>為什麼要扣掉「工、礦、農、免」？</strong> 因為這四類土地本來就不採累進課徵，且面積大、地價低，若不扣掉會把平均地價嚴重拉低，害一般小市民動輒被課累進重稅！</li>
          <li><strong>細則 §27 三大細節</strong>：① 於規定／重新規定地價後<strong>當期地價稅開徵前</strong>計算完竣；② 分別報請<strong>中央主管機關（內政部）</strong>及<strong>財政部</strong>備查；③ 以<strong>千元</strong>為單位，以下四捨五入。</li>
        </ul>
      </div>

      <h3>3. 地價稅 6 級超額累進稅率表（§19 ＋ 細則 §28 附件二）</h3>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>級距</th>
              <th>課稅地價總額（設累進起點地價 ＝ A）</th>
              <th>適用稅率</th>
              <th>速算扣除公式</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>第 1 級</strong></td>
              <td>未超過累進起點地價（≤ 1A）</td>
              <td><strong>10‰</strong>（基本稅率）</td>
              <td>地價總額 × 10‰</td>
            </tr>
            <tr>
              <td><strong>第 2 級</strong></td>
              <td>超過累進起點地價未達 5 倍（1A ～ 6A）</td>
              <td><strong>15‰</strong></td>
              <td>地價總額 × 15‰ − 0.005A</td>
            </tr>
            <tr>
              <td><strong>第 3 級</strong></td>
              <td>超過累進起點地價 5 倍至 10 倍（6A ～ 11A）</td>
              <td><strong>25‰</strong></td>
              <td>地價總額 × 25‰ − 0.065A</td>
            </tr>
            <tr>
              <td><strong>第 4 級</strong></td>
              <td>超過累進起點地價 10 倍至 15 倍（11A ～ 16A）</td>
              <td><strong>35‰</strong></td>
              <td>地價總額 × 35‰ − 0.175A</td>
            </tr>
            <tr>
              <td><strong>第 5 級</strong></td>
              <td>超過累進起點地價 15 倍至 20 倍（16A ～ 21A）</td>
              <td><strong>45‰</strong></td>
              <td>地價總額 × 45‰ − 0.335A</td>
            </tr>
            <tr>
              <td><strong>第 6 級</strong></td>
              <td>超過累進起點地價 20 倍以上（＞ 21A）</td>
              <td><strong>55‰</strong></td>
              <td>地價總額 × 55‰ − 0.545A</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="callout callout-warn">
        <div class="callout-title">⚠️ 實戰計算範例：千萬別把「超過 5 倍」當成「總額 5 倍」！</div>
        <p><strong>情境</strong>：甲在臺中市擁有兩筆非自用建地，申報地價總額為 <strong>1,200 萬元</strong>；該市累進起點地價 A ＝ <strong>150 萬元</strong>。</p>
        <ul>
          <li><strong>正確判斷級距</strong>：先扣掉 1 個起點地價！超過部分 ＝ 1,200 萬 − 150 萬 ＝ 1,050 萬（＝ 7 倍 A），落在「超過 5 倍至 10 倍」→ <strong>第 3 級（25‰）</strong>。</li>
          <li><strong>分段計算（最穩零失誤）</strong>：
            <br>① 第 1 級（150 萬）× 10‰ ＝ 15,000 元
            <br>② 第 2 級（超過未達 5 倍，即 5 × 150 萬 ＝ 750 萬）× 15‰ ＝ 112,500 元
            <br>③ 第 3 級（剩餘 1,200 萬 − 150 萬 − 750 萬 ＝ 300 萬）× 25‰ ＝ 75,000 元
            <br>👉 <strong>合計應納地價稅 ＝ 202,500 元</strong>（速算驗證：1,200 萬 × 25‰ − 0.065 × 150 萬 ＝ 300,000 − 97,500 ＝ 202,500 元）。
          </li>
        </ul>
      </div>

      <h2>三、信託土地之地價稅課徵規則（條例 §19-1）</h2>
      <ul>
        <li><strong>納稅義務人（§19-1①）</strong>：土地為信託財產者，於信託關係存續中，以<strong>受託人</strong>為地價稅或田賦之納稅義務人。</li>
        <li><strong>原則（歸戶與委託人合併）</strong>：應與<strong>委託人</strong>在同一直轄市或縣（市）轄區內所有之土地<strong>合併計算地價總額</strong>，依 §19 累進稅率課徵後，分別就各該土地地價占地價總額之比例，計算信託土地應納稅額。</li>
        <li><strong>例外（實質他益信託 → 與受益人合併）</strong>：受益人為非委託人，且符合下列二款之一者，改與<strong>受益人</strong>在同縣市所有之土地合併計算地價總額：
          <ol>
            <li>受益人享有<strong>全部信託利益</strong>，且<strong>委託人不得撤銷信託</strong>者。</li>
            <li>受益人享有<strong>部分信託利益</strong>，且<strong>委託人未保留變更受益人之權利</strong>，該信託財產之收益於信託關係存續中歸屬受益人者。</li>
          </ol>
        </li>
      </ul>

      <h2>四、特別稅率與減免：自用住宅 2‰、工業 10‰、公設保留地 6‰（條例 §20、§21、§23～§25；細則 §29～§33、§39）</h2>

      <h3>1. 自用住宅用地特別稅率 2‰（§20 ＋ 細則 §29～§32）</h3>
      <p>須先符合第 1 課學過的自用住宅要件（本人、配偶或直系親屬設籍＋無出租營業＋建物為本人、配偶或直系親屬所有），並受下列限制：</p>
      <ul>
        <li><strong>面積限制（§20①）</strong>：都市土地未超過 <strong>3 公畝</strong>（300 ㎡）；非都市土地未超過 <strong>7 公畝</strong>（700 ㎡）。</li>
        <li><strong>國民住宅優惠起算日（§20②、細則 §32）</strong>：政府興建國民住宅適用 2‰，使用<strong>公有土地</strong>興建者自<strong>動工興建之日</strong>起算；購買<strong>私有土地</strong>興建者自主管機關<strong>取得土地所有權之日</strong>起算。</li>
        <li><strong>處數限制（§20③）</strong>：土地所有權人與其<strong>配偶及未成年之受扶養親屬</strong>，適用 2‰ 者以<strong>一處</strong>為限。（<em>破解秘訣：若由「已成年子女」或「直系尊親屬（父母、祖父母）」在第二戶設籍，不受一處限制，只要總面積未超過 3 公畝／7 公畝即可同享 2‰！</em>）</li>
      </ul>

      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>細則條文</th>
              <th>適用情境</th>
              <th>所有權人未自行擇定時之「法定認定順序」</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>細則 §29</strong><br>（超過一處）</td>
              <td>本人、配偶及未成年受扶養親屬申請超過一處自用住宅</td>
              <td>
                ① <strong>土地所有權人</strong>之戶籍所在地<br>
                ② <strong>配偶</strong>之戶籍所在地<br>
                ③ <strong>未成年受扶養親屬</strong>之戶籍所在地（多人時以最年長者為準）<br>
                <em>※ 若分別以所有土地申請未共同擇定者，以稅捐機關認定「地價稅最高者」為準。</em>
              </td>
            </tr>
            <tr>
              <td><strong>細則 §30</strong><br>（超過面積）</td>
              <td>自用住宅用地總面積超過都市 3 公畝或非都市 7 公畝</td>
              <td>
                ① <strong>土地所有權人與其配偶及未成年受扶養親屬</strong>之戶籍所在地<br>
                ② <strong>直系血親尊親屬</strong>之戶籍所在地（依長幼次序）<br>
                ③ <strong>直系血親卑親屬</strong>之戶籍所在地（依長幼次序）<br>
                ④ <strong>直系姻親</strong>之戶籍所在地（依長幼次序）
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>📌 <strong>申請程序（細則 §31）</strong>：填具申請書＋戶口名簿影本＋建物證明文件向稅捐機關申請；核准後免再申請，但日後原因消滅（如出租、遷出戶籍）應主動申報變更。</p>

      <h3>2. 特定事業 10‰、公共設施保留地 6‰／免徵、公有地與減免</h3>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>土地類別與條文</th>
              <th>適用稅率</th>
              <th>核心要件與細節（含細則）</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>特定事業直接使用土地</strong><br>（§21、細則 §33）</td>
              <td><strong>10‰</strong>（不累進）</td>
              <td>① 工業、礦業用地；② 私立公園、動物園、體育場所；③ 寺廟、教堂、政府指定名勝古蹟；④ 都市計畫加油站及供公眾使用停車場；⑤ 行政院核定之土地。<br>⚠️ <strong>未按目的事業主管機關核定規劃使用者，不適用！</strong> 公告前已有之合法工廠準用。</td>
            </tr>
            <tr>
              <td><strong>都市計畫公共設施保留地</strong><br>（§23、細則 §39）</td>
              <td>建築用 <strong>6‰</strong><br>（自住 <strong>2‰</strong>）<br>隔離未用 <strong>免徵</strong></td>
              <td>未作任何使用並與使用中之土地隔離者免徵；作農用者依 §22 徵收田賦。<br>📌 <strong>細則 §39</strong>：釘樁測量分割前仍照原稅額開徵，溢徵稅額於分割後<strong>抵沖應納稅額或退還</strong>。</td>
            </tr>
            <tr>
              <td><strong>公有土地＆公益減免</strong><br>（§24、§25）</td>
              <td><strong>10‰</strong>（不累進）<br>公共使用 <strong>免徵</strong></td>
              <td>公有土地按基本稅率 10‰ 課徵，供公共使用者免徵（§24）；國防、機關、騎樓走廊、教育、宗教、慈善、重劃墾荒等減免標準由<strong>行政院</strong>定之（§25）。</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>五、田賦課徵範圍與「公共設施尚未完竣」（條例 §22；細則 §34～§38）</h2>
      <p>我國自 <strong>民國 76 年第 2 期起停徵田賦</strong>，因此實務上「課徵田賦 ＝ 免繳地價稅」！</p>
      <ul>
        <li><strong>原則（§22① 前段 ＋ 細則 §34、§35）</strong>：<strong>非都市土地依法編定之農業用地</strong>（農牧、林業、養殖、鹽業、水利、生態保護、國土保安等 7 種用地及國家公園認定用地）或<strong>未規定地價者</strong>，徵收田賦。</li>
        <li><strong>但書（都市土地 5 款例外徵收田賦，§22①）</strong>：
          <ol>
            <li>依都市計畫編為<strong>農業區及保護區</strong>，限作農業用地使用者。</li>
            <li><strong>公共設施尚未完竣前</strong>，仍作農業用地使用者。</li>
            <li><strong>依法限制建築</strong>，仍作農業用地使用者。</li>
            <li><strong>依法不能建築</strong>，仍作農業用地使用者。</li>
            <li>依都市計畫編為<strong>公共設施保留地</strong>，仍作農業用地使用者。</li>
          </ol>
        </li>
        <li><strong>農民團體與合作農場用地（§22③）</strong>：直接供農業使用之倉庫、冷凍（藏）庫、農機中心、蠶種製造場、集貨場、檢驗場、水稻育苗中心等，仍徵收田賦。</li>
      </ul>

      <div class="callout callout-tip">
        <div class="callout-title">🔥 兩大超級考點：自耕／三七五限制（§22②）＆公設未完竣四設施（細則 §36）</div>
        <ul>
          <li><strong>條例 §22②（防止建商假種菜真養地）</strong>：上述都市土地 5 款之中，<strong>第 2 款（公共設施尚未完竣前）</strong>及<strong>第 3 款（依法限制建築）</strong>，必須以<strong>「自耕農地」</strong>及<strong>「依耕地三七五減租條例出租之耕地」</strong>為限！一般建商持有的都市建地就算還在種菜、公設沒完竣，一樣要繳地價稅！</li>
          <li><strong>細則 §36（公共設施尚未完竣之定義）</strong>：指<strong>「道路、自來水、排水系統、電力」</strong>四項公共設施尚未建設完竣而言（口訣：<strong>道、水、排、電</strong>）。只要四缺一就算尚未完竣！</li>
        </ul>
      </div>

      <h2>六、懲罰性稅制：空地稅 vs. 荒地稅（條例 §26、§26-1；細則 §40～§42）</h2>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>比較項目</th>
              <th>空地稅（條例 §26、細則 §40～§42）</th>
              <th>荒地稅（條例 §26-1）</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>適用對象</strong></td>
              <td><strong>私有空地</strong>（須位於依法得核發建照且無限建、禁建之地區）</td>
              <td><strong>閒置不用之農業用地</strong></td>
            </tr>
            <tr>
              <td><strong>限期通知程序</strong></td>
              <td>地方政府劃定區域限期建築、增建、改建或重建：<br><strong>直轄市／省轄市 2 年；縣轄市／鄉鎮 3 年</strong>（細則 §41）</td>
              <td>地方政府報經<strong>內政部核准</strong>，通知限期使用或命其委託經營</td>
            </tr>
            <tr>
              <td><strong>加徵倍數與基準</strong></td>
              <td>按該宗土地應納地價稅<strong>基本稅額</strong>加徵 <strong>2 倍至 5 倍</strong>（倍數報行政院核定）</td>
              <td>按應納<strong>田賦</strong>加徵 <strong>1 倍至 3 倍</strong></td>
            </tr>
            <tr>
              <td><strong>照價收買時機</strong></td>
              <td>逾期未建築，得<strong>擇一</strong>加徵空地稅<strong>或照價收買</strong></td>
              <td>加徵荒地稅<strong>滿 3 年</strong>仍不使用者，始得<strong>照價收買</strong></td>
            </tr>
            <tr>
              <td><strong>免罰正當事由</strong></td>
              <td>無（須不符限建、禁建條件）</td>
              <td><strong>5 款例外</strong>：政策休閒、不經濟休耕、公害污染、灌排損壞、不可抗力</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="feature-band">
        <h3>📝 第 3 課重點速記口訣</h3>
        <ul>
          <li><strong>累進起點地價（§18、細則 §27）</strong>：<strong>7 公畝</strong>平均地價，分子分母同扣<strong>「工、礦、農、免」</strong>，開徵前報<strong>內政部＋財政部</strong>，千元四捨五入。</li>
          <li><strong>特別稅率數字一口背</strong>：自住 <strong>2‰</strong>（都 3 非 7 一處限）、公設保留地 <strong>6‰</strong>（隔離免徵）、工業等事業 <strong>10‰</strong>、公有地 <strong>10‰</strong>（公用免徵）。</li>
          <li><strong>田賦都市 5 款與紅線（§22）</strong>：農保、未完竣、限建、不能建、公設保留；其中<strong>「第 2 款（公設未完竣：道水排電）＆第 3 款（限建）」</strong>限<strong>自耕農地或三七五耕地</strong>！</li>
          <li><strong>懲罰稅率對照</strong>：空地稅按<strong>基本稅額加徵 2～5 倍</strong>（或直接收買）；荒地稅按<strong>田賦加徵 1～3 倍</strong>（滿 3 年得收買）。</li>
        </ul>
      </div>

      <div class="quiz-box">
        <h3>✍️ 第 3 課隨堂小練習</h3>
        <div class="quiz-item">
          <span class="quiz-item-label">1. 跨科必考申論（條例 §18、§20 ＋ 細則 §27、§29、§30）</span>
          <p>請問地價稅「累進起點地價」之計算公式中應排除哪四類土地？又若土地所有權人擁有多筆符合自用住宅要件之土地，分別於「超過一處」及「超過法定面積」且未擇定時，法定認定順序各為何？</p>
          <details class="quiz-answer">
            <summary>點此查看老師解析</summary>
            <div class="quiz-answer-body">
              <ol>
                <li><strong>累進起點地價排除四類土地（§18、細則 §27）</strong>：<strong>工業用地、礦業用地、農業用地及免稅土地</strong>（工、礦、農、免），分子（規定地價總額）與分母（規定地價總面積）須同步扣除後再乘以 7 公畝。</li>
                <li><strong>超過一處未擇定順序（細則 §29）</strong>：① 土地所有權人 → ② 配偶 → ③ 未成年受扶養親屬之戶籍所在地（分別申請未共同擇定者，以地價稅最高者為準）。</li>
                <li><strong>超過面積未擇定順序（細則 §30）</strong>：① 土地所有權人與其配偶及未成年受扶養親屬 → ② 直系血親尊親屬 → ③ 直系血親卑親屬 → ④ 直系姻親之戶籍所在地（依長幼次序計算至都市 3 公畝／非都市 7 公畝為止）。</li>
              </ol>
            </div>
          </details>
        </div>
        <div class="quiz-item">
          <span class="quiz-item-label">2. 實務陷阱題（條例 §22、§23 ＋ 細則 §36）</span>
          <p>大發建設公司買下都市計畫住宅區內一筆農作地，該地因道路與排水系統尚未開闢完竣，大發公司便先委託農夫種菜。請問該筆土地得否依《平均地權條例》§22 申請徵收田賦（免繳地價稅）？又若該地為都市計畫公共設施保留地且未作任何使用、四周圍籬與鄰地隔離，其地價稅應如何課徵？</p>
          <details class="quiz-answer">
            <summary>點此查看老師解析</summary>
            <div class="quiz-answer-body">
              <ol>
                <li><strong>住宅區公設未完竣農作地：不可以徵收田賦！</strong> 雖然道路與排水未完竣符合細則 §36「公共設施尚未完竣」，但依條例 <strong>§22②</strong> 規定，§22① 第 2 款（公設未完竣前）以<strong>「自耕農地」及「依耕地三七五減租條例出租之耕地」</strong>為限。大發建設為法人（非自耕農），亦非三七五減租耕地，故仍應課徵地價稅。</li>
                <li><strong>隔離未用之公共設施保留地：免徵地價稅！</strong> 依條例 <strong>§23</strong> 規定，都市計畫公共設施保留地未作任何使用並與使用中之土地隔離者，免徵地價稅（若仍作建築使用則除自用住宅 2‰ 外，統按 6‰ 計徵）。</li>
              </ol>
            </div>
          </details>
        </div>
      </div>
    `
  },

  // =========================================================================
  // 第 4 課：照價收買篇（條例 §27【刪】～§34 ＋ 細則 §43～§49）
  // =========================================================================
  {
    id: "lesson-4",
    group: "第二階段：照價徵稅與照價收買",
    badge: "第 4 課",
    shortTitle: "照價收買篇：政府何時可以強制買地？",
    title: "第 4 課：照價收買篇 — 政府何時可以強制買地？（條例 §27～§34 ＋ 細則 §43～§49）",
    articles: "條例 §27～§34・細則 §43～§49",
    importance: "★★★★☆",
    lead: "照價收買是平均地權的「終極制裁武器」！專門對付低報地價、低報移轉現值與養地不建的投機行為。本堂課完整拆解六大收買時機與三種地價算法、黃金程序天數（50/30/10/60 日）、地上農作與建物一併收買、抵押權優先受償例外，以及萬年必考的「照價收買 vs. 一般徵收」！",
    content: `
      <h2>一、架構鳥瞰：照價收買全流程與六大觸發時機</h2>
      <p>原本集中列舉收買事由的<strong>條例 §27 已經刪除</strong>，現行法將六大收買時機整合在<strong>條例 §28 序文</strong>與 <strong>§31</strong> 中，可以秒分為「<strong>價格懲罰型（2 款）</strong>」與「<strong>利用懲罰型（4 款）</strong>」：</p>

      <div class="trust-diagram" aria-label="照價收買流程架構圖">
        <div class="diagram-row">
          <div class="diagram-node node-gold">
            <div class="diagram-node-title">價格懲罰型（2 款）</div>
            <div class="diagram-node-desc">① §16 低報申報地價（＜80%）→ 按<strong>申報地價</strong><br>② §47-1 低報移轉現值（＜公告現值）→ 按<strong>申報移轉現值</strong></div>
          </div>
          <div class="diagram-node node-dark">
            <div class="diagram-node-title">利用懲罰型（4 款）</div>
            <div class="diagram-node-desc">③ §26 空地逾期未建・④ §26-1 荒地稅滿 3 年<br>⑤ §72 超額未建地・⑥ §76 耕地終止租約逾 1 年未建<br>→ 均按<strong>公告收買當期之公告土地現值</strong>（§31③、細則 §44）</div>
          </div>
        </div>
        <div class="diagram-row">
          <div class="diagram-arrow">▼ 事前勘查、徵詢承購意願 → 縣市長決定 → 報內政部核准（細則 §43） ▼</div>
        </div>
        <div class="diagram-row">
          <div class="diagram-node">
            <div class="diagram-node-title">公告通知 → 50 日交狀 → 30 日給錢</div>
            <div class="diagram-node-desc">逾期不交狀宣告無效；逾期不領錢依法提存（§28）</div>
          </div>
          <div class="diagram-arrow">──▶</div>
          <div class="diagram-node">
            <div class="diagram-node-title">10 日囑託登記 → 60 日交地 → 處分</div>
            <div class="diagram-node-desc">登記為<strong>直轄市／縣市有</strong>；讓售／標售／出租農民（細則 §47、§48）</div>
          </div>
        </div>
      </div>

      <h2>二、事前審查、法定程序與黃金天數（條例 §28～§30；細則 §43、§47）</h2>

      <h3>1. 公告收買前之三步驟與「決定不收買」之處理（細則 §43）</h3>
      <ul>
        <li><strong>事前三步驟</strong>：① 檢具地籍圖逐筆勘查使用情形，並<strong>徵詢地上權人或土地承租人是否願意承購</strong>；② 簽註意見連同財務計畫報請直轄市或縣（市）長決定；③ 擬收買者報請<strong>中央主管機關（內政部）核准</strong>。</li>
        <li><strong>決定或核定「不照價收買」怎麼辦？</strong>
          <ul>
            <li><strong>§16 低報地價不收買</strong>：以<strong>公告地價 80%</strong> 核定為申報地價，並通知所有權人。</li>
            <li><strong>§47-1 低報移轉現值不收買</strong>：地政機關於 <strong>5 日內</strong>通知稅捐稽徵機關照<strong>公告土地現值</strong>課徵土地增值稅！</li>
          </ul>
        </li>
      </ul>

      <h3>2. 奉准收買後之四階段黃金天數（§28、§29、§30 ＋ 細則 §47）</h3>
      <div class="callout callout-law">
        <div class="callout-title">⏱️ 必背天數口訣：「50 交狀 → 30 給錢 → 10 日登記 → 60 交地」</div>
        <ol>
          <li><strong>公告與書面通知（§28①、§29）</strong>：先行公告並書面通知所有權人、權利人或他項權利人。
            <br>⚠️ <strong>§29 兩大特別規定</strong>：① §16 收買須於<strong>開徵當年期地價稅前</strong>辦理完竣；② §26（空地）、§72（超額未建地）自限期屆滿之次日起，主管建築機關應<strong>停止受理申請建築執照</strong>！</li>
          <li><strong>繳交書狀（50 日，§28②）</strong>：通知送達次日起 <strong>50 日內</strong>繳交權狀、他項權利證明書及證件；逾期不繳交者，<strong>宣告無效</strong>。</li>
          <li><strong>給付補償（30 日，§28③）</strong>：審核無訛或宣告無效後 <strong>30 日內</strong>給付地價及他項權利補償費；逾期不領取者，<strong>依法提存</strong>。</li>
          <li><strong>權屬與囑託登記（10 日，細則 §47）</strong>：權屬為<strong>直轄市、縣（市）有</strong>（非國有！）；補償費發給完竣或提存後 <strong>10 日內</strong>囑託地政機關登記（出租耕地併辦租約註銷）。</li>
          <li><strong>交付土地（60 日，§30）</strong>：受領地價完竣或提存次日起 <strong>60 日內</strong>交付土地；逾期不交付者，必要時得<strong>移送法院裁定後強制執行</strong>。</li>
        </ol>
      </div>

      <h2>三、改良費、農作物、地上建物與他項權利清償（條例 §32～§34；細則 §45、§46）</h2>

      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>項目與條文</th>
              <th>核心補償／清償規則</th>
              <th>老師畫重點（申論得分細節）</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>改良土地費用＆工程受益費</strong><br>（§32、細則 §45）</td>
              <td>經主管機關<strong>驗證登記</strong>者，應併入地價內計算（提驗證明書或收據）。</td>
              <td>限於基準時點「<strong>之後</strong>」發生者（§16 申報地價後、§47-1 申報移轉現值後、其餘 4 款當期現值公告後），避免重複計算！</td>
            </tr>
            <tr>
              <td><strong>農作改良物補償</strong><br>（§33）</td>
              <td>孳息成熟期在收買後 <strong>1 年以內</strong> → 按<strong>成熟時之孳息</strong>估定；<strong>1 年以上</strong> → 依<strong>種植、培育費用並參酌現值</strong>估定。</td>
              <td>以「<strong>1 年</strong>」為黃金分界線，考場超愛考！</td>
            </tr>
            <tr>
              <td><strong>地上建築改良物</strong><br>（§34）</td>
              <td><strong>同屬土地所有權人所有</strong>者，<strong>應一併收買</strong>；不屬土地所有權人所有者，不在此限。</td>
              <td>價額由地方政府查估後，提交<strong>地價評議委員會評定</strong>。若是房客或地上權人蓋的房子，政府不收買！</td>
            </tr>
            <tr>
              <td><strong>他項權利清償</strong><br>（細則 §46）</td>
              <td>於補償地價內<strong>代為扣交</strong>並塗銷，上限為「收買地價 − 土增稅 − §11 耕地承租人補償後之餘額」。</td>
              <td>🔥 <strong>魔王例外（細則 §46③）</strong>：抵押權設定登記在<strong>耕地租約訂立之前</strong>者，<strong>抵押權人應優先於耕地承租人受償</strong>！</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>四、資金來源與收買後土地處分（條例 §5、§6【刪】；細則 §48、§49）</h2>
      <ul>
        <li><strong>資金來源與修法沿革（§5、§6【100 年刪除】、細則 §49）</strong>：照價收買所需現金及土地債券，由<strong>中央或直轄市主管機關</strong>統籌墊借或發行（早年 §6 規定 10 萬元以上分級搭發債券已於民國 100 年刪除）；出售收買土地之價款收入，歸還墊款及債券本息後如有盈餘，悉數解繳<strong>實施平均地權基金</strong>。</li>
        <li><strong>收買後三大處分方式（細則 §48）</strong>：
          <ol>
            <li><strong>建有房屋</strong>：得<strong>讓售</strong>與地上權人、土地承租人或房屋所有權人；不願承購或限期不表示意見者，得予<strong>標售</strong>。</li>
            <li><strong>空地</strong>：除得<strong>讓售與有合併使用必要之鄰地所有權人</strong>外，應予<strong>標售</strong>。</li>
            <li><strong>農業用地</strong>：應予<strong>標售或出租與農民</strong>。</li>
          </ol>
          📌 <strong>優先讓售（細則 §48②）</strong>：應行標售土地如適宜興建<strong>社會住宅</strong>或<strong>公共設施使用</strong>者，得優先讓售與需用土地人；其餘隨時公開底價標售。
        </li>
      </ul>

      <h2>五、萬年必考跨法對決：照價收買 vs. 一般土地徵收</h2>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>比較項目</th>
              <th>照價收買（平均地權條例第四章）</th>
              <th>一般土地徵收（土地徵收條例）</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>制度性質</strong></td>
              <td><strong>懲罰性／政策強制買受</strong>（制裁低報價或養地不利用）</td>
              <td><strong>公益性公用徵收</strong>（因公共事業需要強制取得）</td>
            </tr>
            <tr>
              <td><strong>核准機關</strong></td>
              <td>中央主管機關（<strong>內政部</strong>）</td>
              <td>中央主管機關（<strong>內政部</strong>）</td>
            </tr>
            <tr>
              <td><strong>取得後權屬</strong></td>
              <td><strong>直轄市、縣（市）有</strong>（細則 §47）</td>
              <td><strong>需用土地人</strong>（國有、直轄市／縣市有或鄉鎮市有）</td>
            </tr>
            <tr>
              <td><strong>地價補償標準</strong></td>
              <td>低報地價 → 申報地價；低報現值 → 申報移轉現值；空地等 4 款 → <strong>公告收買當期公告土地現值</strong></td>
              <td>一律按徵收當期之<strong>市價</strong>補償（土徵條例 §30）</td>
            </tr>
            <tr>
              <td><strong>補償給付期限</strong></td>
              <td>審核無訛或宣告無效後 <strong>30 日內</strong></td>
              <td>公告期滿後 <strong>15 日內</strong></td>
            </tr>
            <tr>
              <td><strong>地上建物處理</strong></td>
              <td><strong>同屬土地所有權人所有</strong>始一併收買（非同一人不收買）</td>
              <td>土地徵收時，地上改良物原則<strong>一併徵收</strong>（不論是否同一人）</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="feature-band">
        <h3>📝 第 4 課重點速記口訣</h3>
        <ul>
          <li><strong>六大時機與地價（§28、§31）</strong>：<strong>低報照報價</strong>（§16 申報地價、§47-1 申報現值）；<strong>不建照現值</strong>（§26 空地、§26-1 荒地、§72 超額、§76 耕地終止未建 → 公告收買當期公告現值）。</li>
          <li><strong>程序黃金天數</strong>：不收買通知課稅 <strong>5 日</strong> → 繳書狀 <strong>50 日</strong> → 給付補償 <strong>30 日</strong> → 囑託登記 <strong>10 日</strong> → 交付土地 <strong>60 日</strong>。</li>
          <li><strong>地上物與抵押權</strong>：農作物以 <strong>1 年</strong>為界；建物「<strong>同屬一人</strong>」才一併收買；<strong>先設抵押權、後訂耕地租約</strong> → 抵押權優先受償！</li>
          <li><strong>權屬與盈餘</strong>：收買後屬<strong>直轄市／縣（市）有</strong>，出售盈餘進<strong>實施平均地權基金</strong>。</li>
        </ul>
      </div>

      <div class="quiz-box">
        <h3>✍️ 第 4 課隨堂小練習</h3>
        <div class="quiz-item">
          <span class="quiz-item-label">1. 程序與補償綜合題（條例 §28、§30、§31 ＋ 細則 §47）</span>
          <p>甲所有之私有空地經地方政府限期建築逾期未建，奉准依《平均地權條例》§26 實施照價收買。請問：(1) 該收買地價應以何基準計算？(2) 自限期屆滿次日起，建管機關應為如何處理？(3) 通知送達後，甲應於幾日內繳交權狀？政府應於幾日內給付地價？收買後土地權屬為何？</p>
          <details class="quiz-answer">
            <summary>點此查看老師解析</summary>
            <div class="quiz-answer-body">
              <ol>
                <li><strong>收買地價基準（§31③、細則 §44）</strong>：以<strong>公告收買當期之公告土地現值</strong>為準。</li>
                <li><strong>停發建照（§29②）</strong>：自限期屆滿之次日起，當地主管建築機關應<strong>停止受理申請建築執照</strong>。</li>
                <li><strong>期限與權屬（§28、細則 §47）</strong>：甲應於通知送達次日起 <strong>50 日內</strong>繳交權狀（逾期宣告無效）；政府審核無訛或宣告無效後應於 <strong>30 日內</strong>給付地價（逾期提存）；收買後權屬為<strong>直轄市、縣（市）有</strong>（發給完竣或提存後 10 日內囑託登記）。</li>
              </ol>
            </div>
          </details>
        </div>
        <div class="quiz-item">
          <span class="quiz-item-label">2. 細則魔王題（條例 §34 ＋ 細則 §46、§48）</span>
          <p>乙所有之出租耕地經依法照價收買，該地早於民國 100 年即向銀行設定抵押權，並於民國 105 年始訂立耕地租約。請問在補償地價不足同時清償銀行抵押權與耕地承租人 1/3 補償時，何者應優先受償？又若收買之土地為建有他人房屋之基地，政府收買後應如何處分？</p>
          <details class="quiz-answer">
            <summary>點此查看老師解析</summary>
            <div class="quiz-answer-body">
              <ol>
                <li><strong>受償優先順序（細則 §46③）</strong>：<strong>銀行（抵押權人）優先於耕地承租人受償！</strong> 依細則 §46③ 明定，照價收買土地設有抵押權者，如其設定登記在耕地租約訂立之前（本案 100 年早於 105 年），該抵押權人應優先於耕地承租人受償。</li>
                <li><strong>地上他人建物與收買後處分（§34、細則 §48①）</strong>：地上建物不屬土地所有權人乙所有者，不予一併收買；土地收買後，依細則 §48① 建有房屋時，得<strong>讓售與地上權人、土地承租人或房屋所有權人</strong>；若不願承購或在限期內不表示意見時，得予<strong>標售</strong>（但適宜興建社會住宅或公共設施使用者，得優先讓售與需用土地人）。</li>
              </ol>
            </div>
          </details>
        </div>
      </div>
    `
  }
);
