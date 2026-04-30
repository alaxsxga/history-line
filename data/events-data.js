window.EVENTS_DATA = {

  meta: { version: "1.0", lastUpdated: "2026-04-28", startYear: 1895, endYear: 2026 },

  categories: [
    { id: "war",      label: "戰爭／軍事衝突", color: "#b3372c" },
    { id: "politics", label: "政治變革／政權",  color: "#5b4a8a" },
    { id: "policy",   label: "政策",           color: "#2f6fa0" },
    { id: "develop",  label: "重大發展",        color: "#3e8a5a" },
    { id: "colonize", label: "殖民／外來統治",  color: "#7a5a2e" },
    { id: "split",    label: "分裂／重大事件",  color: "#c77a1e" },
    { id: "social",   label: "社會運動",        color: "#a23d7a" }
  ],

  regions: [
    { id: "cn", label: "中　國",  color: "#c0392b" },
    { id: "tw", label: "台　灣",  color: "#4a8a5e" },
    { id: "kr", label: "朝鮮半島", color: "#7a6a3a" },
    { id: "sk", label: "南　韓",  color: "#1a4a8a" },
    { id: "nk", label: "北　韓",  color: "#7a1a1a" }
  ],

  events: [
    // ── 中國 ────────────────────────────────────────────────────
    { id:"cn-001", region:"cn", start:1899, end:1901, cat:"war",      weight:4, title:"義和團運動／八國聯軍",    descBrief:"清末排外運動，八國聯軍攻入北京，1901 年簽訂《辛丑條約》。",               hasDetail:false, relatedIds:[],               visible:true, tags:["清朝","外交","列強"],        sources:[] },
    { id:"cn-002", region:"cn", start:1911, end:1912, cat:"politics", weight:5, title:"辛亥革命",               descBrief:"武昌起義推翻清朝，1912 年中華民國成立。",                               hasDetail:false, relatedIds:[],               visible:true, tags:["清朝","革命","中華民國"],    sources:[] },
    { id:"cn-003", region:"cn", start:1912, end:1949, cat:"politics", weight:5, title:"中華民國（大陸時期）",   descBrief:"1912 年建立，至 1949 年中央政府遷台。",                                 hasDetail:false, relatedIds:["tw-008"],        visible:true, tags:["中華民國","民國"],           sources:[] },
    { id:"cn-004", region:"cn", start:1916, end:1928, cat:"war",      weight:3, title:"軍閥割據",               descBrief:"袁世凱死後各地軍閥混戰，直至北伐結束。",                               hasDetail:false, relatedIds:[],               visible:true, tags:["軍閥","內戰"],               sources:[] },
    { id:"cn-005", region:"cn", start:1926, end:1928, cat:"war",      weight:3, title:"北伐",                   descBrief:"國民革命軍自廣州北伐，名義上統一中國。",                               hasDetail:false, relatedIds:[],               visible:true, tags:["國民黨","北伐"],             sources:[] },
    { id:"cn-006", region:"cn", start:1927, end:1937, cat:"war",      weight:4, title:"國共內戰（前期）",       descBrief:"國民黨清黨、剿共與紅軍長征（1934–36）。",                              hasDetail:false, relatedIds:[],               visible:true, tags:["國共內戰","長征","共產黨"],  sources:[] },
    { id:"cn-007", region:"cn", start:1931, end:1945, cat:"war",      weight:5, title:"日本侵華（九一八起）",   descBrief:"1931 九一八事變，1937 七七事變全面抗戰，1945 日本投降。",                hasDetail:false, relatedIds:["tw-001","kr-003"], visible:true, tags:["日本","侵華","抗戰"],       sources:[] },
    { id:"cn-008", region:"cn", start:1937, end:1945, cat:"war",      weight:5, title:"八年抗戰",               descBrief:"中華民族對日全面抗戰，二戰東亞主戰場之一。",                           hasDetail:false, relatedIds:["tw-004"],        visible:true, tags:["抗戰","二戰","日本"],        sources:[] },
    { id:"cn-009", region:"cn", start:1946, end:1949, cat:"war",      weight:5, title:"國共內戰（後期）",       descBrief:"戰後全面內戰，1949 中共建政、國府遷台。",                              hasDetail:false, relatedIds:["tw-007","tw-008"], visible:true, tags:["國共內戰","中共","國民黨"],  sources:[] },
    { id:"cn-010", region:"cn", start:1949, end:2026, cat:"politics", weight:5, title:"中華人民共和國",         descBrief:"1949/10/1 建國，至今。",                                                hasDetail:false, relatedIds:[],               visible:true, tags:["中共","建國"],               sources:[] },
    { id:"cn-011", region:"cn", start:1950, end:1953, cat:"war",      weight:4, title:"抗美援朝（韓戰）",       descBrief:"志願軍入朝參戰，至 1953 年停戰。",                                      hasDetail:false, relatedIds:["sk-010"],        visible:true, tags:["韓戰","志願軍","冷戰"],      sources:[] },
    { id:"cn-012", region:"cn", start:1958, end:1962, cat:"policy",   weight:4, title:"大躍進",                 descBrief:"急速工業化與人民公社化，導致嚴重饑荒。",                               hasDetail:false, relatedIds:[],               visible:true, tags:["毛澤東","饑荒","人民公社"],  sources:[] },
    { id:"cn-013", region:"cn", start:1966, end:1976, cat:"policy",   weight:5, title:"文化大革命",             descBrief:"毛澤東發動的十年政治運動，造成社會巨大動盪。",                         hasDetail:false, relatedIds:[],               visible:true, tags:["毛澤東","文革","政治運動"],  sources:[] },
    { id:"cn-014", region:"cn", start:1978, end:2026, cat:"develop",  weight:5, title:"改革開放",               descBrief:"鄧小平啟動市場化改革，經濟快速增長至今。",                             hasDetail:false, relatedIds:[],               visible:true, tags:["鄧小平","經濟","市場化"],    sources:[] },
    { id:"cn-015", region:"cn", start:1989, end:1989, cat:"split",    weight:5, title:"六四天安門",             descBrief:"北京學運以軍事鎮壓收場。",                                             hasDetail:true,  relatedIds:[],               visible:true, tags:["民主運動","鎮壓","天安門"],  sources:[] },
    { id:"cn-016", region:"cn", start:1997, end:1997, cat:"split",    weight:4, title:"香港回歸",               descBrief:"英國將香港主權移交中國，實行一國兩制。",                               hasDetail:false, relatedIds:[],               visible:true, tags:["香港","一國兩制","英國"],    sources:[] },
    { id:"cn-017", region:"cn", start:1999, end:1999, cat:"split",    weight:3, title:"澳門回歸",               descBrief:"葡萄牙將澳門主權移交中國。",                                            hasDetail:false, relatedIds:[],               visible:true, tags:["澳門","葡萄牙"],             sources:[] },
    { id:"cn-018", region:"cn", start:2001, end:2001, cat:"policy",   weight:3, title:"加入 WTO",               descBrief:"中國正式加入世界貿易組織，深度融入全球經濟。",                         hasDetail:false, relatedIds:[],               visible:true, tags:["WTO","貿易","全球化"],       sources:[] },
    { id:"cn-019", region:"cn", start:2008, end:2008, cat:"develop",  weight:3, title:"北京奧運",               descBrief:"中國首次舉辦夏季奧運。",                                                hasDetail:false, relatedIds:[],               visible:true, tags:["奧運","北京"],               sources:[] },
    { id:"cn-020", region:"cn", start:2012, end:2026, cat:"politics", weight:4, title:"習近平時代",             descBrief:"2012 年十八大就任總書記，至今主政。",                                   hasDetail:false, relatedIds:[],               visible:true, tags:["習近平","威權"],             sources:[] },
    { id:"cn-021", region:"cn", start:2013, end:2026, cat:"policy",   weight:3, title:"一帶一路",               descBrief:"跨國基礎建設與經濟走廊倡議。",                                          hasDetail:false, relatedIds:[],               visible:true, tags:["一帶一路","基礎建設","外交"], sources:[] },
    { id:"cn-022", region:"cn", start:2020, end:2022, cat:"policy",   weight:3, title:"動態清零（COVID-19）",   descBrief:"嚴格封控政策，2022 年末轉向共存。",                                    hasDetail:false, relatedIds:["tw-021"],        visible:true, tags:["COVID-19","防疫","封控"],    sources:[] },

    // ── 台灣 ────────────────────────────────────────────────────
    { id:"tw-001", region:"tw", start:1895, end:1945, cat:"colonize", weight:5, title:"日治時期",               descBrief:"《馬關條約》後台灣割予日本，至 1945 年二戰結束。",                       hasDetail:false, relatedIds:["cn-007","kr-003"], visible:true, tags:["日本","殖民","馬關條約"],   sources:[] },
    { id:"tw-002", region:"tw", start:1915, end:1915, cat:"split",    weight:3, title:"噍吧哖事件",             descBrief:"日治時期規模最大的漢人武裝抗日事件。",                                 hasDetail:false, relatedIds:[],               visible:true, tags:["抗日","武裝抗爭"],           sources:[] },
    { id:"tw-003", region:"tw", start:1930, end:1931, cat:"split",    weight:4, title:"霧社事件",               descBrief:"賽德克族對日武裝抗爭，震驚殖民當局。",                                 hasDetail:false, relatedIds:[],               visible:true, tags:["原住民","抗日","賽德克"],    sources:[] },
    { id:"tw-004", region:"tw", start:1937, end:1945, cat:"policy",   weight:3, title:"皇民化運動",             descBrief:"推行日語與日本文化，強化殖民同化。",                                    hasDetail:false, relatedIds:["cn-008","kr-007"], visible:true, tags:["皇民化","同化","殖民政策"],  sources:[] },
    { id:"tw-005", region:"tw", start:1945, end:1945, cat:"politics", weight:5, title:"終戰／光復",             descBrief:"日本投降，中華民國政府接收台灣。",                                      hasDetail:false, relatedIds:["kr-008"],        visible:true, tags:["光復","終戰","接收"],        sources:[] },
    { id:"tw-006", region:"tw", start:1947, end:1947, cat:"split",    weight:5, title:"二二八事件",             descBrief:"官逼民反導致全島衝突，深刻影響台灣社會。",                             hasDetail:true,  relatedIds:[],               visible:true, tags:["二二八","族群衝突","國民政府"], sources:[] },
    { id:"tw-007", region:"tw", start:1949, end:1987, cat:"politics", weight:5, title:"戒嚴時期",               descBrief:"全台戒嚴 38 年，世界最長戒嚴之一。",                                    hasDetail:false, relatedIds:["cn-009"],        visible:true, tags:["戒嚴","威權","國民黨"],      sources:[] },
    { id:"tw-008", region:"tw", start:1949, end:1949, cat:"politics", weight:5, title:"國府遷台",               descBrief:"中華民國政府與軍民撤退來台。",                                          hasDetail:false, relatedIds:["cn-003","cn-009"], visible:true, tags:["國民政府","撤退","遷台"],    sources:[] },
    { id:"tw-009", region:"tw", start:1949, end:1992, cat:"split",    weight:4, title:"白色恐怖",               descBrief:"政治案件與言論壓制貫穿戒嚴前後期。",                                    hasDetail:false, relatedIds:[],               visible:true, tags:["白色恐怖","政治迫害","威權"], sources:[] },
    { id:"tw-010", region:"tw", start:1950, end:1965, cat:"develop",  weight:3, title:"美援時期",               descBrief:"美國軍經援助穩定台灣經濟與政權。",                                      hasDetail:false, relatedIds:[],               visible:true, tags:["美援","冷戰","經濟"],        sources:[] },
    { id:"tw-011", region:"tw", start:1971, end:1971, cat:"politics", weight:4, title:"退出聯合國",             descBrief:"中華民國於 2758 號決議後退出聯合國。",                                  hasDetail:false, relatedIds:[],               visible:true, tags:["聯合國","外交","中華民國"],  sources:[] },
    { id:"tw-012", region:"tw", start:1974, end:1979, cat:"develop",  weight:3, title:"十大建設",               descBrief:"蔣經國推動的基礎建設，奠定經濟起飛基礎。",                             hasDetail:false, relatedIds:[],               visible:true, tags:["蔣經國","基礎建設","經濟"],  sources:[] },
    { id:"tw-013", region:"tw", start:1979, end:1979, cat:"social",   weight:4, title:"美麗島事件",             descBrief:"黨外人士大規模被捕，推動後續民主運動。",                               hasDetail:false, relatedIds:[],               visible:true, tags:["黨外","民主運動","政治迫害"], sources:[] },
    { id:"tw-014", region:"tw", start:1987, end:1987, cat:"politics", weight:5, title:"解嚴",                   descBrief:"解除戒嚴，開放報禁與黨禁。",                                            hasDetail:false, relatedIds:["sk-013"],        visible:true, tags:["解嚴","民主化","報禁"],      sources:[] },
    { id:"tw-015", region:"tw", start:1991, end:1996, cat:"politics", weight:4, title:"民主轉型／修憲",         descBrief:"國會全面改選、修憲、總統直選。",                                        hasDetail:false, relatedIds:[],               visible:true, tags:["民主化","修憲","選舉"],      sources:[] },
    { id:"tw-016", region:"tw", start:1996, end:1996, cat:"politics", weight:5, title:"首次總統直選",           descBrief:"李登輝當選，台灣首位民選總統。",                                        hasDetail:false, relatedIds:[],               visible:true, tags:["總統直選","李登輝","民主"],  sources:[] },
    { id:"tw-017", region:"tw", start:2000, end:2000, cat:"politics", weight:4, title:"首次政黨輪替",           descBrief:"陳水扁勝選，民進黨首次執政。",                                          hasDetail:false, relatedIds:[],               visible:true, tags:["政黨輪替","陳水扁","民進黨"], sources:[] },
    { id:"tw-018", region:"tw", start:2008, end:2008, cat:"politics", weight:3, title:"第二次政黨輪替",         descBrief:"馬英九勝選，國民黨重返執政。",                                          hasDetail:false, relatedIds:[],               visible:true, tags:["政黨輪替","馬英九","國民黨"], sources:[] },
    { id:"tw-019", region:"tw", start:2014, end:2014, cat:"social",   weight:4, title:"太陽花學運",             descBrief:"反對服貿協議，學生佔領立法院。",                                        hasDetail:false, relatedIds:[],               visible:true, tags:["太陽花","服貿","學運"],      sources:[] },
    { id:"tw-020", region:"tw", start:2016, end:2024, cat:"politics", weight:3, title:"蔡英文執政",             descBrief:"民進黨完全執政，兩岸關係趨冷。",                                        hasDetail:false, relatedIds:[],               visible:true, tags:["蔡英文","民進黨","兩岸"],    sources:[] },
    { id:"tw-021", region:"tw", start:2020, end:2023, cat:"policy",   weight:3, title:"COVID-19 防疫",          descBrief:"初期邊境管制嚴格，2022 年後逐步開放。",                                 hasDetail:false, relatedIds:["cn-022"],        visible:true, tags:["COVID-19","防疫","邊境"],    sources:[] },
    { id:"tw-022", region:"tw", start:2024, end:2026, cat:"politics", weight:3, title:"賴清德執政",             descBrief:"2024/5 就任，延續民進黨路線。",                                         hasDetail:false, relatedIds:[],               visible:true, tags:["賴清德","民進黨"],           sources:[] },

    // ── 朝鮮半島（1948 前） ────────────────────────────────────
    { id:"kr-001", region:"kr", start:1897, end:1910, cat:"politics", weight:4, title:"大韓帝國",               descBrief:"1897 年朝鮮王朝改稱大韓帝國，1910 年被日本強制吞併。",                  hasDetail:false, relatedIds:[],               visible:true, tags:["大韓帝國","朝鮮","近代化"],  sources:[] },
    { id:"kr-002", region:"kr", start:1905, end:1910, cat:"colonize", weight:4, title:"乙巳條約・保護國",       descBrief:"1905 年《乙巳條約》，朝鮮外交權被剝奪，成為日本保護國。",               hasDetail:false, relatedIds:[],               visible:true, tags:["日本","保護國","乙巳條約"],  sources:[] },
    { id:"kr-003", region:"kr", start:1910, end:1945, cat:"colonize", weight:5, title:"日治朝鮮（日帝強占期）", descBrief:"1910 年《日韓合邦條約》，朝鮮半島成為日本殖民地，至 1945 年光復。",   hasDetail:false, relatedIds:["tw-001","cn-007"], visible:true, tags:["日本","殖民","日帝強占"],   sources:[] },
    { id:"kr-004", region:"kr", start:1919, end:1919, cat:"social",   weight:5, title:"三一獨立運動",           descBrief:"1919 年全國性和平示威反抗日本殖民，遭鎮壓，數千人死傷。",               hasDetail:false, relatedIds:[],               visible:true, tags:["獨立運動","三一運動","抗日"], sources:[] },
    { id:"kr-005", region:"kr", start:1919, end:1945, cat:"politics", weight:3, title:"大韓民國臨時政府",       descBrief:"1919 年成立於上海，為朝鮮流亡政府，持續推動獨立運動至光復。",           hasDetail:false, relatedIds:[],               visible:true, tags:["臨時政府","流亡","獨立運動"], sources:[] },
    { id:"kr-006", region:"kr", start:1932, end:1932, cat:"split",    weight:3, title:"尹奉吉炸彈案（上海）",   descBrief:"獨立運動人士尹奉吉在上海虹口公園投擲炸彈，震驚日本。",                 hasDetail:false, relatedIds:[],               visible:true, tags:["獨立運動","上海","尹奉吉"],  sources:[] },
    { id:"kr-007", region:"kr", start:1937, end:1945, cat:"policy",   weight:3, title:"皇民化・創氏改名",       descBrief:"日本強制推行朝鮮語禁令、日式姓名，強化殖民同化政策。",                 hasDetail:false, relatedIds:["tw-004"],        visible:true, tags:["皇民化","同化","殖民政策"],  sources:[] },
    { id:"kr-008", region:"kr", start:1945, end:1945, cat:"politics", weight:5, title:"光復（8·15）",           descBrief:"1945 年 8 月 15 日日本投降，朝鮮半島脫離殖民統治。",                    hasDetail:false, relatedIds:["tw-005"],        visible:true, tags:["光復","終戰","獨立"],        sources:[] },
    { id:"kr-009", region:"kr", start:1945, end:1948, cat:"politics", weight:5, title:"美蘇分割占領（38 度線）", descBrief:"二戰後美蘇各占朝鮮半島南北，為日後南北分裂奠基。",                   hasDetail:false, relatedIds:[],               visible:true, tags:["冷戰","美蘇","38度線","分裂"], sources:[] },

    // ── 南韓（1948 後） ────────────────────────────────────────
    { id:"sk-009", region:"sk", start:1948, end:2026, cat:"politics", weight:5, title:"大韓民國（南韓）",       descBrief:"1948 年 8 月 15 日建國，李承晚就任首任總統。",                          hasDetail:false, relatedIds:["nk-002"],        visible:true, tags:["大韓民國","建國","李承晚"],  sources:[] },
    { id:"sk-010", region:"sk", start:1950, end:1953, cat:"war",      weight:5, title:"韓戰（6·25 戰爭）",      descBrief:"1950 年北韓南侵，聯合國軍介入，中國志願軍入朝，1953 年停火至今。",    hasDetail:false, relatedIds:["cn-011","nk-002"], visible:true, tags:["韓戰","冷戰","聯合國"],     sources:[] },
    { id:"sk-011", region:"sk", start:1961, end:1979, cat:"politics", weight:4, title:"朴正熙威權統治",         descBrief:"1961 年軍事政變奪權，推動「漢江奇蹟」，1979 年遇刺身亡。",             hasDetail:false, relatedIds:[],               visible:true, tags:["朴正熙","威權","漢江奇蹟"],  sources:[] },
    { id:"sk-012", region:"sk", start:1980, end:1980, cat:"social",   weight:5, title:"光州事件（5·18）",       descBrief:"1980 年全斗煥鎮壓民主運動，光州市民武裝抗爭遭血腥鎮壓。",             hasDetail:false, relatedIds:[],               visible:true, tags:["光州","民主運動","鎮壓"],    sources:[] },
    { id:"sk-013", region:"sk", start:1987, end:1987, cat:"social",   weight:4, title:"六月民主運動",           descBrief:"全國大規模街頭抗爭，迫使政府接受直選修憲，開啟民主化。",               hasDetail:false, relatedIds:["tw-014"],        visible:true, tags:["民主運動","六月抗爭","修憲"], sources:[] },
    { id:"sk-014", region:"sk", start:1988, end:1988, cat:"develop",  weight:3, title:"首爾奧運",               descBrief:"第 24 屆夏季奧運，韓國展示「漢江奇蹟」的發展成就。",                    hasDetail:false, relatedIds:[],               visible:true, tags:["奧運","首爾"],               sources:[] },
    { id:"sk-015", region:"sk", start:1997, end:1998, cat:"policy",   weight:3, title:"亞洲金融危機",           descBrief:"韓元暴跌，接受 IMF 紓困，推動金融與企業結構改革。",                     hasDetail:false, relatedIds:[],               visible:true, tags:["金融危機","IMF","經濟"],     sources:[] },
    { id:"sk-016", region:"sk", start:2017, end:2017, cat:"politics", weight:4, title:"朴槿惠彈劾罷免",         descBrief:"因親信干政醜聞，朴槿惠成為韓國首位遭彈劾下台的總統。",                 hasDetail:false, relatedIds:[],               visible:true, tags:["朴槿惠","彈劾"],             sources:[] },
    { id:"sk-017", region:"sk", start:2024, end:2026, cat:"politics", weight:4, title:"尹錫悅戒嚴事件",         descBrief:"2024 年 12 月宣布戒嚴，數小時後國會投票撤銷，隨後遭彈劾，引發憲政危機。", hasDetail:false, relatedIds:[],              visible:true, tags:["尹錫悅","戒嚴","彈劾"],     sources:[] },

    // ── 北韓 ────────────────────────────────────────────────────
    { id:"nk-002", region:"nk", start:1948, end:1994, cat:"politics", weight:5, title:"金日成執政（北韓建國）", descBrief:"1948 年建立朝鮮民主主義人民共和國，推行主體思想，執政至 1994 年逝世。", hasDetail:false, relatedIds:["sk-009","sk-010"], visible:true, tags:["金日成","北韓建國","主體思想"], sources:[] },
    { id:"nk-003", region:"nk", start:1994, end:1998, cat:"policy",   weight:4, title:"苦難的行軍（大飢荒）",   descBrief:"金日成逝世後大旱與體制崩潰導致嚴重糧食危機，估計數十萬至數百萬人死亡。", hasDetail:false, relatedIds:[],              visible:true, tags:["飢荒","糧食危機"],           sources:[] },
    { id:"nk-004", region:"nk", start:1994, end:2011, cat:"politics", weight:4, title:"金正日執政",             descBrief:"繼承父職，推行先軍政治，秘密發展核武。",                               hasDetail:false, relatedIds:[],               visible:true, tags:["金正日","先軍政治","核武"],  sources:[] },
    { id:"nk-005", region:"nk", start:2006, end:2026, cat:"policy",   weight:4, title:"核武開發（北韓）",       descBrief:"2006 年首次地下核試，持續多輪核試爆與彈道飛彈測試。",                   hasDetail:false, relatedIds:[],               visible:true, tags:["核武","彈道飛彈","制裁"],    sources:[] },
    { id:"nk-006", region:"nk", start:2011, end:2026, cat:"politics", weight:4, title:"金正恩執政",             descBrief:"2011 年接任，大幅加速核武與 ICBM 開發，多次核試引發國際制裁。",         hasDetail:false, relatedIds:[],               visible:true, tags:["金正恩","核武","ICBM"],      sources:[] }
  ]
};
