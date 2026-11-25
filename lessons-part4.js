// 地政士國考《平均地權條例及其施行細則》數位講義 — Part 4（第 7 課、第 8 課）
window.EQUALIZATION_LESSONS.push(
  // =========================================================================
  // 第 7 課：土地使用（上）：區段徵收與抵價地（條例 §52～§55-2 ＋ 細則 §67～§80）
  // =========================================================================
  {
    id: "lesson-7",
    group: "第四階段：土地使用與整體開發",
    badge: "第 7 課",
    shortTitle: "土地使用（上）：區段徵收與抵價地",
    title: "第 7 課：土地使用（上）— 區段徵收與抵價地（條例 §52～§55-2 ＋ 細則 §67～§80）",
    articles: "條例 §52～§55-2・細則 §67～§80",
    importance: "★★★★★",
    lead: "區段徵收是《平均地權條例》第六章土地使用兩大整體開發神器之一！本堂課一次打通區段徵收四大實施地區、抵價地比例（50%／40%／45% 跨法對照）、申請程序與 15 日／30 日關鍵期限、九項無償公設用地，以及最愛考的「平均地權條例 vs. 土地徵收條例」與「區段徵收 vs. 市地重劃」超級比較！",
    content: `
      <h2>一、架構鳥瞰：區段徵收與抵價地完整流程</h2>
      <p>所謂「<strong>區段徵收</strong>」，就是政府將一定區域內的私有土地全部徵收、興建公共設施重新整理後，把部分可供建築土地（<strong>抵價地</strong>）發還給原所有權人折抵地價補償費，達成「政府拿公設、地主共享開發紅利」的合作開發模式：</p>

      <div class="trust-diagram" aria-label="區段徵收流程架構圖">
        <div class="diagram-row">
          <div class="diagram-node node-dark">
            <div class="diagram-node-title">四大實施地區（§53）＆事前禁止（最長 1 年 6 月）</div>
            <div class="diagram-node-desc">① 新設都市 ② 舊都市更新 ③ 都市新社區 ④ 農村社區<br>禁止移轉、分割、設負擔、建改建、採土石、變更地形</div>
          </div>
        </div>
        <div class="diagram-row">
          <div class="diagram-arrow">▼ 徵收公告（30 日）內書面申請「抵價地」（§55、細則 §73～§75） ▼</div>
        </div>
        <div class="diagram-row">
          <div class="diagram-node">
            <div class="diagram-node-title">核定「不發給」抵價地</div>
            <div class="diagram-node-desc">核定之日起 <strong>15 日內</strong>發給現金補償（細則 §75）</div>
          </div>
          <div class="diagram-node node-gold">
            <div class="diagram-node-title">核定「准予發給」抵價地</div>
            <div class="diagram-node-desc"><strong>視為地價補償完竣</strong> → 囑託登記（細則 §75、§76）<br>抵價地原則 <strong>50%</strong>（土徵條例不低於 40%；曾農地重劃 45%）</div>
          </div>
        </div>
        <div class="diagram-row">
          <div class="diagram-arrow">▼ 規劃分配抵價地 → 公告 30 日 → 四大處分（§55-2、細則 §77～§80） ▼</div>
        </div>
        <div class="diagram-row">
          <div class="diagram-node">
            <div class="diagram-node-title">四大土地處理與盈餘歸屬</div>
            <div class="diagram-node-desc">① 抵價地發還 ② <strong>9 項公設無償登記</strong> ③ 讓售／有償撥用 ④ 標售標租地上權<br>出售收入抵付開發成本後 → 撥充<strong>實施平均地權基金</strong>（細則 §80）</div>
          </div>
        </div>
      </div>

      <h2>二、土地用途編定、實施地區與公有地撥用（§52、§53；細則 §67～§69-1）</h2>
      <ul>
        <li><strong>全面編定土地用途（§52）</strong>：依國家經濟政策、地方需要、土地性質、區域計畫及都市計畫全面編定。</li>
        <li><strong>四大實施地區（§53）</strong>：① 新設都市地區開發建設；② 舊都市地區為公安、公衛、交通或合理使用實施更新；③ 都市土地開發新社區；④ 農村社區加強公設、改善公衛。</li>
        <li><strong>事前禁止期間（§53③、細則 §68）</strong>：報上級核定公告禁止移轉、分割、設定負擔、新建增建重建、採土石或變更地形，最長不得超過 <strong>1 年 6 個月</strong>。</li>
        <li><strong>範圍內公有土地撥用（細則 §69）</strong>：
          <ul>
            <li><strong>無償撥用（9 項公設）</strong>：道路、溝渠、公園、綠地、兒童遊樂場、廣場、停車場、體育場所、國民學校（口訣：<strong>道溝公綠兒、廣停體國小</strong>）。</li>
            <li>⚠️ <strong>三類例外不無償</strong>：已列入償債計畫之公有土地、抵稅地、學產地。</li>
            <li><strong>有償撥用</strong>：其餘公有土地照公告土地現值有償撥用。</li>
          </ul>
        </li>
      </ul>

      <h2>三、抵價地比例、申請程序、權利清理與分配公告（§54～§55-1；細則 §70～§78）</h2>
      <div class="callout callout-law">
        <div class="callout-title">📐 抵價地總面積比例（跨法必背 50% / 40% / 45%！）</div>
        <ul>
          <li><strong>《平均地權條例》§54</strong>：預計抵價地總面積占徵收總面積（不含公地）原則不得少於 <strong>50%</strong>；經上級核准得少於 50%。</li>
          <li><strong>《土地徵收條例》§39（現行優先適用）</strong>：原則 <strong>50%</strong>；情況特殊經上級核准<strong>不得少於 40%</strong>；<strong>曾經農地重劃者不得少於 45%</strong>！</li>
          <li><strong>不足最小建築單位面積（§54③、細則 §71）</strong>：得申請合併分配，或改發給<strong>現金補償</strong>。</li>
        </ul>
      </div>

      <ul>
        <li><strong>申請期限與文件（§55、§55-1、細則 §74）</strong>：於徵收公告期間（30 日）內書面申請；原有租賃關係與他項權利準用市地重劃規定，申請時應檢附已依法補償、清償、回贖或同意塗銷證明文件（或法院塗銷限制登記囑託書）。</li>
        <li><strong>核定效果與 15 日／30 日天數（細則 §75～§78）</strong>：
          <ul>
            <li>核定<strong>不發給</strong>抵價地 → 核定之日起 <strong>15 日內</strong>發給現金補償。</li>
            <li>核定<strong>准予發給</strong>抵價地 → <strong>視為地價補償完竣</strong>，囑託辦理所有權登記及他項權利塗銷或變更登記。</li>
            <li>抵價地分配完畢 → <strong>公告 30 日</strong>並書面通知；實際面積有增減者（達最小建築單位面積），徵得同意後按評定重劃後地價繳納或補償差額地價。</li>
          </ul>
        </li>
      </ul>

      <h2>四、區段徵收後土地四大處理方式與跨法／跨制度比較（§55-2；細則 §79、§80）</h2>
      <p>區段徵收後土地處理分成四大類：① <strong>抵價地</strong>發交原所有權人；② <strong>9 項公共設施用地</strong>無償登記為地方自治團體有；③ <strong>其他公設、國宅（社宅）及安置原住戶用地</strong>讓售或有償撥用；④ <strong>其餘可供建築土地（配餘地）</strong>標售、標租或設定地上權。出售盈餘抵付成本後撥充<strong>實施平均地權基金</strong>（細則 §80）。</p>

      <h3>超級比較表 1：《平均地權條例》vs.《土地徵收條例》區段徵收</h3>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>比較項目</th>
              <th>平均地權條例（§53～§55-2）</th>
              <th>土地徵收條例（§4、§37～§48）</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>適用地區</strong></td>
              <td>4 款</td>
              <td>擴增為 <strong>6 款</strong>，並增訂「先行區段徵收」</td>
            </tr>
            <tr>
              <td><strong>核准機關</strong></td>
              <td>行政院</td>
              <td><strong>中央主管機關（內政部）</strong></td>
            </tr>
            <tr>
              <td><strong>地價補償標準</strong></td>
              <td>公告土地現值（舊制 §10）</td>
              <td><strong>市價</strong>（土徵條例 §30）</td>
            </tr>
            <tr>
              <td><strong>抵價地比例下限</strong></td>
              <td>原則 50%，核准得少於 50%（未明定下限）</td>
              <td>原則 <strong>50%</strong>、核准不低於 <strong>40%</strong>、曾農地重劃不低於 <strong>45%</strong></td>
            </tr>
            <tr>
              <td><strong>領現金者優先買回權</strong></td>
              <td>有（§55-2、細則 §79）</td>
              <td><strong>已取消</strong>（土徵條例 §44）</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>超級比較表 2：區段徵收（第 7 課）vs. 市地重劃（第 8 課）</h3>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>比較項目</th>
              <th>區段徵收</th>
              <th>市地重劃</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>所有權性質</strong></td>
              <td>原所有權<strong>徵收消滅</strong>，政府再發還抵價地</td>
              <td>所有權<strong>未消滅</strong>，僅交換分合重新分配</td>
            </tr>
            <tr>
              <td><strong>地主領回比例</strong></td>
              <td>抵價地原則 <strong>50%</strong>（不低於 40%／45%）</td>
              <td>共同負擔上限 <strong>45%</strong>（原則至少領回 <strong>55%</strong>）</td>
            </tr>
            <tr>
              <td><strong>辦理主體</strong></td>
              <td>僅限<strong>公辦（政府）</strong></td>
              <td>可<strong>公辦</strong>，亦可地主組織重劃會<strong>自辦</strong></td>
            </tr>
            <tr>
              <td><strong>土增稅優惠</strong></td>
              <td>領回免徵；首移<strong>減徵 40%</strong>（§42-1）</td>
              <td>重劃免徵；首移<strong>減徵 40%</strong>（§42③）</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="feature-band">
        <h3>📝 第 7 課重點速記口訣</h3>
        <ul>
          <li><strong>抵價地三組神奇比例</strong>：原則 <strong>50%</strong>、特殊核准不低於 <strong>40%</strong>、曾經農地重劃不低於 <strong>45%</strong>！</li>
          <li><strong>九項無償公設口訣</strong>：「<strong>道溝公綠兒、廣停體國小</strong>」（但償債地、抵稅地、學產地除外！）。</li>
          <li><strong>關鍵期限</strong>：事前禁止最長 <strong>1 年 6 月</strong> → 公告 <strong>30 日</strong>申請抵價地 → 不發給 <strong>15 日內</strong>發現金 → 分配結果公告 <strong>30 日</strong>！</li>
        </ul>
      </div>

      <div class="quiz-box">
        <h3>✍️ 第 7 課隨堂小練習</h3>
        <div class="quiz-item">
          <span class="quiz-item-label">1. 跨法數字與程序題（條例 §54、§55 ＋ 細則 §75、§77）</span>
          <p>某區段徵收開發區內有部分土地曾經辦理過「農地重劃」。請問依現行《土地徵收條例》與《平均地權條例》規定，該區段徵收預計抵價地總面積之最低比例為何？又若地主甲於徵收公告期間內申請抵價地，經主管機關核定「不發給」者，政府應於幾日內發給現金補償？若核定「准予發給」，其法律效果為何？</p>
          <details class="quiz-answer">
            <summary>點此查看老師解析</summary>
            <div class="quiz-answer-body">
              <ol>
                <li><strong>抵價地最低比例</strong>：原則為徵收總面積 <strong>50%</strong>；情況特殊經上級核准不得少於 <strong>40%</strong>；但<strong>曾經農地重劃者，不得少於 45%</strong>（土徵條例 §39）。</li>
                <li><strong>核定不發給（細則 §75）</strong>：應於核定之日起 <strong>15 日內</strong>發給現金補償。</li>
                <li><strong>核定准予發給（細則 §75、§76）</strong>：<strong>視為地價補償完竣</strong>，地政機關應囑託辦理所有權登記及他項權利塗銷或變更登記；日後分配完畢再公告 <strong>30 日</strong>並書面通知。</li>
              </ol>
            </div>
          </details>
        </div>
        <div class="quiz-item">
          <span class="quiz-item-label">2. 公有地撥用與基金歸屬題（條例 §55-2 ＋ 細則 §69、§80）</span>
          <p>區段徵收範圍內之公有土地，哪九項公共設施用地應無償撥用？有哪三類公有土地例外不適用無償撥用？又出售區段徵收配餘地之盈餘應如何處理？</p>
          <details class="quiz-answer">
            <summary>點此查看老師解析</summary>
            <div class="quiz-answer-body">
              <ol>
                <li><strong>九項無償撥用公設用地（細則 §69）</strong>：<strong>道路、溝渠、公園、綠地、兒童遊樂場、廣場、停車場、體育場所、國民學校</strong>。</li>
                <li><strong>三類例外不無償（細則 §69 但書）</strong>：<strong>已列入償債計畫之公有土地、抵稅地及學產地</strong>。</li>
                <li><strong>盈餘歸屬（細則 §80）</strong>：出售區段徵收土地之地價收入，抵付開發成本後，應全部撥充<strong>實施平均地權基金</strong>（不足時亦由該基金貼補）。</li>
              </ol>
            </div>
          </details>
        </div>
      </div>
    `
  },

  // =========================================================================
  // 第 8 課：土地使用（下）：市地重劃（公辦與自辦）（條例 §56～§67 ＋ 細則 §81～§92）
  // =========================================================================
  {
    id: "lesson-8",
    group: "第四階段：土地使用與整體開發",
    badge: "第 8 課",
    shortTitle: "土地使用（下）：市地重劃（公辦與自辦）",
    title: "第 8 課：土地使用（下）— 市地重劃（公辦與自辦）（條例 §56～§67 ＋ 細則 §81～§92）",
    articles: "條例 §56～§67・細則 §81～§92",
    importance: "★★★★★",
    lead: "與區段徵收並列〈土地法規〉最強雙雄！一次搞定市地重劃雙過半門檻、十項共同負擔公設用地與 45% 上限、抵費地與「100 坪重劃後變幾坪」圖解、未繳差額地價禁止移轉（繼承例外）、改良物 30 日／墳墓 3 個月拆遷，以及耕地租約 1/3、其他租約 1 年租金與他項權利 2 個月請求權期限！",
    content: `
      <h2>一、架構鳥瞰：市地重劃（公辦＆自辦）全流程</h2>
      <p>「市地重劃」透過<strong>土地交換分合</strong>將畸零地整理成方正建地並開闢公共設施，由全體地主以未建築土地折價抵付（<strong>抵費地</strong>）共同分擔公設與工程費，且地主所有權延續不中斷（§62 確定日起視為原有土地）：</p>

      <div class="trust-diagram" aria-label="市地重劃流程架構圖">
        <div class="diagram-row">
          <div class="diagram-node node-dark">
            <div class="diagram-node-title">發動方式（§56～§58）＆事前禁建（§59）</div>
            <div class="diagram-node-desc">公辦 4 地區（計畫書公告 30 日，雙過半反對調處修訂）<br>地主優先申請／自辦重劃會（均須<strong>雙過半同意</strong>）<br>事前禁止移轉、分割、設負擔、建築最長 <strong>1 年 6 月</strong></div>
          </div>
        </div>
        <div class="diagram-row">
          <div class="diagram-arrow">▼ 拆遷（改良物 30 日 / 墳墓 3 月）→ 共同負擔與抵費地（§60、§62-1） ▼</div>
        </div>
        <div class="diagram-row">
          <div class="diagram-node node-gold">
            <div class="diagram-node-title">共同負擔上限 45%（§60）</div>
            <div class="diagram-node-desc"><strong>10 項公設</strong>（扣 4 項公地抵充：道、溝、川、未）<br>＋ 工程費、重劃費、貸款利息 → <strong>雙過半同意可破 45%</strong></div>
          </div>
          <div class="diagram-node">
            <div class="diagram-node-title">土地分配＆差額地價（§60-1、§60-2）</div>
            <div class="diagram-node-desc">公告 <strong>30 日</strong>確定（異議調處→上級裁決）<br>未繳差額地價<strong>不得移轉（繼承例外）</strong></div>
          </div>
        </div>
        <div class="diagram-row">
          <div class="diagram-node">
            <div class="diagram-node-title">權利清理（§63～§65）＆交接換狀（§66、§67）</div>
            <div class="diagram-node-desc">耕地租約註銷補 <strong>1/3</strong>・其他租約補 <strong>1 年租金</strong>・他項權利消滅補償／重設（<strong>確定次日起 2 月內</strong>行使）<br>逾期不遷讓強制執行；逾期不接管<strong>視為已接管</strong></div>
          </div>
        </div>
      </div>

      <h2>二、公辦、自辦市地重劃與雙過半門檻（條例 §56～§59）</h2>
      <ul>
        <li><strong>公辦四大實施地區（§56①）</strong>：① 新設都市地區開發建設；② 舊都市地區為公安、公衛、交通或合理使用需要；③ 都市土地開發新社區；④ <strong>經中央主管機關指定限期辦理者</strong>。</li>
        <li><strong>三處「雙過半」（人數半數以上且面積超過半數）</strong>：
          <ol>
            <li><strong>公辦反對調處（§56③）</strong>：計畫書公告 30 日內雙過半反對 → 調處並修訂重行報核。</li>
            <li><strong>地主優先申請公辦（§57）</strong>：雙過半同意得申請優先實施。</li>
            <li><strong>自辦市地重劃（§58）</strong>：雙過半同意組織重劃會核准辦理（享低利貸款、免減地籍規費與書狀費、優先興建公設、免減地價稅與田賦等獎勵；此外 §60③ 突破 45% 共同負擔上限亦須雙過半同意！）。</li>
          </ol>
        </li>
      </ul>

      <h2>三、十項公設、四項抵充、45% 上限與抵費地（條例 §60；細則 §81～§84-1）</h2>
      <div class="callout callout-law">
        <div class="callout-title">📐 十項共同負擔公設 vs. 四項優先抵充公地（§60①）</div>
        <ul>
          <li><strong>十項公設（口訣：道溝兒鄰廣綠、國小國中停市）</strong>：道路、溝渠、兒童遊樂場、<strong>鄰里公園</strong>、廣場、綠地、國民小學、<strong>國民中學</strong>、停車場、<strong>零售市場</strong>。（⚠️ 比較區段徵收 9 項：重劃多了「國中、零售市場」，少了「體育場所」！）</li>
          <li><strong>四項優先抵充公地（口訣：道、溝、川、未）</strong>：原公有道路、溝渠、河川及未登記地。</li>
          <li><strong>三項費用負擔</strong>：工程費用、重劃費用（拆遷補償、地籍整理、業務費）、貸款利息。</li>
          <li><strong>45% 天花板（§60③）</strong>：折價抵付共同負擔土地（抵費地）合計以不超過重劃區總面積 <strong>45%</strong> 為限（雙過半同意不在此限）。</li>
        </ul>
      </div>

      <div class="callout callout-tip">
        <div class="callout-title">💡 圖解案例：「100 坪土地重劃後變幾坪？」</div>
        <p>老陳有 <strong>100 坪</strong>重劃前土地（每坪 10 萬＝總值 1,000 萬）。若該區公設負擔 30%＋費用負擔 12% ＝ <strong>總共同負擔 42%</strong>（≤ 45%），重劃後老陳領回 <strong>58 坪方正建地</strong>。但重劃後道路公園齊全，每坪市價漲到 35 萬，總值翻倍變 <strong>2,030 萬元</strong>，且首次移轉還享土增稅<strong>減徵 40%</strong>（§42③）！</p>
      </div>

      <h2>四、土地分配、差額地價、拆遷與權利清理（條例 §60-1～§67）</h2>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>項目與條文</th>
              <th>核心規定與補償標準</th>
              <th>考場必背陷阱與期限</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>差額地價＆分配確定</strong><br>（§60-1、§60-2、§62）</td>
              <td>分配結果<strong>公告 30 日</strong>確定（異議調處→上級裁決）；確定日起<strong>視為原有土地</strong>。</td>
              <td>🔥 <strong>未繳納差額地價之土地，不得移轉；但因繼承而移轉者，不在此限</strong>（§60-1④）！</td>
            </tr>
            <tr>
              <td><strong>地上物與墳墓拆遷</strong><br>（§62-1）</td>
              <td>自行拆遷期限：<strong>土地改良物 30 日內</strong>、<strong>墳墓 3 個月內</strong>；逾期代拆遷於補償金扣回。</td>
              <td>違反 §59 公告禁止事項搶建者，<strong>不予補償</strong>！</td>
            </tr>
            <tr>
              <td><strong>出租耕地租約註銷</strong><br>（§63）</td>
              <td>地方政府<strong>逕為註銷租約</strong>：① 分配土地者 → 出租人補公告現值 <strong>1/3</strong>；② 未分配者 → 補償地價出租人 2/3、承租人 1/3；③ 公地抵充公設 → 補公告現值 1/3 列共同負擔。</td>
              <td>重劃無課土增稅，故直接按重劃計畫書公告當期公告土地現值 <strong>1/3</strong> 計算！</td>
            </tr>
            <tr>
              <td><strong>其他土地租約</strong><br>（§63-1、§65）</td>
              <td>不能達原租賃目的 → 承租人得終止租約並請求相當 <strong>1 年租金</strong>補償；增減利用價值 → 得請求增減租金。</td>
              <td>請求權限於<strong>分配結果確定次日起 2 個月內</strong>行使（§65）！</td>
            </tr>
            <tr>
              <td><strong>他項權利清理</strong><br>（§64、§64-1、§65）</td>
              <td>① 用益物權（地上、農育、永佃、不動產役權）不能達目的 → <strong>視為消滅</strong>，請求相當補償。<br>② 建物抵押權、典權不能達目的 → <strong>視為消滅</strong>，請求<strong>以分配之土地設定</strong>。</td>
              <td>同樣限於<strong>分配結果確定次日起 2 個月內</strong>行使（§65）！</td>
            </tr>
            <tr>
              <td><strong>交接與換發書狀</strong><br>（§66、§67）</td>
              <td>限期遷讓或接管；逕為辦理權利變更登記並換發書狀。</td>
              <td>逾期不遷讓→移送法院強制執行；<strong>逾期不接管→限期屆滿日起視為已接管</strong>！</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="feature-band">
        <h3>📝 第 8 課重點速記口訣</h3>
        <ul>
          <li><strong>十項公設＆四項抵充（§60）</strong>：「<strong>道溝兒鄰廣綠、國小國中停市</strong>」；抵充「<strong>道、溝、川、未</strong>」；共同負擔上限 <strong>45%</strong>（雙過半同意可突破）。</li>
          <li><strong>重劃關鍵天數全收集</strong>：禁建最長 <strong>1 年 6 月</strong> → 計畫公告 <strong>30 日</strong> → 改良物拆遷 <strong>30 日</strong> / 墳墓 <strong>3 個月</strong> → 分配公告 <strong>30 日</strong> → §63-1、§64 請求權期限 <strong>2 個月</strong>！</li>
          <li><strong>兩大陷阱金句</strong>：① 未繳差額地價不得移轉（<strong>繼承例外</strong>）；② 逾期不接管<strong>視為已接管</strong>！</li>
        </ul>
      </div>

      <div class="quiz-box">
        <h3>✍️ 第 8 課隨堂小練習</h3>
        <div class="quiz-item">
          <span class="quiz-item-label">1. 實務陷阱題（條例 §60、§60-1、§62-1）</span>
          <p>甲參加市地重劃，實際分配土地面積多於應分配面積，尚未繳納差額地價前即因病過世，其子乙欲辦理繼承登記，地政機關得否受理？又若重劃區內有應遷葬之墳墓與應拆除之鐵皮屋，自行拆遷期限各為多久？</p>
          <details class="quiz-answer">
            <summary>點此查看老師解析</summary>
            <div class="quiz-answer-body">
              <ol>
                <li><strong>未繳差額地價辦理繼承登記：可以受理！</strong> 依條例 <strong>§60-1④</strong> 規定，未繳納差額地價之土地不得移轉，<strong>但因繼承而移轉者，不在此限</strong>。</li>
                <li><strong>拆遷期限（§62-1①）</strong>：土地改良物（鐵皮屋）限期 <strong>30 日內</strong>自行拆除；墳墓限期 <strong>3 個月內</strong>自行遷葬。</li>
              </ol>
            </div>
          </details>
        </div>
        <div class="quiz-item">
          <span class="quiz-item-label">2. 權利清理綜合題（條例 §63-1、§64、§65）</span>
          <p>乙向甲承租一筆市地重劃區內之非耕地（作停車場使用），重劃後因地形變動不能達原租賃目的；此外丙在該地建物上設有抵押權亦因重劃拆屋而不能達設定目的。請問乙與丙各得向甲主張何種權利？又該請求權應於何期限內行使？</p>
          <details class="quiz-answer">
            <summary>點此查看老師解析</summary>
            <div class="quiz-answer-body">
              <ol>
                <li><strong>非耕地承租人乙（§63-1）</strong>：得<strong>終止租約</strong>，並向出租人甲請求相當 <strong>1 年租金</strong>之補償。</li>
                <li><strong>建物抵押權人丙（§64②）</strong>：其抵押權<strong>視為消滅</strong>，但得向土地所有權人甲請求<strong>以其重劃所分配之土地，設定抵押權</strong>。</li>
                <li><strong>請求權行使期限（§65）</strong>：乙與丙之請求權，均應於<strong>重劃分配結果確定之次日起 2 個月內</strong>為之。</li>
              </ol>
            </div>
          </details>
        </div>
      </div>
    `
  }
);
