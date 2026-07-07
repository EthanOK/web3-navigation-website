export function getToolDescriptionKey(categoryId, toolName) {
  return `${categoryId}::${toolName}`;
}

const en = {
  "recommended-tools::Block Finder": "Query blocks number by timestamp",
  "recommended-tools::Web3auth Session": "Web3auth Login with Session Id",
  "recommended-tools::Calldata Decoder": "Easily decode Ethereum calldata",
  "recommended-tools::Swiss Knife": "All your Ethereum dev tools at one place!",
  "recommended-tools::OpenChain":
    "4byte.sourcify.dev - Sourcify Ethereum Signature Database",
  "recommended-tools::4byte": "Ethereum Signature Database",
  "recommended-tools::Chaintool":
    "Blockchain developer toolbox by LearnBlockchain",
  "recommended-tools::ABI To Solidity":
    "Input an ABI JSON and get a Solidity interface",
  "recommended-tools::Tenderly":
    "Tenderly is a full-stack infrastructure for the entire dapp lifecycle",
  "recommended-tools::Phalcon": "Dive into Transactions to Act Wisely",
  "recommended-tools::Metasleuth": "Crypto Tracking and Investigation Platform",

  "contract-developments::Solidity":
    "Solidity is high-level language for implementing smart contracts",
  "contract-developments::Openzeppelin":
    "The standard for secure onchain applications at any scale",
  "contract-developments::Thirdweb":
    "Full stack, open-source web3 development platform",
  "contract-developments::Foundry":
    "Foundry is a smart contract development toolchain",
  "contract-developments::Hardhat": "EVM development environment",
  "contract-developments::Reown AppKit":
    "WalletConnect: AppKit is a comprehensive SDK for creating seamless onchain UX",
  "contract-developments::Gelato":
    "Build scalable, custom enterprise-grade Rollups with Gelato's Web3 Services natively integrated",

  "blockchain-explorers::Etherscan": "The Ethereum Blockchain Explorer",
  "blockchain-explorers::Etherscan Sepolia": "The Ethereum Blockchain Explorer",
  "blockchain-explorers::Basescan": "The Base(ETH) Blockchain Explorer",
  "blockchain-explorers::Basescan Sepolia": "The Base(ETH) Blockchain Explorer",
  "blockchain-explorers::Bscscan": "The BNB Smart Chain Explorer",
  "blockchain-explorers::Bscscan Testnet":
    "The Testnet BNB Smart Chain Explorer",
  "blockchain-explorers::OPBNB Bscscan": "The OPBNB Chain Explorer",
  "blockchain-explorers::Blockscan":
    "Blockscan Multichain Explorer Portfolio Analytics",
  "blockchain-explorers::Solscan": "The Scanning Tool for the Solana Ecosystem",
  "blockchain-explorers::Solana Explorer":
    "Inspect transactions on the Solana blockchain",
  "blockchain-explorers::Solana FM": "Next-Gen Solana Explorer",

  "web3-communities::learnblockchain":
    "LearnBlockchain - Web3 developer community",
  "web3-communities::Decert.me":
    "Decentralized skills learning and certification platform",
  "web3-communities::stackexchange": "Q&A for users of Ethereum",
  "web3-communities::WTF Academy": "Web3 Open University for Developers",
  "web3-communities::OpenBuild":
    "Help ✦ Developers ✦ get on the Success Way to Web3",
  "web3-communities::Dapp-Learning":
    "An open-sourced developer community focusing on Ethereum",
  "web3-communities::ETHPanda":
    "ETHPanda | Connecting Chinese Ethereum builders",

  "rpc-services::ChainList": "ChainList is a list of EVM networks",
  "rpc-services::Alchemy": "Alchemy - the web3 development platform",
  "rpc-services::QuickNode": "QuickNode - the web3 development platform",
  "rpc-services::Infura": "Web3 Development Platform | Blockchain Node Service",
  "rpc-services::Ankr": "Ankr | The Fastest Web3 Infrastructure",
  "rpc-services::1RPC": "1RPC | Web3 Private RPC Relay",
  "rpc-services::0xRPC": "0xRPC | Web3 Private RPC Relay",

  "chatgpt-apps::ChatGPT": "Chat with OpenAI",
  "chatgpt-apps::DeepSeek": "Chat with DeepSeek AI",
  "chatgpt-apps::Gemini": "Gemini - chat to supercharge your ideas",
  "chatgpt-apps::Grok": "Grok - AI assistant powered by xAI",
  "chatgpt-apps::Claude":
    "Claude is a next generation AI assistant built by Anthropic",
  "chatgpt-apps::豆包":
    "Doubao is your AI chat assistant for writing, translation, coding, and more",
  "chatgpt-apps::KIMI":
    "Kimi.ai - AI assistant with deep reasoning capabilities",
  "chatgpt-apps::通义千问": "Tongyi Qianwen - your all-in-one AI assistant",
  "chatgpt-apps::智谱清言": "ChatGLM - Zhipu AI large language model",

  "ai-coding-tools::Cursor Editor":
    "Built to make you extraordinarily productive, Cursor is the best way to code with AI",
  "ai-coding-tools::Trae":
    "TRAE IDE integrates seamlessly into your workflow, collaborating with you to maximize performance and efficiency.",
  "ai-coding-tools::Windsurf Editor":
    "Windsurf is Codeium's next-generation AI IDE built to keep you in the flow",
  "ai-coding-tools::Cline": "Autonomous coding agent right in your IDE",
  "ai-coding-tools::Bolt.new":
    "AI-Powered Full-Stack Web Development in the Browser",
  "ai-coding-tools::Claude Code":
    "Anthropic's agentic coding tool that reads codebases, edits files, and runs commands in your terminal and IDE",
  "ai-coding-tools::Codex":
    "OpenAI's coding agent for building features, fixing bugs, and shipping code across CLI, IDE, and cloud",

  "development-tools::Ctool":
    "Hash, encryption, encoding, JSON, timestamp, regex tools",
  "development-tools::Vercel":
    "Build and deploy the best web experiences with the Frontend Cloud",
  "development-tools::Netlify":
    "Scale & Ship Faster with a Composable Web Architecture",
  "development-tools::Render":
    "The cloud for builders — deploy apps, APIs, databases, and cron jobs with zero ops",
  "development-tools::Neon":
    "The database you love, on a serverless platform designed to help you build reliable and scalable applications faster.",
  "development-tools::Supabase":
    "Start your project with a Postgres database, instant APIs, Storage",
  "development-tools::Sealos": "Next-gen cloud OS with Kubernetes core",
  "development-tools::Toolhub":
    "Free Online JSON Formatter & Timestamp Converter",
  "development-tools::umami":
    "The modern analytics platform for effortless insights",
  "development-tools::cron-job.org":
    "Free online cron job scheduler — trigger HTTP requests on a schedule",

  "ethan-websites::Ethan Github": "Ethan's Github",
  "ethan-websites::Ethan DApp": "Ethan DApp frontend on Vercel",
  "ethan-websites::Ethan DApp Server": "Ethan DApp backend server on Render",
  "ethan-websites::web3hub": "Web3 hub website",
  "ethan-websites::Solana Demo": "Solana Demo website",
  "ethan-websites::web3auth-ethereum": "Web3Auth Ethereum website",
  "ethan-websites::Web3 Umami":
    "The modern analytics platform for effortless insights for web3"
};

