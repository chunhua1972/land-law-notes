// 地政士國考《土地徵收條例及其施行細則》數位講義 — Part 3（第 7 課、第 8 課、第 9 課）
window.EXPROPRIATION_LESSONS.push(
  // =========================================================================
  // 第 7 課：區段徵收（下）（條例 §43～§48 ＋ 細則 §46～§56）
  // =========================================================================
  {
    id: "lesson-7",
    group: "第三階段：區段徵收與權利清理",
    badge: "第 7 課",
    shortTitle: "區段徵收（下）：公有地、農業專用區與處分",
    title: "第 7 課：區段徵收（下）— 公有地、農業專用區、土地處分與跨法比較（條例 §43～§48 ＋ 細則 §46～§56）",
    articles: "條例 §43～§48（含 §43-1）・細則 §46～§56",
    importance: "★★★★★",
    lead: "本課進入區段徵收「後半場」：如何整合公有地與未登記地（§43）、讓老農繼續耕作的農業專用區（§43-1）、整理後土地 5 大處分與 9 項無償公設（§44）、評定開發後地價與差額地價找補（§45～§46）、既成建物與財團法人原位置保留（§47），最後獻上地政士考場必備「四維超級跨法比較表」！",
    content: `
      <h2>一、架構鳥瞰：區段徵收土地整併、處分與結算全流程</h2>
      <p>區段徵收不只是「徵收私有地、發還抵價地」，而是將範圍內的<strong>公有地、未登記地、農業專用區與私有地</strong>全部重新規劃整理，再依法定順序處分並回收開發總費用：</p>

      <div class="trust-diagram" aria-label="區段徵收後半場整併與處分流程圖">
        <div class="diagram-row">
          <div class="diagram-node">
            <div class="diagram-node-title">公有地＆未登記地（§43、細則 §46～§49）</div>
            <div class="diagram-node-desc">原則：作價（市價）或領回土地；已作 9 項公設 → 無償撥供</div>
          </div>
          <div class="diagram-arrow">＋</div>
          <div class="diagram-node node-gold">
            <div class="diagram-node-title">農業專用區（§43-1、細則 §48-1）</div>
            <div class="diagram-node-desc">原所有權人選領「現金補償」折算配售繼續耕作</div>
          </div>
        </div>
        <div class="diagram-row">
          <div class="diagram-arrow">▼ 評定區段徵收後路線價／區段價（§45 地價評議委員會評定） ▼</div>
        </div>
        <div class="diagram-row">
          <div class="diagram-node node-dark">
            <div class="diagram-node-title">區段徵收後土地五大處分（§44）</div>
            <div class="diagram-node-desc">① 抵價地（不足最小面積未合併 → 30 日發原補償現金）｜② 9 項公設無償登記<br>③ 其他公設撥用／讓售公營（得許民營者走 ⑤）｜④ 國宅／安置／院專案讓售｜⑤ 配餘地標售、標租或地上權（≤ 99 年）</div>
          </div>
        </div>
        <div class="diagram-row">
          <div class="diagram-arrow">▼ 面積增減找補（§46）＆原位置保留減輕差額（§47） ▼</div>
        </div>
        <div class="diagram-row">
          <div class="diagram-node">
            <div class="diagram-node-title">財務結算歸屬（細則 §51、§52、§56）</div>
            <div class="diagram-node-desc">處分收入優先抵付開發總費用 → 盈餘全部撥充「實施平均地權基金」（不足亦由基金貼補）</div>
          </div>
        </div>
      </div>

      <h2>二、區段徵收範圍內之公有土地與未登記地（條例 §43；細則 §46～§49）</h2>
      <div class="callout callout-law">
        <div class="callout-title">📖 法條白話翻譯（條例 §43 ＋ 細則 §46～§49）</div>
        <p>區段徵收範圍內的公有土地，由需用土地人事前會同主管機關與原管理機關協調（細則 §46），採三大方式處理：</p>
        <ol>
          <li><strong>原則一：作價撥供（拿市價走人）</strong>：地價準用 <strong>§30（市價）</strong>計算，撥供區段徵收主管機關統籌開發。</li>
          <li><strong>原則二：領回土地（依比率分地）</strong>：領回土地面積按區段徵收之<strong>抵價地面積比率</strong>計算配回原管理機關，並以<strong>§44Ⅰ② 以外之公共設施用地為優先</strong>。</li>
          <li><strong>例外：無償撥供（§43Ⅰ 但書、細則 §47Ⅱ）</strong>：區段徵收前經會同認定<strong>實際已作為 §44Ⅰ② 九項公共設施用地</strong>使用者，應循無償撥用程序<strong>無償撥供</strong>統籌規劃開發。</li>
        </ol>
        <p>👉 <strong>細則 §48 指配公設 5 順位</strong>：除原位置保留及計畫書記載讓售／有償撥供者先行指配外，其餘公地依序為：<strong>① 本直轄市縣市有 → ② 本鄉鎮市有 → ③ 國有 → ④ 他直轄市縣市有 → ⑤ 他鄉鎮市有</strong>。<br>
        👉 <strong>細則 §49 未登記土地</strong>：得視需用土地人分別登記為國有、直轄市或縣（市）有，並由其指定管理機關。</p>
      </div>

      <h2>三、保障老農留農權：農業專用區（條例 §43-1；細則 §48-1）</h2>
      <p>民國 101 年修法增訂 §43-1，回應農地徵收爭議，讓不想改當包租公、只想繼續耕作的原土地所有權人有地可耕：</p>
      <ul>
        <li><strong>規劃與意願調查（細則 §48-1ⅡⅣ）</strong>：需用土地人應於<strong>都市計畫規劃時</strong>調查原所有權人繼續耕作意願；<strong>先行區段徵收地區</strong>，都市計畫應於<strong>農業專用區劃設完成後</strong>再發布實施。</li>
        <li><strong>⚠️ 必考資金地雷（§43-1Ⅰ、細則 §48-1Ⅲ）</strong>：原土地所有權人係以<strong>「已領之現金地價補償費數額」</strong>申請折算配售農業專用區土地！因此主管機關應舉辦配售說明會，並於徵收公告中載明：<strong>欲申請配售農業專用區者，應選擇「領取現金補償」</strong>！</li>
      </ul>

      <div class="callout callout-case">
        <div class="callout-title">📌 實務案例 1：阿伯全選了「抵價地」，後悔想改配農業專用區怎麼辦？</div>
        <p><strong>情境</strong>：老農阿伯的農地被區段徵收，公告期間內申請全額領取抵價地並已獲核定，事後想改為申請配售農業專用區繼續種田。可以直接用抵價地去換嗎？</p>
        <p>👉 <strong>老師解析</strong>：<strong>不行直接用抵價地折算！</strong>依條例 §43-1Ⅰ 及細則 §48-1Ⅲ，申請配售農業專用區須以「<strong>已領之現金地價補償費數額</strong>」折算。阿伯須先依第 6 課學過的 <strong>§40ⅢⅣ</strong>，於<strong>核定發給抵價地通知之日起 1 個月內</strong>（限一次），申請改按原徵收補償地價發給現金補償（經徵得需用土地人同意核准），拿到現金後再申請折算配售農業專用區！</p>
      </div>

      <h2>四、區段徵收後土地 5 大處分方式與財務結算（條例 §44；細則 §50～§52、§54～§56）</h2>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>款次</th>
              <th>土地類型</th>
              <th>法定處分方式</th>
              <th>必背細節與考場陷阱</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>§44Ⅰ①</strong></td>
              <td><strong>抵價地</strong></td>
              <td>發交原土地所有權人領回（依補償地價占總額比率算權利價值，以實際領回單位地價折算，細則 §50）。</td>
              <td>🔥 <strong>不足最小建築單位面積（§44Ⅱ、細則 §54）</strong>：應於規定期間內申請合併；未申請者，於<strong>規定期間屆滿之日起 30 日內</strong>，按<strong>原徵收地價補償費</strong>發給現金補償！（最小面積不得小於畸零地規則及都計規定）。</td>
            </tr>
            <tr>
              <td><strong>§44Ⅰ②</strong></td>
              <td><strong>9 項公共設施用地</strong></td>
              <td><strong>無償登記</strong>為當地直轄市有、縣（市）有或鄉（鎮、市）有。</td>
              <td>🔥 必背 9 項口訣「<strong>道溝公綠兒、廣停體國小</strong>」：道路、溝渠、公園、綠地、兒童遊樂場、廣場、停車場、體育場所、國民學校。</td>
            </tr>
            <tr>
              <td><strong>§44Ⅰ③</strong></td>
              <td><strong>其他公共設施用地</strong></td>
              <td>依財務計畫於徵收計畫書載明<strong>有償或無償撥供需地機關</strong>，或<strong>讓售供公營事業機構</strong>使用。</td>
              <td>⚠️ <strong>§44Ⅲ 例外</strong>：如該公設事業<strong>「得許民營者」</strong>（如民營電廠、民營客運轉運站），應改依<strong>第 5 款（標售、標租、地上權）</strong>辦理！</td>
            </tr>
            <tr>
              <td><strong>§44Ⅰ④</strong></td>
              <td><strong>特定政策用地</strong></td>
              <td>國民住宅用地、安置原住戶或<strong>經行政院專案核准</strong>所需土地，得以<strong>讓售</strong>。</td>
              <td>專案核准權限在「<strong>行政院</strong>」，非內政部！</td>
            </tr>
            <tr>
              <td><strong>§44Ⅰ⑤</strong></td>
              <td><strong>其餘可供建築土地（配餘地）</strong></td>
              <td>得予<strong>標售、標租或設定地上權</strong>。</td>
              <td>① <strong>§44Ⅴ 年限</strong>：標租或設定地上權期限<strong>不得逾 99 年</strong>！<br>② <strong>無優先買回權</strong>：土徵條例已取消平均地權條例舊制之領現金地主優先買回權！</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="callout callout-tip">
        <div class="callout-title">💡 財務結算、管線分擔與委辦核心數字（§44Ⅳ ＋ 細則 §51、§52、§55、§56）</div>
        <ul>
          <li><strong>估價基準（§44Ⅳ）</strong>：第 3～5 款撥用／讓售地價及標售底價，以<strong>開發總費用</strong>為基準，斟酌位置、地勢、交通、路寬、公設及預期發展估定。</li>
          <li><strong>公設管理維護費（細則 §51Ⅱ）</strong>：納入開發總費用，期間為完工至移交前及移交後共 <strong>3 年內</strong>，額度以開發總面積<strong>每年每公頃新台幣 5 萬元</strong>為限。</li>
          <li><strong>管線費用分擔（細則 §52）</strong>：原有遷移原則由管線機關全額負擔（多次遷移除最後一次外由需地人負擔）；原有架空電力改地下化差額各 <strong>1/2</strong>；新設電力架空／地下土木各 <strong>1/2</strong>；新設電信架空由管線機關全額、地下土木需地人 <strong>1/3</strong> 管線機關 <strong>2/3</strong>；新設自來水由<strong>需用土地人全額</strong>；電氣設備及纜線由管線機關全額。</li>
          <li><strong>盈餘歸屬（細則 §56）</strong>：處分收入優先抵付開發總費用，有盈餘全部撥充<strong>實施平均地權基金</strong>（不足亦由該基金貼補）。</li>
        </ul>
      </div>

      <h2>五、地價評定、差額地價找補與原位置保留（條例 §45～§48；細則 §53）</h2>
      <ul>
        <li><strong>評定開發後地價（§45）</strong>：地方主管機關預計平均開發成本並斟酌各街廓條件，估計各路街之<strong>路線價或區段價</strong>，提經<strong>地價評議委員會評定</strong>，作為原所有權人領回抵價地之計算基準。</li>
        <li><strong>差額地價多退少補與強制力（§46、細則 §53）</strong>：
          <ul>
            <li>實際領回 <strong>＞ 應領面積</strong> → 就超過部分按<strong>評定區段徵收後地價</strong>繳納差額地價；屆期未繳者，得移送<strong>法院（行政執行分署）強制執行</strong>。</li>
            <li>實際領回 <strong>＜ 應領面積</strong> → 就不足部分按<strong>評定區段徵收後地價</strong>發給差額地價。</li>
            <li>🔥 <strong>未繳清差額地價之限制（§46Ⅲ、細則 §53）</strong>：<strong>不得移轉或設定他項權利</strong>！主管機關應就超過面積換算應有部分，囑託登記機關於土地登記簿加註限制字樣，繳清後立即通知註銷。</li>
          </ul>
        </li>
        <li><strong>原位置保留分配與減輕差額（§47）</strong>：不妨礙都市計畫事業及區段徵收計畫之<strong>① 既成建築物基地</strong>，或<strong>② 已辦竣財團法人登記之私立學校、社會福利、慈善事業、宗教團體用地</strong>，得按<strong>原位置保留分配</strong>，並依區段徵收計畫書所定比例<strong>減輕</strong>其依 §46 應繳納之差額地價。</li>
        <li><strong>準用規定（§48）</strong>：區段徵收之程序及補償，第四章未規定者，準用<strong>第二章（徵收程序）及第三章（徵收補償）</strong>規定。</li>
      </ul>

      <h2>六、考點終極對決：四大開發／徵收制度跨法比較表</h2>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>比較項目</th>
              <th>土徵條例區段徵收（現行優先）</th>
              <th>平均地權區段徵收（舊制）</th>
              <th>平均地權市地重劃</th>
              <th>土徵條例一般徵收</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>法律性質</strong></td>
              <td>公權力強制徵收＋合作開發（原所有權消滅再配地）</td>
              <td>同左</td>
              <td>土地交換分合＋共同負擔（<strong>原所有權未消滅</strong>）</td>
              <td>單純公權力強制剝奪所有權</td>
            </tr>
            <tr>
              <td><strong>辦理／核准主體</strong></td>
              <td>僅限公辦；<strong>內政部</strong>核准（內政部自辦報行政院）</td>
              <td>僅限公辦；行政院核准（§53）</td>
              <td><strong>公辦或地主自辦</strong>；上級主管機關核准</td>
              <td>國家辦理；<strong>內政部</strong>核准（§14）</td>
            </tr>
            <tr>
              <td><strong>補償／領回基準</strong></td>
              <td><strong>市價</strong>；抵價地原則 <strong>50%</strong>、最低 <strong>40%</strong>、曾農地重劃 <strong>45%</strong></td>
              <td>公告現值；原則 <strong>50%</strong>（核准得低於 50%，無下限）</td>
              <td>共同負擔上限 <strong>45%</strong>（地主原則至少領回 <strong>55%</strong>）</td>
              <td>徵收當期<strong>市價</strong>全額現金補償</td>
            </tr>
            <tr>
              <td><strong>地主選擇權</strong></td>
              <td>現金補償／抵價地／現金折算配售<strong>農業專用區</strong></td>
              <td>現金補償或抵價地（無農專區）</td>
              <td>原則領回土地（僅最小面積不足或差額現金找補）</td>
              <td>僅領取現金補償</td>
            </tr>
            <tr>
              <td><strong>優購／收回權</strong></td>
              <td>無領現金優購權；<strong>不適用 §9 收回及 §59 優購</strong></td>
              <td>領現金者有優先買回權（§55-2）</td>
              <td>不適用徵收收回權</td>
              <td><strong>適用 §9 收回權（20 年）及 §59 標售優購權</strong></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="feature-band">
        <h3>📝 第 7 課重點速記口訣</h3>
        <ul>
          <li><strong>9 項無償登記公設（§44Ⅰ②）</strong>：「<strong>道溝公綠兒、廣停體國小</strong>」。</li>
          <li><strong>公地指配公設 5 順位（細則 §48）</strong>：「<strong>本縣 → 本鄉 → 國家 → 他縣 → 他鄉</strong>」。</li>
          <li><strong>農業專用區地雷（§43-1）</strong>：「<strong>想種田、選現金</strong>」（須以已領現金補償費折算配售）。</li>
          <li><strong>§46 差額地價三連招</strong>：「<strong>多繳少領按後價、欠錢不准賣或押、限期不繳送強執</strong>」。</li>
        </ul>
      </div>

      <div class="quiz-box">
        <h3>✍️ 第 7 課隨堂申論小練習</h3>
        <div class="quiz-item">
          <span class="quiz-item-label">1. 申論實戰（25 分）：公有地、農業專用區與土地五大處分</span>
          <p>依現行《土地徵收條例》及其施行細則規定，區段徵收範圍內之公有土地應如何處理？又原土地所有權人欲申請配售農業專用區土地，應選擇何種補償方式？最後區段徵收整理後土地之五大處分方式與標租、設定地上權之期限限制為何？</p>
          <details class="quiz-answer">
            <summary>點此查看老師擬答架構</summary>
            <div class="quiz-answer-body">
              <p><strong>(一) 公有土地處理（§43、細則 §46～§48）</strong>：原則以<strong>作價（準用 §30 市價）</strong>或<strong>領回土地（按抵價地比率，優先配 §44Ⅰ② 以外公設）</strong>撥供主管機關統籌開發；但區段徵收前實際已作為 §44Ⅰ② 九項公設用地者，應<strong>無償撥供</strong>。指配公設順位依細則 §48 為「本直轄市縣市有 → 本鄉鎮市有 → 國有 → 他直轄市縣市有 → 他鄉鎮市有」。</p>
              <p><strong>(二) 農業專用區（§43-1、細則 §48-1）</strong>：原土地所有權人應選擇<strong>領取現金補償</strong>，以其已領之現金地價補償費數額申請折算配售農業專用區土地作農業耕作使用。</p>
              <p><strong>(三) 五大處分方式與年限（§44）</strong>：① 抵價地（不足最小建築單位面積逾期未申請合併者，屆滿日起 <strong>30 日內</strong>按原徵收補償地價發現金）；② 9 項公設用地無償登記為當地直轄市、縣市或鄉鎮市有；③ 其他公設用地有償／無償撥供需地機關或讓售公營事業（得許民營者走第 5 款）；④ 國宅、安置原住戶或行政院專案核准用地讓售；⑤ 其餘可建地標售、標租或設定地上權（標租或設定地上權期限<strong>不得逾 99 年</strong>）。盈餘全部撥充<strong>實施平均地權基金</strong>（細則 §56）。</p>
            </div>
          </details>
        </div>
        <div class="quiz-item">
          <span class="quiz-item-label">2. 申論實戰（25 分）：差額地價、原位置保留與跨法比較</span>
          <p>某已辦竣財團法人登記之百年寺廟位於區段徵收範圍內，且不妨礙都市計畫及區段徵收計畫。試依《土地徵收條例》§46、§47 及細則 §53 說明該寺廟可申請何種特別分配優惠？若領回面積大於應領面積卻逾期未繳清差額地價，法律效果為何？並簡述區段徵收與市地重劃在「所有權變動」與「地主領回比例」上之差異。</p>
          <details class="quiz-answer">
            <summary>點此查看老師擬答架構</summary>
            <div class="quiz-answer-body">
              <p><strong>(一) 原位置保留與減輕差額（§47）</strong>：該寺廟屬已辦竣財團法人登記之宗教團體用地且不妨礙計畫，得按<strong>原位置保留分配</strong>，並由主管機關視實際情形<strong>減輕</strong>其依 §46 應繳納之差額地價（減輕比例載明於區段徵收計畫書）。</p>
              <p><strong>(二) 未繳清差額地價之效果（§46、細則 §53）</strong>：超過應領面積部分應按<strong>評定區段徵收後地價</strong>繳納差額地價；① 經限期繳納屆期未繳者，得移送<strong>法院（行政執行分署）強制執行</strong>；② 未繳清前，<strong>不得移轉或設定他項權利</strong>（由主管機關換算超額應有部分囑託登記機關加註限制字樣）。</p>
              <p><strong>(三) 與市地重劃之差異</strong>：所有權變動上，區段徵收係原所有權消滅再發還抵價地，市地重劃則所有權未消滅（交換分合延續）；領回比例上，區段徵收抵價地原則 50%（最低 40%、曾農地重劃 45%），市地重劃共同負擔上限 45%（地主原則至少領回 55%）。</p>
            </div>
          </details>
        </div>
      </div>
    `
  },

  // =========================================================================
  // 第 8 課：徵收之撤銷與廢止（條例 §49～§55 ＋ 細則 §56-1～§61-4）
  // =========================================================================
  {
    id: "lesson-8",
    group: "第四階段：退場救濟、特別徵收與實戰總複習",
    badge: "第 8 課",
    shortTitle: "徵收之撤銷與廢止：三大退場機制對決",
    title: "第 8 課：徵收之撤銷與廢止 — 三大退場機制終極對決（條例 §49～§55 ＋ 細則 §56-1～§61-4）",
    articles: "條例 §49～§55（含 §52-1）・細則 §56-1～§61-4",
    importance: "★★★★★",
    lead: "本課掌握整部條例最常考的「王牌對決題」：當徵收自始出錯（撤銷 2 款）或事後計畫生變（廢止 3 款），如何啟動雙軌申請救濟（§50）、公告 30 日與不少於 6 個月繳還價額（§51）、為何原有他項權利與三七五租約原則不予回復（§52），並與 §9 原所有權人收回權展開 10 維度終極對決！",
    content: `
      <h2>一、架構鳥瞰：徵收退場發還全流程</h2>
      <p>為防杜政府徵收後「土地閒置養蚊子」，條例 §49 明定需用土地人於<strong>未依徵收計畫完成使用前，應每年檢討興辦事業計畫並由上級事業主管機關列管</strong>；一旦符合撤銷或廢止事由，即啟動以下退場程序：</p>

      <div class="trust-diagram" aria-label="撤銷與廢止徵收程序流程圖">
        <div class="diagram-row">
          <div class="diagram-node node-dark">
            <div class="diagram-node-title">應撤銷徵收（§49Ⅰ：自始瑕疵 2 款）</div>
            <div class="diagram-node-desc">① 作業錯誤不在工程範圍<br>② 公告時都計已定聯開／重劃等（不願聯開者除外）</div>
          </div>
          <div class="diagram-arrow">vs.</div>
          <div class="diagram-node node-gold">
            <div class="diagram-node-title">應廢止徵收（§49Ⅱ：事後變更 3 款）</div>
            <div class="diagram-node-desc">① 工程變更設計不在範圍｜② 開始使用前四種改變／註銷<br>③ 開始使用後、完成使用前情事變更已無必要</div>
          </div>
        </div>
        <div class="diagram-row">
          <div class="diagram-arrow">▼ 徵收公告期滿後始得申請（細則 §57）→ 雙軌申請（§50） ▼</div>
        </div>
        <div class="diagram-row">
          <div class="diagram-node">
            <div class="diagram-node-title">主動申請（§50ⅠⅤ）</div>
            <div class="diagram-node-desc">需用土地人（或地方主管機關會審後）→ 向中央主管機關申請</div>
          </div>
          <div class="diagram-arrow">／</div>
          <div class="diagram-node">
            <div class="diagram-node-title">原所有權人請求（§50Ⅱ～Ⅳ）</div>
            <div class="diagram-node-desc">向地方請求 → 不服函復 <strong>30 日內</strong>向中央請求 → 仍不服行政救濟</div>
          </div>
        </div>
        <div class="diagram-row">
          <div class="diagram-arrow">▼ 中央主管機關核准 → 地方「公告 30 日」＋通知繳款（不得少於 6 個月，§51） ▼</div>
        </div>
        <div class="diagram-row">
          <div class="diagram-node node-dark">
            <div class="diagram-node-title">期限內繳清價額（同人改良物須同時繳清 §55）</div>
            <div class="diagram-node-desc">發還原有土地及現存改良物；原有他項權利／耕地租約不予回復（§42 抵價地除外）</div>
          </div>
          <div class="diagram-arrow">｜</div>
          <div class="diagram-node node-gold">
            <div class="diagram-node-title">逾期未繳清（雙重失權 §51Ⅱ）</div>
            <div class="diagram-node-desc">① 不發還土地（維持原登記）<br>② <strong>不得再依 §9 申請收回</strong>！</div>
          </div>
        </div>
      </div>

      <h2>二、應撤銷（2 款）vs. 應廢止（3 款）事由精解（條例 §49；細則 §56-1）</h2>
      <div class="callout callout-law">
        <div class="callout-title">📖 區分核心：看「時間點」——自始有誤用撤銷、事後生變用廢止！</div>
        <p><strong>【應撤銷徵收：§49Ⅰ 二款自始瑕疵】</strong></p>
        <ol>
          <li>因<strong>作業錯誤</strong>，致原徵收之土地不在工程用地範圍內（如地籍套繪或清冊謄寫錯誤）。</li>
          <li><strong>公告徵收時</strong>，都市計畫<strong>已規定</strong>以聯合開發、市地重劃或其他方式開發。<strong>但以聯合開發方式開發之土地，土地所有權人不願參與聯合開發者，不在此限。</strong></li>
        </ol>
        <p><strong>【應廢止徵收：§49Ⅱ 三款事後情事變更】</strong></p>
        <ol>
          <li>因<strong>工程變更設計</strong>，致原徵收之土地不在工程用地範圍內。</li>
          <li>依徵收計畫<strong>開始使用前</strong>，興辦之事業改變、興辦事業計畫經註銷、開發方式改變或取得方式改變。</li>
          <li>已依徵收計畫<strong>開始使用，尚未依徵收計畫完成使用</strong>之土地，因<strong>情事變更</strong>，致原徵收土地之全部或一部已無徵收之必要。</li>
        </ol>
        <p>👉 <strong>必背細則 §56-1 名詞定義</strong>：「<strong>開始使用</strong>」＝興辦事業之<strong>主體工程動工</strong>；「<strong>完成使用</strong>」＝興辦事業<strong>整體工程完成驗收</strong>（無需興建工程者不在此限）。<br>
        👉 <strong>殘餘部分一併處理（§49Ⅲ）</strong>：已一併徵收之殘餘部分，應同時辦理撤銷或廢止（但該殘餘部分<strong>已移轉或另有他用者</strong>，不在此限）；且本條於本條例施行前公告徵收之土地<strong>溯及適用</strong>（§49Ⅳ）。</p>
      </div>

      <h2>三、申請程序、繳納價額與他項權利命運（條例 §50～§55；細則 §57～§61-4）</h2>

      <h3>1. 雙軌申請與 30 日向中央請求救濟（§50；細則 §57、§57-1）</h3>
      <ul>
        <li><strong>時間門檻（細則 §57）</strong>：必須於土地或改良物<strong>徵收公告期滿後</strong>，始得申請撤銷或廢止徵收。</li>
        <li><strong>請求資格（細則 §57-1）</strong>：原土地所有權人死亡者為全體繼承人，但<strong>任一繼承人得敘明理由為全體繼承人利益請求之</strong>；分別共有者，<strong>各共有人得就其應有部分請求之</strong>。</li>
        <li><strong>雙層救濟（§50Ⅱ～Ⅳ）</strong>：需用土地人未申請時 → 原所有權人向<strong>地方主管機關</strong>請求會同審查 → 不服地方函復結果，於<strong>函復送達之日起 30 日內</strong>向<strong>中央主管機關</strong>請求 → 中央核查不合函復仍不服者，<strong>依法提起行政救濟</strong>。</li>
      </ul>

      <h3>2. 核准後公告 30 日、應繳價額與逾期雙重失權（§51；細則 §58～§60）</h3>
      <div class="callout callout-warn">
        <div class="callout-title">⚠️ 考場四大數字與價額地雷（§51）</div>
        <ol>
          <li><strong>公告期間</strong>：地方主管機關收到中央核准通知時，應<strong>公告 30 日</strong>（應載明細則 §58 八款事項），並通知原所有權人。</li>
          <li><strong>繳清期限</strong>：一定期間<strong>不得少於 6 個月</strong>（注意與 §9「6 個月內」之差異！）。</li>
          <li><strong>應繳納之價額</strong>＝<strong>徵收補償地價 ＋ 地價加成補償 ＋ 遷移費</strong>。
            <ul>
              <li>🔥 <strong>遷移費但書（§51Ⅳ）</strong>：依 §34Ⅰ 規定之人口或物件<strong>已遷移者，無須繳納遷移費</strong>！</li>
              <li>🔥 <strong>含代扣價金（§51Ⅴ、細則 §59）</strong>：徵收前設有他項權利或耕地租約者，徵收補償地價<strong>包括他項權利人或耕地承租人原應受領之價金</strong>！</li>
            </ul>
          </li>
          <li><strong>逾期未繳清之雙重失權（§51Ⅱ、細則 §60）</strong>：① <strong>不發還其土地</strong>（維持原登記，為公有者依公產法令處理）；② <strong>不得再依 §9 規定申請收回該土地</strong>！</li>
        </ol>
      </div>

      <h3>3. 他項權利不予回復（§52）、外部救濟準用（§52-1）與改良物一併撤廢（§53～§55）</h3>
      <ul>
        <li><strong>他項權利與耕地租約之命運（§52）</strong>：撤銷或廢止徵收後，徵收前原設定之他項權利及耕地租約<strong>原則不予回復</strong>！<strong>唯一例外</strong>：依 <strong>§42</strong> 規定由原土地所有權人及他項權利人申請於發給之<strong>抵價地設定抵押權或典權</strong>者，其原抵押權或典權<strong>准予回復</strong>！</li>
        <li><strong>外部途徑準用（§52-1）</strong>：經中央主管機關依行政程序法撤銷廢止、依行政程序法 §128 重開程序撤銷廢止、或經行政救濟結果撤銷廢止者，補償費繳清、土地發還及權利處理均<strong>準用 §51、§52</strong>。</li>
        <li><strong>土地改良物一併處理（§53～§55；細則 §61、§61-4）</strong>：
          <ul>
            <li>土地撤銷或廢止時，原一併徵收之土地改良物<strong>應一併辦理</strong>（<strong>已滅失者除外</strong>，§54Ⅰ）。</li>
            <li>價值減輕而仍得為相當使用者，原需用土地人就現存部分<strong>酌定價額</strong>一併撤廢（§54Ⅱ）；原所有權人不服所定價額者，得於<strong>撤銷廢止公告期間內（30 日）</strong>以書面異議，準用 §22 辦理（細則 §61）。</li>
            <li>土地與一併撤廢改良物<strong>原所有權人相同者</strong>，應<strong>同時繳清</strong>土地及改良物價額，始發還土地及現存改良物（§55）。</li>
            <li>地上權撤銷或廢止徵收時，依 §57Ⅱ 核准徵收之所有權土地及改良物亦應一併辦理撤銷或廢止（細則 §61-4）。</li>
          </ul>
        </li>
      </ul>

      <div class="callout callout-case">
        <div class="callout-title">📌 實務案例：設定抵押權與三七五租約之耕地廢止徵收，錢怎麼繳？權利復活嗎？</div>
        <p><strong>情境</strong>：老張的出租耕地設有抵押權 500 萬元，徵收補償地價共 1,500 萬元（代償銀行 500 萬、補償佃農 300 萬，老張實領 700 萬），另領遷移費 20 萬元（已確實搬遷完畢）。嗣後因工程變更設計核准廢止徵收。請問老張應繳回多少錢？發還後銀行抵押權與三七五租約會回復嗎？</p>
        <p>👉 <strong>老師解析</strong>：<br>
        1. <strong>應繳價額（§51ⅣⅤ）</strong>：須繳回完整補償地價 <strong>1,500 萬元</strong>（含銀行 500 萬與佃農 300 萬）；因人口物件已實際遷移，<strong>免繳 20 萬元遷移費</strong>！<br>
        2. <strong>權利命運（§52）</strong>：原抵押權與三七五租約<strong>均不予回復</strong>（因非 §42 抵價地轉載抵押權／典權例外）。老張繳清 1,500 萬元後拿回乾淨無負擔之土地。</p>
      </div>

      <h2>四、王牌終極對決表：「撤銷徵收」vs.「廢止徵收」vs.「§9 收回權」</h2>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>比較維度</th>
              <th>撤銷徵收（§49Ⅰ）</th>
              <th>廢止徵收（§49Ⅱ）</th>
              <th>原所有權人收回權（§9）</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>法律性質</strong></td>
              <td>自始違法／錯誤，溯及失效</td>
              <td>原合法、事後情事變更，向後失效</td>
              <td>原合法，未依計畫期限使用之法定買回權</td>
            </tr>
            <tr>
              <td><strong>法定事由</strong></td>
              <td><strong>2 款</strong>：① 作業錯誤不在範圍；② 公告時都計已定聯開／重劃等（不願聯開除外）。</td>
              <td><strong>3 款</strong>：① 工程變更設計；② 開始前事業／計畫／開發／取得改變註銷；③ 開始後未完成前情事變更。</td>
              <td><strong>3 款</strong>：① 發完補償滿 <strong>3 年</strong>未開始（不可歸責除外）；② 未依原定事業使用；③ 開始未滿 <strong>5 年</strong>不繼續。</td>
            </tr>
            <tr>
              <td><strong>發動主體</strong></td>
              <td>原則需用土地人／地方申請；未申請時原所有權人得請求（§50）</td>
              <td>同左（§50）</td>
              <td><strong>僅限原土地所有權人</strong>（含繼承人／共有人）主動申請</td>
            </tr>
            <tr>
              <td><strong>行使時效</strong></td>
              <td><strong>無除斥期間</strong>（完成使用前；公告期滿後始得申請）</td>
              <td>同左</td>
              <td>自<strong>徵收公告之日起 20 年內</strong></td>
            </tr>
            <tr>
              <td><strong>適用區段徵收？</strong></td>
              <td><strong>適用</strong>（§52 但書明文含 §42 抵價地）</td>
              <td><strong>適用</strong></td>
              <td><strong>明文排除！</strong>（§9Ⅰ；§58Ⅲ 亦排除）</td>
            </tr>
            <tr>
              <td><strong>核准後公告</strong></td>
              <td>地方主管機關<strong>公告 30 日</strong>並通知</td>
              <td>同左</td>
              <td>不須公告，直接通知原所有權人</td>
            </tr>
            <tr>
              <td><strong>應繳納價額</strong></td>
              <td>補償地價＋加成補償＋<strong>遷移費（已遷免繳）</strong>；含他項／租約代扣價金</td>
              <td>同左</td>
              <td>原受領之補償地價＋地價加成補償（<strong>不含遷移費</strong>）</td>
            </tr>
            <tr>
              <td><strong>繳清期限與逾期</strong></td>
              <td><strong>不得少於 6 個月</strong>；逾期不發還且<strong>不得依 §9 收回</strong></td>
              <td>同左</td>
              <td><strong>6 個月內</strong>；逾期<strong>視為放棄收回權</strong></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="feature-band">
        <h3>📝 第 8 課重點速記口訣</h3>
        <ul>
          <li><strong>撤銷 vs. 廢止</strong>：「<strong>撤銷抓錯</strong>（作業錯、都計已定他法）；<strong>廢止看變</strong>（變更設計、始前四變、始後未完情事變）」。</li>
          <li><strong>§51 vs. §9 三大黃金差異</strong>：「<strong>區段徵收可撤廢不能收回；撤廢要遷移（未搬）收回免遷移；撤廢至少 6 月、收回 6 月內</strong>」。</li>
          <li><strong>§52 權利回復</strong>：「<strong>他項租約全不回，唯一例外四十二（抵價地抵典權）</strong>」。</li>
        </ul>
      </div>

      <div class="quiz-box">
        <h3>✍️ 第 8 課隨堂申論小練習</h3>
        <div class="quiz-item">
          <span class="quiz-item-label">1. 申論實戰（25 分）：撤銷廢止事由、雙軌救濟與價額繳回</span>
          <p>依《土地徵收條例》§49～§51 規定，應辦理「撤銷徵收」與「廢止徵收」之事由各為何？需用土地人怠於申請時，原土地所有權人如何請求及救濟？又核准後原所有權人應繳納哪些價額、期限多久及逾期未繳之雙重效果為何？</p>
          <details class="quiz-answer">
            <summary>點此查看老師擬答架構</summary>
            <div class="quiz-answer-body">
              <p><strong>(一) 撤銷 2 款 vs. 廢止 3 款（§49、細則 §56-1）</strong>：撤銷為 ① 作業錯誤不在範圍；② 公告時都計已定聯開／重劃等（不願聯開者除外）。廢止為 ① 工程變更設計不在範圍；② 開始使用（主體工程動工）前事業／計畫／開發／取得改變或註銷；③ 開始使用後尚未完成使用（整體工程完成驗收）前情事變更無必要。</p>
              <p><strong>(二) 原所有權人請求與救濟（§50、細則 §57、§57-1）</strong>：公告期滿後始得申請；向地方主管機關請求審查 → 不服地方函復，應於<strong>函復送達之日起 30 日內</strong>向中央主管機關請求 → 不服中央函復依法提起行政救濟。</p>
              <p><strong>(三) 繳還價額、期限與逾期效果（§51）</strong>：地方接獲中央核准通知應<strong>公告 30 日</strong>並通知原所有權人於一定期間（<strong>不得少於 6 個月</strong>）內繳清補償地價（含原他項權利人或耕地承租人原應受領價金）、地價加成補償及遷移費（已遷移者無須繳納遷移費）。逾期未繳清者：① <strong>不發還土地</strong>；② <strong>不得依 §9 申請收回</strong>。</p>
            </div>
          </details>
        </div>
        <div class="quiz-item">
          <span class="quiz-item-label">2. 申論實戰（25 分）：他項權利回復例外與一併撤廢改良物</span>
          <p>土地經核准撤銷或廢止徵收後，原設定之他項權利及耕地租約是否回復？有無例外？又原一併徵收之建築改良物如價值已減輕但仍得為相當使用，應如何處理？原所有權人不服所定價額時如何救濟？土地與改良物原所有權人相同時有何繳款限制？</p>
          <details class="quiz-answer">
            <summary>點此查看老師擬答架構</summary>
            <div class="quiz-answer-body">
              <p><strong>(一) 他項權利及耕地租約（§52）</strong>：原則<strong>不予回復</strong>；唯一例外為依 <strong>§42</strong> 規定由原土地所有權人及他項權利人申請於區段徵收抵價地設定之<strong>抵押權或典權</strong>，准予回復。</p>
              <p><strong>(二) 價值減輕改良物與異議（§54、細則 §61）</strong>：應一併辦理撤銷或廢止（已滅失者除外）；價值已減輕而仍得為相當使用者，原需用土地人得就其<strong>現存部分酌定價額</strong>一併撤廢。原所有權人不服者，得於<strong>撤銷或廢止徵收公告期間內（30 日）</strong>以書面向地方主管機關提出異議，準用 §22 規定辦理。</p>
              <p><strong>(三) 同時繳清限制（§55）</strong>：土地與一併撤廢改良物原所有權人相同者，應<strong>同時繳清</strong>土地及改良物應繳納之價額，始發還土地及現存改良物。</p>
            </div>
          </details>
        </div>
      </div>
    `
  },

  // =========================================================================
  // 第 9 課：附則、特別徵收、憲法解釋與申論實戰總複習
  // =========================================================================
  {
    id: "lesson-9",
    group: "第四階段：退場救濟、特別徵收與實戰總複習",
    badge: "第 9 課",
    shortTitle: "附則、特別徵收、憲法解釋與總複習",
    title: "第 9 課：附則、特別徵收、憲法解釋與申論實戰總複習（條例 §56～§63 ＋ 細則 §61-1～§66 ＋ 四大釋憲）",
    articles: "條例 §56～§63・細則 §61-1～§66・釋字 732/743/747＆111 憲判字 15",
    importance: "★★★★★",
    lead: "最終壓軸大結局！一次制霸第六章四大高頻王牌：民間投資建設與釋字 743（§56）、穿越空間地上權徵收＋釋字 747 創設請求權（§57）、臨時性工程土地「徵用」逾 3 年轉徵收（§58）、變更目的標售優購權（§59），再奉上四大憲法里程碑總表、全法 15 大數字地雷與申論四段破題模板！",
    content: `
      <h2>一、架構鳥瞰：第六章附則四大特別機制 × 四大憲法里程碑</h2>
      <p>第六章附則絕非冷門條文，而是近年地政士國考結合<strong>大法官解釋與憲法判決</strong>最愛命題的壓軸戰區：</p>

      <div class="trust-diagram" aria-label="第六章附則與四大憲法釋憲總覽圖">
        <div class="diagram-row">
          <div class="diagram-node">
            <div class="diagram-node-title">§56 民間機構投資建設</div>
            <div class="diagram-node-desc">信託／聯開／委開／委營／合營／地上權／出租<br>須於徵收計畫書載明（🔗 釋字 743 目的拘束）</div>
          </div>
          <div class="diagram-arrow">＋</div>
          <div class="diagram-node node-dark">
            <div class="diagram-node-title">§57 穿越空間地上權徵收</div>
            <div class="diagram-node-desc">先協議→準用徵收（損害最少）；不能相當使用：施工起至完工後 1 年內請求徵收所有權（🔗 釋字 747）</div>
          </div>
        </div>
        <div class="diagram-row">
          <div class="diagram-node node-gold">
            <div class="diagram-node-title">§58 臨時性土地「徵用」</div>
            <div class="diagram-node-desc">逾 3 年（含累計）→ 通知 30 日內請求徵收所有權（不得依 §9 收回）｜每年補償＝公告現值 10%</div>
          </div>
          <div class="diagram-arrow">＋</div>
          <div class="diagram-node">
            <div class="diagram-node-title">§59 變更目的標售優購權</div>
            <div class="diagram-node-desc">依計畫使用後變更目的標售 → 公告 1 個月 → 決標後 10 日內優購（⚠️ 區段徵收不適用）</div>
          </div>
        </div>
      </div>

      <h2>二、民間投資建設（§56）與穿越空間地上權徵收（§57 ＋ 釋字 747 號）</h2>

      <h3>1. 徵收土地提供民間機構投資建設（條例 §56 ＋ 釋字第 743 號）</h3>
      <ul>
        <li><strong>7 種法定方式（§56Ⅰ）</strong>：徵收之土地，得於<strong>徵收計畫書載明</strong>，以<strong>信託、聯合開發、委託開發、委託經營、合作經營、設定地上權或出租</strong>，提供民間機構投資建設（施行前申請徵收之土地，經申請<strong>中央主管機關備案</strong>者亦得適用，§56Ⅱ）。</li>
        <li><strong>釋字第 743 號（美河市案）憲法紅線</strong>：徵收取得之土地受「<strong>徵收目的拘束原則</strong>」支配，除法律有明確規定外，不得任意移轉所有權予第三人供一般商業開發！</li>
      </ul>

      <h3>2. 穿越上空或地下之地上權徵收與雙重請求權（條例 §57；細則 §61-1～§61-4 ＋ 釋字第 747 號）</h3>
      <div class="callout callout-law">
        <div class="callout-title">📖 三層次完全攻略（§57 ＋ 釋字第 747 號）</div>
        <ol>
          <li><strong>第一層：需用土地人主動取得（§57Ⅰ）</strong>：興辦 §3 事業需穿越私有土地上空或地下 → 先協議取得地上權 → 協議不成<strong>準用徵收規定取得地上權</strong> → 但書：<strong>應擇其損害最少之處所及方法為之</strong>。</li>
          <li><strong>第二層：🔥 釋字第 747 號創設人民「地上權徵收請求權」</strong>：需用土地人未辦徵收即實質穿越私有地上空或地下，致逾越社會義務形成<strong>特別犧牲</strong>時，§11、§57Ⅰ 未賦予所有權人主動請求權違憲！逾期未完成修法，所有權人得直接依本解釋意旨，<strong>請求需用土地人向主管機關申請徵收地上權</strong>！</li>
          <li><strong>第三層：不能為相當使用時請求「徵收所有權」（§57ⅡⅢ）</strong>：土地因事業興辦致<strong>不能為相當之使用</strong>時，所有權人得自<strong>「施工之日起至完工後 1 年內」</strong>，請求需用土地人<strong>徵收土地所有權</strong>，<strong>需用土地人不得拒絕</strong>；原設定地上權取得之對價，應於徵收補償地價內<strong>扣除之</strong>。</li>
        </ol>
        <p>👉 <strong>細則 §61-1～§61-4 配套</strong>：原被徵收地上權時之所有權人（死亡已辦繼承為登記名義人、未辦為全體繼承人；分別共有各共有人得就應有部分申請）提出申請 → 需用土地人會同實地勘查（資格不符或逾期免勘查）報<strong>中央主管機關核定</strong> → 改良物同人應一併徵收 → 地上權撤廢時一併撤廢所有權。</p>
      </div>

      <h2>三、臨時性公共建設之土地「徵用」（條例 §58；細則 §62、§62-1、§63）</h2>
      <ul>
        <li><strong>要件與逾 3 年轉徵收（§58Ⅰ～Ⅲ、細則 §62-1）</strong>：國家因興辦<strong>臨時性之公共建設工程</strong>，得徵用私有土地或土地改良物。徵用期間<strong>逾 3 年</strong>，或<strong>二次以上徵用期間合計逾 3 年</strong>者，需用土地人應於<strong>申請徵用前以書面通知</strong>；所有權人於<strong>收到通知書之日起 30 日內</strong>，得請求需用土地人<strong>徵收所有權</strong>，<strong>需用土地人不得拒絕</strong>（報中央核定函復）。</li>
        <li><strong>⚠️ 失權地雷（§58Ⅲ）</strong>：依前項請求徵收所有權者，<strong>不得再依 §9 規定申請收回</strong>其土地或土地改良物！</li>
        <li><strong>程序準用與緊急先行使用（§58Ⅳ、細則 §62、§63）</strong>：原則準用第二章（擬具 16 款徵用計畫書報中央核准）；但情況緊急遲延使用有公益重大危害之虞者，經<strong>中央主管機關核准</strong>得<strong>先行使用</strong>，且<strong>免舉行公聽會、免協議價購</strong>（細則 §62）。</li>
        <li><strong>🔥 使用補償費超級數字地雷（§58Ⅴ～Ⅶ）</strong>：
          <ul>
            <li>自<strong>公告徵用之日</strong>起算，於<strong>公告期滿後 15 日內</strong>一次發給所有權人或地上權、典權、不動產役權、農育權、永佃權、耕作權人（經同意得延期或分期）。</li>
            <li><strong>每年補償費</strong>：土地依<strong>「徵用公告期滿第 15 日之公告土地現值 10%」</strong>計算（⚠️ 不是市價！）；土地改良物依<strong>「徵收補償費 10%」</strong>計算；不足 1 年按月、不足 1 月按日計算。</li>
            <li>致土地改良物必需拆除或未能回復徵用前之使用者，準用 <strong>§31</strong> 補償（經所有權人同意者除外）。</li>
          </ul>
        </li>
      </ul>

      <h2>四、變更原使用目的標售之優先購買權＆過渡附則（條例 §59～§63；細則 §64～§66）</h2>
      <div class="callout callout-case">
        <div class="callout-title">📌 條例 §59 ＋ 細則 §64、§65：廢校變建地標售，原所有權人最後保障！</div>
        <ul>
          <li><strong>適用條件</strong>：私有土地<strong>經依徵收計畫使用後</strong>，依法變更原使用目的，土地管理機關<strong>標售</strong>該土地時（§8Ⅰ 一併徵收之殘餘地須<strong>同時標售</strong>始適用，§59Ⅱ）。</li>
          <li><strong>公告與行使期限</strong>：應<strong>公告 1 個月</strong>；原所有權人或其繼承人有依同樣條件優先購買權，未於<strong>決標後 10 日內</strong>自行檢具投標保證金及證明文件以書面申請者，<strong>視為放棄</strong>！</li>
          <li><strong>多數人競合（細則 §65ⅢⅣ）</strong>：接標售機關通知之日起 <strong>10 日內</strong>提全體協議書；不成按原被徵收土地面積比例算持分；多數繼承人未協議按申請優購人數<strong>平均計算</strong>。</li>
          <li><strong>⚠️ 絕對排除（§59Ⅲ）</strong>：<strong>於區段徵收不適用之！</strong></li>
          <li><strong>附則小點（§60～§63、細則 §65-1）</strong>：施行前未結案依原法（§60）；施行前公告徵收之申請收回依施行前規定（§61）；損害賠償由造成損害機關負擔（細則 §65-1）；100.12.13 修正 §30 市價補償由行政院定自 101.09.01 施行（§63）。</li>
        </ul>
      </div>

      <h2>五、四大憲法釋憲里程碑總複習表（申論破題加分神器！）</h2>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>案號與日期</th>
              <th>經典案名與標的</th>
              <th>核心憲法意旨</th>
              <th>對應《土徵條例》條文</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>釋字第 732 號</strong><br>(104.09.25)</td>
              <td>捷運毗鄰地徵收違憲案</td>
              <td>為土地開發徵收「非交通事業所必須之毗鄰私有地」，違反<strong>比例原則</strong>，侵害財產權與居住自由。</td>
              <td>§3「以事業所必須者為限」、§3-2 公益性與必要性評估</td>
            </tr>
            <tr>
              <td><strong>釋字第 743 號</strong><br>(105.12.30)</td>
              <td>美河市聯開移轉第三人案</td>
              <td>嚴守<strong>徵收目的拘束原則</strong>！除法律明確授權外，不得任意移轉徵收土地予第三人商業開發。</td>
              <td>§56（須載明於徵收計畫書）、§9 收回、§49 廢止</td>
            </tr>
            <tr>
              <td><strong>釋字第 747 號</strong><br>(106.04.21)</td>
              <td>穿越空間地上權請求權案</td>
              <td>穿越私有地上空地下形成<strong>特別犧牲</strong>未徵收地上權者，<strong>創設人民「地上權徵收請求權」</strong>！</td>
              <td>§57 地上權取得與不能相當使用請求徵收所有權</td>
            </tr>
            <tr>
              <td><strong>111 憲判字 15 號</strong><br>(111.08.12)</td>
              <td>農田水利用地照舊使用案</td>
              <td>無合法權源令私有農田水利用地（公物）「照舊使用」已構成<strong>特別犧牲</strong>，應於 <strong>3 年內</strong>擬定計畫依法徵收補償。</td>
              <td>憲法 §15 財產權特別犧牲與完全補償原則</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>六、全法 15 大必背數字地雷終極清單</h2>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>編號</th>
              <th>條文</th>
              <th>必背黃金數字</th>
              <th>關鍵考點一句話</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>1</td><td>細則 §2-1</td><td><strong>0.25 公頃／10%（得增 10%）</strong></td><td>特定農業區「零星夾雜」上限</td></tr>
            <tr><td>2</td><td>§5Ⅱ</td><td><strong>3 年內</strong>／取回自遷 <strong>15 日</strong></td><td>改良物徵收期限與取回自行遷移期限</td></tr>
            <tr><td>3</td><td>§8Ⅰ</td><td><strong>公告之日起 1 年內</strong></td><td>殘餘地／建物申請一併徵收（限現金補償）</td></tr>
            <tr><td>4</td><td>§9</td><td><strong>20 年／3 年／未滿 5 年／6 月內</strong></td><td>原所有權人收回權除斥期間、事由與繳還期</td></tr>
            <tr><td>5</td><td>§12Ⅰ</td><td><strong>7 日前</strong>通知</td><td>進入建物或有圍障土地勘測前通知</td></tr>
            <tr><td>6</td><td>§15Ⅱ</td><td><strong>不得少於 1/2</strong></td><td>審議小組專家學者及民間團體代表比例</td></tr>
            <tr><td>7</td><td>§18、§20</td><td><strong>公告 30 日／期滿 15 日內</strong></td><td>徵收公告期與補償費發給期（逾期失效）</td></tr>
            <tr><td>8</td><td>§22</td><td><strong>期滿次日 30 日／確定 3 個月</strong></td><td>補償價額異議期限與差額發給期限</td></tr>
            <tr><td>9</td><td>§26Ⅰ</td><td><strong>3 個月存入／逾 15 年歸國庫</strong></td><td>未受領補償費保管專戶存入與歸國庫年限</td></tr>
            <tr><td>10</td><td>§30、§31</td><td><strong>每 6 個月</strong>評市價／農作 <strong>1 年</strong></td><td>市價變動幅度評定週期與農作孳息切點</td></tr>
            <tr><td>11</td><td>§34、§34-1</td><td>遷移 <strong>6 月前</strong>設籍／安置 <strong>1 年前</strong></td><td>人口遷移費設籍門檻與弱勢安置居住門檻</td></tr>
            <tr><td>12</td><td>§37、§39、§40</td><td>禁建 <strong>1 年 6 月</strong>／<strong>50・40・45%</strong>／改領 <strong>1 月</strong></td><td>區段徵收禁建上限、抵價地比例與改領期限</td></tr>
            <tr><td>13</td><td>§44、§51</td><td>未合併 <strong>30 日</strong>／標租 <strong>99 年</strong>／撤廢 <strong>≥ 6 月</strong></td><td>最小面積未合併發現金、地上權上限、撤廢繳款</td></tr>
            <tr><td>14</td><td>§57Ⅱ</td><td><strong>施工之日起至完工後 1 年內</strong></td><td>穿越空間不能相當使用請求徵收所有權期限</td></tr>
            <tr><td>15</td><td>§58、§59</td><td>徵用 <strong>逾 3 年→30 日</strong>／<strong>現值 10%</strong>／優購 <strong>1 月・10 日</strong></td><td>徵用轉徵收、年補償費、標售優購公告與決標期</td></tr>
          </tbody>
        </table>
      </div>

      <div class="feature-band">
        <h3>🏆 地政士申論題「四段黃金破題模板」</h3>
        <ol>
          <li><strong>第一段【破題定性＋憲法原則】</strong>：開門見山點出制度名稱與憲法 §15 財產權、比例原則、特別犧牲或目的拘束原則（命中釋字 732／743／747 或 111 憲判 15 立刻寫出案號！）。</li>
          <li><strong>第二段【母法 × 施行細則分項列點】</strong>：條列條號、要件、數字期限與「<strong>但書／除外規定</strong>」（閱卷給分核心）。</li>
          <li><strong>第三段【涵攝本案事實與明確結論】</strong>：逐一帶入甲乙丙與金額／時間點，給出明確答案。</li>
          <li><strong>第四段【跨法比較或失權連動補述】</strong>：補寫「不得再依 §9 收回」、「區段徵收不適用 §59」等畫龍點睛金句，直衝 22+ 滿分區！</li>
        </ol>
      </div>

      <div class="quiz-box">
        <h3>✍️ 第 9 課壓軸綜合實戰演練</h3>
        <div class="quiz-item">
          <span class="quiz-item-label">1. 壓軸實戰（25 分）：地上權穿越＋釋字 747 號＋土地徵用逾 3 年</span>
          <p>國家興辦高鐵建設：(一) 地下隧道未經徵收即直接穿越甲私有建地地下，致該地無法開挖地下室不能為相當之使用；(二) 另徵用乙相鄰土地作臨時土石場，首次徵用 2 年，期滿擬再徵用 2 年（合計 4 年）。試依《土地徵收條例》及大法官解釋說明甲、乙之權利、行使期限、補償基準與法律效果。</p>
          <details class="quiz-answer">
            <summary>點此查看四段式黃金擬答</summary>
            <div class="quiz-answer-body">
              <p><strong>(一) 甲之雙重權利（§57、細則 §61-1～§61-3、釋字第 747 號）</strong>：① 高鐵隧道實質穿越形成<strong>特別犧牲</strong>，甲得依<strong>釋字第 747 號</strong>主動請求需用土地人向主管機關申請<strong>徵收地上權</strong>；② 因已達<strong>不能為相當之使用</strong>，甲並得依 <strong>§57Ⅱ</strong> 自<strong>施工之日起至完工後 1 年內</strong>，請求需用土地人<strong>徵收土地所有權</strong>，需用土地人不得拒絕（由需用土地人會同實地勘查報中央核定；原地上權對價應於徵收補償地價中扣除，§57Ⅲ）。</p>
              <p><strong>(二) 乙之徵用補償與逾 3 年轉徵收（§58、細則 §62-1）</strong>：① 徵用使用補償費自公告徵用之日起算，公告期滿後 <strong>15 日內</strong>一次發給，土地每年按<strong>徵用公告期滿第 15 日之公告土地現值 10%</strong> 計算（不足 1 年按月、不足 1 月按日）；② 二次徵用合計 4 年（<strong>逾 3 年</strong>），需用土地人應於申請第二次徵用前<strong>書面通知</strong>，乙於收到通知書之日起 <strong>30 日內</strong>得請求<strong>徵收所有權</strong>，不得拒絕；③ ⚠️ 依 <strong>§58Ⅲ</strong>，乙一旦請求徵收所有權，<strong>不得再依 §9 申請收回</strong>！</p>
            </div>
          </details>
        </div>
        <div class="quiz-item">
          <span class="quiz-item-label">2. 壓軸實戰（25 分）：四大釋憲原則＋§59 變更使用標售優先購買權</span>
          <p>某公有市場係依一般徵收取得並已使用 15 年，嗣依法變更為商業區公開標售。原土地所有權人丙可主張何種權利？其公告期間、行使期限、多數人申請競合之處理方式為何？若原為「區段徵收」取得是否適用？並簡述釋字第 732、743 號及 111 年憲判字第 15 號之核心憲法意旨。</p>
          <details class="quiz-answer">
            <summary>點此查看四段式黃金擬答</summary>
            <div class="quiz-answer-body">
              <p><strong>(一) 丙之優先購買權（§59、細則 §64、§65）</strong>：本案已依徵收計畫使用後依法變更原使用目的標售，標售機關應<strong>公告 1 個月</strong>，原所有權人丙或其繼承人有依同樣條件優先購買權，應於<strong>決標後 10 日內</strong>自行檢具保證金及證明文件以書面申請，逾期視為放棄。二人以上申請優購時，應於接通知日起 <strong>10 日內</strong>提出協議書，不成按原被徵收土地面積比例計算持分（多數繼承人未協議按申請人數平均計算）。</p>
              <p><strong>(二) 區段徵收排除（§59Ⅲ）</strong>：依條例 §59Ⅲ 明文規定，本條優先購買權於<strong>區段徵收不適用之</strong>。</p>
              <p><strong>(三) 三大釋憲核心意旨</strong>：<strong>釋字 732 號</strong>禁止為土地開發徵收非交通事業所必須之毗鄰地（比例原則）；<strong>釋字 743 號</strong>禁止未經法律明確授權任意移轉徵收地供第三人商業開發（目的拘束原則，對應 §56）；<strong>111 憲判字 15 號</strong>宣示無合法權源令私有農田水利用地照舊使用已構成特別犧牲，應於 3 年內擬定計畫依法徵收補償。</p>
            </div>
          </details>
        </div>
      </div>
    `
  }
);
