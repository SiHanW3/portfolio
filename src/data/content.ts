export const profile = {
  name: "王思涵",
  tagline: "数据科学 · 金融工程",
  photo: "/photo.jpg",
  address: "深圳市龙岗区龙翔大道2001号第八书院A栋412室",
  phone: "(86) 137 2350 5521",
  email: "sihanwang3@link.cuhk.edu.cn",
  about:
    "香港中文大学（深圳）金融工程理学硕士项目在读，本科毕业于上海财经大学数据科学与大数据技术专业，获得工学学士学位。专注于将机器学习与深度学习方法应用于金融量化研究和数据分析场景，拥有从数据采集、特征工程到模型训练、策略回测的端到端项目经验。深度使用体验AI应用，积极学习相关原理，探索AI技术在金融领域的更多可能性。",
};

export const education = [
  {
    school: "香港中文大学（深圳）",
    schoolEn: "The Chinese University of Hong Kong, Shenzhen",
    department: "数据科学学院",
    degree: "理学硕士 · 金融工程",
    period: "2025 – 至今",
    gpa: "3.94 / 4.0",
    scholarship: "提前批录取奖学金（半额学费减免）",
    courses: [
      "机器学习(A)",
      "随机过程(A)",
      "最优化(A)",
      "金融衍生品(A)",
      "投资科学(A-)",
    ],
  },
  {
    school: "上海财经大学",
    schoolEn: "Shanghai University of Finance and Economics",
    department: "信息管理与工程学院",
    degree: "工学学士 · 数据科学与大数据技术",
    period: "2021 – 2025",
    gpa: "3.83 / 4.0",
    rank: "年级排名 1 / 90",
    honors: ["荣誉学士学位", "上海市优秀毕业生", "人民奖学金二等奖"],
    courses: [
      "深度学习(96)",
      "机器学习(90)",
      "随机过程(98)",
      "Python(93)",
      "C++(100)",
      "数据库(92)",
    ],
  },
];

export interface Project {
  title: string;
  period: string;
  role: string;
  tags: string[];
  summary: string;
  highlights: string[];
  pdfFile?: string;
  feishuLinks?: { label: string; url: string }[];
}