const zhCN = {
  "recommended-tools::Block Finder": "按时间戳查询区块高度",
  "recommended-tools::Web3auth Session": "Web3Auth 使用 Session Id 登录",
  "recommended-tools::Calldata Decoder": "轻松解码 Ethereum calldata",
  "recommended-tools::Swiss Knife": "以太坊开发工具一站式集合",
  "recommended-tools::OpenChain": "Sourcify 以太坊函数签名数据库",
  "recommended-tools::4byte": "以太坊函数签名数据库",
  "recommended-tools::Chaintool": "区块链开发者工具箱",
  "recommended-tools::ABI To Solidity": "输入 ABI JSON 生成 Solidity 接口",
  "recommended-tools::Tenderly": "覆盖 DApp 全生命周期的全栈基础设施",
  "recommended-tools::Phalcon": "深入分析交易，做出明智决策",
  "recommended-tools::Metasleuth": "加密货币追踪与调查平台",

  "contract-developments::Solidity": "用于实现智能合约的高级编程语言",
  "contract-developments::Openzeppelin": "安全链上应用的行业标准库",
  "contract-developments::Thirdweb": "全栈开源 Web3 开发平台",
  "contract-developments::Foundry": "智能合约开发工具链",
  "contract-developments::Hardhat": "EVM 开发环境",
  "contract-developments::Reown AppKit":
    "WalletConnect AppKit — 打造无缝链上体验的 SDK",
  "contract-developments::Gelato":
    "构建可扩展的企业级 Rollup，原生集成 Gelato Web3 服务",

  "blockchain-explorers::Etherscan": "以太坊区块链浏览器",
  "blockchain-explorers::Etherscan Sepolia": "以太坊 Sepolia 测试网浏览器",
  "blockchain-explorers::Basescan": "Base 链区块链浏览器",
  "blockchain-explorers::Basescan Sepolia": "Base Sepolia 测试网浏览器",
  "blockchain-explorers::Bscscan": "BNB 智能链浏览器",
  "blockchain-explorers::Bscscan Testnet": "BNB 智能链测试网浏览器",
  "blockchain-explorers::OPBNB Bscscan": "OPBNB 链浏览器",
  "blockchain-explorers::Blockscan": "多链浏览器与投资组合分析",
  "blockchain-explorers::Solscan": "Solana 生态扫描工具",
  "blockchain-explorers::Solana Explorer": "查看 Solana 链上交易",
  "blockchain-explorers::Solana FM": "新一代 Solana 浏览器",

  "web3-communities::learnblockchain": "登链社区 - Web3 开发者社区",
  "web3-communities::Decert.me": "去中心化技能学习与认证平台",
  "web3-communities::stackexchange": "以太坊开发者问答社区",
  "web3-communities::WTF Academy": "面向开发者的 Web3 开放大学",
  "web3-communities::OpenBuild": "帮助开发者走上 Web3 成功之路",
  "web3-communities::Dapp-Learning": "专注以太坊的开源开发者社区",
  "web3-communities::ETHPanda": "ETHPanda | 连接华语以太坊建设者",

  "rpc-services::ChainList": "EVM 网络列表",
  "rpc-services::Alchemy": "Alchemy - Web3 开发平台",
  "rpc-services::QuickNode": "QuickNode - Web3 开发平台",
  "rpc-services::Infura": "Web3 开发平台 | 区块链节点服务",
  "rpc-services::Ankr": "Ankr | 最快的 Web3 基础设施",
  "rpc-services::1RPC": "1RPC | Web3 隐私 RPC 中继",
  "rpc-services::0xRPC": "0xRPC | Web3 隐私 RPC 中继",

  "chatgpt-apps::ChatGPT": "与 OpenAI 对话",
  "chatgpt-apps::DeepSeek": "与 DeepSeek AI 对话",
  "chatgpt-apps::Gemini": "Gemini - 激发创意的 AI 对话",
  "chatgpt-apps::Grok": "Grok - xAI 驱动的 AI 助手",
  "chatgpt-apps::Claude": "Anthropic 打造的新一代 AI 助手",
  "chatgpt-apps::豆包":
    "豆包是你的 AI 聊天智能对话问答助手，写作文案翻译情感陪伴编程全能工具",
  "chatgpt-apps::KIMI": "Kimi.ai - 会推理解析，能深度思考的 AI 助手",
  "chatgpt-apps::通义千问": "通情、达义，你的全能 AI 助手",
  "chatgpt-apps::智谱清言": "ChatGLM 智谱大模型，中国版 ChatGPT",

  "ai-coding-tools::Cursor Editor":
    "Cursor 是借助 AI 编程的最佳方式，让你效率倍增",
  "ai-coding-tools::Trae": "TRAE IDE 无缝融入工作流，与你协作提升效率",
  "ai-coding-tools::Windsurf Editor":
    "Windsurf 是 Codeium 新一代 AI IDE，让你保持心流",
  "ai-coding-tools::Cline": "IDE 内的自主编程 Agent",
  "ai-coding-tools::Bolt.new": "浏览器内的 AI 全栈 Web 开发",
  "ai-coding-tools::Claude Code":
    "Anthropic 的 Agentic 编程工具，在终端和 IDE 中读写代码、运行命令",
  "ai-coding-tools::Codex":
    "OpenAI 编程 Agent，在 CLI、IDE 和云端构建功能、修复 Bug、交付代码",

  "development-tools::Ctool": "哈希/加解密/编码转换/JSON/时间戳/正则...",
  "development-tools::Vercel": "使用 Frontend Cloud 构建和部署最佳 Web 体验",
  "development-tools::Netlify": "可组合 Web 架构，更快扩展与发布",
  "development-tools::Render":
    "面向开发者的云平台 — 零运维部署应用、API、数据库和定时任务",
  "development-tools::Neon":
    "你喜爱的数据库，运行在 Serverless 平台上，更快构建可靠可扩展的应用",
  "development-tools::Supabase":
    "Postgres 数据库、即时 API 与 Storage，快速启动项目",
  "development-tools::Sealos": "基于 Kubernetes 的下一代云操作系统",
  "development-tools::Toolhub": "免费在线 JSON 格式化与时间戳转换",
  "development-tools::umami": "现代分析平台，轻松获取数据洞察",
  "development-tools::cron-job.org":
    "免费在线 Cron 定时任务 — 按计划触发 HTTP 请求",

  "ethan-websites::Ethan Github": "Ethan 的 GitHub",
  "ethan-websites::Ethan DApp": "Ethan DApp 前端（Vercel）",
  "ethan-websites::Ethan DApp Server": "Ethan DApp 后端服务（Render）",
  "ethan-websites::web3hub": "Web3 Hub 导航网站",
  "ethan-websites::Solana Demo": "Solana 演示网站",
  "ethan-websites::web3auth-ethereum": "Web3Auth Ethereum 演示网站",
  "ethan-websites::Web3 Umami": "面向 Web3 的现代分析平台"
};

