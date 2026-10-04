App({
  globalData: {
    userInfo: null,
    isLoggedIn: false,
    posts: {
      lostfound: [
        {
          id: 1,
          title: '捡到校园卡一张',
          content: '今天在图书馆门口捡到一张校园卡，请失主联系我。',
          author: '张三',
          date: '2026-05-15',
          contactName: '张三',
          contactPhone: '13812345678',
          locationType: 'found',
          location: '图书馆门口',
          images: [],
          comments: []
        },
        {
          id: 2,
          title: '丢失黑色钱包',
          content: '昨天下午在食堂丢失一个黑色钱包，里面有身份证和银行卡，好心人捡到请联系我，必有重谢！',
          author: '李四',
          date: '2026-05-14',
          contactName: '李四',
          contactPhone: '13987654321',
          locationType: 'lost',
          location: '第一食堂',
          images: [],
          comments: []
        }
      ],
      academic: [
        {
          id: 1,
          title: '高等数学期末复习资料分享',
          content: '整理了一份高数复习资料，包含重点知识点和历年真题，需要的同学可以联系我。',
          author: '学霸小王',
          date: '2026-05-14',
          postType: 'resource',
          images: [],
          comments: [],
          liked: false,
          likeCount: 5
        },
        {
          id: 2,
          title: '组队参加数学建模竞赛',
          content: '寻找志同道合的同学一起参加今年的数学建模竞赛，需要有编程基础的同学。',
          author: '竞赛达人',
          date: '2026-05-17',
          postType: 'team',
          images: [],
          comments: [],
          liked: false,
          likeCount: 3
        }
      ]
    },
    favorites: [],
    resourceFavorites: [],
    resourceLibrary: [
      {
        id: 1, name: '高等数学', icon: '📐', count: 12,
        items: [
          { id: 1, icon: '', title: '高数上册期末复习提纲', desc: '包含极限、导数、积分等重点知识点总结', author: '学霸小王', date: '2026-05-10', content: '【高等数学上册复习提纲】\n\n一、函数与极限\n1. 函数的概念与性质\n   - 定义域、值域的求法\n   - 函数的奇偶性、周期性、单调性\n   - 反函数的求法\n\n2. 数列的极限\n   - 极限的定义（ε-N语言）\n   - 收敛数列的性质\n   - 夹逼定理、单调有界定理\n\n3. 函数的极限\n   - 左右极限的概念\n   - 无穷小量与无穷大量\n   - 等价无穷小替换公式\n\n二、导数与微分\n1. 导数的定义\n   - 导数的几何意义（切线斜率）\n   - 可导与连续的关系\n\n2. 求导公式\n   - 基本初等函数求导公式\n   - 复合函数求导（链式法则）\n   - 隐函数求导法\n   - 参数方程求导\n\n3. 微分中值定理\n   - 罗尔定理\n   - 拉格朗日中值定理\n   - 柯西中值定理\n   - 泰勒公式（麦克劳林公式）\n\n三、不定积分\n1. 原函数与不定积分的概念\n2. 基本积分公式\n3. 换元积分法（第一类、第二类）\n4. 分部积分法\n\n四、定积分\n1. 定积分的定义与几何意义\n2. 牛顿-莱布尼茨公式\n3. 定积分的换元法与分部积分法\n4. 广义积分（无穷限、无界函数）\n\n【重点提示】\n- 极限计算是基础，务必熟练掌握等价无穷小替换\n- 导数应用题（最值问题、曲线作图）是考试重点\n- 积分计算需要大量练习，注意换元和分部积分的选择' },
          { id: 2, icon: '📝', title: '高数下册历年真题汇编', desc: '近5年期末考试真题及详细解析', author: '数学课代表', date: '2026-05-08', content: '【高等数学期末考试真题精选】\n\n2025年秋季期末考试\n\n一、选择题（每题3分，共15分）\n1. 设函数f(x)在x=0处连续，且f(0)=0，则lim(x→0) f(x)/x 存在是f(x)在x=0处可导的（ ）\n   A. 充分条件  B. 必要条件  C. 充要条件  D. 既不充分也不必要\n   答案：B\n\n2. 下列级数中收敛的是（ ）\n   A. Σ1/n  B. Σ1/n²  C. Σ(-1)^n  D. Σn\n   答案：B（p级数，p=2>1收敛）\n\n二、计算题（每题8分，共40分）\n1. 求极限：lim(x→0) (sinx - x)/x³\n   解：利用泰勒公式 sinx = x - x³/6 + o(x³)\n   原式 = lim(x→0) (-x³/6)/x³ = -1/6\n\n2. 求不定积分：∫x·e^x dx\n   解：分部积分法\n   = x·e^x - ∫e^x dx = x·e^x - e^x + C = e^x(x-1) + C\n\n三、应用题（15分）\n求曲线y=x³-3x+2的拐点及凹凸区间。\n解：y" = 6x，令y"=0得x=0\n当x<0时，y"<0，曲线凹向下\n当x>0时，y">0，曲线凹向上\n拐点为(0, 2)\n\n【备考建议】\n- 历年真题重复率高，建议至少做3遍\n- 计算题占分最多，平时要多练习\n- 注意书写规范，步骤要完整' },
          { id: 3, icon: '', title: '微积分公式速查手册', desc: '常用微积分公式汇总，方便查阅', author: '笔记达人', date: '2026-05-05', content: '【微积分常用公式速查】\n\n◆ 导数公式\n(sin x)" = cos x\n(cos x)" = -sin x\n(tan x)" = sec²x\n(cot x)" = -csc²x\n(e^x)" = e^x\n(a^x)" = a^x·ln a\n(ln x)" = 1/x\n(log_a x)" = 1/(x·ln a)\n(arcsin x)" = 1/√(1-x²)\n(arccos x)" = -1/√(1-x²)\n(arctan x)" = 1/(1+x²)\n\n◆ 积分公式\nx^n dx = x^(n+1)/(n+1) + C (n≠-1)\n∫1/x dx = ln|x| + C\n∫e^x dx = e^x + C\n∫a^x dx = a^x/ln a + C\n∫sin x dx = -cos x + C\n∫cos x dx = sin x + C\n∫sec²x dx = tan x + C\n∫csc²x dx = -cot x + C\n1/(1+x²) dx = arctan x + C\n∫1/√(1-x²) dx = arcsin x + C\n\n◆ 等价无穷小（x→0）\nsin x ~ x\ntan x ~ x\narcsin x ~ x\narctan x ~ x\n1-cos x ~ x²/2\nln(1+x) ~ x\ne^x - 1 ~ x\n(1+x)^α - 1 ~ αx\n\n◆ 泰勒公式（x→0）\ne^x = 1 + x + x²/2! + x³/3! + ...\nsin x = x - x³/3! + x⁵/5! - ...\ncos x = 1 - x²/2! + x⁴/4! - ...\nln(1+x) = x - x²/2 + x³/3 - ...\n(1+x)^α = 1 + αx + α(α-1)x²/2! + ...' }
        ]
      },
      {
        id: 2, name: '线性代数', icon: '📊', count: 8,
        items: [
          { id: 1, icon: '', title: '线性代数核心概念梳理', desc: '矩阵、行列式、向量空间等核心概念', author: '代数高手', date: '2026-05-12', content: '【线性代数核心概念】\n\n一、行列式\n1. 定义：n阶行列式是n!项的代数和\n2. 性质：\n   - 行列互换，值不变\n   - 两行互换，值变号\n   - 某行乘以k，行列式乘以k\n   - 某行加上另一行的k倍，值不变\n3. 计算方法：\n   - 按行（列）展开\n   - 化为上（下）三角\n   - 范德蒙德行列式\n\n二、矩阵\n1. 矩阵的运算：\n   - 加法：对应元素相加\n   - 数乘：每个元素乘以k\n   - 乘法：前矩阵列数=后矩阵行数\n2. 特殊矩阵：\n   - 单位矩阵E（对角线为1）\n   - 对角矩阵\n   - 对称矩阵（A^T = A）\n   - 正交矩阵（A^T·A = E）\n3. 矩阵的秩：\n   - 非零子式的最高阶数\n   - 初等变换不改变秩\n\n三、向量空间\n1. 线性相关与线性无关\n2. 极大线性无关组\n3. 向量空间的基与维数\n4. 坐标变换\n\n四、线性方程组\n1. 齐次方程组Ax=0：\n   - 有非零解 ⇔ r(A) < n\n   - 基础解系含n-r(A)个向量\n2. 非齐次方程组Ax=b：\n   - 有解 ⇔ r(A) = r(A|b)\n   - 唯一解 ⇔ r(A) = r(A|b) = n\n   - 无穷多解 ⇔ r(A) = r(A|b) < n\n\n五、特征值与特征向量\n1. 定义：Ax = λx（x≠0）\n2. 求法：|λE - A| = 0\n3. 性质：\n   - 特征值之和 = 矩阵的迹\n   - 特征值之积 = 行列式的值\n4. 相似对角化：\n   - n个线性无关特征向量 ⇔ 可对角化' },
          { id: 2, icon: '📝', title: '矩阵运算习题集', desc: '精选矩阵运算练习题100道', author: '习题整理者', date: '2026-05-09', content: '【矩阵运算精选习题】\n\n一、基础计算题\n1. 已知A = [1 2; 3 4]，B = [5 6; 7 8]，求AB和BA\n   解：AB = [19 22; 43 50]\n       BA = [23 34; 31 46]\n   注意：矩阵乘法不满足交换律！\n\n2. 求矩阵A = [2 1; 5 3]的逆矩阵\n   解：|A| = 6-5 = 1\n       A^(-1) = [3 -1; -5 2]\n\n二、行列式计算\n3. 计算行列式 |1 2 3; 4 5 6; 7 8 9|\n   解：第3行 = 第1行 + 第2行，故行列式 = 0\n\n4. 计算范德蒙德行列式 |1 1 1; a b c; a² b² c²|\n   解：= (b-a)(c-a)(c-b)\n\n三、矩阵的秩\n5. 求矩阵A = [1 2 3; 2 4 6; 1 1 1]的秩\n   解：初等行变换 → [1 2 3; 0 0 0; 0 -1 -2]\n       r(A) = 2\n\n四、线性方程组\n6. 解方程组：\n   x + 2y - z = 1\n   2x + 3y + z = 2\n   3x + 5y = 3\n   解：增广矩阵行变换 → 得 x = -1, y = 2, z = 2\n\n【解题技巧】\n- 行列式计算优先用性质化简\n- 求逆矩阵可用伴随矩阵法或初等变换法\n- 判断方程组解的情况先看系数矩阵的秩' }
        ]
      },
      {
        id: 3, name: '概率统计', icon: '📈', count: 6,
        items: [
          { id: 1, icon: '📄', title: '概率论基础知识点总结', desc: '随机变量、分布函数、期望方差等', author: '统计达人', date: '2026-05-11', content: '【概率论基础知识】\n\n一、随机事件与概率\n1. 样本空间Ω：所有可能结果的集合\n2. 事件的关系与运算：\n   - 包含：AB\n   - 并：A∪B\n   - 交：A∩B\n   - 差：A-B\n   - 对立：Ā\n3. 概率的公理化定义：\n   - P(A) ≥ 0\n   - P(Ω) = 1\n   - 可列可加性\n\n二、条件概率与独立性\n1. 条件概率：P(A|B) = P(AB)/P(B)\n2. 乘法公式：P(AB) = P(A)·P(B|A)\n3. 全概率公式：P(A) = ΣP(Bi)·P(A|Bi)\n4. 贝叶斯公式：P(Bi|A) = P(Bi)·P(A|Bi) / ΣP(Bj)·P(A|Bj)\n5. 事件独立：P(AB) = P(A)·P(B)\n\n三、随机变量及其分布\n1. 离散型随机变量：\n   - 分布律：P(X=xi) = pi\n   - 常见分布：\n     · 0-1分布：P(X=1)=p\n     · 二项分布：B(n,p)\n     · 泊松分布：P(λ)\n     · 几何分布\n\n2. 连续型随机变量：\n   - 概率密度函数f(x)\n   - 分布函数F(x) = ∫(-∞,x) f(t)dt\n   - 常见分布：\n     · 均匀分布：U(a,b)\n     · 指数分布：E(λ)\n     · 正态分布：N(μ,σ²)\n\n四、数字特征\n1. 数学期望：\n   - 离散：E(X) = Σxi·pi\n   - 连续：E(X) = ∫x·f(x)dx\n2. 方差：D(X) = E(X²) - [E(X)]²\n3. 常用分布的期望与方差：\n   - B(n,p)：E=np, D=np(1-p)\n   - P(λ)：E=λ, D=λ\n   - U(a,b)：E=(a+b)/2, D=(b-a)²/12\n   - E(λ)：E=1/λ, D=1/λ²\n   - N(μ,σ²)：E=μ, D=σ²' },
          { id: 2, icon: '', title: '统计学常用公式汇总', desc: '假设检验、置信区间等公式速查', author: '公式整理员', date: '2026-05-07', content: '【数理统计常用公式】\n\n一、抽样分布\n1. 样本均值：X̄ = (1/n)ΣXi\n2. 样本方差：S² = (1/(n-1))Σ(Xi-X̄)²\n3. 重要抽样分布：\n   - χ²分布：χ²(n)\n   - t分布：t(n)\n   - F分布：F(n1,n2)\n\n二、参数估计\n1. 点估计：\n   - 矩估计法：用样本矩估计总体矩\n   - 极大似然估计：使似然函数最大\n\n2. 区间估计（正态总体）：\n   - μ的置信区间（σ已知）：\n     X̄ ± z(α/2)·σ/√n\n   - μ的置信区间（σ未知）：\n     X̄ ± t(α/2,n-1)·S/√n\n   - σ²的置信区间：\n     [(n-1)S²/χ²(α/2), (n-1)S²/χ²(1-α/2)]\n\n三、假设检验\n1. 基本步骤：\n   - 提出原假设H0和备择假设H1\n   - 选择检验统计量\n   - 确定显著性水平α\n   - 计算检验统计量的值\n   - 做出判断\n\n2. 常用检验：\n   - Z检验（σ已知）：Z = (X̄-μ0)/(σ/√n)\n   - t检验（σ未知）：t = (X̄-μ0)/(S/√n)\n   - χ²检验（方差）：χ² = (n-1)S²/σ0²\n   - F检验（两总体方差比）：F = S1²/S2²\n\n3. 两类错误：\n   - 第一类错误（弃真）：概率为α\n   - 第二类错误（取伪）：概率为β\n\n【常用临界值】\n- z(0.025) = 1.96\n- z(0.05) = 1.645\n- t(0.025, n-1) 查t分布表' }
        ]
      },
      {
        id: 4, name: '大学英语', icon: '📖', count: 15,
        items: [
          { id: 1, icon: '📚', title: '四级高频词汇表', desc: '精选四级考试高频词汇800个', author: '英语学霸', date: '2026-05-13', content: '【CET-4高频核心词汇】\n\nA\nabandon v. 放弃，抛弃\nability n. 能力，才能\nabroad adv. 在国外\nabsolute adj. 绝对的\nabsorb v. 吸收，吸引\nabstract adj. 抽象的 n. 摘要\nabundant adj. 丰富的，充裕的\nacademic adj. 学术的\naccelerate v. 加速\naccess n. 通道，入口 v. 访问\naccomplish v. 完成，实现\naccount n. 账户，描述 v. 解释\naccurate adj. 准确的\nachieve v. 达到，实现\nacknowledge v. 承认，致谢\nacquire v. 获得，学到\nadapt v. 适应，改编\nadequate adj. 足够的\nadjust v. 调整，适应\nadmire v. 钦佩，赞赏\nadopt v. 采用，收养\nadvance v. 前进 n. 进步\nadvantage n. 优势，有利条件\n\nB\nbarrier n. 障碍，屏障\nbehavior n. 行为，举止\nbenefit n. 利益 v. 有益于\nbeyond prep. 超出\nboundary n. 边界，界限\nbudget n. 预算\nburden n. 负担 v. 使负担\n\nC\ncalculate v. 计算\ncampaign n. 运动，活动\ncapable adj. 有能力的\ncareer n. 职业，事业\nchallenge n./v. 挑战\ncharacter n. 性格，角色\ncharacteristic n. 特征 adj. 特有的\ncircumstance n. 环境，情况\ncivil adj. 公民的，国内的\nclaim v. 声称，要求\nclassify v. 分类\nclimate n. 气候\ncode n. 代码，密码\ncognitive adj. 认知的\ncollapse v./n. 倒塌，崩溃\n\n【记忆技巧】\n- 词根词缀法：如 re-(重新) + view(看) = review(复习)\n- 联想记忆法：将单词与熟悉的事物联系\n- 语境记忆法：在句子中记忆单词用法\n- 每天背诵50个，反复复习' },
          { id: 2, icon: '📝', title: '英语写作万能模板', desc: '议论文、说明文、应用文写作模板', author: '写作达人', date: '2026-05-10', content: '【英语四级写作万能模板】\n\n一、议论文模板（观点对比型）\n\n第一段：引入话题\nNowadays, there is a widespread concern over the issue of ___. Some people believe that ___, while others hold the opposite view.\n\n第二段：正方观点\nThose who support the former opinion argue that ___. First of all, ___. Besides, ___. For example, ___.\n\n第三段：反方观点\nHowever, others maintain that ___. On the one hand, ___. On the other hand, ___. Take ___ as an example, ___.\n\n第四段：个人观点\nFrom my perspective, I tend to agree with the latter/former view. The reasons are as follows. Firstly, ___. Secondly, ___. In conclusion, ___.\n\n二、问题解决型模板\n\n第一段：提出问题\nWith the development of ___, ___ has become a serious problem. It is high time that we took effective measures to solve it.\n\n第二段：分析原因\nThere are several reasons accounting for this problem. To begin with, ___. Moreover, ___. Last but not least, ___.\n\n第三段：解决方案\nTo address this issue, several measures should be taken. First, ___. Second, ___. Third, ___.\n\n第四段：总结\nIn summary, only by ___ can we effectively solve this problem. I am convinced that ___ will be improved in the near future.\n\n【常用连接词】\n- 表递进：furthermore, moreover, in addition, besides\n- 表转折：however, nevertheless, on the contrary, whereas\n- 表因果：therefore, thus, consequently, as a result\n- 表举例：for instance, such as, take ... for example\n- 表总结：in conclusion, to sum up, in a word, all in all' },
          { id: 3, icon: '', title: '听力真题精听材料', desc: '近3年四级听力真题音频及原文', author: '听力小王子', date: '2026-05-06', content: '【四级听力精听训练指南】\n\n一、听力题型分析\n1. 短篇新闻（3篇，7题）\n   - 考查要点：主旨大意、细节信息、数字计算\n   - 常见话题：科技、教育、健康、环境、经济\n\n2. 长对话（2篇，8题）\n   - 考查要点：对话目的、说话人态度、具体细节\n   - 常见场景：校园生活、求职面试、购物、旅行\n\n3. 听力篇章（3篇，10题）\n   - 考查要点：文章主旨、细节理解、推理判断\n   - 常见话题：人物故事、科普知识、社会现象\n\n二、精听训练方法\n1. 第一遍：盲听，把握大意\n   - 不看书，听完整篇文章\n   - 记录关键词和主要信息\n\n2. 第二遍：逐句精听\n   - 听一句，写一句\n   - 听不懂的地方反复听（最多5遍）\n\n3. 第三遍：对照原文\n   - 找出听错、漏听的地方\n   - 分析原因（连读、弱读、生词）\n\n4. 第四遍：跟读模仿\n   - 模仿语音语调\n   - 提高口语表达能力\n\n三、常见听力技巧\n1. 预读选项，预测内容\n2. 注意信号词：but, however, because, so\n3. 抓住首尾句（常含主旨）\n4. 注意数字、时间、地点等细节\n5. 同义替换是常考考点\n\n【高频场景词汇】\n- 校园：assignment, deadline, scholarship, campus\n- 求职：resume, interview, qualification, salary\n- 旅行：destination, reservation, departure, accommodation\n- 健康：symptom, diagnosis, prescription, recovery' }
        ]
      },
      {
        id: 5, name: '计算机基础', icon: '💻', count: 20,
        items: [
          { id: 1, icon: '🌐', title: '计算机网络重点笔记', desc: 'OSI七层模型、TCP/IP协议详解', author: '网络工程师', date: '2026-05-14', content: '【计算机网络核心知识点】\n\n一、OSI七层模型\n1. 物理层（Physical Layer）\n   - 功能：比特流传输\n   - 设备：集线器、中继器\n   - 协议：RS-232、RJ45\n\n2. 数据链路层（Data Link Layer）\n   - 功能：帧传输、差错控制、流量控制\n   - 设备：交换机、网桥\n   - 协议：Ethernet、PPP、HDLC\n\n3. 网络层（Network Layer）\n   - 功能：路由选择、分组转发\n   - 设备：路由器\n   - 协议：IP、ICMP、ARP、RIP、OSPF\n\n4. 传输层（Transport Layer）\n   - 功能：端到端通信、可靠传输\n   - 协议：TCP（可靠）、UDP（不可靠）\n\n5. 会话层（Session Layer）\n   - 功能：建立、管理、终止会话\n\n6. 表示层（Presentation Layer）\n   - 功能：数据格式转换、加密解密\n\n7. 应用层（Application Layer）\n   - 功能：为用户提供网络服务\n   - 协议：HTTP、FTP、SMTP、DNS\n\n二、TCP vs UDP\n| 特性 | TCP | UDP |\n|------|-----|-----|\n| 连接 | 面向连接 | 无连接 |\n| 可靠性 | 可靠传输 | 不可靠 |\n| 速度 | 较慢 | 较快 |\n| 应用 | HTTP、FTP、SMTP | DNS、视频流、游戏 |\n\n三、IP地址与子网划分\n1. IP地址分类：\n   - A类：1.0.0.0 ~ 126.255.255.255\n   - B类：128.0.0.0 ~ 191.255.255.255\n   - C类：192.0.0.0 ~ 223.255.255.255\n\n2. 子网掩码：\n   - A类默认：255.0.0.0 (/8)\n   - B类默认：255.255.0.0 (/16)\n   - C类默认：255.255.255.0 (/24)\n\n四、HTTP协议\n1. 请求方法：GET、POST、PUT、DELETE\n2. 状态码：\n   - 200：成功\n   - 301：永久重定向\n   - 404：未找到\n   - 500：服务器错误' },
          { id: 2, icon: '📝', title: '数据结构算法模板', desc: '排序、查找、树、图等经典算法实现', author: '算法大神', date: '2026-05-11', content: '【常用数据结构与算法模板】\n\n一、排序算法\n1. 快速排序（平均O(nlogn)）\nfunction quickSort(arr) {\n  if (arr.length <= 1) return arr;\n  let pivot = arr[0];\n  let left = arr.slice(1).filter(x => x <= pivot);\n  let right = arr.slice(1).filter(x => x > pivot);\n  return [...quickSort(left), pivot, ...quickSort(right)];\n}\n\n2. 归并排序（稳定O(nlogn)）\nfunction mergeSort(arr) {\n  if (arr.length <= 1) return arr;\n  let mid = Math.floor(arr.length / 2);\n  let left = mergeSort(arr.slice(0, mid));\n  let right = mergeSort(arr.slice(mid));\n  return merge(left, right);\n}\n\n二、查找算法\n1. 二分查找（O(logn)）\nfunction binarySearch(arr, target) {\n  let left = 0, right = arr.length - 1;\n  while (left <= right) {\n    let mid = Math.floor((left + right) / 2);\n    if (arr[mid] === target) return mid;\n    if (arr[mid] < target) left = mid + 1;\n    else right = mid - 1;\n  }\n  return -1;\n}\n\n三、树结构\n1. 二叉树遍历：\n   - 前序：根→左→右\n   - 中序：左→根→右\n   - 后序：左→右→根\n   - 层序：从上到下，从左到右\n\n2. 二叉搜索树（BST）：\n   - 左子树所有节点 < 根节点\n   - 右子树所有节点 > 根节点\n\n四、图算法\n1. BFS（广度优先搜索）：用队列实现\n2. DFS（深度优先搜索）：用栈或递归实现\n3. 最短路径：Dijkstra算法\n\n【算法复杂度速查】\n- 冒泡排序：O(n²)\n- 快速排序：平均O(nlogn)，最坏O(n²)\n- 归并排序：O(nlogn)\n- 堆排序：O(nlogn)\n- 二分查找：O(logn)\n- 哈希查找：平均O(1)' },
          { id: 3, icon: '⚙️', title: '操作系统复习提纲', desc: '进程管理、内存管理、文件系统等', author: '系统管理员', date: '2026-05-08', content: '【操作系统核心知识点】\n\n一、进程管理\n1. 进程与线程的区别：\n   - 进程：资源分配的基本单位\n   - 线程：CPU调度的基本单位\n   - 一个进程可包含多个线程\n\n2. 进程状态转换：\n   就绪 → 运行 → 阻塞\n   ↑              ↓\n   └────── 唤醒 ─┘\n\n3. 进程调度算法：\n   - FCFS（先来先服务）\n   - SJF（短作业优先）\n   - 优先级调度\n   - 时间片轮转（RR）\n   - 多级反馈队列\n\n4. 进程同步与互斥：\n   - 临界区：访问共享资源的代码段\n   - 信号量：P操作（wait）、V操作（signal）\n   - 经典问题：生产者-消费者、读者-写者、哲学家进餐\n\n二、内存管理\n1. 内存分配方式：\n   - 连续分配：单一连续、固定分区、动态分区\n   - 非连续分配：分页、分段、段页式\n\n2. 页面置换算法：\n   - OPT（最佳置换）\n   - FIFO（先进先出）\n   - LRU（最近最少使用）\n   - Clock算法\n\n3. 虚拟内存：\n   - 请求分页系统\n   - 缺页中断处理\n   - 抖动现象及预防\n\n三、文件系统\n1. 文件逻辑结构：\n   - 顺序文件\n   - 索引文件\n   - 索引顺序文件\n\n2. 目录结构：\n   - 单级目录\n   - 两级目录\n   - 树形目录（常用）\n\n3. 磁盘调度算法：\n   - FCFS\n   - SSTF（最短寻道时间优先）\n   - SCAN（电梯算法）\n   - C-SCAN（循环扫描）\n\n四、死锁\n1. 死锁产生的四个必要条件：\n   - 互斥条件\n   - 请求和保持条件\n   - 不剥夺条件\n   - 循环等待条件\n\n2. 死锁处理方法：\n   - 预防：破坏四个必要条件之一\n   - 避免：银行家算法\n   - 检测与解除：资源分配图' }
        ]
      },
      {
        id: 6, name: '物理实验', icon: '⚛️', count: 9,
        items: [
          { id: 1, icon: '📋', title: '大学物理实验报告模板', desc: '标准实验报告格式及写作规范', author: '实验课代表', date: '2026-05-12', content: '【大学物理实验报告标准模板】\n\n实验名称：_______________\n实验日期：_______________\n实验者：_______________\n同组人：_______________\n\n一、实验目的\n1. ______________________________\n2. ______________________________\n\n二、实验原理\n（简要说明实验所依据的物理原理，包括必要的公式推导）\n\n三、实验仪器\n（列出所用仪器的名称、型号、精度等）\n\n四、实验步骤\n1. ______________________________\n2. ______________________________\n3. ______________________________\n\n五、数据记录与处理\n（用表格记录原始数据，注明单位）\n\n| 测量次数 | 物理量1 | 物理量2 | 计算结果 |\n|---------|--------|--------|---------|\n| 1       |        |        |         |\n| 2       |        |        |         |\n| 3       |        |        |         |\n\n六、数据处理\n1. 平均值计算：\n   x̄ = (x₁ + x₂ + ... + xn) / n\n\n2. 标准偏差：\n   S = √[Σ(xi - x̄)² / (n-1)]\n\n3. 不确定度评定：\n   - A类不确定度：uA = S/√n\n   - B类不确定度：uB = Δ仪/√3\n   - 合成不确定度：uc = √(uA² + uB²)\n\n4. 结果表示：\n   x = x ± uc (单位)，P = ___%\n\n七、误差分析\n（分析实验中可能存在的系统误差和随机误差来源）\n\n八、思考题\n（回答实验指导书中的思考题）\n\n九、实验结论\n（总结实验结果，验证物理规律）\n\n【注意事项】\n- 数据记录必须用钢笔或签字笔\n- 不得涂改原始数据，错误数据划掉重写\n- 有效数字位数要与仪器精度匹配\n- 图表要标注标题、坐标轴名称和单位' },
          { id: 2, icon: '📊', title: '物理实验数据处理方法', desc: '误差分析、有效数字、作图法等', author: '数据处理员', date: '2026-05-09', content: '【物理实验数据处理方法】\n\n一、有效数字\n1. 定义：从第一个非零数字开始到最后一位数字\n2. 规则：\n   - 0.0023 → 2位有效数字\n   - 2.30 → 3位有效数字\n   - 2.30×10³ → 3位有效数字\n3. 运算规则：\n   - 加减法：以小数点后位数最少的为准\n   - 乘除法：以有效数字位数最少的为准\n\n二、误差分类\n1. 系统误差：\n   - 仪器误差（仪器精度限制）\n   - 方法误差（理论近似）\n   - 环境误差（温度、湿度影响）\n   - 特点：具有确定性，可修正\n\n2. 随机误差：\n   - 由偶然因素引起\n   - 特点：服从正态分布，可通过多次测量减小\n\n3. 粗大误差：\n   - 由操作失误引起\n   - 处理方法：剔除异常数据\n\n三、不确定度评定\n1. A类评定（统计方法）：\n   uA = S/√n = √[Σ(xi-x̄)²/(n(n-1))]\n\n2. B类评定（非统计方法）：\n   uB = a/k\n   - a：误差限\n   - k：置信因子（均匀分布k=√3）\n\n3. 合成标准不确定度：\n   uc = √(uA² + uB²)\n\n4. 扩展不确定度：\n   U = k·uc（k通常取2或3）\n\n四、作图法\n1. 坐标纸选择：毫米坐标纸\n2. 坐标轴标注：\n   - 标明物理量名称和单位\n   - 刻度均匀，数字清晰\n3. 描点：用"×"或"⊙"表示\n4. 连线：\n   - 直线：用直尺画最佳拟合直线\n   - 曲线：用曲线板平滑连接\n5. 图名：写在图的下方\n\n五、逐差法\n适用于等间隔测量的数据处理\nΔx = [(x₄+x₅+x₆) - (x₁+x₂+x₃)] / (3×间隔)\n\n六、最小二乘法（线性拟合）\ny = a + bx\nb = [nΣxy - Σx·Σy] / [nΣx² - (Σx)²]\na = (Σy - b·Σx) / n' }
        ]
      },
      {
        id: 7, name: '考研资料', icon: '🎓', count: 25,
        items: [
          { id: 1, icon: '📄', title: '考研数学一复习全书', desc: '高等数学、线性代数、概率论全覆盖', author: '考研上岸者', date: '2026-05-15', content: '【考研数学一复习指南】\n\n一、高等数学（约56%）\n1. 函数、极限、连续\n   - 重点：极限计算、连续性判断、间断点分类\n   - 常考：等价无穷小、洛必达法则、泰勒公式\n\n2. 一元函数微分学\n   - 重点：导数计算、微分中值定理、导数应用\n   - 常考：极值最值、曲线作图、罗尔定理证明\n\n3. 一元函数积分学\n   - 重点：不定积分、定积分计算、广义积分\n   - 常考：换元法、分部积分、定积分应用（面积、体积）\n\n4. 向量代数与空间解析几何\n   - 重点：向量运算、平面与直线方程\n   - 常考：夹角计算、距离计算\n\n5. 多元函数微分学\n   - 重点：偏导数、全微分、方向导数\n   - 常考：极值问题、条件极值（拉格朗日乘数法）\n\n6. 多元函数积分学\n   - 重点：二重积分、三重积分、曲线曲面积分\n   - 常考：格林公式、高斯公式、斯托克斯公式\n\n7. 无穷级数\n   - 重点：数项级数判敛、幂级数展开\n   - 常考：比值判别法、收敛域、和函数\n\n8. 常微分方程\n   - 重点：一阶微分方程、二阶常系数线性方程\n   - 常考：变量分离、齐次方程、伯努利方程\n\n二、线性代数（约22%）\n1. 行列式、矩阵、向量\n2. 线性方程组\n3. 特征值与特征向量\n4. 二次型\n\n三、概率论与数理统计（约22%）\n1. 随机事件与概率\n2. 随机变量及其分布\n3. 多维随机变量\n4. 数字特征\n5. 大数定律与中心极限定理\n6. 数理统计基本概念\n7. 参数估计与假设检验\n\n【复习建议】\n- 基础阶段（3-6月）：全面复习教材，打牢基础\n- 强化阶段（7-9月）：大量刷题，总结题型\n- 冲刺阶段（10-12月）：真题模拟，查漏补缺\n- 每天至少3小时数学复习时间' },
          { id: 2, icon: '', title: '考研英语长难句解析', desc: '精选100个长难句逐句分析', author: '英语老师', date: '2026-05-12', content: '【考研英语长难句分析方法】\n\n一、长难句分析步骤\n1. 找主干：确定主语、谓语、宾语\n2. 识从句：找出定语从句、状语从句、名词性从句\n3. 辨结构：识别并列结构、非谓语结构、插入语\n4. 理逻辑：理解各部分之间的逻辑关系\n5. 组句意：将各部分意思组合成完整句意\n\n二、经典长难句解析\n\n例句1：\n"The fact that the Apple iPad has proved to be such a resounding success, despite its limitations, suggests that there is still considerable room for innovation in the tablet computing market."\n\n分析：\n- 主干：The fact suggests that...\n- 同位语从句：that the Apple iPad has proved to be such a resounding success\n- 插入语：despite its limitations\n- 宾语从句：that there is still considerable room for innovation...\n\n翻译：尽管存在局限性，苹果iPad已被证明取得了巨大成功，这一事实表明平板电脑市场仍有相当大的创新空间。\n\n例句2：\n"Whether the Government should increase the financing of pure science at the expense of technology or vice versa often depends on the issue of which is seen as the driving force."\n\n分析：\n- 主语从句：Whether the Government should increase... or vice versa\n- 谓语：depends on\n- 宾语：the issue\n- 定语从句：which is seen as the driving force\n\n翻译：政府是否应该以增加纯科学经费为代价来增加技术经费，或者反之，通常取决于哪个被视为驱动力的问题。\n\n三、常见从句类型\n1. 定语从句：修饰名词，由that/which/who引导\n2. 状语从句：表示时间、条件、原因等\n3. 名词性从句：作主语、宾语、表语、同位语\n\n四、特殊结构\n1. 倒装句：否定词开头、only+状语开头\n2. 强调句：It is/was... that/who...\n3. 虚拟语气：if条件句、wish、suggest等\n\n【练习建议】\n- 每天分析3-5个长难句\n- 先找主干，再分析修饰成分\n- 对照译文检验理解是否正确' },
          { id: 3, icon: '', title: '考研政治思维导图', desc: '马原、毛中特、史纲、思修全梳理', author: '政治学霸', date: '2026-05-10', content: '【考研政治知识框架】\n\n一、马克思主义基本原理（约24%）\n1. 马克思主义哲学\n   - 唯物论：物质决定意识\n   - 辩证法：联系、发展、矛盾\n   - 认识论：实践与认识的关系\n   - 历史唯物主义：社会存在与社会意识\n\n2. 马克思主义政治经济学\n   - 商品与货币\n   - 剩余价值理论\n   - 资本主义经济制度\n\n3. 科学社会主义\n   - 社会主义从空想到科学\n   - 共产主义社会的基本特征\n\n二、毛泽东思想和中国特色社会主义理论体系概论（约30%）\n1. 毛泽东思想\n   - 新民主主义革命理论\n   - 社会主义改造理论\n   - 社会主义建设初步探索\n\n2. 邓小平理论\n   - 社会主义本质论\n   - 社会主义初级阶段理论\n   - 改革开放理论\n\n3. "三个代表"重要思想\n4. 科学发展观\n5. 习近平新时代中国特色社会主义思想\n   - 八个明确\n   - 十四个坚持\n   - 五位一体总体布局\n   - 四个全面战略布局\n\n三、中国近现代史纲要（约14%）\n1. 旧民主主义革命时期（1840-1919）\n2. 新民主主义革命时期（1919-1949）\n3. 社会主义革命和建设时期（1949-1978）\n4. 改革开放和现代化建设新时期（1978至今）\n\n四、思想道德修养与法律基础（约16%）\n1. 思想道德修养\n   - 人生观、价值观\n   - 理想信念\n   - 中国精神\n   - 社会主义核心价值观\n\n2. 法律基础\n   - 宪法\n   - 民法\n   - 刑法\n   - 行政法\n\n五、形势与政策（约16%）\n- 年度重大时事\n- 党和国家重要会议\n- 国际形势分析\n\n【复习策略】\n- 马原：理解为主，重在逻辑\n- 毛中特：记忆为主，关注最新表述\n- 史纲：时间线梳理，重大事件记忆\n- 思修：结合生活实际理解\n- 时政：考前3个月重点突击' },
          { id: 4, icon: '💻', title: '考研专业课笔记汇总', desc: '计算机专业课408核心知识点', author: '计算机考研党', date: '2026-05-08', content: '【计算机专业基础综合（408）核心知识点】\n\n一、数据结构（45分）\n1. 线性表\n   - 顺序表：插入O(n)、删除O(n)、查找O(1)\n   - 链表：插入O(1)、删除O(1)、查找O(n)\n\n2. 栈和队列\n   - 栈：后进先出（LIFO）\n   - 队列：先进先出（FIFO）\n   - 应用：表达式求值、括号匹配、层次遍历\n\n3. 树与二叉树\n   - 二叉树性质：第i层最多2^(i-1)个节点\n   - 遍历：前序、中序、后序、层序\n   - 特殊树：BST、AVL、哈夫曼树\n\n4. 图\n   - 存储：邻接矩阵、邻接表\n   - 遍历：BFS、DFS\n   - 最短路径：Dijkstra、Floyd\n   - 最小生成树：Prim、Kruskal\n\n5. 查找\n   - 顺序查找：O(n)\n   - 二分查找：O(logn)\n   - 哈希查找：平均O(1)\n   - B树和B+树\n\n6. 排序\n   - 插入排序：O(n²)\n   - 快速排序：平均O(nlogn)\n   - 归并排序：O(nlogn)\n   - 堆排序：O(nlogn)\n\n二、计算机组成原理（45分）\n1. 计算机系统概述\n2. 数据的表示和运算\n3. 存储器层次结构\n4. 指令系统\n5. 中央处理器（CPU）\n6. 总线\n7. 输入输出系统\n\n三、操作系统（35分）\n1. 进程管理\n2. 内存管理\n3. 文件管理\n4. 输入输出管理\n\n四、计算机网络（25分）\n1. 计算机网络体系结构\n2. 物理层\n3. 数据链路层\n4. 网络层\n5. 传输层\n6. 应用层\n\n【复习建议】\n- 数据结构：重点掌握算法实现和复杂度分析\n- 组成原理：理解计算机工作原理\n- 操作系统：掌握核心概念和算法\n- 计算机网络：理解协议分层和各层功能\n- 真题至少做3遍，总结常考知识点' }
        ]
      },
      {
        id: 8, name: '考证题库', icon: '📝', count: 18,
        items: [
          { id: 1, icon: '📄', title: '计算机二级C语言题库', desc: '选择题+操作题历年真题汇编', author: '考证达人', date: '2026-05-13', content: '【计算机二级C语言考试要点】\n\n一、考试形式\n- 考试时间：120分钟\n- 满分：100分\n- 题型：选择题40分 + 操作题60分\n- 操作题：程序填空、程序修改、程序设计\n\n二、C语言基础\n1. 数据类型\n   - 基本类型：int、float、double、char\n   - 构造类型：数组、结构体、共用体\n   - 指针类型：*p\n   - 空类型：void\n\n2. 运算符与表达式\n   - 算术运算符：+ - * / %\n   - 关系运算符：> < >= <= == !=\n   - 逻辑运算符：&& || !\n   - 位运算符：& | ^ ~ << >>\n\n3. 控制结构\n   - 顺序结构\n   - 选择结构：if-else、switch-case\n   - 循环结构：for、while、do-while\n\n三、函数\n1. 函数定义与调用\n2. 参数传递：值传递、地址传递\n3. 递归函数\n4. 变量作用域：局部变量、全局变量\n\n四、指针\n1. 指针的概念与定义\n2. 指针与数组\n3. 指针与字符串\n4. 指针与函数\n\n五、结构体与链表\n1. 结构体定义与使用\n2. 结构体数组\n3. 链表的基本操作：\n   - 创建链表\n   - 插入节点\n   - 删除节点\n   - 遍历链表\n\n六、文件操作\n1. 文件打开与关闭：fopen、fclose\n2. 文件读写：fread、fwrite、fprintf、fscanf\n3. 文件定位：fseek、ftell、rewind\n\n【备考建议】\n- 选择题：刷历年真题，总结常考知识点\n- 程序填空：注意语法和逻辑\n- 程序修改：找语法错误和逻辑错误\n- 程序设计：掌握常见算法（排序、查找、字符串处理）\n- 考前至少完成10套完整模拟题' },
          { id: 2, icon: '📝', title: '教师资格证笔试资料', desc: '综合素质+教育知识与能力重点', author: '准教师', date: '2026-05-10', content: '【教师资格证笔试核心考点】\n\n一、综合素质（中学/小学/幼儿通用）\n1. 职业理念\n   - 教育观：素质教育的基本内涵\n   - 学生观：以人为本的学生观\n   - 教师观：新课改背景下的教师角色\n\n2. 教育法律法规\n   - 《教育法》《义务教育法》\n   - 《教师法》《未成年人保护法》\n   - 学生权利保护\n\n3. 教师职业道德\n   - 爱国守法、爱岗敬业\n   - 关爱学生、教书育人\n   - 为人师表、终身学习\n\n4. 文化素养\n   - 历史、科学、文学、艺术常识\n\n5. 基本能力\n   - 阅读理解能力\n   - 逻辑思维能力\n   - 信息处理能力\n   - 写作能力\n\n二、教育知识与能力（中学）\n1. 教育基础知识和基本原理\n   - 教育的本质与功能\n   - 教育目的与教育制度\n   - 教育与人的发展、社会发展的关系\n\n2. 中学课程\n   - 课程类型\n   - 课程内容\n   - 新课改理念\n\n3. 中学教学\n   - 教学过程的基本规律\n   - 教学原则：直观性、启发性、循序渐进等\n   - 教学方法：讲授法、讨论法、演示法等\n   - 教学组织形式\n\n4. 中学生学习心理\n   - 认知过程：感觉、知觉、记忆、思维\n   - 学习动机理论\n   - 学习迁移\n\n5. 中学生发展心理\n   - 认知发展：皮亚杰认知发展阶段理论\n   - 情绪情感发展\n   - 人格发展\n\n6. 中学生心理辅导\n   - 心理健康标准\n   - 常见心理问题及辅导方法\n\n7. 德育\n   - 德育原则：疏导原则、尊重与严格要求相结合\n   - 德育方法：说服教育法、榜样示范法\n   - 德育途径\n\n8. 班级管理与教师心理\n   - 班级管理内容\n   - 班主任工作内容\n   - 教师心理健康\n\n【备考建议】\n- 综合素质：重点背诵职业理念和职业道德\n- 教育知识：理解为主，结合案例分析\n- 材料分析题：先判断考点，再结合材料分析\n- 写作题：围绕教育主题，结构清晰，论点明确' },
          { id: 3, icon: '🎤', title: '普通话水平测试题库', desc: '字音、词语、朗读、说话全练习', author: '播音爱好者', date: '2026-05-07', content: '【普通话水平测试备考指南】\n\n一、测试内容与分值\n1. 读单音节字词（100个，10分）\n2. 读多音节词语（50个，20分）\n3. 朗读短文（1篇，30分）\n4. 命题说话（2选1，40分）\n\n二、常见易错字音\n1. 平翘舌音：\n   - 平舌音（z c s）：资、次、思\n   - 翘舌音（zh ch sh）：知、吃、诗\n   - 对比练习：四十是四十，十四是十四\n\n2. 前后鼻音：\n   - 前鼻音（an en in）：安、恩、因\n   - 后鼻音（ang eng ing）：昂、eng、英\n   - 对比练习：心烦-心房，真诚-征程\n\n3. n和l：\n   - n：牛、奶、南\n   - l：流、来、兰\n   - 对比练习：牛奶-流来，无奈-无赖\n\n4. f和h：\n   - f：发、飞、风\n   - h：花、灰、荒\n   - 对比练习：发生-花生，公费-工会\n\n三、朗读技巧\n1. 语速适中：每分钟约200字\n2. 停顿合理：按意群停顿\n3. 重音准确：突出关键词\n4. 语调自然：避免朗读腔\n5. 情感投入：根据文章内容调整语气\n\n四、命题说话技巧\n1. 常见话题：\n   - 我的愿望/理想\n   - 我尊敬的人\n   - 我喜欢的节日\n   - 谈谈美食/服饰\n   - 我的学习生活\n\n2. 说话结构：\n   - 开头：引出话题（30秒）\n   - 主体：详细叙述（2分钟）\n   - 结尾：总结感受（30秒）\n\n3. 注意事项：\n   - 必须说满3分钟\n   - 避免背诵感，自然表达\n   - 注意语音标准，减少方言音\n   - 内容健康向上\n\n【评分标准】\n- 一级甲等：97分以上\n- 一级乙等：92-96.9分\n- 二级甲等：87-91.9分\n- 二级乙等：80-86.9分\n- 三级甲等：70-79.9分\n\n【备考建议】\n- 每天练习发音30分钟\n- 录音自查，纠正发音问题\n- 朗读文章每天至少1篇\n- 命题说话提前准备素材' }
        ]
      }
    ]
  },

  onLaunch() {
    try {
      const DataManager = require('./utils/dataManager.js')

      DataManager.syncAllFromStorage()

      const userInfo = wx.getStorageSync('userInfo')
      const isLoggedIn = wx.getStorageSync('isLoggedIn')

      if (userInfo && isLoggedIn) {
        this.globalData.userInfo = userInfo
        this.globalData.isLoggedIn = true
      }

      if (!this.globalData.posts || !this.globalData.posts.lostfound) {
        this.globalData.posts = { lostfound: [], academic: [] }
      }

      DataManager.completeLostfoundPosts()
    } catch (error) {
      console.error('[App Launch] 初始化失败', error)
    }
  },

})