export const projects: Project[] = [
  {
    title: "基于限价订单簿的深度学习高频预测系统",
    period: "2026.03",
    role: "独立研究员",
    tags: ["深度学习", "时序卷积", "量化金融", "期货", "MCP/Agent"],
    summary:
      "基于中国期货市场限价订单簿高频数据，完成从特征工程、模型训练、信号生成到策略回测的端到端量化研究流程。",
    highlights: [
      "使用步长/价差切片方法生成样本张量，训练扩张时序因果卷积模型",
      "实现数据预处理与模型训练解耦的可扩展架构",
      "集成 MCP 工具打通数据孤岛，Agent 规范输出格式，并行执行长任务",
      "设计专用 Skill 规范期货数据拉取与系统配置",
    ],
  },
  {
    title: "基于 OpenClaw 的个人投研助手",
    period: "2026.03",
    role: "独立研究员",
    tags: ["Agent", "LLM", "飞书", "云端部署", "自动化"],
    summary:
      "在腾讯云服务器部署 OpenClaw，接入飞书与 Agent 进行信息互动，搭建覆盖公告分析、个股研究、研报复现的自动化投研流程。",
    highlights: [
      "定时抓取 A 股公告，自动分类识别并提取关键信息",
      "整合行业、财务、新闻、研报等多源数据的个股深度分析",
      "研报 PDF 解析 → 策略提取 → 确定性回测 → 标准化报告输出",
    ],
    feishuLinks: [
      { label: "📊 公告分析飞书表格", url: "https://lcn7zwuopwkr.feishu.cn/base/JGZYb8uaNaASphsv144cimtTnJq" },
      { label: "📈 紫金矿业个股分析报告", url: "https://lcn7zwuopwkr.feishu.cn/docx/Z3GGd93WEo4CJWxKsSOcV0Glnyb" },
      { label: "📋 策略复现报告", url: "https://lcn7zwuopwkr.feishu.cn/docx/N9mjd42fzolJkBx4ZwOcKrhDnUd" },
    ],
  },
  {
    title: "现金股利支付意愿预测",
    period: "2025.01 – 2025.04",
    role: "独立研究员 · 毕业论文",
    tags: ["机器学习", "集成学习", "深度学习", "金融", "毕业论文"],
    summary:
      "基于 A 股上市公司 2010-2023 年数据，构建 100 项特征的多维度指标体系，对比 12 种机器学习模型预测企业分红意愿。",
    highlights: [
      "44,991 条样本，100 项特征，分层递进缺失值填补",
      "对比 LR、SVM、NB、RF、GBDT、XGBoost、LSTM、GRU 等 12 种模型",
      "集成学习模型表现最优，每股收益和净资产收益率为核心驱动因素",
    ],
    pdfFile: "/files/现金股利支付意愿研究.pdf",
  },
  {
    title: "肺炎支原体患者肺实变风险预测",
    period: "2023.12 – 2024.10",
    role: "核心研究员",
    tags: ["临床数据", "统计检验", "逻辑回归", "医疗AI"],
    summary:
      "基于上海新华医院 2,651 例儿科临床数据，利用统计检验与机器学习方法挖掘关键致病特征并构建风险预测模型。",
    highlights: [
      "6,470 字段复杂临床数据 ETL 处理，90% 缺失阈值特征筛选",
      "319 项计数资料 Mann-Whitney U 检验，104 项计量资料卡方检验",
      "多因素逻辑回归模型，量化临床指标对肺实变的贡献度",
    ],
  },
  {
    title: "深度神经网络图书推荐系统",
    period: "2024.04 – 2024.06",
    role: "课程项目",
    tags: ["深度学习", "推荐系统", "特征交叉", "PyTorch"],
    summary:
      "基于 586 万条用户隐式交互数据，实现并对比 6 种前沿深度推荐模型。",
    highlights: [
      "53,424 用户 × 10,000 图书的高稀疏交互矩阵",
      "实现 DeepFM、AFM、DCN、AutoInt、DIN、DIFM 六种模型",
      "涵盖因子分解、注意力机制、特征交叉、兴趣建模等推荐范式",
    ],
    pdfFile: "/files/深度学习图书推荐系统.pdf",
  },
  {
    title: "通信大数据返乡人群预测",
    period: "2023.10 – 2023.12",
    role: "竞赛项目 · DataFountain",
    tags: ["机器学习", "特征工程", "集成学习", "竞赛"],
    summary:
      "基于联通用户信令与行为数据，构建多模型融合的返乡发展人群分类器。",
    highlights: [
      "59,872 样本，46 项匿名特征（位置、互联网、通话类）",
      "7 种模型对比：LR、朴素贝叶斯、RF、GBDT、CatBoost、NN、CNN",
      "Stacking 模型融合 + 加权投票策略",
    ],
    pdfFile: "/files/返乡人群预测.pdf",
  },
  {
    title: "Facebook 社交网络链路预测",
    period: "2023.10 – 2023.12",
    role: "课程项目",
    tags: ["图网络", "Node2Vec", "GraphSAGE", "社区发现"],
    summary:
      "在 Facebook 社交网络上探索图结构特征，并实现基于相似性、监督学习和深度学习的链路预测。",
    highlights: [
      "4,039 节点，88,234 条边，幂律分布验证",
      "聚类系数 0.606，平均路径长度 3",
      "Louvain 社区发现 + Node2Vec + GraphSAGE 深度图学习",
    ],
    pdfFile: "/files/Facebook链路预测.pdf",
  },
];

export const skills = {
  programming: ["Python", "C++", "SQL"],
  mlFrameworks: [
    "PyTorch",
    "TensorFlow",
    "Scikit-learn",
    "XGBoost",
    "LightGBM",
  ],
  tools: ["MySQL", "Stata", "SPSS", "Git", "LaTeX", "MS Office / Excel"],
  finance: ["量化策略回测", "金融衍生品定价", "投资组合分析"],
  certificates: [
    { name: "HCIA-AI", desc: "华为认证人工智能初级工程师" },
    { name: "IELTS 7.0", desc: "雅思 7.0 / 9" },
  ],
};