const zhTW = {
  "recommended-tools::Block Finder": "按時間戳查詢區塊高度",
  "recommended-tools::Web3auth Session": "Web3Auth 使用 Session Id 登入",
  "recommended-tools::Calldata Decoder": "輕鬆解碼 Ethereum calldata",
  "recommended-tools::Swiss Knife": "以太坊開發工具一站式集合",
  "recommended-tools::OpenChain": "Sourcify 以太坊函數簽名資料庫",
  "recommended-tools::4byte": "以太坊函數簽名資料庫",
  "recommended-tools::Chaintool": "區塊鏈開發者工具箱",
  "recommended-tools::ABI To Solidity": "輸入 ABI JSON 生成 Solidity 介面",
  "recommended-tools::Tenderly": "覆蓋 DApp 全生命週期的全棧基礎設施",
  "recommended-tools::Phalcon": "深入分析交易，做出明智決策",
  "recommended-tools::Metasleuth": "加密貨幣追蹤與調查平台",

  "contract-developments::Solidity": "用於實現智能合約的高階程式語言",
  "contract-developments::Openzeppelin": "安全鏈上應用的業界標準函式庫",
  "contract-developments::Thirdweb": "全棧開源 Web3 開發平台",
  "contract-developments::Foundry": "智能合約開發工具鏈",
  "contract-developments::Hardhat": "EVM 開發環境",
  "contract-developments::Reown AppKit":
    "WalletConnect AppKit — 打造無縫鏈上體驗的 SDK",
  "contract-developments::Gelato":
    "建構可擴展的企業級 Rollup，原生整合 Gelato Web3 服務",

  "blockchain-explorers::Etherscan": "以太坊區塊鏈瀏覽器",
  "blockchain-explorers::Etherscan Sepolia": "以太坊 Sepolia 測試網瀏覽器",
  "blockchain-explorers::Basescan": "Base 鏈區塊鏈瀏覽器",
  "blockchain-explorers::Basescan Sepolia": "Base Sepolia 測試網瀏覽器",
  "blockchain-explorers::Bscscan": "BNB 智能鏈瀏覽器",
  "blockchain-explorers::Bscscan Testnet": "BNB 智能鏈測試網瀏覽器",
  "blockchain-explorers::OPBNB Bscscan": "OPBNB 鏈瀏覽器",
  "blockchain-explorers::Blockscan": "多鏈瀏覽器與投資組合分析",
  "blockchain-explorers::Solscan": "Solana 生態掃描工具",
  "blockchain-explorers::Solana Explorer": "查看 Solana 鏈上交易",
  "blockchain-explorers::Solana FM": "新一代 Solana 瀏覽器",

  "web3-communities::learnblockchain": "登鏈社群 - Web3 開發者社群",
  "web3-communities::Decert.me": "去中心化技能學習與認證平台",
  "web3-communities::stackexchange": "以太坊開發者問答社群",
  "web3-communities::WTF Academy": "面向開發者的 Web3 開放大學",
  "web3-communities::OpenBuild": "幫助開發者走上 Web3 成功之路",
  "web3-communities::Dapp-Learning": "專注以太坊的開源開發者社群",
  "web3-communities::ETHPanda": "ETHPanda | 連接華語以太坊建設者",

  "rpc-services::ChainList": "EVM 網路列表",
  "rpc-services::Alchemy": "Alchemy - Web3 開發平台",
  "rpc-services::QuickNode": "QuickNode - Web3 開發平台",
  "rpc-services::Infura": "Web3 開發平台 | 區塊鏈節點服務",
  "rpc-services::Ankr": "Ankr | 最快的 Web3 基礎設施",
  "rpc-services::1RPC": "1RPC | Web3 隱私 RPC 中繼",
  "rpc-services::0xRPC": "0xRPC | Web3 隱私 RPC 中繼",

  "chatgpt-apps::ChatGPT": "與 OpenAI 對話",
  "chatgpt-apps::DeepSeek": "與 DeepSeek AI 對話",
  "chatgpt-apps::Gemini": "Gemini - 激發創意的 AI 對話",
  "chatgpt-apps::Grok": "Grok - xAI 驅動的 AI 助手",
  "chatgpt-apps::Claude": "Anthropic 打造的新一代 AI 助手",
  "chatgpt-apps::豆包":
    "豆包是你的 AI 聊天智能對話問答助手，寫文案翻譯情感陪伴編程全能工具",
  "chatgpt-apps::KIMI": "Kimi.ai - 會推理解析，能深度思考的 AI 助手",
  "chatgpt-apps::通义千问": "通情、達義，你的全能 AI 助手",
  "chatgpt-apps::智谱清言": "ChatGLM 智譜大模型，中國版 ChatGPT",

  "ai-coding-tools::Cursor Editor":
    "Cursor 是借助 AI 程式設計的最佳方式，讓你效率倍增",
  "ai-coding-tools::Trae": "TRAE IDE 無縫融入工作流，與你協作提升效率",
  "ai-coding-tools::Windsurf Editor":
    "Windsurf 是 Codeium 新一代 AI IDE，讓你保持心流",
  "ai-coding-tools::Cline": "IDE 內的自主程式設計 Agent",
  "ai-coding-tools::Bolt.new": "瀏覽器內的 AI 全棧 Web 開發",
  "ai-coding-tools::Claude Code":
    "Anthropic 的 Agentic 程式設計工具，在終端和 IDE 中讀寫程式碼、執行命令",
  "ai-coding-tools::Codex":
    "OpenAI 程式設計 Agent，在 CLI、IDE 和雲端建構功能、修復 Bug、交付程式碼",

  "development-tools::Ctool": "雜湊/加解密/編碼轉換/JSON/時間戳/正則...",
  "development-tools::Vercel": "使用 Frontend Cloud 建構和部署最佳 Web 體驗",
  "development-tools::Netlify": "可組合 Web 架構，更快擴展與發布",
  "development-tools::Render":
    "面向開發者的雲平台 — 零運維部署應用、API、資料庫和定時任務",
  "development-tools::Neon":
    "你喜愛的資料庫，運行在 Serverless 平台上，更快建構可靠可擴展的應用",
  "development-tools::Supabase":
    "Postgres 資料庫、即時 API 與 Storage，快速啟動專案",
  "development-tools::Sealos": "基於 Kubernetes 的下一代雲作業系統",
  "development-tools::Toolhub": "免費線上 JSON 格式化與時間戳轉換",
  "development-tools::umami": "現代分析平台，輕鬆取得數據洞察",
  "development-tools::cron-job.org":
    "免費線上 Cron 定時任務 — 按計劃觸發 HTTP 請求",

  "ethan-websites::Ethan Github": "Ethan 的 GitHub",
  "ethan-websites::Ethan DApp": "Ethan DApp 前端（Vercel）",
  "ethan-websites::Ethan DApp Server": "Ethan DApp 後端服務（Render）",
  "ethan-websites::web3hub": "Web3 Hub 導航網站",
  "ethan-websites::Solana Demo": "Solana 演示網站",
  "ethan-websites::web3auth-ethereum": "Web3Auth Ethereum 演示網站",
  "ethan-websites::Web3 Umami": "面向 Web3 的現代分析平台"
};

export const TOOL_DESCRIPTIONS = {
  en,
  "zh-CN": zhCN,
  "zh-TW": zhTW
};

export function translateToolDescription(
  locale,
  categoryId,
  toolName,
  fallback
) {
  const key = getToolDescriptionKey(categoryId, toolName);
  return (
    TOOL_DESCRIPTIONS[locale]?.[key] ??
    TOOL_DESCRIPTIONS.en[key] ??
    fallback ??
    ""
  );
}
