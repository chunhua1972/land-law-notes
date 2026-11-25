// 地政士國考《平均地權條例及其施行細則》數位講義 — Part 3（第 5 課、第 6 課）
window.EQUALIZATION_LESSONS.push(
  // =========================================================================
  // 第 5 課：漲價歸公（上）（條例 §35～§46、§48～§51 ＋ 細則 §50～§65）
  // =========================================================================
  {
    id: "lesson-5",
    group: "第三階段：漲價歸公與打炒房新制",
    badge: "第 5 課",
    shortTitle: "漲價歸公（上）：土地增值稅與公告現值",
    title: "第 5 課：漲價歸公（上）— 土地增值稅與公告現值（條例 §35～§46、§51 ＋ 細則 §50～§65）",
    articles: "條例 §35～§46、§51・細則 §50～§65",
    importance: "★★★★★",
    lead: "本堂課是地政士〈土地法規〉與〈土地稅法規〉雙科分值最高的超級熱區！完整攻克土地漲價總數額公式、20%/30%/40% 累進與長期持有 20/30/40 年減徵、自用住宅「一生一次 vs. 一生一屋（10%）」、重購退稅，以及「免徵 vs. 不課徵 vs. 減徵 40%」的考場生死線！",
    content: `
      <h2>一、架構鳥瞰：土地增值稅體系全貌</h2>
      <p>「漲價歸公」是平均地權第四根支柱：透過於土地移轉或設定典權時課徵<strong>土地增值稅</strong>，將社會繁榮帶來的土地自然漲價歸全體國民共享（§51 收入用於社福、社會住宅、公設保留地徵收與國民教育等）：</p>

      <div class="trust-diagram" aria-label="土地增值稅體系架構圖">
        <div class="diagram-row">
          <div class="diagram-node node-dark">
            <div class="diagram-node-title">公告土地現值（§46：每年 1 月 1 日公告）</div>
            <div class="diagram-node-desc">土地移轉／設定典權時申報現值之參考與審核依據（繼承不徵 §36①）</div>
          </div>
        </div>
        <div class="diagram-row">
          <div class="diagram-arrow">▼ 漲價總數額 ＝ 移轉現值 − (原地價 × 物價指數) − 改良／工程受益／重劃費 ▼</div>
        </div>
        <div class="diagram-row">
          <div class="diagram-node">
            <div class="diagram-node-title">一般累進稅率（§40）</div>
            <div class="diagram-node-desc"><strong>20% / 30% / 40%</strong>（3 級超額累進）<br>持有滿 20/30/40 年 → 超 20% 部分減徵 20%/30%/40%</div>
          </div>
          <div class="diagram-node node-gold">
            <div class="diagram-node-title">自用住宅 10%（§41）＆重購退稅（§44）</div>
            <div class="diagram-node-desc">一生一次（都 3 / 非 7，1 年無租營）<br>一生一屋（都 1.5 / 非 3.5，持有設籍滿 6 年）</div>
          </div>
        </div>
        <div class="diagram-row">
          <div class="diagram-node">
            <div class="diagram-node-title">免徵＆減徵 40%</div>
            <div class="diagram-node-desc">公地、社福捐贈、徵收、公設保留地、區段徵收（免徵）<br>重劃／抵價地第一次移轉（減徵 40%）</div>
          </div>
          <div class="diagram-node">
            <div class="diagram-node-title">不課徵（暫緩記帳）</div>
            <div class="diagram-node-desc">配偶相互贈與（§35-2）・信託 5 款（§35-3）<br>農地移轉自然人（§45）</div>
          </div>
        </div>
      </div>

      <h2>二、課徵時機、納稅義務人與公告現值（§35～§37-1、§46、§51；細則 §65）</h2>
      <ul>
        <li><strong>課徵時機（§36①）</strong>：土地<strong>所有權移轉</strong>或<strong>設定典權</strong>時課徵；但因<strong>繼承</strong>而移轉者，<strong>不徵</strong>土地增值稅。</li>
        <li><strong>共有土地分割／合併（細則 §65）</strong>：分割或合併後各共有人取得土地價值與原有價值<strong>相等</strong>者，<strong>免徵</strong>土增稅；有價值減少者，就其<strong>減少部分</strong>課徵。</li>
        <li><strong>納稅義務人（§37、§37-1）</strong>：
          <ul>
            <li><strong>有償移轉</strong>（買賣、交換、照價收買）→ <strong>原土地所有權人</strong>（賣方）。</li>
            <li><strong>無償移轉</strong>（贈與、遺贈）→ <strong>取得所有權人</strong>（受贈人）。</li>
            <li><strong>信託土地</strong>：存續中有償移轉／設典／轉自有 → <strong>受託人</strong>；依信託本旨移轉予委託人以外之歸屬權利人 → <strong>歸屬權利人</strong>。</li>
          </ul>
        </li>
        <li><strong>公告土地現值（§46）</strong>：地方政府經常調查地價動態，經地價評議委員會評定，於<strong>每年 1 月 1 日公告</strong>，作為移轉現值之參考與審核依據。</li>
      </ul>

      <h2>三、漲價總數額公式、一般稅率與長期持有減徵（§36②③、§38～§40；細則 §53）</h2>
      <div class="callout callout-law">
        <div class="callout-title">📐 必背公式：土地漲價總數額與增繳地價稅 5% 抵繳上限</div>
        <p style="background: rgba(255,255,255,0.75); padding: 10px 14px; border-radius: 8px; border: 1px solid var(--border-subtle); font-weight: 600;">
          土地漲價總數額 ＝ 申報移轉現值 −（原規定地價或前次移轉現值 × 消費者物價指數%）− 改良土地費用（含工程受益費、重劃負擔總費用）
        </p>
        <ul>
          <li><strong>物價指數調整（§39）</strong>：扣除通貨膨脹造成的名目漲價，僅對實質自然漲價課稅。</li>
          <li><strong>增繳地價稅抵繳上限（§36③）</strong>：持有期間因重新規定地價而增繳之地價稅，准予抵繳應納土增稅，但總額以不超過應繳土增稅總額 <strong>5%</strong> 為限！</li>
        </ul>
      </div>

      <h3>一般 3 級累進稅率與長期持有減徵表（§40）</h3>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>級距</th>
              <th>漲價倍數（漲價總數額 ÷ 調整後原地價）</th>
              <th>未滿 20 年</th>
              <th>滿 20 年（超 20% 減 20%）</th>
              <th>滿 30 年（超 20% 減 30%）</th>
              <th>滿 40 年（超 20% 減 40%）</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>第 1 級</strong></td>
              <td>未達 100%（未滿 1 倍）</td>
              <td><strong>20%</strong></td>
              <td>20%</td>
              <td>20%</td>
              <td>20%</td>
            </tr>
            <tr>
              <td><strong>第 2 級</strong></td>
              <td>100% 以上未達 200%（1～2 倍）</td>
              <td><strong>30%</strong></td>
              <td><strong>28%</strong></td>
              <td><strong>27%</strong></td>
              <td><strong>26%</strong></td>
            </tr>
            <tr>
              <td><strong>第 3 級</strong></td>
              <td>200% 以上（2 倍以上）</td>
              <td><strong>40%</strong></td>
              <td><strong>36%</strong></td>
              <td><strong>34%</strong></td>
              <td><strong>32%</strong></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="callout callout-warn">
        <div class="callout-title">🧮 實戰計算範例（含物價指數＋工程受益費＋持有 35 年減徵 30%）</div>
        <p><strong>題目</strong>：老林持有 35 年建地，前次移轉現值 200 萬（物價指數 150%），繳過工程受益費 50 萬，今以申報移轉現值 1,100 萬出售（非自住），應納多少土增稅？</p>
        <ul>
          <li><strong>① 調整後原地價</strong>：200 萬 × 150% ＝ <strong>300 萬</strong>。</li>
          <li><strong>② 漲價總數額</strong>：1,100 萬 − 300 萬 − 50 萬 ＝ <strong>750 萬</strong>（漲價倍數 750 ÷ 300 ＝ 2.5 倍，進第 3 級）。</li>
          <li><strong>③ 分段計算（持有滿 30 年，稅率 20% / 27% / 34%）</strong>：
            <br>第 1 級（300 萬）× 20% ＝ 60 萬
            <br>第 2 級（300 萬）× 27% ＝ 81 萬
            <br>第 3 級（剩餘 150 萬）× 34% ＝ 51 萬
            <br>👉 <strong>合計應納土地增值稅 ＝ 192 萬元</strong>！
          </li>
        </ul>
      </div>

      <h2>四、自用住宅 10%（一生一次 vs. 一生一屋）與重購退稅（§41、§44）</h2>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>比較項目</th>
              <th>一生一次（§41①～④）</th>
              <th>一生一屋（§41⑤）</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>適用前提與次數</strong></td>
              <td>出售自用住宅用地，每人一生限 <strong>1 次</strong></td>
              <td><strong>曾適用過一生一次</strong>後再出售，符合要件<strong>不限次數</strong></td>
            </tr>
            <tr>
              <td><strong>面積上限（按 10%）</strong></td>
              <td>都市 <strong>3 公畝</strong>；非都市 <strong>7 公畝</strong></td>
              <td>都市 <strong>1.5 公畝</strong>；非都市 <strong>3.5 公畝</strong>（減半！）</td>
            </tr>
            <tr>
              <td><strong>無出租或營業期間</strong></td>
              <td>出售前 <strong>1 年內</strong></td>
              <td>出售前 <strong>5 年內</strong></td>
            </tr>
            <tr>
              <td><strong>持有與設籍年限</strong></td>
              <td>無年限限制</td>
              <td>出售前持有土地 <strong>6 年以上</strong>，且本人、配偶或未成年子女<strong>設籍並持有該自用住宅連續滿 6 年</strong></td>
            </tr>
            <tr>
              <td><strong>房屋數限制</strong></td>
              <td>無限制</td>
              <td>出售時本人、配偶及未成年子女<strong>無該自用住宅以外之房屋</strong></td>
            </tr>
            <tr>
              <td><strong>建物價值防弊</strong></td>
              <td colspan="2">建物評定現值不及基地公告現值 <strong>10%</strong> 者不適用（但<strong>建築完成滿 1 年以上</strong>者不在此限）</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>📌 <strong>重購退稅（§44）</strong>：出售或被徵收「<strong>自用住宅用地、自營工廠用地、自耕農業用地</strong>」，2 年內另購使用性質相同土地且新購地價高於原出售地價扣稅後餘額者，退還不足支付新購地價之已納土增稅（5 年列管不得移轉或改作他用）。</p>

      <h2>五、免徵、減徵 40% 與不課徵總整理（§35～§35-3、§42、§42-1、§45；細則 §50）</h2>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>稅賦待遇</th>
              <th>法條與適用情形</th>
              <th>考場超級陷阱（原地價與追罰）</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>免徵</strong><br>（永久免除該次稅負）</td>
              <td>
                ① 政府出售／贈與之公有地、政府受贈之私有地（§35）<br>
                ② 私人捐贈社福事業用地（§35-1、細則 §50：財團法人＋解散賸餘財產歸地方政府＋捐贈人未獲利益）<br>
                ③ 被徵收土地與協議價購（§42①）<br>
                ④ 都市計畫<strong>公共設施保留地</strong>尚未徵收前之移轉（§42②）<br>
                ⑤ <strong>區段徵收</strong>以現金或抵價地補償（§42-1①②）
              </td>
              <td>⚠️ <strong>公設保留地解編陷阱（§42② 但書）</strong>：日後變更為非公設保留地再移轉時，應追溯以「<strong>第一次免徵土增稅前之原地價</strong>」課徵土增稅！</td>
            </tr>
            <tr>
              <td><strong>減徵 40%</strong></td>
              <td>
                ① 經<strong>重劃</strong>之土地，重劃後<strong>第一次移轉</strong>（§42③）<br>
                ② 區段徵收領回<strong>抵價地後第一次移轉</strong>（§42-1③）
              </td>
              <td>抵價地第一次移轉以「<strong>原所有權人實際領回抵價地之地價</strong>」為原地價！</td>
            </tr>
            <tr>
              <td><strong>不課徵</strong><br>（暫緩記帳，下次追溯）</td>
              <td>
                ① <strong>配偶相互贈與</strong>（§35-2）<br>
                ② <strong>信託關係人間 5 款移轉</strong>（§35-3：成立、換受託人、自益消滅、遺囑信託消滅、無效解除撤銷）<br>
                ③ <strong>作農業使用之農地移轉予自然人</strong>（§45）
              </td>
              <td>⚠️ <strong>農地違規追罰（§45②③）</strong>：持有期間被查獲未農用且未限期恢復、或恢復後再犯，再移轉時改課土增稅（配偶贈與合併計算）；原地價原則為 <strong>89 年 1 月 6 日</strong>公告現值！</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="feature-band">
        <h3>📝 第 5 課重點速記口訣</h3>
        <ul>
          <li><strong>一般稅率與長期減徵（§40）</strong>：漲幅 1/2 倍切 <strong>20% / 30% / 40%</strong>；持有 <strong>20/30/40 年</strong> → 超 20% 部分減 <strong>20%/30%/40%</strong>！增繳地價稅抵繳上限 <strong>5%</strong>（§36③）。</li>
          <li><strong>自用住宅 10%（§41）</strong>：一生一次「<strong>3/7、1 年、不限屋</strong>」；一生一屋「<strong>1.5/3.5、5 年無租營、6 年持有設籍、唯一一屋</strong>」。</li>
          <li><strong>免徵 vs. 不課徵</strong>：<strong>繼承</strong>不徵原地價歸零；<strong>公設保留地</strong>移轉免徵但解編追溯；<strong>配偶／信託／農地</strong>不課徵暫時記帳；<strong>重劃＆抵價地</strong>首移減徵 <strong>40%</strong>！</li>
        </ul>
      </div>

      <div class="quiz-box">
        <h3>✍️ 第 5 課隨堂小練習</h3>
        <div class="quiz-item">
          <span class="quiz-item-label">1. 一生一屋實戰判斷（條例 §41）</span>
          <p>小張 10 年前曾使用過「一生一次」10% 自用住宅土增稅優惠。今年他想出售名下唯一一棟都市住宅（土地面積 2 公畝），該屋已持有並由配偶設籍連續滿 7 年，但 3 年前曾短暫出租給學生半年。請問小張本次出售可否適用「一生一屋」10% 優惠稅率？若可，適用面積為何？</p>
          <details class="quiz-answer">
            <summary>點此查看老師解析</summary>
            <div class="quiz-answer-body">
              <p><strong>答案：不可以！</strong></p>
              <p>依《平均地權條例》<strong>§41⑤</strong> 規定，適用「一生一屋」須同時符合五大要件，其中包含「<strong>出售前 5 年內，無供營業使用或出租</strong>」。本案小張於 3 年前曾出租半年，不符合 5 年內無出租要件，故不得適用一生一屋（此外提醒：即便符合要件，一生一屋都市土地面積上限也僅為 <strong>1.5 公畝</strong>，超過之 0.5 公畝仍須按一般稅率課徵）。</p>
            </div>
          </details>
        </div>
        <div class="quiz-item">
          <span class="quiz-item-label">2. 免徵與不課徵綜合題（條例 §35-2、§42、§45）</span>
          <p>甲將作農業使用之農地賣給乙公司（法人），請問得否依《平均地權條例》§45 申請不課徵土地增值稅？又若甲將都市計畫公共設施保留地賣給丙，免徵土增稅後，該地日後經都市計畫檢討變更為住宅區，丙再出售給丁時，其原地價應如何認定？</p>
          <details class="quiz-answer">
            <summary>點此查看老師解析</summary>
            <div class="quiz-answer-body">
              <ol>
                <li><strong>農地賣給乙公司：不可以不課徵！</strong> 依條例 <strong>§45①</strong> 規定，作農業使用之農業用地須移轉與「<strong>自然人</strong>」時，始得申請不課徵土地增值稅；乙公司為法人，不符要件，故應依法課徵土增稅。</li>
                <li><strong>公設保留地解編再移轉（§42② 但書）</strong>：公共設施保留地經變更為非公共設施保留地（住宅區）後再移轉時，應以該土地<strong>第一次免徵土地增值稅前之原規定地價或前次移轉時申報現值</strong>（即甲原本的原地價）為原地價，計算漲價總數額課徵土地增值稅。</li>
              </ol>
            </div>
          </details>
        </div>
      </div>
    `
  },

  // =========================================================================
  // 第 6 課：漲價歸公（下）：實價登錄 2.0 與打炒房五大新制（§47～§47-5、§79-1）
  // =========================================================================
  {
    id: "lesson-6",
    group: "第三階段：漲價歸公與打炒房新制",
    badge: "第 6 課",
    shortTitle: "漲價歸公（下）：實價登錄 2.0 與打炒房新制",
    title: "第 6 課：漲價歸公（下）— 實價登錄 2.0 與打炒房五大新制（條例 §47～§47-5、§79-1）",
    articles: "條例 §47～§47-5、§79-1・罰則 §81-2～§81-4",
    importance: "★★★★★",
    lead: "近年地政士國考「絕對必考」第一大魔王！民國 112 年 7 月施行的《平均地權條例》打炒房五大新制，從預售屋解約 30 日申報、封殺紅單轉售、限制預售屋／新建成屋換約轉售、重罰不動產炒作（最高 5,000 萬）、私法人購屋許可制（5 年閉鎖期）到檢舉獎金制度，本堂課一次幫你背熟所有考點！",
    content: `
      <h2>一、架構鳥瞰：實價登錄 2.0 × 打炒房五大新制防線</h2>
      <p>為了讓房市交易全面透明並徹底封堵短期炒作，修法建立了「實價登錄 2.0 ＋ 打炒房五大新制」五道防線：</p>

      <div class="trust-diagram" aria-label="打炒房五大新制架構圖">
        <div class="diagram-row">
          <div class="diagram-node node-dark">
            <div class="diagram-node-title">① 實價登錄 2.0 ＆ 解約申報（§47、§47-3②）</div>
            <div class="diagram-node-desc">成屋：移轉登記時買賣雙方共同申報（完整揭露門牌）<br>預售屋：簽約＆<strong>解約</strong>均須 <strong>30 日內</strong>申報（罰 3～15 萬）</div>
          </div>
          <div class="diagram-node node-gold">
            <div class="diagram-node-title">② 封殺紅單炒作（§47-3⑤⑥）</div>
            <div class="diagram-node-desc">禁建商保留出售／簽約；<strong>禁買受人轉售紅單</strong><br>（無例外！按戶處 <strong>15 萬～100 萬</strong>）</div>
          </div>
        </div>
        <div class="diagram-row">
          <div class="diagram-node">
            <div class="diagram-node-title">③ 限制預售屋／新建成屋換約（§47-4）</div>
            <div class="diagram-node-desc">原則禁轉售＆禁刊廣告；例外親屬免申請、重大事故核准<strong>每 2 年限 1 戶</strong>（罰 <strong>50 萬～300 萬</strong>）</div>
          </div>
          <div class="diagram-node">
            <div class="diagram-node-title">④ 重罰炒作 ＆ 檢舉獎金（§47-5、§81-4）</div>
            <div class="diagram-node-desc">禁不實資訊、虛偽交易、壟斷加價轉售<br>按戶重罰 <strong>100 萬～5,000 萬</strong>；檢舉獎金 30%（上限 1,000 萬）</div>
          </div>
        </div>
        <div class="diagram-row">
          <div class="diagram-node node-dark">
            <div class="diagram-node-title">⑤ 私法人買受住宅許可制（§79-1）</div>
            <div class="diagram-node-desc">檢具使用計畫報<strong>內政部許可</strong>（6 大用途）或免許可（9 類）；許可取得後 <strong>5 年內不得移轉、讓與或預告登記</strong></div>
          </div>
        </div>
      </div>

      <h2>二、實價登錄 2.0 與移轉現值審核標準（條例 §47、§47-1、§47-2）</h2>
      <ul>
        <li><strong>成屋移轉登記與實價登錄（§47）</strong>：
          <ul>
            <li>訂約日起 <strong>30 日內</strong>共同申請移轉登記並共同申報土地移轉現值（§47①）。</li>
            <li>買賣案件改由<strong>權利人及義務人於申請所有權移轉登記時</strong>共同申報實價登錄，並完整揭露門牌／地號；主管機關得查核，受查核者不得規避、妨礙或拒絕（§47②～⑧）。</li>
          </ul>
        </li>
        <li><strong>移轉現值審核標準 6 款（§47-1 — 土地稅法跨科必考！）</strong>：
          <ol>
            <li>訂約日起 <strong>30 日內</strong>申報 → <strong>訂約日</strong>當期公告土地現值。</li>
            <li>逾 30 日始申報 → <strong>受理申報機關收件日</strong>當期公告土地現值。</li>
            <li>遺贈土地 → <strong>遺贈人死亡日</strong>當期公告土地現值。</li>
            <li>法院判決移轉 → 向法院<strong>起訴日</strong>當期公告土地現值。</li>
            <li>法院拍賣 → <strong>拍定日</strong>當期公告土地現值（拍定價較低者從其低）。</li>
            <li>政府照價收買或協議購買 → 政府收買／購買日當期公告土地現值（給付地價較低者從其低）。</li>
          </ol>
          ⚠️ 申報現值低於公告土地現值者，得<strong>照價收買</strong>或<strong>照公告土地現值課徵土增稅</strong>（§47-1②）。
        </li>
      </ul>

      <h2>三、預售屋全面納管：備查、解約申報與禁止紅單轉售（條例 §47-3）</h2>
      <ul>
        <li><strong>銷售前備查（§47-3①）</strong>：銷售前應將基地、建案名稱、銷售地點期間、戶數及買賣定型化契約報地方主管機關備查。</li>
        <li><strong>簽約＆解約 30 日內實價登錄（§47-3②）</strong>：簽訂買賣契約之日起 <strong>30 日內</strong>須申報登錄；<strong>解除買賣契約</strong>時，亦須於<strong>解約之日起 30 日內</strong>申報登錄！（杜絕假成交拉行情後再私下解約；違者按戶處 3 萬～15 萬元）。</li>
        <li><strong>紅單雙重封殺（§47-3⑤⑥）</strong>：銷售預售屋或領得使照未辦第一次登記之新建成屋，收定金應立書面契據（紅單）確立標的與價金，<strong>不得約定保留出售、保留簽約或其他不利買受人事項</strong>；買受人取得之紅單<strong>不得轉售予第三人</strong>（無任何例外！違者按戶處 <strong>15 萬～100 萬元</strong>）。</li>
      </ul>

      <h2>四、預售屋及新建成屋「限制換約轉售」（條例 §47-4 ＋ 審核辦法）</h2>
      <div class="callout callout-warn">
        <div class="callout-title">🚫 原則全面禁止（罰鍰 50 萬～300 萬元／戶，§81-3①）</div>
        <ul>
          <li><strong>買受人（§47-4①）</strong>：簽訂預售屋或新建成屋買賣契約後，<strong>不得讓與或轉售第三人</strong>，亦不得自行或委託他人刊登轉售廣告。</li>
          <li><strong>建商／代銷（§47-4③）</strong>：除法定例外情形外，<strong>不得同意或協助</strong>換約轉售，亦不得受託刊登轉售廣告。</li>
        </ul>
      </div>

      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>例外類型</th>
              <th>法定容許情形（§47-4① 但書 ＋ 審核辦法）</th>
              <th>核准與戶數限制</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>免經申請直接換約</strong></td>
              <td>
                ① <strong>配偶、直系血親或二親等內旁系血親</strong>（兄弟姊妹）間之讓與或轉售<br>
                ② 買受人簽約後死亡，繼承人因繼承辦理名義變更<br>
                ③ 法人合併、改制或解散清算後財產歸屬承受
              </td>
              <td><strong>不須申請核准</strong><br>（無每 2 年 1 戶限制）<br>⚠️ 表弟（四親等）、叔伯（三親等）<strong>不適用</strong>！</td>
            </tr>
            <tr>
              <td><strong>重大事故核准換約</strong></td>
              <td>
                ① 非自願離職且逾 <strong>6 個月</strong>未就業<br>
                ② 本人或家庭成員罹患重大傷病須 <strong>6 個月以上</strong>全日照顧<br>
                ③ 房屋因災害毀損不堪居住須另行租屋<br>
                ④ 重大意外事故致第三人重傷或死亡<br>
                ⑤ 共同買受人間之轉讓等
              </td>
              <td>須向<strong>直轄市、縣（市）主管機關申請核准</strong><br>🔥 <strong>全國每 2 年以 1 戶（棟）為限</strong>（§47-4②）！</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>五、重罰不動產炒作、檢舉獎金與私法人購屋許可制（§47-5、§79-1、§81-3、§81-4）</h2>

      <h3>1. 三大禁止炒作行為與檢舉獎金（§47-5、§81-3②、§81-4）</h3>
      <ul>
        <li><strong>三大炒作行為（§47-5① — 任何人皆受規範）</strong>：
          <ol>
            <li>以電子通訊、網際網路、說明會或其他傳播方式<strong>散布影響不動產交易價格之不實資訊</strong>。</li>
            <li>與他人<strong>通謀或為虛偽交易</strong>，營造不動產交易活絡之假象。</li>
            <li>自行、以他人名義或集結多數人<strong>違規銷售、連續買入或加價轉售</strong>不動產，且明顯影響市場秩序或壟斷轉售牟利。</li>
          </ol>
        </li>
        <li><strong>天價罰鍰與檢舉獎金</strong>：按交易戶（棟、筆）數處 <strong>100 萬元以上 5,000 萬元以下</strong>罰鍰（得按次處罰）；民眾實名檢舉查證屬實裁罰確定者，發給實收罰鍰 <strong>30%</strong> 獎金（每案上限 <strong>1,000 萬元</strong>）。</li>
      </ul>

      <h3>2. 私法人買受供住宅使用房屋許可制（§79-1 ＋ 許可辦法）</h3>
      <div class="callout callout-law">
        <div class="callout-title">🏢 私法人買房雙軌制 ＋ 5 年閉鎖期（§79-1）</div>
        <ul>
          <li><strong>原則採許可制（§79-1①）</strong>：私法人買受供住宅使用之房屋（主要登記用途含「住」或「住宅」），須檢具<strong>使用計畫</strong>報請<strong>中央主管機關（內政部）許可</strong>！
            <br>👉 <strong>6 大許可用途</strong>：① 員工宿舍（不超經常僱用員工數）；② 出租經營（限成屋且同使照達 <strong>5 戶以上</strong>）；③ 衛福機構場所；④ 合作社住宅公用設備；⑤ 參與都更、危老或合建；⑥ 中央主管機關公告用途。</li>
          <li><strong>例外免經許可（9 類公告情形）</strong>：公營事業、受政府捐助財團法人、AMC 買受不良債權擔保品、經紀業買受瑕疵物件、法院拍賣拍定、古蹟／歷史建築、優先購買權、都更危老實施者依計畫買受等。</li>
          <li><strong>5 年閉鎖期（§79-1③）</strong>：經許可取得者，登記完畢後 <strong>5 年內不得辦理移轉、讓與或預告登記</strong>！（強制執行、徵收、法院判決或其他法律規定移轉者不在此限）。</li>
        </ul>
      </div>

      <div class="feature-band">
        <h3>📝 第 6 課重點速記口訣（打炒房數字一次背！）</h3>
        <ul>
          <li><strong>罰鍰階梯由輕到重</strong>：實價登錄／解約 <strong>3～15 萬</strong> → 紅單轉售 <strong>15～100 萬</strong> → 預售換約 <strong>50～300 萬</strong> → 炒作行為 <strong>100～5,000 萬</strong>！</li>
          <li><strong>換約例外記憶</strong>：免申請限「<strong>配、直、二旁</strong>（兄弟姊妹）」；重大事故須核准，<strong>每 2 年限 1 戶</strong>！</li>
          <li><strong>私法人購屋（§79-1）</strong>：報<strong>內政部</strong>許可（6 大用途；出租限成屋同使照 5 戶以上）或免許可 9 類；許可後<strong>5 年內禁移轉、讓與、預告登記</strong>！</li>
        </ul>
      </div>

      <div class="quiz-box">
        <h3>✍️ 第 6 課隨堂小練習</h3>
        <div class="quiz-item">
          <span class="quiz-item-label">1. 實務案例演練（條例 §47-3、§47-4、§81-3）</span>
          <p>阿明買了一戶預售屋，尚未簽訂正式買賣契約前，先將付定金取得的預約單（紅單）轉賣給親哥哥；另外他又將另一戶已簽約的預售屋買賣契約轉讓給表弟。請問阿明這兩筆行為是否合法？各面臨何種罰鍰？</p>
          <details class="quiz-answer">
            <summary>點此查看老師解析</summary>
            <div class="quiz-answer-body">
              <ol>
                <li><strong>紅單轉賣給親哥哥：違法！</strong> 依條例 <strong>§47-3⑥</strong>，買受人取得之書面契據（紅單）一律不得轉售予第三人，<strong>無親屬例外</strong>！依 §81-2⑥ 按戶處 <strong>15 萬～100 萬元</strong>罰鍰。</li>
                <li><strong>正式契約轉讓給表弟：違法！</strong> 依條例 <strong>§47-4①</strong> 但書，免申請換約之親屬僅限「配偶、直系血親或<strong>二親等內旁系血親</strong>（兄弟姊妹）」，表弟屬四親等旁系血親不符例外！依 §81-3① 按戶處 <strong>50 萬～300 萬元</strong>罰鍰。</li>
              </ol>
            </div>
          </details>
        </div>
        <div class="quiz-item">
          <span class="quiz-item-label">2. 私法人購屋許可制綜合題（條例 §79-1）</span>
          <p>大發貿易公司想以公司名義購買一棟高級住宅作為總經理招待所，並計畫 3 年後出售獲利；另外也想透過法院拍賣標購一戶法拍住宅。請問這兩件購屋案是否均須經中央主管機關許可？若經許可取得，日後有何移轉限制？</p>
          <details class="quiz-answer">
            <summary>點此查看老師解析</summary>
            <div class="quiz-answer-body">
              <ol>
                <li><strong>購買住宅作招待所</strong>：須報請<strong>中央主管機關（內政部）許可</strong>，但招待所不符許可辦法所列 6 大用途（員工宿舍、出租經營等），內政部將<strong>不予許可</strong>。</li>
                <li><strong>法院拍賣拍定住宅</strong>：屬中央主管機關公告之 9 類<strong>免經許可</strong>情形之一，可免申請許可直接取得。</li>
                <li><strong>5 年閉鎖期限制（§79-1③）</strong>：凡經許可取得之住宅，於登記完畢後 <strong>5 年內不得辦理移轉、讓與或預告登記</strong>（除強制執行、徵收、法院判決或其他法律規定移轉外），故不得於 3 年後出售。</li>
              </ol>
            </div>
          </details>
        </div>
      </div>
    `
  }
);
